import { Crown, Rocket, TrendingUp, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BusinessModel } from "@/data/models";

interface PremiumScaleSectionProps {
  products: BusinessModel[];
  showPromoPrice?: boolean;
}

const PROMO_DISCOUNT = 0.10;

const PremiumScaleSection = ({ products, showPromoPrice = false }: PremiumScaleSectionProps) => {
  if (products.length === 0) return null;

  return (
    <section className="relative py-16 my-12 -mx-4 px-4 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Crown className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Categoria Premium
            </span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Modelos para <span className="text-accent">Escalar</span> seu Negócio
          </h2>
          
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Soluções avançadas para empresas que querem alcançar um novo patamar. 
            Estruturas completas para expansão, franquias e operações de alto impacto.
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Building2 className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground text-sm">Médias Empresas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground text-sm">Alto Faturamento</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Rocket className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground text-sm">Expansão Nacional</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((model) => (
            <PremiumProductCard 
              key={model.id} 
              model={model} 
              showPromoPrice={showPromoPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PremiumProductCard = ({ 
  model, 
  showPromoPrice 
}: { 
  model: BusinessModel; 
  showPromoPrice?: boolean;
}) => {
  const promoPrice = showPromoPrice 
    ? Math.round(model.price * (1 - PROMO_DISCOUNT)) 
    : model.price;

  return (
    <Link
      to={`/modelo/${model.id}`}
      className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        
        {/* Premium badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent text-accent-foreground border-0 shadow-lg">
            <Crown className="h-3 w-3 mr-1" />
            Escala
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-primary-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {model.name}
        </h3>
        
        <p className="text-primary-foreground/70 text-sm line-clamp-2 mb-4">
          {model.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <div>
            {showPromoPrice && (
              <span className="text-primary-foreground/50 text-xs line-through block">
                R$ {model.price}
              </span>
            )}
            <span className="font-display font-bold text-xl text-accent">
              R$ {promoPrice}
            </span>
          </div>
          
          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1 group-hover:gap-2 transition-all"
          >
            Ver mais
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl" />
      </div>
    </Link>
  );
};

export default PremiumScaleSection;
