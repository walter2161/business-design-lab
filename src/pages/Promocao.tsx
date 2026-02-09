import { useState, useMemo } from "react";
import { Search, Sparkles, Timer, Gift, ArrowRight, Tag, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ModelCard from "@/components/ModelCard";
import Footer from "@/components/Footer";
import { models, type Category } from "@/data/models";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 20;

const Promocao = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown timer
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

  const filtered = useMemo(() => {
    return models.filter((m) => {
      const matchesCategory = !selectedCategory || m.category === selectedCategory;
      const matchesSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const {
    displayedItems,
    hasMore,
    isLoading,
    loadMoreRef,
    displayedCount,
    totalItems,
  } = useInfiniteScroll({ items: filtered, itemsPerPage: ITEMS_PER_PAGE });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-dark to-accent" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-white animate-pulse" />
              <Badge className="bg-white/20 text-white border-0 text-sm font-semibold px-4 py-1">
                OFERTA ESPECIAL DE PRIMEIRA COMPRA
              </Badge>
              <Zap className="h-6 w-6 text-white animate-pulse" />
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-navy-dark">10% OFF</span> no seu 
              <br />Primeiro Modelo de Negócio
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Comece sua jornada empreendedora com desconto exclusivo. 
              Use o cupom <code className="bg-white/20 px-3 py-1 rounded-lg font-bold text-white">PRIMEIRO10</code> no checkout.
            </p>

            {/* Timer */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-white" />
                <span className="text-white font-semibold uppercase tracking-wider text-sm">
                  Oferta termina em
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <TimeBlock value={formatTime(timeLeft.hours)} label="Horas" />
                <span className="text-white text-2xl font-bold">:</span>
                <TimeBlock value={formatTime(timeLeft.minutes)} label="Min" />
                <span className="text-white text-2xl font-bold">:</span>
                <TimeBlock value={formatTime(timeLeft.seconds)} label="Seg" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-background">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 -mt-4 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          <BenefitCard
            icon={<Gift className="h-6 w-6 text-accent" />}
            title="10% de Desconto"
            description="Na sua primeira compra com cupom PRIMEIRO10"
          />
          <BenefitCard
            icon={<Sparkles className="h-6 w-6 text-accent" />}
            title="Curso Completo Incluso"
            description="30 vídeo aulas para implementar seu negócio"
          />
          <BenefitCard
            icon={<Zap className="h-6 w-6 text-accent" />}
            title="Consultor IA Exclusivo"
            description="Assistente especializado no seu modelo"
          />
        </div>
      </section>

      {/* Catalog */}
      <main id="catalogo" className="flex-1 container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Escolha seu Modelo
            </h2>
            <p className="text-muted-foreground">
              Mostrando {displayedCount} de {totalItems} produtos
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar modelo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="mb-8">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedItems.map((model) => (
            <ModelCard key={model.id} model={model} showPromoPrice />
          ))}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={loadMoreRef} className="h-10 mt-8" />

        {!hasMore && displayedItems.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">
              Você viu todos os {totalItems} produtos! 🎉
            </p>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">Nenhum modelo encontrado.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="bg-white rounded-lg px-3 py-2 shadow-md">
      <span className="font-display text-xl md:text-2xl font-bold text-primary">
        {value}
      </span>
    </div>
    <span className="text-white/70 text-[10px] mt-1 block uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Promocao;
