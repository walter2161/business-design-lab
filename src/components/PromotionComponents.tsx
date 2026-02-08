import { useState, useEffect } from "react";
import { Timer, Tag, Percent, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { coupons, promotions, getTimeRemaining, isPromotionActive, type Coupon } from "@/data/promotions";
import { cn } from "@/lib/utils";

interface PromotionBannerProps {
  className?: string;
}

export const PromotionBanner = ({ className }: PromotionBannerProps) => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const activePromotions = promotions.filter(p => p.isActive && isPromotionActive(p.endsAt));

  useEffect(() => {
    if (activePromotions.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentPromo(prev => (prev + 1) % activePromotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activePromotions.length]);

  if (activePromotions.length === 0) return null;

  const promo = activePromotions[currentPromo];

  return (
    <div className={cn("bg-gradient-to-r from-accent/90 to-accent py-2 px-4", className)}>
      <div className="container mx-auto flex items-center justify-center gap-3 text-accent-foreground">
        <Sparkles className="h-4 w-4 animate-pulse" />
        <span className="text-sm font-medium">
          {promo.badge} {promo.title}: {promo.description}
        </span>
        <Sparkles className="h-4 w-4 animate-pulse" />
      </div>
    </div>
  );
};

interface CouponTimerProps {
  expiresAt: Date;
  onExpire?: () => void;
}

export const CouponTimer = ({ expiresAt, onExpire }: CouponTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(expiresAt));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(expiresAt);
      setTimeLeft(remaining);
      if (remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        onExpire?.();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [expiresAt, onExpire]);

  const formatNumber = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-1 font-mono text-sm">
      <Timer className="h-3.5 w-3.5 text-destructive" />
      <span className="text-destructive font-semibold">
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </span>
    </div>
  );
};

interface CouponCardProps {
  coupon: Coupon;
  onApply?: (code: string) => void;
  compact?: boolean;
}

export const CouponCard = ({ coupon, onApply, compact = false }: CouponCardProps) => {
  const isActive = isPromotionActive(coupon.expiresAt);

  if (!isActive) return null;

  if (compact) {
    return (
      <div 
        className="flex items-center justify-between gap-2 rounded-lg border border-dashed border-accent/50 bg-accent/5 px-3 py-2 cursor-pointer hover:bg-accent/10 transition-colors"
        onClick={() => onApply?.(coupon.code)}
      >
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-accent" />
          <code className="text-sm font-semibold text-accent">{coupon.code}</code>
          <span className="text-xs text-muted-foreground">-{coupon.discount}%</span>
        </div>
        <CouponTimer expiresAt={coupon.expiresAt} />
      </div>
    );
  }

  return (
    <Card className="border-dashed border-accent/30 bg-accent/5 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                <Percent className="h-3 w-3 mr-1" />
                {coupon.discount}% OFF
              </Badge>
              {coupon.isRecurring && (
                <Badge variant="outline" className="text-xs">
                  Recorrente
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{coupon.description}</p>
            <div className="flex items-center gap-3">
              <code className="rounded bg-card px-3 py-1.5 text-sm font-bold text-foreground border border-border">
                {coupon.code}
              </code>
              <CouponTimer expiresAt={coupon.expiresAt} />
            </div>
          </div>
          {onApply && (
            <button
              onClick={() => onApply(coupon.code)}
              className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Aplicar
            </button>
          )}
        </div>
        {coupon.minPurchase && (
          <p className="mt-2 text-xs text-muted-foreground">
            *Compra mínima de R$ {coupon.minPurchase}
          </p>
        )}
        {coupon.applicableCategories && (
          <p className="mt-1 text-xs text-muted-foreground">
            *Válido para: {coupon.applicableCategories.join(", ")}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

interface ActiveCouponsProps {
  categoryFilter?: string;
  onApply?: (code: string) => void;
}

export const ActiveCoupons = ({ categoryFilter, onApply }: ActiveCouponsProps) => {
  const activeCoupons = coupons.filter(c => {
    if (!isPromotionActive(c.expiresAt)) return false;
    if (categoryFilter && c.applicableCategories && !c.applicableCategories.includes(categoryFilter as any)) return false;
    return true;
  });

  if (activeCoupons.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Tag className="h-4 w-4 text-accent" />
        Cupons Ativos
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {activeCoupons.slice(0, 4).map(coupon => (
          <CouponCard key={coupon.id} coupon={coupon} onApply={onApply} />
        ))}
      </div>
    </div>
  );
};
