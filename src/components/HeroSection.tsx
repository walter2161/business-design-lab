import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber">
            Modelos de Negócio Executáveis
          </p>
          <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Seu próximo negócio,{" "}
            <span className="text-gradient">estruturado.</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/70 max-w-lg">
            Modelos validados com arquitetura, dados, benchmarks e IA dedicada.
            Compre, implemente, fature.
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
    </section>
  );
};

export default HeroSection;
