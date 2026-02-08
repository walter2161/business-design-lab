import { Category } from "./models";

export interface Coupon {
  id: string;
  code: string;
  discount: number; // percentage
  description: string;
  expiresAt: string; // ISO string for persistence
  isRecurring: boolean;
  recurringHours?: number;
  minPurchase?: number;
  applicableCategories?: Category[];
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  startsAt: string;
  endsAt: string;
  isActive: boolean;
  applicableModelIds?: string[];
  applicableCategories?: Category[];
  bannerImage?: string;
  badge: string;
}

const COUPONS_STORAGE_KEY = "loja_negocio_coupons";
const PROMOTIONS_STORAGE_KEY = "loja_negocio_promotions";

// Helper to create expiration dates
const createExpiration = (hoursFromNow: number): string => {
  const date = new Date();
  date.setHours(date.getHours() + hoursFromNow);
  return date.toISOString();
};

// Default coupons
const DEFAULT_COUPONS: Coupon[] = [
  {
    id: "flash-10",
    code: "FLASH10",
    discount: 10,
    description: "10% OFF em qualquer modelo - Promoção relâmpago!",
    expiresAt: createExpiration(2),
    isRecurring: true,
    recurringHours: 4,
    usedCount: 0,
    isActive: true,
  },
  {
    id: "primeira-compra",
    code: "PRIMEIRA15",
    discount: 15,
    description: "15% OFF na sua primeira compra",
    expiresAt: createExpiration(720), // 30 days
    isRecurring: false,
    usageLimit: 1,
    usedCount: 0,
    isActive: true,
  },
  {
    id: "combo-tech",
    code: "TECH20",
    discount: 20,
    description: "20% OFF em modelos de Tecnologia",
    expiresAt: createExpiration(72),
    isRecurring: true,
    recurringHours: 12,
    applicableCategories: ["Tecnologia e Digital"],
    usedCount: 0,
    isActive: true,
  },
  {
    id: "alimentacao-especial",
    code: "FOOD15",
    discount: 15,
    description: "15% OFF em modelos de Alimentação",
    expiresAt: createExpiration(168),
    isRecurring: true,
    recurringHours: 24,
    applicableCategories: ["Alimentação"],
    usedCount: 0,
    isActive: true,
  },
  {
    id: "servicos-promo",
    code: "SERVICO10",
    discount: 10,
    description: "10% OFF em Serviços Pessoais",
    expiresAt: createExpiration(96),
    isRecurring: true,
    recurringHours: 8,
    applicableCategories: ["Serviços Pessoais"],
    usedCount: 0,
    isActive: true,
  },
  {
    id: "mega-desconto",
    code: "MEGA25",
    discount: 25,
    description: "25% OFF - Desconto exclusivo por tempo limitado!",
    expiresAt: createExpiration(24),
    isRecurring: true,
    recurringHours: 24,
    minPurchase: 129,
    usedCount: 0,
    isActive: true,
  },
];

// Default promotions
const DEFAULT_PROMOTIONS: Promotion[] = [
  {
    id: "black-week",
    title: "Semana do Empreendedor",
    description: "Até 25% OFF em modelos selecionados! Use o cupom MEGA25",
    discount: 25,
    startsAt: new Date().toISOString(),
    endsAt: createExpiration(168),
    isActive: true,
    badge: "🔥 Limitado",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=300&fit=crop",
  },
  {
    id: "tech-promo",
    title: "Promoção Tech",
    description: "Modelos de tecnologia com 20% OFF - Cupom TECH20",
    discount: 20,
    startsAt: new Date().toISOString(),
    endsAt: createExpiration(72),
    isActive: true,
    applicableCategories: ["Tecnologia e Digital"],
    badge: "💻 Tech",
  },
  {
    id: "flash-sale",
    title: "Flash Sale",
    description: "Promoção relâmpago! 10% OFF por 2 horas - Cupom FLASH10",
    discount: 10,
    startsAt: new Date().toISOString(),
    endsAt: createExpiration(2),
    isActive: true,
    badge: "⚡ Flash",
  },
];

// Initialize storage with defaults
const initializeStorage = () => {
  const storedCoupons = localStorage.getItem(COUPONS_STORAGE_KEY);
  if (!storedCoupons) {
    localStorage.setItem(COUPONS_STORAGE_KEY, JSON.stringify(DEFAULT_COUPONS));
  }
  
  const storedPromotions = localStorage.getItem(PROMOTIONS_STORAGE_KEY);
  if (!storedPromotions) {
    localStorage.setItem(PROMOTIONS_STORAGE_KEY, JSON.stringify(DEFAULT_PROMOTIONS));
  }
};

// Initialize on load
initializeStorage();

