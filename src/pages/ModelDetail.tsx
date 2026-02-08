import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Clock,
  Package,
  Bot,
  ShoppingCart,
  BarChart3,
  Database,
  Users,
  AlertCircle,
  CheckCircle2,
  Coins,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { models, categoryIcons } from "@/data/models";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { CouponCard, CouponTimer } from "@/components/PromotionComponents";
import { RelatedArticles } from "@/components/BlogComponents";
import { coupons, applyCoupon, isPromotionActive, getApplicableCoupons } from "@/data/promotions";
import { PackPreview } from "@/components/PackPreview";
import { standardPackItems } from "@/data/packContents";

const ModelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, purchaseModel } = useAuth();
  const model = models.find((m) => m.id === id);
  
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ discount: number; finalPrice: number } | null>(null);
  
  const hasPurchased = user?.purchasedModels.includes(id || "");
  const basePrice = model?.price || 0;
  const finalPrice = appliedCoupon ? appliedCoupon.finalPrice : basePrice;
  const canAfford = (user?.credits || 0) >= finalPrice;
  
  const applicableCoupons = model ? getApplicableCoupons(model.id, model.category) : [];

  const handleApplyCoupon = (code?: string) => {
    const codeToApply = code || couponCode;
    if (!codeToApply.trim() || !model) return;
    
    const result = applyCoupon(model.price, codeToApply);
    if (result.valid) {
      setAppliedCoupon({ discount: result.discount, finalPrice: result.finalPrice });
      setCouponCode(codeToApply.toUpperCase());
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handlePurchase = () => {
    if (!isAuthenticated) {
      toast.error("Faça login para comprar");
      navigate("/login");
      return;
    }
    
    if (!model) return;
    
    if (hasPurchased) {
      navigate(`/meu-modelo/${model.id}`);
      return;
    }
    
    if (!canAfford) {
      toast.error("Créditos insuficientes");
      return;
    }
    
    const success = purchaseModel(model.id, finalPrice);
    if (success) {
      toast.success(`${model.name} adquirido com sucesso!`);
      setAppliedCoupon(null);
      navigate(`/meu-modelo/${model.id}`);
    } else {
      toast.error("Erro ao processar compra");
    }
  };

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Modelo não encontrado.</p>
          <Button asChild className="mt-4">
            <Link to="/">Voltar ao catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero with Cover Image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao catálogo
            </Link>
            <Badge className="mb-3 border-0 bg-accent/20 text-amber font-medium">
              {categoryIcons[model.category]} {model.category}
            </Badge>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {model.name}
            </h1>
            <p className="mt-2 text-foreground/70 max-w-2xl">
              {model.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {isAuthenticated && user && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Coins className="h-4 w-4" />
                  <span className="text-sm">{user.credits} créditos</span>
                </div>
              )}
              <div className="flex items-baseline gap-2">
                {appliedCoupon ? (
                  <>
                    <span className="font-display text-3xl font-bold text-foreground">
                      R$ {appliedCoupon.finalPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      R$ {model.price}
                    </span>
                  </>
                ) : (
                  <span className="font-display text-3xl font-bold text-foreground">
                    R$ {model.price}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              {/* Coupon input */}
              {!hasPurchased && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Cupom de desconto"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="w-40"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleApplyCoupon()}
                  >
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              )}
              
              <Button 
                onClick={handlePurchase}
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold"
                disabled={isAuthenticated && !canAfford && !hasPurchased}
              >
                {hasPurchased ? (
                  <>
                    <Package className="h-4 w-4" />
                    Acessar modelo
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    {isAuthenticated ? `Comprar (${finalPrice} créditos)` : "Comprar modelo"}
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {applicableCoupons.length > 0 && !hasPurchased && (
            <div className="mt-3 text-xs text-muted-foreground">
              💡 Cupom disponível: <button onClick={() => handleApplyCoupon(applicableCoupons[0].code)} className="text-accent underline">{applicableCoupons[0].code}</button>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            {/* Para quem é */}
            <Section icon={<Users className="h-5 w-5" />} title="Para quem é">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Para quem é
                  </div>
                  <p className="text-sm text-muted-foreground">{model.targetAudience}</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    Para quem NÃO é
                  </div>
                  <p className="text-sm text-muted-foreground">{model.notFor}</p>
                </div>
              </div>
            </Section>

            {/* Arquitetura do Modelo */}
            <Section icon={<Target className="h-5 w-5" />} title="Arquitetura do Modelo de Negócio">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoBlock label="Como gera receita" value={model.revenueModel} />
                <InfoBlock label="Forma de entrega" value={model.deliveryMethod} />
                <InfoBlock label="Fontes de aquisição" value={model.acquisitionSources.join(", ")} />
                <InfoBlock label="Expansão" value={model.expansionStrategy} />
              </div>
              <div className="mt-4 rounded-lg border border-border bg-card p-4">
                <p className="mb-2 text-sm font-semibold text-foreground">Estrutura de custos</p>
                <div className="flex flex-wrap gap-2">
                  {model.costStructure.map((cost) => (
                    <Badge key={cost} variant="secondary">{cost}</Badge>
                  ))}
                </div>
              </div>
            </Section>

            {/* Arquitetura de Dados */}
            <Section icon={<Database className="h-5 w-5" />} title="Arquitetura de Dados">
              <div className="flex flex-wrap gap-3">
                {model.dataBlocks.map((block, i) => (
                  <div
                    key={block}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">{block}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Benchmarks */}
            <Section icon={<BarChart3 className="h-5 w-5" />} title="Volumetria Esperada (Benchmark)">
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Métrica</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Valor médio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {model.benchmarks.map((b, i) => (
                      <tr key={b.metric} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                        <td className="px-4 py-3 text-sm text-foreground">{b.metric}</td>
                        <td className="px-4 py-3 text-right text-sm font-semibold text-foreground">{b.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">
                * Valores de referência, não são promessas de resultado.
              </p>
            </Section>

            {/* Conversão */}
            <Section icon={<TrendingUp className="h-5 w-5" />} title="Taxas de Conversão (Benchmark)">
              <div className="grid gap-3 sm:grid-cols-3">
                {model.conversionRates.map((cr) => (
                  <div key={cr.stage} className="rounded-lg border border-border bg-card p-4 text-center">
                    <p className="text-2xl font-display font-bold text-accent">{cr.rate}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{cr.stage}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Timeline */}
            <Section icon={<Clock className="h-5 w-5" />} title="Delta T — Tempo de Implementação">
              <div className="space-y-3">
                {model.timeline.map((t, i) => (
                  <div key={t.phase} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{t.phase}</p>
                      <p className="text-sm text-muted-foreground">{t.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Pack */}
            <Section icon={<Package className="h-5 w-5" />} title="O que vem no Pack">
              <PackPreview maxItems={10} />
            </Section>

            {/* AI Agent */}
            <Section icon={<Bot className="h-5 w-5" />} title="Agente de IA do Modelo">
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-accent" />
                  <span className="font-display font-semibold text-foreground">IA Especialista</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {model.aiAgentDescription}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Exemplos de perguntas:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Como adaptar para minha cidade?",
                      "Qual preço inicial sugerido?",
                      "Onde estou errando na conversão?",
                      "Qual o próximo passo?",
                    ].map((q) => (
                      <Badge key={q} variant="outline" className="text-xs">
                        {q}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* Sticky CTA sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                {isAuthenticated && user && (
                  <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                    <Coins className="h-4 w-4" />
                    <span className="text-sm">{user.credits} créditos disponíveis</span>
                  </div>
                )}
                <div className="mb-1 text-sm text-muted-foreground">
                  {hasPurchased ? "Você já possui" : "Pagamento único"}
                </div>
                <div className="mb-2 flex items-baseline gap-2">
                  {appliedCoupon ? (
                    <>
                      <span className="font-display text-4xl font-bold text-foreground">
                        R$ {appliedCoupon.finalPrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        R$ {model.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-display text-4xl font-bold text-foreground">
                      R$ {model.price}
                    </span>
                  )}
                </div>
                <Button 
                  onClick={handlePurchase}
                  className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold mb-4"
                  disabled={isAuthenticated && !canAfford && !hasPurchased}
                >
                  {hasPurchased ? (
                    <>
                      <Package className="h-4 w-4" />
                      Acessar modelo
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      {isAuthenticated ? `Comprar` : "Comprar modelo"}
                    </>
                  )}
                </Button>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {standardPackItems.length} arquivos inclusos
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    IA especialista inclusa
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Atualizações gratuitas
                  </div>
                </div>
              </div>
              
              {/* Available Coupons */}
              {!hasPurchased && applicableCoupons.length > 0 && (
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Tag className="h-4 w-4 text-accent" />
                    Cupons Disponíveis
                  </h4>
                  {applicableCoupons.slice(0, 2).map(coupon => (
                    <CouponCard 
                      key={coupon.id} 
                      coupon={coupon} 
                      onApply={handleApplyCoupon}
                      compact 
                    />
                  ))}
                </div>
              )}
              
              {/* Related Articles */}
              <RelatedArticles modelId={model.id} category={model.category} />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 lg:hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              {hasPurchased ? "Você já possui" : "Pagamento único"}
            </div>
            <div className="flex items-baseline gap-2">
              {appliedCoupon ? (
                <>
                  <span className="font-display text-2xl font-bold text-foreground">
                    R$ {appliedCoupon.finalPrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    R$ {model.price}
                  </span>
                </>
              ) : (
                <span className="font-display text-2xl font-bold text-foreground">
                  R$ {model.price}
                </span>
              )}
            </div>
          </div>
          <Button 
            onClick={handlePurchase}
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold"
            disabled={isAuthenticated && !canAfford && !hasPurchased}
          >
            {hasPurchased ? (
              <>
                <Package className="h-4 w-4" />
                Acessar
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Comprar
              </>
            )}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* Helper components */
const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
    <p className="text-sm text-foreground leading-relaxed">{value}</p>
  </div>
);

export default ModelDetail;
