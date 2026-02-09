import {
  Target,
  DollarSign,
  Users,
  Rocket,
  BarChart3,
  CheckCircle2,
  Circle,
  TrendingUp,
  Globe,
  Shield,
  Megaphone,
  Layers,
  Cpu,
  Scale,
  CalendarDays,
  Briefcase,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { models } from "@/data/models";

const AdminMasterPanel = () => {
  const totalModels = models.length;
  const validatedModels = models.filter((m) => m.modelType === "Validado").length;
  const scaleModels = models.filter((m) => m.category === "Escala").length;

  const launchChecklist = [
    { task: "Cadastro de todos os modelos de negócio no catálogo", done: true },
    { task: "Configuração de gateway de pagamento (Stripe/PagSeguro)", done: false },
    { task: "Criação de conteúdo dos 30 arquivos por modelo", done: true },
    { task: "Treinamento dos agentes de IA por nicho", done: false },
    { task: "Setup de e-mail marketing (sequências de boas-vindas)", done: false },
    { task: "Pixel do Facebook e Google Analytics configurados", done: false },
    { task: "Landing pages de captação por categoria", done: false },
    { task: "Termos de uso e política de privacidade publicados", done: true },
    { task: "Sistema de cupons e promoções ativo", done: true },
    { task: "Blog com 10 artigos de SEO publicados", done: false },
    { task: "Google Meu Negócio configurado", done: false },
    { task: "Integração WhatsApp Business API", done: false },
    { task: "Testes de compra end-to-end realizados", done: false },
    { task: "Setup de atendimento e suporte ao cliente", done: false },
    { task: "Contratação de validadores para todos os nichos", done: false },
  ];

  const doneCount = launchChecklist.filter((c) => c.done).length;
  const launchProgress = Math.round((doneCount / launchChecklist.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-accent/20 p-3">
              <Rocket className="h-8 w-8 text-accent" />
            </div>
            <div>
              <CardTitle className="text-2xl">Modelo de Negócio Master</CardTitle>
              <CardDescription className="text-base">
                Plano completo para lançar e escalar a Loja de Negócios — o guia definitivo para os gestores da plataforma.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* KPIs Rápidos */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-foreground">{totalModels}</p>
            <p className="text-sm text-muted-foreground">Modelos no Catálogo</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-accent">{validatedModels}</p>
            <p className="text-sm text-muted-foreground">Validados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-foreground">{scaleModels}</p>
            <p className="text-sm text-muted-foreground">Modelos Escala</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-foreground">30</p>
            <p className="text-sm text-muted-foreground">Arquivos/Modelo</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-foreground">{launchProgress}%</p>
            <p className="text-sm text-muted-foreground">Progresso de Lançamento</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="canvas" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto lg:inline-grid">
          <TabsTrigger value="canvas" className="gap-1.5 text-xs">
            <Layers className="h-3.5 w-3.5" />
            Canvas
          </TabsTrigger>
          <TabsTrigger value="financeiro" className="gap-1.5 text-xs">
            <DollarSign className="h-3.5 w-3.5" />
            Financeiro
          </TabsTrigger>
          <TabsTrigger value="marketing" className="gap-1.5 text-xs">
            <Megaphone className="h-3.5 w-3.5" />
            Marketing
          </TabsTrigger>
          <TabsTrigger value="operacional" className="gap-1.5 text-xs">
            <Briefcase className="h-3.5 w-3.5" />
            Operacional
          </TabsTrigger>
          <TabsTrigger value="lancamento" className="gap-1.5 text-xs">
            <Rocket className="h-3.5 w-3.5" />
            Lançamento
          </TabsTrigger>
        </TabsList>

        {/* ===== CANVAS ===== */}
        <TabsContent value="canvas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-accent" />
                Business Model Canvas — Loja de Negócios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Proposta de Valor */}
                <div className="md:col-span-3 rounded-lg border border-accent/30 bg-accent/5 p-4">
                  <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" /> Proposta de Valor
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vender modelos de negócio reais e executáveis com pacote completo de arquivos,
                    suporte de IA especializada e opção de validação por profissional do mercado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">30 arquivos por modelo</Badge>
                    <Badge variant="outline">IA consultora exclusiva</Badge>
                    <Badge variant="outline">Modelos validados por especialistas</Badge>
                    <Badge variant="outline">Personalização por taxonomia</Badge>
                    <Badge variant="outline">Consultoria individual</Badge>
                  </div>
                </div>

                {/* Segmento de Clientes */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" /> Segmento de Clientes
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• MEIs e MEs buscando profissionalização</li>
                    <li>• Empreendedores de 1ª viagem</li>
                    <li>• Profissionais em transição de carreira</li>
                    <li>• Investidores buscando negócios prontos</li>
                    <li>• Empresários querendo diversificar</li>
                  </ul>
                </div>

                {/* Canais */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-accent" /> Canais
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Site/plataforma própria</li>
                    <li>• Google Ads (pesquisa + display)</li>
                    <li>• Meta Ads (Facebook + Instagram)</li>
                    <li>• YouTube (conteúdo educativo)</li>
                    <li>• Blog SEO (tráfego orgânico)</li>
                    <li>• WhatsApp Business</li>
                    <li>• E-mail marketing (automação)</li>
                    <li>• Parcerias com contadores/SEBRAE</li>
                  </ul>
                </div>

                {/* Relacionamento */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" /> Relacionamento
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Agente IA personalizado por modelo</li>
                    <li>• Suporte via WhatsApp</li>
                    <li>• Consultoria 1:1 com validadores</li>
                    <li>• Comunidade de empreendedores</li>
                    <li>• E-mail onboarding automatizado</li>
                    <li>• Blog com conteúdo educativo</li>
                  </ul>
                </div>

                {/* Fontes de Receita */}
                <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-500" /> Fontes de Receita
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• <strong>Venda de modelos básicos</strong> (R$ 99–149)</li>
                    <li>• <strong>Modelos validados</strong> (+R$ 150 sobre básico)</li>
                    <li>• <strong>Modelos Escala</strong> (R$ 497–897)</li>
                    <li>• <strong>Consultoria individual</strong> (R$ 99/hora)</li>
                    <li>• <strong>Catálogo de imóveis</strong> (comissão/indicação)</li>
                    <li>• <strong>Catálogo de serviços</strong> (lead qualificado)</li>
                    <li>• <strong>Renovação anual</strong> de acesso</li>
                  </ul>
                </div>

                {/* Recursos Principais */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-accent" /> Recursos Principais
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Plataforma web (React + Supabase)</li>
                    <li>• Base de modelos de negócio</li>
                    <li>• Rede de validadores profissionais</li>
                    <li>• Motor de IA (agentes por nicho)</li>
                    <li>• Templates e planilhas proprietários</li>
                    <li>• Equipe de conteúdo e curadoria</li>
                  </ul>
                </div>

                {/* Atividades Principais */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-accent" /> Atividades Principais
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Criação e curadoria de modelos</li>
                    <li>• Recrutamento de validadores</li>
                    <li>• Produção de conteúdo (blog, curso)</li>
                    <li>• Marketing digital e aquisição</li>
                    <li>• Suporte e atendimento</li>
                    <li>• Manutenção da plataforma</li>
                  </ul>
                </div>

                {/* Parceiros */}
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" /> Parceiros-Chave
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Validadores/consultores por nicho</li>
                    <li>• Contadores e escritórios jurídicos</li>
                    <li>• SEBRAE e associações</li>
                    <li>• Prestadores de serviço (design, sites)</li>
                    <li>• Corretores de imóveis comerciais</li>
                    <li>• Influenciadores de empreendedorismo</li>
                  </ul>
                </div>

                {/* Estrutura de Custos */}
                <div className="md:col-span-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-destructive" /> Estrutura de Custos
                  </h4>
                  <div className="grid gap-3 md:grid-cols-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">FIXOS</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Infraestrutura (hosting, APIs)</li>
                        <li>• Equipe core (devs, conteúdo)</li>
                        <li>• Ferramentas SaaS</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">VARIÁVEIS</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Custo de IA (tokens)</li>
                        <li>• Comissão validadores</li>
                        <li>• Taxas de pagamento</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">MARKETING</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Google Ads</li>
                        <li>• Meta Ads</li>
                        <li>• Produção de conteúdo</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">CRESCIMENTO</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Novos modelos</li>
                        <li>• Expansão de nicho</li>
                        <li>• Parcerias estratégicas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ===== FINANCEIRO ===== */}
        <TabsContent value="financeiro" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-accent" />
                Projeção Financeira & Precificação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tabela de Preços */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Tabela de Precificação</h4>
                <div className="rounded-md border overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="p-3 text-left font-medium">Produto</th>
                        <th className="p-3 text-left font-medium">Faixa de Preço</th>
                        <th className="p-3 text-left font-medium">Margem Est.</th>
                        <th className="p-3 text-left font-medium">Ticket Médio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Modelo Teórico (MEI/ME)</td>
                        <td className="p-3"><Badge variant="outline">R$ 99 – R$ 149</Badge></td>
                        <td className="p-3 text-green-600 font-semibold">85%</td>
                        <td className="p-3">R$ 120</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Modelo Validado (MEI/ME)</td>
                        <td className="p-3"><Badge variant="outline">R$ 249 – R$ 299</Badge></td>
                        <td className="p-3 text-green-600 font-semibold">70%</td>
                        <td className="p-3">R$ 270</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Modelo Escala (Premium)</td>
                        <td className="p-3"><Badge variant="outline">R$ 497 – R$ 897</Badge></td>
                        <td className="p-3 text-green-600 font-semibold">75%</td>
                        <td className="p-3">R$ 650</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Consultoria Individual</td>
                        <td className="p-3"><Badge variant="outline">R$ 99/hora</Badge></td>
                        <td className="p-3 text-green-600 font-semibold">50%</td>
                        <td className="p-3">R$ 99</td>
                      </tr>
                      <tr>
                        <td className="p-3">Renovação Anual</td>
                        <td className="p-3"><Badge variant="outline">R$ 49 – R$ 99</Badge></td>
                        <td className="p-3 text-green-600 font-semibold">95%</td>
                        <td className="p-3">R$ 69</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Separator />

              {/* Projeção mensal */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Projeção de Receita Mensal (Cenários)</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">CONSERVADOR</p>
                    <p className="text-2xl font-bold text-foreground">R$ 15.000</p>
                    <p className="text-sm text-muted-foreground">50 vendas/mês</p>
                    <p className="text-xs text-muted-foreground mt-1">Ticket médio R$ 300</p>
                  </div>
                  <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-center">
                    <p className="text-xs font-semibold text-accent mb-1">MODERADO</p>
                    <p className="text-2xl font-bold text-accent">R$ 45.000</p>
                    <p className="text-sm text-muted-foreground">150 vendas/mês</p>
                    <p className="text-xs text-muted-foreground mt-1">Ticket médio R$ 300</p>
                  </div>
                  <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4 text-center">
                    <p className="text-xs font-semibold text-green-600 mb-1">AGRESSIVO</p>
                    <p className="text-2xl font-bold text-green-600">R$ 120.000</p>
                    <p className="text-sm text-muted-foreground">400 vendas/mês</p>
                    <p className="text-xs text-muted-foreground mt-1">Ticket médio R$ 300</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Unit Economics */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Unit Economics</h4>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-xs font-semibold text-muted-foreground">CAC</p>
                    <p className="text-xl font-bold text-foreground">R$ 35</p>
                    <p className="text-xs text-muted-foreground">Custo de aquisição</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-xs font-semibold text-muted-foreground">LTV</p>
                    <p className="text-xl font-bold text-foreground">R$ 450</p>
                    <p className="text-xs text-muted-foreground">Valor vitalício</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-xs font-semibold text-muted-foreground">LTV/CAC</p>
                    <p className="text-xl font-bold text-green-600">12.8x</p>
                    <p className="text-xs text-muted-foreground">Retorno sobre aquisição</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-xs font-semibold text-muted-foreground">PAYBACK</p>
                    <p className="text-xl font-bold text-foreground">0 dias</p>
                    <p className="text-xs text-muted-foreground">Produto digital</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Custos estimados */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Custos Operacionais Estimados</h4>
                <div className="space-y-3">
                  {[
                    { item: "Infraestrutura (Hosting, Supabase, Domínio)", valor: "R$ 500", pct: 5 },
                    { item: "APIs de IA (OpenAI/Mistral)", valor: "R$ 800", pct: 8 },
                    { item: "Ferramentas SaaS (email, analytics)", valor: "R$ 400", pct: 4 },
                    { item: "Produção de conteúdo (freelancers)", valor: "R$ 2.000", pct: 20 },
                    { item: "Marketing digital (Ads)", valor: "R$ 5.000", pct: 50 },
                    { item: "Comissão validadores (15%)", valor: "R$ 1.300", pct: 13 },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-foreground">{c.item}</span>
                          <span className="text-sm font-semibold text-muted-foreground">{c.valor}/mês</span>
                        </div>
                        <Progress value={c.pct} className="h-2" />
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex items-center justify-between font-bold text-foreground">
                    <span>Total Estimado</span>
                    <span>R$ 10.000/mês</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ===== MARKETING ===== */}
        <TabsContent value="marketing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-accent" />
                Estratégia de Marketing & Crescimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Funil */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Funil de Vendas</h4>
                <div className="space-y-2">
                  {[
                    { stage: "Tráfego (visitantes)", volume: "10.000/mês", rate: "100%", color: "bg-blue-500" },
                    { stage: "Leads (cadastro/interesse)", volume: "2.000/mês", rate: "20%", color: "bg-cyan-500" },
                    { stage: "Qualificados (visualizam modelo)", volume: "800/mês", rate: "8%", color: "bg-yellow-500" },
                    { stage: "Carrinho (iniciam compra)", volume: "300/mês", rate: "3%", color: "bg-orange-500" },
                    { stage: "Compradores", volume: "150/mês", rate: "1.5%", color: "bg-green-500" },
                    { stage: "Upsell (consultoria/escala)", volume: "30/mês", rate: "0.3%", color: "bg-accent" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                      <div className={`h-3 w-3 rounded-full ${f.color}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{f.stage}</span>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{f.volume}</Badge>
                            <Badge variant="secondary" className="text-xs">{f.rate}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Canais de aquisição */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Canais de Aquisição</h4>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="google">
                    <AccordionTrigger>🔍 Google Ads — Pesquisa e Display</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Palavras-chave:</strong> "como abrir [negócio]", "modelo de negócio pronto", "plano de negócio [nicho]"</p>
                        <p><strong>Budget sugerido:</strong> R$ 2.000–5.000/mês</p>
                        <p><strong>CPC estimado:</strong> R$ 1,50–3,00</p>
                        <p><strong>Meta:</strong> 1.000–3.000 cliques/mês</p>
                        <p><strong>Estratégia:</strong> Campanhas segmentadas por nicho. Landing pages específicas por categoria. Remarketing 30 dias.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="meta">
                    <AccordionTrigger>📱 Meta Ads — Facebook e Instagram</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Público:</strong> Empreendedores 25–55, interessados em negócios, MEI, SEBRAE</p>
                        <p><strong>Budget sugerido:</strong> R$ 2.000–4.000/mês</p>
                        <p><strong>Formato:</strong> Carrosséis com modelos, Reels de depoimentos, Stories com oferta</p>
                        <p><strong>Estratégia:</strong> Lookalike de compradores. Retargeting de visitantes. Oferta de primeiro modelo com desconto.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="seo">
                    <AccordionTrigger>📝 SEO & Blog — Tráfego Orgânico</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Meta:</strong> 50 artigos de blog em 6 meses</p>
                        <p><strong>Temas:</strong> "Como abrir um salão de beleza", "Quanto custa montar uma loja", guias por nicho</p>
                        <p><strong>CTAs:</strong> Cada artigo linka para o modelo de negócio relacionado</p>
                        <p><strong>Resultado esperado:</strong> 5.000 visitas orgânicas/mês em 6 meses</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="email">
                    <AccordionTrigger>✉️ E-mail Marketing — Automação</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Sequência de boas-vindas:</strong> 5 e-mails em 7 dias</p>
                        <p><strong>Sequência de abandono:</strong> 3 e-mails em 48h</p>
                        <p><strong>Newsletter semanal:</strong> Dicas + modelo em destaque</p>
                        <p><strong>Ferramenta:</strong> Mailchimp / ActiveCampaign</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="parcerias">
                    <AccordionTrigger>🤝 Parcerias Estratégicas</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>SEBRAE:</strong> Co-marketing e indicação mútua</p>
                        <p><strong>Contadores:</strong> Programa de afiliados (10% comissão)</p>
                        <p><strong>Influenciadores:</strong> Creators de empreendedorismo (permuta + comissão)</p>
                        <p><strong>Coworkings:</strong> Flyers e QR codes em espaços compartilhados</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <Separator />

              {/* Metas de crescimento */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Metas de Crescimento (12 meses)</h4>
                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    { period: "Mês 1-3", meta: "50 vendas/mês", focus: "Validar canais" },
                    { period: "Mês 4-6", meta: "150 vendas/mês", focus: "Escalar ads" },
                    { period: "Mês 7-9", meta: "300 vendas/mês", focus: "SEO + parcerias" },
                    { period: "Mês 10-12", meta: "500 vendas/mês", focus: "Novos produtos" },
                  ].map((m, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <p className="text-xs font-semibold text-accent mb-1">{m.period}</p>
                      <p className="text-lg font-bold text-foreground">{m.meta}</p>
                      <p className="text-xs text-muted-foreground">{m.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ===== OPERACIONAL ===== */}
        <TabsContent value="operacional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-accent" />
                Operação & Equipe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Equipe */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Estrutura de Equipe</h4>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { role: "CEO / Gestor", desc: "Estratégia, parcerias, visão do negócio", priority: "Essencial" },
                    { role: "Desenvolvedor Full-Stack", desc: "Manutenção da plataforma, novas features", priority: "Essencial" },
                    { role: "Designer / UI-UX", desc: "Templates, identidade visual, materiais", priority: "Essencial" },
                    { role: "Produtor de Conteúdo", desc: "Blog, artigos, scripts, materiais", priority: "Essencial" },
                    { role: "Gestor de Tráfego", desc: "Google Ads, Meta Ads, analytics", priority: "Fase 2" },
                    { role: "Customer Success", desc: "Suporte, onboarding, retenção", priority: "Fase 2" },
                    { role: "Closer de Vendas", desc: "Vendas consultivas para modelos Escala", priority: "Fase 3" },
                    { role: "Recrutador de Validadores", desc: "Prospecção e curadoria de especialistas", priority: "Fase 3" },
                    { role: "Social Media", desc: "Redes sociais, comunidade, engajamento", priority: "Fase 2" },
                  ].map((p, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-foreground text-sm">{p.role}</h5>
                        <Badge variant={p.priority === "Essencial" ? "default" : "secondary"} className="text-xs">
                          {p.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Processos */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Processos Operacionais</h4>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="modelo">
                    <AccordionTrigger>📦 Criação de Novo Modelo de Negócio</AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal pl-5">
                        <li>Pesquisa de mercado e validação da demanda</li>
                        <li>Definição de categoria, preço e taxonomias</li>
                        <li>Criação dos 30 arquivos do pack (doc + xls)</li>
                        <li>Redação de copy (descrição, benchmarks, timeline)</li>
                        <li>Configuração do agente de IA exclusivo</li>
                        <li>Criação de imagem de capa e thumbnails</li>
                        <li>Publicação e testes de compra</li>
                        <li>Campanha de lançamento (e-mail + ads)</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="validacao">
                    <AccordionTrigger>🏆 Processo de Validação</AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal pl-5">
                        <li>Identificar profissional referência no nicho</li>
                        <li>Entrevista e coleta de métricas reais</li>
                        <li>Criação do perfil do validador</li>
                        <li>Produção dos 10 conteúdos extras</li>
                        <li>Definir preço de consultoria (R$ 99/h padrão)</li>
                        <li>Ajuste de preço (+R$ 150 sobre modelo teórico)</li>
                        <li>Publicação com selo "Validado"</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="suporte">
                    <AccordionTrigger>💬 Fluxo de Suporte ao Cliente</AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal pl-5">
                        <li>Cliente usa chatbot IA como 1º nível de suporte</li>
                        <li>Dúvidas não resolvidas → WhatsApp Business</li>
                        <li>Problemas técnicos → E-mail com SLA de 24h</li>
                        <li>Reembolso → Análise em até 48h (política de 7 dias)</li>
                        <li>Feedback → Registro para melhoria contínua</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="imoveis-servicos">
                    <AccordionTrigger>🏢 Gestão de Imóveis e Serviços</AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal pl-5">
                        <li>Prospectar corretores e prestadores parceiros</li>
                        <li>Cadastrar imóveis/serviços com perfil completo</li>
                        <li>Moderar e atualizar listagens mensalmente</li>
                        <li>Cobrar comissão por lead ou indicação convertida</li>
                        <li>Coletar reviews e depoimentos de clientes</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <Separator />

              {/* Stack Tecnológico */}
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-accent" /> Stack Tecnológico
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { area: "Frontend", tools: "React, TypeScript, Tailwind CSS, Vite, shadcn/ui" },
                    { area: "Backend", tools: "Supabase (PostgreSQL, Auth, Storage, Edge Functions)" },
                    { area: "IA", tools: "Mistral AI / OpenAI (agentes por nicho)" },
                    { area: "Pagamentos", tools: "Stripe / PagSeguro / Mercado Pago" },
                    { area: "E-mail", tools: "Resend / Mailchimp / ActiveCampaign" },
                    { area: "Analytics", tools: "Google Analytics 4, Meta Pixel, Hotjar" },
                    { area: "Hospedagem", tools: "Lovable (deploy) + Cloudflare (CDN)" },
                    { area: "CRM", tools: "HubSpot / Pipedrive (futuro)" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                      <Badge variant="outline" className="mt-0.5 whitespace-nowrap">{s.area}</Badge>
                      <p className="text-sm text-muted-foreground">{s.tools}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Jurídico */}
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent" /> Jurídico & Compliance
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h5 className="font-semibold text-foreground text-sm mb-2">Documentos Obrigatórios</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✅ Termos de Uso</li>
                      <li>✅ Política de Privacidade (LGPD)</li>
                      <li>⬜ Contrato com Validadores</li>
                      <li>⬜ Política de Reembolso</li>
                      <li>⬜ Termos de uso de IA</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h5 className="font-semibold text-foreground text-sm mb-2">Estrutura Societária</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CNPJ: CNAE 6319-4/00 (Portais web)</li>
                      <li>• Regime: Simples Nacional</li>
                      <li>• Tipo: LTDA ou SLU</li>
                      <li>• NF: Emitir NFS-e por venda</li>
                      <li>• Contabilidade: Mensal obrigatória</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ===== LANÇAMENTO ===== */}
        <TabsContent value="lancamento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-accent" />
                Checklist de Lançamento
              </CardTitle>
              <CardDescription>
                Progresso: {doneCount}/{launchChecklist.length} tarefas concluídas ({launchProgress}%)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={launchProgress} className="h-3" />
              <div className="space-y-2">
                {launchChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                    {item.done ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                    <span className={`text-sm ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline de lançamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-accent" />
                Cronograma de Lançamento (Delta T)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    phase: "Semana 1-2: Fundação",
                    tasks: ["Setup técnico completo", "Cadastro de 20+ modelos", "Configuração de pagamento", "Termos e políticas"],
                  },
                  {
                    phase: "Semana 3-4: Conteúdo",
                    tasks: ["Criação dos packs (30 arquivos/modelo)", "Blog com 10 artigos SEO", "Setup de e-mail marketing", "Treinamento dos agentes IA"],
                  },
                  {
                    phase: "Semana 5-6: Marketing",
                    tasks: ["Campanhas Google Ads", "Campanhas Meta Ads", "Setup analytics e pixels", "Landing pages por categoria"],
                  },
                  {
                    phase: "Semana 7-8: Lançamento",
                    tasks: ["Testes end-to-end", "Soft launch para beta testers", "Ajustes de UX/conversão", "Lançamento oficial"],
                  },
                  {
                    phase: "Mês 3+: Escala",
                    tasks: ["Recrutar validadores", "Lançar modelos Escala", "Programa de afiliados", "Expansão de nichos"],
                  },
                ].map((phase, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-accent" />
                      {phase.phase}
                    </h5>
                    <div className="grid gap-1.5 md:grid-cols-2">
                      {phase.tasks.map((t, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Circle className="h-3 w-3 shrink-0" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KPIs para acompanhar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                KPIs para Acompanhamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { kpi: "Visitantes/mês", meta: "10.000", freq: "Semanal" },
                  { kpi: "Taxa de conversão", meta: "1.5%", freq: "Semanal" },
                  { kpi: "Vendas/mês", meta: "150", freq: "Diário" },
                  { kpi: "Ticket médio", meta: "R$ 300", freq: "Mensal" },
                  { kpi: "CAC", meta: "< R$ 35", freq: "Mensal" },
                  { kpi: "Churn de renovação", meta: "< 30%", freq: "Anual" },
                  { kpi: "NPS", meta: "> 50", freq: "Trimestral" },
                  { kpi: "Receita recorrente", meta: "R$ 45.000", freq: "Mensal" },
                  { kpi: "Modelos validados", meta: "50%+ do catálogo", freq: "Mensal" },
                ].map((k, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{k.kpi}</p>
                      <p className="text-xs text-muted-foreground">Freq: {k.freq}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{k.meta}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminMasterPanel;
