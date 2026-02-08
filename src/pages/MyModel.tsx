import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Clock,
  Package,
  Bot,
  BarChart3,
  Database,
  Users,
  AlertCircle,
  CheckCircle2,
  Send,
  Loader2,
  BookOpen,
  Lightbulb,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { models, categoryIcons } from "@/data/models";
import { useAuth } from "@/contexts/AuthContext";
import { RelatedArticles, BlogSection } from "@/components/BlogComponents";
import { getRelatedPosts, getPostsByCategory } from "@/data/blog";
import { PackContentsDisplay } from "@/components/PackContentsDisplay";

const MyModel = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "ai"; content: string }[]>([]);

  const model = models.find((m) => m.id === id);

  // Redireciona se não estiver autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Verifica se o usuário comprou este modelo
  const hasPurchased = user?.purchasedModels.includes(id || "");

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Modelo não encontrado.</p>
          <Button asChild className="mt-4">
            <Link to="/dashboard">Voltar ao painel</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!hasPurchased) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Você não tem acesso a este modelo.</p>
          <Button asChild className="mt-4">
            <Link to={`/modelo/${id}`}>Ver página do produto</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAiSubmit = async () => {
    if (!aiQuestion.trim()) return;
    
    setIsAiLoading(true);
    setChatHistory(prev => [...prev, { role: "user", content: aiQuestion }]);
    
    // Simula resposta da IA (em produção, conectaria com Lovable AI)
    setTimeout(() => {
      const responses = [
        `Para o modelo ${model.name}, recomendo começar focando nas métricas de ${model.benchmarks[0]?.metric}. Baseado nos benchmarks, você pode esperar ${model.benchmarks[0]?.value} inicialmente.`,
        `A arquitetura de receita do ${model.name} funciona através de ${model.revenueModel}. As principais fontes de aquisição são: ${model.acquisitionSources.slice(0, 2).join(", ")}.`,
        `Para maximizar a conversão no ${model.name}, foque na etapa "${model.conversionRates[0]?.stage}" que tem taxa média de ${model.conversionRates[0]?.rate}. Melhore isso primeiro antes de escalar.`,
        `O Delta T para o ${model.name} é dividido em fases: ${model.timeline.map(t => `${t.phase} (${t.duration})`).join(", ")}. Siga essa ordem para melhores resultados.`,
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, { role: "ai", content: randomResponse }]);
      setAiResponse(randomResponse);
      setIsAiLoading(false);
      setAiQuestion("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero com imagem do modelo */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link
              to="/dashboard"
              className="mb-4 inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao painel
            </Link>
            <Badge className="mb-3 border-0 bg-accent/20 text-amber font-medium">
              {categoryIcons[model.category]} {model.category}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              {model.name}
            </h1>
            <p className="mt-2 text-primary-foreground/70 max-w-2xl">
              {model.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs de conteúdo */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="arquitetura" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-2 h-auto p-1">
            <TabsTrigger value="arquitetura" className="gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Arquitetura</span>
            </TabsTrigger>
            <TabsTrigger value="dados" className="gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Dados</span>
            </TabsTrigger>
            <TabsTrigger value="downloads" className="gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Downloads</span>
            </TabsTrigger>
            <TabsTrigger value="ia" className="gap-2">
              <Bot className="h-4 w-4" />
              <span className="hidden sm:inline">Consultor IA</span>
            </TabsTrigger>
            <TabsTrigger value="metricas" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Métricas</span>
            </TabsTrigger>
            <TabsTrigger value="conteudo" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Conteúdo</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Arquitetura de Receita */}
          <TabsContent value="arquitetura" className="space-y-8">
            <Section icon={<Target className="h-5 w-5" />} title="Arquitetura de Receita">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoBlock label="Modelo de Receita" value={model.revenueModel} />
                <InfoBlock label="Forma de Entrega" value={model.deliveryMethod} />
                <InfoBlock label="Fontes de Aquisição" value={model.acquisitionSources.join(", ")} />
                <InfoBlock label="Estratégia de Expansão" value={model.expansionStrategy} />
              </div>
              <div className="mt-4 rounded-lg border border-border bg-card p-4">
                <p className="mb-2 text-sm font-semibold text-foreground">Estrutura de Custos</p>
                <div className="flex flex-wrap gap-2">
                  {model.costStructure.map((cost) => (
                    <Badge key={cost} variant="secondary">{cost}</Badge>
                  ))}
                </div>
              </div>
            </Section>

            <Section icon={<Users className="h-5 w-5" />} title="Público-Alvo">
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
          </TabsContent>

          {/* Tab Arquitetura de Dados */}
          <TabsContent value="dados" className="space-y-8">
            <Section icon={<Database className="h-5 w-5" />} title="Blocos de Dados">
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

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Diagrama de Relacionamento
              </h3>
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-center text-muted-foreground">
                  <Database className="h-12 w-12 mx-auto mb-2 text-accent/50" />
                  <p className="text-sm">
                    O diagrama ER completo está disponível nos arquivos de download.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab Downloads */}
          <TabsContent value="downloads" className="space-y-8">
            <PackContentsDisplay modelName={model.name} />
          </TabsContent>

          {/* Tab Consultor IA */}
          <TabsContent value="ia" className="space-y-8">
            <Section icon={<Bot className="h-5 w-5" />} title="Consultor IA Especializado">
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-accent" />
                  <span className="font-display font-semibold text-foreground">
                    IA Especialista em {model.name}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {model.aiAgentDescription}
                </p>
                
                {/* Chat history */}
                {chatHistory.length > 0 && (
                  <div className="mb-4 max-h-64 overflow-y-auto space-y-3 border-t border-border pt-4">
                    {chatHistory.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg text-sm ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground ml-8"
                            : "bg-muted text-foreground mr-8"
                        }`}
                      >
                        {msg.content}
                      </div>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Faça uma pergunta sobre o modelo de negócio..."
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                  <Button
                    onClick={handleAiSubmit}
                    disabled={isAiLoading || !aiQuestion.trim()}
                    className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isAiLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Pensando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar pergunta
                      </>
                    )}
                  </Button>
                </div>

                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Sugestões de perguntas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Como adaptar para minha cidade?",
                      "Qual preço inicial sugerido?",
                      "Onde estou errando na conversão?",
                      "Qual o próximo passo?",
                    ].map((q) => (
                      <Badge
                        key={q}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-accent/10"
                        onClick={() => setAiQuestion(q)}
                      >
                        {q}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </TabsContent>

          {/* Tab Métricas */}
          <TabsContent value="metricas" className="space-y-8">
            <Section icon={<BarChart3 className="h-5 w-5" />} title="Volumetria Esperada (Benchmark)">
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Métrica
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Valor médio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {model.benchmarks.map((b, i) => (
                      <tr key={b.metric} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                        <td className="px-4 py-3 text-sm text-foreground">{b.metric}</td>
                        <td className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                          {b.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={<TrendingUp className="h-5 w-5" />} title="Taxas de Conversão (Benchmark)">
              <div className="grid gap-3 sm:grid-cols-3">
                {model.conversionRates.map((cr) => (
                  <div key={cr.stage} className="rounded-lg border border-border bg-card p-4 text-center">
                    <p className="text-2xl font-display font-bold text-accent">{cr.rate}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{cr.stage}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                * Valores de referência baseados em benchmarks do mercado. Não são promessas de resultado.
              </p>
            </Section>
          </TabsContent>

          {/* Tab Conteúdo Educativo */}
          <TabsContent value="conteudo" className="space-y-8">
            <Section icon={<BookOpen className="h-5 w-5" />} title="Artigos e Guias">
              <p className="text-sm text-muted-foreground mb-6">
                Conteúdo educativo selecionado para ajudar você a implementar e escalar seu negócio de {model.name}.
              </p>
              
              {/* Quick Tips */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">Dica Rápida #1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comece com um MVP simples. Não tente implementar tudo de uma vez - valide antes de escalar.
                  </p>
                </div>
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">Dica Rápida #2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foque nos primeiros 10 clientes. Entenda profundamente suas necessidades antes de crescer.
                  </p>
                </div>
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">Dica Rápida #3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Colete feedback constantemente. Cada interação é uma oportunidade de melhorar.
                  </p>
                </div>
              </div>

              {/* Related Articles */}
              <RelatedArticles modelId={model.id} category={model.category} />
            </Section>

            <Section icon={<Rocket className="h-5 w-5" />} title="Próximos Passos">
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Baixe todos os templates</p>
                    <p className="text-sm text-muted-foreground">Acesse a aba Downloads e baixe todas as planilhas e documentos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Personalize para seu contexto</p>
                    <p className="text-sm text-muted-foreground">Adapte os templates com seus dados, preços e informações locais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Use o Consultor IA</p>
                    <p className="text-sm text-muted-foreground">Tire dúvidas específicas sobre implementação com a IA especializada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Siga o Delta T</p>
                    <p className="text-sm text-muted-foreground">Respeite o cronograma sugerido nas métricas para implementação gradual.</p>
                  </div>
                </div>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </main>

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

export default MyModel;
