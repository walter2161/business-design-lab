import { useState, useEffect } from "react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    subtitle: "Modelos de Negócio Executáveis",
    title: "Seu próximo negócio,",
    highlight: "estruturado.",
    description: "Modelos validados com arquitetura, dados, benchmarks e IA dedicada. Compre, implemente, fature.",
  },
  {
    image: heroSlide2,
    subtitle: "Tudo Pronto para Começar",
    title: "Templates profissionais",
    highlight: "no onHub.",
    description: "Arquivos entregues automaticamente na sua conta onHub.app. Planilhas, scripts e ferramentas prontas.",
  },
  {
    image: heroSlide3,
    subtitle: "Consultoria IA Inclusa",
    title: "Um especialista 24h",
    highlight: "ao seu lado.",
    description: "Cada modelo vem com um agente de IA treinado para tirar suas dúvidas e acelerar sua implementação.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative overflow-hidden h-[500px] md:h-[600px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {slides[currentSlide].title}{" "}
            <span className="text-gradient">{slides[currentSlide].highlight}</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/70 max-w-lg">
            {slides[currentSlide].description}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              Explorar modelos
              <ArrowDown className="h-4 w-4" />
            </a>
            <span className="text-sm text-primary-foreground/50">
              6 modelos disponíveis
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-accent"
                : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/10">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
