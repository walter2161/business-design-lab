import { useParams, Link } from "react-router-dom";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { models, categoryIcons } from "@/data/models";

const ModelDetail = () => {
  const { id } = useParams();
  const model = models.find((m) => m.id === id);

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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-navy-gradient">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao catálogo
          </Link>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <Badge className="mb-4 border-0 bg-accent/20 text-amber font-medium">
                {categoryIcons[model.category]} {model.category}
              </Badge>
              <h1 className="mb-3 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                {model.name}
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                {model.shortDescription}
              </p>
            </div>
            {/* CTA Card */}
            <div className="w-full shrink-0 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm md:w-72">
              <div className="mb-1 text-sm text-primary-foreground/50">Pagamento único</div>
              <div className="mb-4 font-display text-4xl font-bold text-amber">
                R$ {model.price}
              </div>
              <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
                <ShoppingCart className="h-4 w-4" />
                Comprar modelo
              </Button>
              <p className="mt-3 text-xs text-center text-primary-foreground/40">
                Acesso imediato após o pagamento
              </p>
            </div>
          </div>
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
              <div className="grid gap-2 sm:grid-cols-2">
                {model.packContents.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
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
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <div className="mb-1 text-sm text-muted-foreground">Pagamento único</div>
              <div className="mb-4 font-display text-4xl font-bold text-foreground">
                R$ {model.price}
              </div>
              <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold mb-4">
                <ShoppingCart className="h-4 w-4" />
                Comprar modelo
              </Button>
              <Separator className="my-4" />
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Acesso imediato
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {model.packContents.length} arquivos inclusos
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
          </div>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 lg:hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Pagamento único</div>
            <div className="font-display text-2xl font-bold text-foreground">R$ {model.price}</div>
          </div>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
            <ShoppingCart className="h-4 w-4" />
            Comprar modelo
          </Button>
        </div>
      </div>

      <footer className="border-t border-border bg-card py-8 lg:block hidden">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Loja de Negócio. Todos os direitos reservados.
        </div>
      </footer>
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
