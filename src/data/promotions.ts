import { Category } from "./models";

export interface Coupon {
  id: string;
  code: string;
  discount: number; // percentage
  description: string;
  expiresAt: Date;
  isRecurring: boolean;
  recurringHours?: number; // hours until next promotion cycle
  minPurchase?: number;
  applicableCategories?: Category[];
  usageLimit?: number;
  usedCount: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  startsAt: Date;
  endsAt: Date;
  isActive: boolean;
  applicableModelIds?: string[];
  applicableCategories?: Category[];
  bannerImage?: string;
  badge: string;
}

// Helper to create recurring expiration dates
const createRecurringExpiration = (hoursFromNow: number): Date => {
  const date = new Date();
  date.setHours(date.getHours() + hoursFromNow);
  return date;
};

// Helper to check if a promotion/coupon is still valid
export const isPromotionActive = (endsAt: Date): boolean => {
  return new Date() < new Date(endsAt);
};

// Calculate time remaining
export const getTimeRemaining = (endsAt: Date): { hours: number; minutes: number; seconds: number } => {
  const now = new Date().getTime();
  const end = new Date(endsAt).getTime();
  const diff = Math.max(0, end - now);
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
};

// Active coupons
export const coupons: Coupon[] = [
  {
    id: "flash-10",
    code: "FLASH10",
    discount: 10,
    description: "10% OFF em qualquer modelo - Promoção relâmpago!",
    expiresAt: createRecurringExpiration(2), // 2 hours
    isRecurring: true,
    recurringHours: 4, // renews every 4 hours
    usedCount: 0,
  },
  {
    id: "primeira-compra",
    code: "PRIMEIRA15",
    discount: 15,
    description: "15% OFF na sua primeira compra",
    expiresAt: createRecurringExpiration(24), // 24 hours
    isRecurring: false,
    usageLimit: 1,
    usedCount: 0,
  },
  {
    id: "combo-tech",
    code: "TECH20",
    discount: 20,
    description: "20% OFF em modelos de Tecnologia",
    expiresAt: createRecurringExpiration(6), // 6 hours
    isRecurring: true,
    recurringHours: 12,
    applicableCategories: ["Tecnologia e Digital"],
    usedCount: 0,
  },
  {
    id: "alimentacao-especial",
    code: "FOOD15",
    discount: 15,
    description: "15% OFF em modelos de Alimentação",
    expiresAt: createRecurringExpiration(8),
    isRecurring: true,
    recurringHours: 24,
    applicableCategories: ["Alimentação"],
    usedCount: 0,
  },
  {
    id: "servicos-promo",
    code: "SERVICO10",
    discount: 10,
    description: "10% OFF em Serviços Pessoais",
    expiresAt: createRecurringExpiration(4),
    isRecurring: true,
    recurringHours: 8,
    applicableCategories: ["Serviços Pessoais"],
    usedCount: 0,
  },
  {
    id: "mega-desconto",
    code: "MEGA25",
    discount: 25,
    description: "25% OFF - Desconto exclusivo por tempo limitado!",
    expiresAt: createRecurringExpiration(1), // 1 hour only!
    isRecurring: true,
    recurringHours: 24, // once per day
    minPurchase: 129,
    usedCount: 0,
  },
];

// Active promotions (banners/highlights)
export const promotions: Promotion[] = [
  {
    id: "black-week",
    title: "Semana do Empreendedor",
    description: "Até 25% OFF em modelos selecionados! Use o cupom MEGA25",
    discount: 25,
    startsAt: new Date(),
    endsAt: createRecurringExpiration(168), // 1 week
    isActive: true,
    badge: "🔥 Limitado",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=300&fit=crop",
  },
  {
    id: "tech-promo",
    title: "Promoção Tech",
    description: "Modelos de tecnologia com 20% OFF - Cupom TECH20",
    discount: 20,
    startsAt: new Date(),
    endsAt: createRecurringExpiration(72), // 3 days
    isActive: true,
    applicableCategories: ["Tecnologia e Digital"],
    badge: "💻 Tech",
  },
  {
    id: "flash-sale",
    title: "Flash Sale",
    description: "Promoção relâmpago! 10% OFF por 2 horas - Cupom FLASH10",
    discount: 10,
    startsAt: new Date(),
    endsAt: createRecurringExpiration(2),
    isActive: true,
    badge: "⚡ Flash",
  },
];

// Get applicable coupons for a model
export const getApplicableCoupons = (modelId: string, category: Category): Coupon[] => {
  return coupons.filter(coupon => {
    if (!isPromotionActive(coupon.expiresAt)) return false;
    if (coupon.applicableCategories && !coupon.applicableCategories.includes(category)) return false;
    return true;
  });
};

// Apply coupon to price
export const applyCoupon = (originalPrice: number, couponCode: string): { finalPrice: number; discount: number; valid: boolean; message: string } => {
  const coupon = coupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase());
  
  if (!coupon) {
    return { finalPrice: originalPrice, discount: 0, valid: false, message: "Cupom inválido" };
  }
  
  if (!isPromotionActive(coupon.expiresAt)) {
    return { finalPrice: originalPrice, discount: 0, valid: false, message: "Cupom expirado" };
  }
  
  if (coupon.minPurchase && originalPrice < coupon.minPurchase) {
    return { finalPrice: originalPrice, discount: 0, valid: false, message: `Compra mínima de R$ ${coupon.minPurchase}` };
  }
  
  const discountAmount = Math.round(originalPrice * (coupon.discount / 100));
  const finalPrice = originalPrice - discountAmount;
  
  return { 
    finalPrice, 
    discount: discountAmount, 
    valid: true, 
    message: `${coupon.discount}% de desconto aplicado!` 
  };
};
