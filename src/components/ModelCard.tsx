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
        <div className="relative h-40 bg-navy-gradient p-6">
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <Badge className="w-fit border-0 bg-accent/20 text-amber font-medium text-xs">
              {categoryIcons[model.category]} {model.category}
            </Badge>
            <div className="text-3xl font-bold text-amber/30 font-display">
              {categoryIcons[model.category]}
            </div>
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
