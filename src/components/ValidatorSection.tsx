import { Award, User, BarChart3, Briefcase, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ValidatorProfile } from "@/data/models";

interface ValidatorSectionProps {
  validator: ValidatorProfile;
}

const ValidatorSection = ({ validator }: ValidatorSectionProps) => {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Award className="h-5 w-5" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">
          Validado por Especialista
        </h2>
        <Badge className="bg-accent text-accent-foreground border-0 text-xs font-bold">
          <Award className="h-3 w-3 mr-1" />
          Selo de Validação
        </Badge>
      </div>

      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 space-y-6">
        {/* Validator Profile */}
        <div className="flex items-start gap-4">
          <img
            src={validator.photo}
            alt={validator.name}
            className="h-20 w-20 rounded-full object-cover border-2 border-accent/30"
          />
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              {validator.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{validator.area}</span>
            </div>
          </div>
        </div>

        {/* Story */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <User className="h-4 w-4 text-accent" />
            História do Profissional
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {validator.story}
          </p>
        </div>

        {/* Metrics */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-accent" />
            Números Relevantes
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {validator.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border bg-card p-3 text-center"
              >
                <p className="text-lg font-display font-bold text-accent">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Examples */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            Exemplos Práticos do Negócio Real
          </h4>
          <div className="space-y-2">
            {validator.examples.map((example, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border border-border bg-card p-3"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidatorSection;
