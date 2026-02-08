import { useState, useEffect } from "react";
import { Sparkles, Zap, Gift, ArrowRight, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SuperPromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

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
          // Reset timer
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="relative overflow-hidden my-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-dark to-accent rounded-2xl" />
      
      {/* Animated particles */}
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

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
              <Badge className="bg-white/20 text-white border-0 text-sm font-semibold">
                OFERTA ESPECIAL
              </Badge>
              <Zap className="h-5 w-5 text-white animate-pulse" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Super Promoção <br />
              <span className="text-navy-dark">Primeiro Negócio</span>
            </h2>
            
            <p className="text-white/90 text-lg max-w-md mb-6">
              Compre seu primeiro modelo com <strong className="text-white">30% de desconto</strong> e ganhe 
              acesso vitalício ao onHub Premium!
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Gift className="h-6 w-6 text-white" />
              <span className="text-white font-medium">
                + Bônus: Consultoria 1h com especialista
              </span>
            </div>

            <Button 
              size="lg"
              className="bg-navy text-white hover:bg-navy-light gap-2 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              Aproveitar agora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Right content - Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="h-5 w-5 text-white" />
              <span className="text-white font-semibold uppercase tracking-wider text-sm">
                Termina em
              </span>
            </div>
            
            <div className="flex items-center gap-3 md:gap-4">
              <TimeBlock value={formatTime(timeLeft.hours)} label="Horas" />
              <span className="text-white text-3xl font-bold">:</span>
              <TimeBlock value={formatTime(timeLeft.minutes)} label="Min" />
              <span className="text-white text-3xl font-bold">:</span>
              <TimeBlock value={formatTime(timeLeft.seconds)} label="Seg" />
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/80 text-sm">
                Use o cupom: <code className="bg-white/20 px-3 py-1 rounded-lg font-bold text-white">PRIMEIRO30</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="bg-white rounded-xl px-4 py-3 md:px-6 md:py-4 shadow-lg">
      <span className="font-display text-3xl md:text-4xl font-bold text-navy">
        {value}
      </span>
    </div>
    <span className="text-white/70 text-xs mt-2 block uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default SuperPromotionBanner;
