import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  BookOpen,
  Lightbulb,
  Rocket,
  MessageSquare,
  Settings,
  Home,
  Key,
  FileText,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { models, categoryIcons } from "@/data/models";
import { useAuth } from "@/contexts/AuthContext";
import { RelatedArticles } from "@/components/BlogComponents";
import { PackContentsDisplay } from "@/components/PackContentsDisplay";
import ChatGPTStyleChat from "@/components/ChatGPTStyleChat";
import OnHubLicenseCard from "@/components/OnHubLicenseCard";
import { sendMistralMessage, getProductAgentPrompt, ChatMessage } from "@/lib/mistralAI";
import { cn } from "@/lib/utils";

const MAX_CHAT_MESSAGES = 20;

type TabType = "overview" | "files" | "consultant" | "metrics" | "content" | "settings";

const MyModel = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Função para mudar aba e rolar ao topo
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

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

  // Prepara contexto detalhado do produto para o agente
  const productDetails = `
Nome: ${model.name}
Categoria: ${model.category}
Descrição: ${model.shortDescription}
Objetivo: ${model.objective}
Público-alvo: ${model.targetAudience}
Não é para: ${model.notFor}
Modelo de receita: ${model.revenueModel}
Método de entrega: ${model.deliveryMethod}
Estratégia de expansão: ${model.expansionStrategy}

FONTES DE AQUISIÇÃO:
${model.acquisitionSources.map(s => `- ${s}`).join("\n")}

ESTRUTURA DE CUSTOS:
${model.costStructure.map(c => `- ${c}`).join("\n")}

BLOCOS DE DADOS:
${model.dataBlocks.map(d => `- ${d}`).join("\n")}

BENCHMARKS (valores de referência):
${model.benchmarks.map(b => `- ${b.metric}: ${b.value}`).join("\n")}

TAXAS DE CONVERSÃO:
${model.conversionRates.map(c => `- ${c.stage}: ${c.rate}`).join("\n")}

CRONOGRAMA (Delta T):
${model.timeline.map(t => `- ${t.phase}: ${t.duration}`).join("\n")}

CONTEÚDO DO PACK:
${model.packContents.join(", ")}
`;

  const systemPrompt = getProductAgentPrompt(model.name, productDetails);

  const handleChatSend = async (message: string) => {
    setChatHistory(prev => {
      const newHistory = [...prev, { role: "user" as const, content: message }];
      return newHistory.slice(-MAX_CHAT_MESSAGES);
    });
    setIsAiLoading(true);

    const apiHistory: ChatMessage[] = [
      ...chatHistory.slice(-MAX_CHAT_MESSAGES).map(m => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: message }
    ];

    const response = await sendMistralMessage(apiHistory, systemPrompt);

    if (response.success) {
      setChatHistory(prev => {
        const newHistory = [...prev, { role: "assistant" as const, content: response.content }];
        return newHistory.slice(-MAX_CHAT_MESSAGES);
      });
    } else {
      setChatHistory(prev => {
        const newHistory = [...prev, { 
          role: "assistant" as const, 
          content: "Desculpe, ocorreu um erro na comunicação. Tente novamente em alguns segundos." 
        }];
        return newHistory.slice(-MAX_CHAT_MESSAGES);
      });
    }

    setIsAiLoading(false);
  };

  const sidebarItems = [
    { id: "overview" as TabType, label: "Visão Geral", icon: Home },
    { id: "files" as TabType, label: "Arquivos", icon: Package },
    { id: "consultant" as TabType, label: "Consultor IA", icon: Bot },
    { id: "metrics" as TabType, label: "Métricas", icon: BarChart3 },
    { id: "content" as TabType, label: "Conteúdo", icon: BookOpen },
    { id: "settings" as TabType, label: "Configurações", icon: Settings },
  ];

  const suggestedQuestions = [
    "Como adaptar para minha cidade?",
    "Qual preço inicial sugerido?",
    "Onde estou errando na conversão?",
    "Qual o próximo passo?",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Main Layout - Facebook Business Style */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border shrink-0 hidden lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto">
            {/* Product Header */}
            <div className="p-4 border-b border-border">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao painel
              </Link>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-semibold text-foreground truncate">
                    {model.name}
                  </h2>
                  <Badge variant="secondary" className="text-xs">
                    {categoryIcons[model.category]} {model.category}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeTab === item.id
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Quick Access - Compact */}
            <div className="p-3 border-t border-border mt-4">
              <OnHubLicenseCard
                productId={model.id}
                productName={model.name}
                userId={user?.id}
                compact
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Mobile Header */}
          <div className="lg:hidden p-4 border-b border-border bg-card">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao painel
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display font-semibold text-foreground">
                  {model.name}
                </h2>
                <Badge variant="secondary" className="text-xs">
                  {categoryIcons[model.category]} {model.category}
                </Badge>
              </div>
            </div>
            {/* Mobile Tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2">
              {sidebarItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                    activeTab === item.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 lg:p-8 max-w-5xl">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Welcome Banner */}
                <div className="rounded-xl border border-border bg-gradient-to-r from-accent/10 to-transparent p-6">
                  <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                    Bem-vindo ao seu {model.name}!
                  </h1>
                  <p className="text-muted-foreground">
                    {model.shortDescription}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    icon={<Target className="h-5 w-5" />}
                    label="Modelo de Receita"
                    value={model.revenueModel}
                  />
                  <StatCard
                    icon={<Clock className="h-5 w-5" />}
                    label="Tempo Implementação"
                    value={model.timeline[model.timeline.length - 1]?.duration || "N/A"}
                  />
                  <StatCard
                    icon={<TrendingUp className="h-5 w-5" />}
                    label="Conversão Esperada"
                    value={model.conversionRates[0]?.rate || "N/A"}
                  />
                  <StatCard
                    icon={<Package className="h-5 w-5" />}
                    label="Itens no Pack"
                    value={`${model.packContents.length} arquivos`}
                  />
                </div>

                {/* Architecture Summary */}
                <Section icon={<Target className="h-5 w-5" />} title="Arquitetura de Receita">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoBlock label="Modelo de Receita" value={model.revenueModel} />
                    <InfoBlock label="Forma de Entrega" value={model.deliveryMethod} />
                    <InfoBlock label="Fontes de Aquisição" value={model.acquisitionSources.join(", ")} />
                    <InfoBlock label="Estratégia de Expansão" value={model.expansionStrategy} />
                  </div>
                </Section>

                {/* Target Audience */}
                <Section icon={<Users className="h-5 w-5" />} title="Público-Alvo">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Para quem é
                      </div>
                      <p className="text-sm text-muted-foreground">{model.targetAudience}</p>
                    </div>
                    <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        Para quem NÃO é
                      </div>
                      <p className="text-sm text-muted-foreground">{model.notFor}</p>
                    </div>
                  </div>
                </Section>

                {/* Timeline */}
                <Section icon={<Clock className="h-5 w-5" />} title="Delta T — Cronograma">
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

                {/* Mobile onHub Card */}
                <div className="lg:hidden">
                  <OnHubLicenseCard
                    productId={model.id}
                    productName={model.name}
                    userId={user?.id}
                  />
                </div>
              </div>
            )}

            {/* Files Tab */}
            {activeTab === "files" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-display text-2xl font-bold text-foreground">
                      Arquivos do Modelo
                    </h1>
                    <p className="text-muted-foreground">
                      Todos os templates, planilhas e documentos do seu pack
                    </p>
                  </div>
                </div>

                {/* onHub Notice */}
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Key className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Arquivos disponíveis no onHub.app
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Seus arquivos foram enviados automaticamente para sua conta onHub. 
                      Acesse online ou baixe para editar localmente.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://onhub.app" target="_blank" rel="noopener noreferrer">
                        Acessar onHub.app
                      </a>
                    </Button>
                  </div>
                </div>

                <PackContentsDisplay modelName={model.name} />
              </div>
            )}

            {/* Consultant Tab */}
            {activeTab === "consultant" && (
              <div className="space-y-6">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">
                    Consultor IA Especializado
                  </h1>
                  <p className="text-muted-foreground">
                    Tire dúvidas e receba orientações personalizadas para seu negócio
                  </p>
                </div>

                <ChatGPTStyleChat
                  messages={chatHistory}
                  onSend={handleChatSend}
                  isLoading={isAiLoading}
                  suggestedQuestions={suggestedQuestions}
                  productName={model.name}
                  aiDescription={model.aiAgentDescription}
                />
              </div>
            )}

            {/* Metrics Tab */}
            {activeTab === "metrics" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">
                    Métricas e Benchmarks
                  </h1>
                  <p className="text-muted-foreground">
                    Valores de referência para acompanhar seu desempenho
                  </p>
                </div>

                {/* Data Blocks */}
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

                {/* Benchmarks Table */}
                <Section icon={<BarChart3 className="h-5 w-5" />} title="Volumetria Esperada">
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

                {/* Conversion Rates */}
                <Section icon={<TrendingUp className="h-5 w-5" />} title="Taxas de Conversão">
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
              </div>
            )}

            {/* Content Tab */}
            {activeTab === "content" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">
                    Conteúdo Educativo
                  </h1>
                  <p className="text-muted-foreground">
                    Artigos e guias para ajudar na implementação
                  </p>
                </div>

                {/* Quick Tips */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

                {/* Next Steps */}
                <Section icon={<Rocket className="h-5 w-5" />} title="Próximos Passos">
                  <div className="space-y-3">
                    {[
                      { title: "Acesse seus arquivos no onHub", desc: "Entre no onHub.app e familiarize-se com os templates." },
                      { title: "Personalize para seu contexto", desc: "Adapte os templates com seus dados, preços e informações locais." },
                      { title: "Use o Consultor IA", desc: "Tire dúvidas específicas sobre implementação." },
                      { title: "Siga o Delta T", desc: "Respeite o cronograma sugerido para implementação gradual." },
                    ].map((step, i) => (
                      <div key={step.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent font-display">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{step.title}</p>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">
                    Configurações
                  </h1>
                  <p className="text-muted-foreground">
                    Gerencie sua licença e preferências
                  </p>
                </div>

                {/* License Info */}
                <Section icon={<Key className="h-5 w-5" />} title="Licença do Produto">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Produto
                        </p>
                        <p className="font-semibold text-foreground">{model.name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Status
                        </p>
                        <Badge className="bg-accent/20 text-accent border-0">Ativo</Badge>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Validade
                        </p>
                        <p className="text-foreground">12 meses (renovável)</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Inclui
                        </p>
                        <p className="text-foreground">Atualizações + onHub Premium</p>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Support */}
                <Section icon={<HelpCircle className="h-5 w-5" />} title="Suporte">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <p className="text-muted-foreground mb-4">
                      Precisa de ajuda? Entre em contato conosco ou use o Consultor IA para dúvidas rápidas.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => handleTabChange("consultant")}>
                        <Bot className="h-4 w-4 mr-2" />
                        Consultor IA
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="mailto:contato@lojadenegocios.com.br">
                          <FileText className="h-4 w-4 mr-2" />
                          Contato
                        </a>
                      </Button>
                    </div>
                  </div>
                </Section>
              </div>
            )}
          </div>
        </main>
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

const StatCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="flex items-center gap-2 mb-2 text-accent">
      {icon}
    </div>
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="font-semibold text-foreground truncate">{value}</p>
  </div>
);

export default MyModel;
