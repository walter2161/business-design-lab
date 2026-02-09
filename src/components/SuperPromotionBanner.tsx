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

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left content */}
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
              asChild
            >
              <a href="/promocao">
                Aproveitar agora
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right content - Timer */}
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