// Get coupons from storage
export const getCoupons = (): Coupon[] => {
  const stored = localStorage.getItem(COUPONS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_COUPONS;
};

// Save coupons to storage
export const saveCoupons = (coupons: Coupon[]) => {
  localStorage.setItem(COUPONS_STORAGE_KEY, JSON.stringify(coupons));
};

// Get promotions from storage
export const getPromotions = (): Promotion[] => {
  const stored = localStorage.getItem(PROMOTIONS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_PROMOTIONS;
};

// Save promotions to storage
export const savePromotions = (promotions: Promotion[]) => {
  localStorage.setItem(PROMOTIONS_STORAGE_KEY, JSON.stringify(promotions));
};

// Check if a promotion/coupon is still valid
export const isPromotionActive = (endsAt: string): boolean => {
  return new Date() < new Date(endsAt);
};

// Calculate time remaining
export const getTimeRemaining = (endsAt: string): { hours: number; minutes: number; seconds: number } => {
  const now = new Date().getTime();
  const end = new Date(endsAt).getTime();
  const diff = Math.max(0, end - now);
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
};

// Get applicable coupons for a model
export const getApplicableCoupons = (modelId: string, category: Category): Coupon[] => {
  const coupons = getCoupons();
  return coupons.filter(coupon => {
    if (!coupon.isActive) return false;
    if (!isPromotionActive(coupon.expiresAt)) return false;
    if (coupon.applicableCategories && !coupon.applicableCategories.includes(category)) return false;
    return true;
  });
};

// Validate coupon code
export const validateCoupon = (
  couponCode: string, 
  originalPrice: number, 
  category?: Category
): { valid: boolean; message: string; coupon?: Coupon } => {
  const coupons = getCoupons();
  const coupon = coupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase().trim());
  
  if (!coupon) {
    return { valid: false, message: "Cupom não encontrado" };
  }
  
  if (!coupon.isActive) {
    return { valid: false, message: "Cupom desativado" };
  }
  
  if (!isPromotionActive(coupon.expiresAt)) {
    return { valid: false, message: "Cupom expirado" };
  }
  
  if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
    return { valid: false, message: "Limite de uso atingido" };
  }
  
  if (coupon.minPurchase && originalPrice < coupon.minPurchase) {
    return { valid: false, message: `Compra mínima de R$ ${coupon.minPurchase}` };
  }
  
  if (coupon.applicableCategories && category && !coupon.applicableCategories.includes(category)) {
    return { valid: false, message: `Cupom válido apenas para: ${coupon.applicableCategories.join(", ")}` };
  }
  
  return { valid: true, message: `${coupon.discount}% de desconto!`, coupon };
};

// Apply coupon to price
export const applyCoupon = (
  originalPrice: number, 
  couponCode: string,
  category?: Category
): { finalPrice: number; discount: number; valid: boolean; message: string } => {
  const validation = validateCoupon(couponCode, originalPrice, category);
  
  if (!validation.valid || !validation.coupon) {
    return { finalPrice: originalPrice, discount: 0, valid: false, message: validation.message };
  }
  
  const discountAmount = Math.round(originalPrice * (validation.coupon.discount / 100));
  const finalPrice = originalPrice - discountAmount;
  
  return { 
    finalPrice, 
    discount: discountAmount, 
    valid: true, 
    message: validation.message 
  };
};

// Mark coupon as used
export const useCoupon = (couponCode: string) => {
  const coupons = getCoupons();
  const updatedCoupons = coupons.map(c => {
    if (c.code.toUpperCase() === couponCode.toUpperCase()) {
      return { ...c, usedCount: c.usedCount + 1 };
    }
    return c;
  });
  saveCoupons(updatedCoupons);
};

// Add new coupon
export const addCoupon = (coupon: Omit<Coupon, "id" | "usedCount">): Coupon => {
  const coupons = getCoupons();
  const newCoupon: Coupon = {
    ...coupon,
    id: `coupon-${Date.now()}`,
    usedCount: 0,
  };
  coupons.push(newCoupon);
  saveCoupons(coupons);
  return newCoupon;
};

// Update coupon
export const updateCoupon = (id: string, updates: Partial<Coupon>) => {
  const coupons = getCoupons();
  const updatedCoupons = coupons.map(c => 
    c.id === id ? { ...c, ...updates } : c
  );
  saveCoupons(updatedCoupons);
};

// Delete coupon
export const deleteCoupon = (id: string) => {
  const coupons = getCoupons();
  const filtered = coupons.filter(c => c.id !== id);
  saveCoupons(filtered);
};

// Add new promotion
export const addPromotion = (promotion: Omit<Promotion, "id">): Promotion => {
  const promotions = getPromotions();
  const newPromotion: Promotion = {
    ...promotion,
    id: `promo-${Date.now()}`,
  };
  promotions.push(newPromotion);
  savePromotions(promotions);
  return newPromotion;
};

// Update promotion
export const updatePromotion = (id: string, updates: Partial<Promotion>) => {
  const promotions = getPromotions();
  const updatedPromotions = promotions.map(p => 
    p.id === id ? { ...p, ...updates } : p
  );
  savePromotions(updatedPromotions);
};

// Delete promotion
export const deletePromotion = (id: string) => {
  const promotions = getPromotions();
  const filtered = promotions.filter(p => p.id !== id);
  savePromotions(filtered);
};

// Get active promotions only
export const getActivePromotions = (): Promotion[] => {
  return getPromotions().filter(p => p.isActive && isPromotionActive(p.endsAt));
};

// Get active coupons only
export const getActiveCoupons = (): Coupon[] => {
  return getCoupons().filter(c => c.isActive && isPromotionActive(c.expiresAt));
};

// Legacy exports for compatibility
export const coupons = getCoupons();
export const promotions = getPromotions();
