import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BusinessModel } from "@/data/models";
import { categoryIcons } from "@/data/models";

interface ModelCardProps {
  model: BusinessModel;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Link to={`/modelo/${model.id}`} className="group block">
      <div className="card-hover overflow-hidden rounded-xl border border-border bg-card">
        {/* Preview visual */}
        <div className="relative h-40 overflow-hidden">
          <img 
            src={model.image} 
            alt={model.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <Badge className="w-fit border-0 bg-accent/90 text-accent-foreground font-medium text-xs">
              {categoryIcons[model.category]} {model.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 font-display text-lg font-bold text-card-foreground leading-tight">
            {model.name}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {model.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">A partir de</span>
              <span className="font-display text-xl font-bold text-foreground">
                R$ {model.price}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-accent hover:text-accent/80 hover:bg-accent/10"
            >
              Ver detalhes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModelCard;
