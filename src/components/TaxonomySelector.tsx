import { DollarSign, Users } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { InvestmentConfig, TargetAudienceOption } from "@/data/models";

interface TaxonomySelectorProps {
  investmentLevels: InvestmentConfig[];
  targetAudienceOptions: TargetAudienceOption[];
  selectedInvestment: string;
  selectedAudience: string;
  onInvestmentChange: (value: string) => void;
  onAudienceChange: (value: string) => void;
}

const defaultAudienceDescriptions: Record<TargetAudienceOption, string> = {
  "A e B": "Público de alto poder aquisitivo, premium e exclusivo",
  "B e C": "Classe média, maior volume e equilíbrio entre preço e qualidade",
  "C e D": "Público popular, alto volume e preços acessíveis",
};

const TaxonomySelector = ({
  investmentLevels,
  targetAudienceOptions,
  selectedInvestment,
  selectedAudience,
  onInvestmentChange,
  onAudienceChange,
}: TaxonomySelectorProps) => {
  return (
    <div className="space-y-6">
      {/* Investment Level */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-accent" />
          <h3 className="font-display font-bold text-foreground">
            Investimento Inicial Disponível
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Selecione sua faixa de investimento para personalizar o modelo ao seu orçamento.
        </p>
        <RadioGroup
          value={selectedInvestment}
          onValueChange={onInvestmentChange}
          className="space-y-3"
        >
          {investmentLevels.map((level) => (
            <div
              key={level.level}
              className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-all ${
                selectedInvestment === level.level
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/30"
              }`}
              onClick={() => onInvestmentChange(level.level)}
            >
              <RadioGroupItem value={level.level} id={`inv-${level.level}`} />
              <Label
                htmlFor={`inv-${level.level}`}
                className="flex-1 cursor-pointer"
              >
                <span className="font-semibold text-foreground">{level.level}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {level.description}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Target Audience */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-accent" />
          <h3 className="font-display font-bold text-foreground">
            Público-Alvo
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Escolha o perfil de cliente que deseja atingir. O conteúdo será adaptado.
        </p>
        <RadioGroup
          value={selectedAudience}
          onValueChange={onAudienceChange}
          className="space-y-3"
        >
          {targetAudienceOptions.map((audience) => (
            <div
              key={audience}
              className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-all ${
                selectedAudience === audience
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/30"
              }`}
              onClick={() => onAudienceChange(audience)}
            >
              <RadioGroupItem value={audience} id={`aud-${audience}`} />
              <Label
                htmlFor={`aud-${audience}`}
                className="flex-1 cursor-pointer"
              >
                <span className="font-semibold text-foreground">Classe {audience}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {defaultAudienceDescriptions[audience]}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default TaxonomySelector;
