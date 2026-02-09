import { useState, useEffect } from "react";
import { Sparkles, Zap, ArrowRight, Timer, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SuperPromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [showPromoDialog, setShowPromoDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (n: number) => n.toString().padStart(2, "0");

  return (
    <>
      <section className="relative overflow-hidden my-12">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-dark to-accent rounded-2xl" />
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-white animate-pulse" />
                <Badge className="bg-white/20 text-white border-0 text-xs font-semibold">
                  OFERTA ESPECIAL
                </Badge>
                <Zap className="h-4 w-4 text-white animate-pulse" />
              </div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                Super Promoção <span className="text-navy-dark">Primeiro Negócio</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-md mb-4">
                Compre seu primeiro modelo com <strong className="text-white">10% de desconto</strong> e comece sua jornada empreendedora!
              </p>
              <Button
                size="sm"
                className="bg-navy text-white hover:bg-navy-light gap-2 text-sm px-6 py-2 shadow-lg hover:shadow-xl transition-all"
                onClick={() => setShowPromoDialog(true)}
              >
                Aproveitar agora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Timer className="h-4 w-4 text-white" />
                <span className="text-white font-semibold uppercase tracking-wider text-xs">
                  Termina em
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <TimeBlock value={formatTime(timeLeft.hours)} label="Horas" />
                <span className="text-white text-2xl font-bold">:</span>
                <TimeBlock value={formatTime(timeLeft.minutes)} label="Min" />
                <span className="text-white text-2xl font-bold">:</span>
                <TimeBlock value={formatTime(timeLeft.seconds)} label="Seg" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white/80 text-xs">
                  Use o cupom: <code className="bg-white/20 px-2 py-0.5 rounded-md font-bold text-white">PRIMEIRO10</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Dialog */}
      <Dialog open={showPromoDialog} onOpenChange={setShowPromoDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-accent" />
              <DialogTitle className="font-display text-xl">Promoção Primeira Compra</DialogTitle>
            </div>
            <DialogDescription>
              Ganhe 10% de desconto na sua primeira compra de qualquer modelo de negócio.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-dashed border-accent/50 bg-accent/5 p-4 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Cupom de desconto</p>
              <code className="text-2xl font-display font-bold text-accent tracking-widest">PRIMEIRO10</code>
              <p className="text-xs text-muted-foreground mt-1">10% OFF na primeira compra</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-muted/50 rounded-lg p-3">
              <Timer className="h-4 w-4 text-destructive" />
              <span className="text-sm text-muted-foreground">Oferta expira em</span>
              <span className="font-mono font-bold text-foreground">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">O que está incluso:</h4>
              {[
                "10% de desconto na primeira compra",
                "Curso completo com 30 vídeo aulas",
                "Consultor IA exclusivo do modelo",
                "Pack com 30+ materiais profissionais",
                "Atualizações gratuitas para sempre",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground">
              Aplique o cupom <strong>PRIMEIRO10</strong> no checkout de qualquer modelo do catálogo.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md">
      <span className="font-display text-xl md:text-2xl font-bold text-navy">
        {value}
      </span>
    </div>
    <span className="text-white/70 text-[10px] mt-1 block uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default SuperPromotionBanner;
