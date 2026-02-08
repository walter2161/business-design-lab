export type Category = 
  | "Serviços" 
  | "SaaS" 
  | "E-commerce" 
  | "Marketplace" 
  | "Infoprodutos" 
  | "Negócios Locais";

export interface BusinessModel {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  category: Category;
  targetAudience: string;
  notFor: string;
  objective: string;
  revenueModel: string;
  acquisitionSources: string[];
  costStructure: string[];
  deliveryMethod: string;
  expansionStrategy: string;
  dataBlocks: string[];
  benchmarks: {
    metric: string;
    value: string;
  }[];
  conversionRates: {
    stage: string;
    rate: string;
  }[];
  timeline: {
    phase: string;
    duration: string;
  }[];
  packContents: string[];
  aiAgentDescription: string;
}

export const categories: Category[] = [
  "Serviços",
  "SaaS",
  "E-commerce",
  "Marketplace",
  "Infoprodutos",
  "Negócios Locais",
];

export const categoryIcons: Record<Category, string> = {
  "Serviços": "🔧",
  "SaaS": "☁️",
  "E-commerce": "🛒",
  "Marketplace": "🏪",
  "Infoprodutos": "📚",
  "Negócios Locais": "📍",
};

export const models: BusinessModel[] = [
  {
    id: "agencia-marketing-recorrente",
    name: "Agência de Marketing Recorrente",
    shortDescription: "Modelo validado para receita previsível com contratos mensais de marketing digital.",
    price: 197,
    category: "Serviços",
    targetAudience: "Profissionais de marketing, freelancers que querem escalar, donos de agências pequenas.",
    notFor: "Quem busca renda passiva sem trabalho operacional.",
    objective: "Montar uma agência com receita recorrente previsível a partir de contratos mensais.",
    revenueModel: "Contratos mensais de gestão de marketing (R$ 800–R$ 3.000/mês por cliente).",
    acquisitionSources: ["Prospecção ativa (LinkedIn, email)", "Indicações de clientes", "Conteúdo orgânico", "Parcerias estratégicas"],
    costStructure: ["Ferramentas de automação", "Equipe operacional (freelancers)", "Tráfego pago para clientes"],
    deliveryMethod: "Gestão mensal remota com relatórios semanais.",
    expansionStrategy: "Upsell de serviços complementares + retenção via resultados.",
    dataBlocks: ["Leads", "Propostas", "Contratos", "Pagamentos", "Retenção", "Expansão"],
    benchmarks: [
      { metric: "Leads/mês", value: "1.000" },
      { metric: "Conversão lead → cliente", value: "2,5%" },
      { metric: "Clientes/mês", value: "25" },
      { metric: "Ticket médio", value: "R$ 1.200" },
      { metric: "Receita estimada", value: "R$ 30.000" },
    ],
    conversionRates: [
      { stage: "Lead → Oportunidade", rate: "15%" },
      { stage: "Oportunidade → Venda", rate: "17%" },
      { stage: "Venda → Recompra", rate: "70%" },
    ],
    timeline: [
      { phase: "Setup inicial", duration: "7 dias" },
      { phase: "Primeira venda", duration: "15–30 dias" },
      { phase: "Operação estável", duration: "60 dias" },
    ],
    packContents: ["Templates de proposta comercial", "Planilha de gestão de clientes", "SOPs de onboarding", "Scripts de prospecção", "Modelos de relatório", "Checklist de entrega mensal"],
    aiAgentDescription: "IA treinada no modelo de agência recorrente. Ajuda a definir preços, montar propostas, resolver problemas de retenção e planejar expansão.",
  },
  {
    id: "saas-micro-nicho",
    name: "SaaS para Micro-Nicho",
    shortDescription: "Crie um software focado em um nicho específico com receita recorrente mensal.",
    price: 297,
    category: "SaaS",
    targetAudience: "Desenvolvedores, empreendedores tech, CTOs de startups early-stage.",
    notFor: "Quem não tem capacidade técnica ou orçamento para desenvolvimento.",
    objective: "Lançar um SaaS lucrativo focando em um micro-nicho mal atendido.",
    revenueModel: "Assinatura mensal (R$ 49–R$ 299/mês) com tiers de funcionalidade.",
    acquisitionSources: ["SEO + conteúdo técnico", "Comunidades do nicho", "Product Hunt", "Parcerias com influenciadores do nicho"],
    costStructure: ["Infraestrutura cloud", "Desenvolvimento", "Suporte ao cliente"],
    deliveryMethod: "Plataforma web self-service com onboarding automatizado.",
    expansionStrategy: "Funcionalidades premium + expansão para nichos adjacentes.",
    dataBlocks: ["Trials", "Ativação", "Assinantes", "MRR", "Churn", "Expansão"],
    benchmarks: [
      { metric: "Trials/mês", value: "500" },
      { metric: "Conversão trial → pago", value: "8%" },
      { metric: "Clientes pagantes/mês", value: "40" },
      { metric: "Ticket médio", value: "R$ 149" },
      { metric: "MRR estimado", value: "R$ 5.960" },
    ],
    conversionRates: [
      { stage: "Visitante → Trial", rate: "5%" },
      { stage: "Trial → Pago", rate: "8%" },
      { stage: "Pago → Expansão", rate: "25%" },
    ],
    timeline: [
      { phase: "MVP pronto", duration: "30 dias" },
      { phase: "Primeiros clientes", duration: "45–60 dias" },
      { phase: "Product-Market Fit", duration: "90–120 dias" },
    ],
    packContents: ["Framework de validação de nicho", "Template de landing page", "Planilha de métricas SaaS", "Playbook de pricing", "Scripts de onboarding", "Guia de retenção"],
    aiAgentDescription: "IA especialista em SaaS. Ajuda com validação de nicho, definição de pricing, estratégias de retenção e crescimento de MRR.",
  },
  {
    id: "ecommerce-dropshipping",
    name: "E-commerce Dropshipping Nacional",
    shortDescription: "Monte uma operação de dropshipping com fornecedores nacionais e margem real.",
    price: 147,
    category: "E-commerce",
    targetAudience: "Empreendedores iniciantes, quem quer operar sem estoque.",
    notFor: "Quem espera resultados sem investimento em tráfego pago.",
    objective: "Criar uma operação de e-commerce sem estoque próprio, com fornecedores brasileiros.",
    revenueModel: "Margem sobre venda (30–50% sobre preço de custo).",
    acquisitionSources: ["Facebook/Instagram Ads", "Google Shopping", "Influenciadores", "SEO"],
    costStructure: ["Tráfego pago", "Plataforma e-commerce", "Fornecedores"],
    deliveryMethod: "Fornecedor envia direto ao cliente final.",
    expansionStrategy: "Marca própria + produtos winners escalados.",
    dataBlocks: ["Visitantes", "Carrinhos", "Pedidos", "Fornecedores", "Devoluções", "LTV"],
    benchmarks: [
      { metric: "Visitantes/mês", value: "10.000" },
      { metric: "Conversão", value: "1,8%" },
      { metric: "Pedidos/mês", value: "180" },
      { metric: "Ticket médio", value: "R$ 120" },
      { metric: "Faturamento", value: "R$ 21.600" },
    ],
    conversionRates: [
      { stage: "Visitante → Carrinho", rate: "8%" },
      { stage: "Carrinho → Pedido", rate: "22%" },
      { stage: "Cliente → Recompra", rate: "15%" },
    ],
    timeline: [
      { phase: "Loja no ar", duration: "5 dias" },
      { phase: "Primeira venda", duration: "10–15 dias" },
      { phase: "Operação escalada", duration: "45 dias" },
    ],
    packContents: ["Lista de fornecedores validados", "Template de loja", "Planilha de margem", "Scripts de atendimento", "Guia de tráfego pago", "Checklist de operação"],
    aiAgentDescription: "IA focada em e-commerce e dropshipping. Auxilia na escolha de produtos, cálculo de margem, otimização de anúncios e resolução de problemas operacionais.",
  },
  {
    id: "marketplace-servicos-locais",
    name: "Marketplace de Serviços Locais",
    shortDescription: "Conecte prestadores de serviço a clientes na sua região com comissão por transação.",
    price: 347,
    category: "Marketplace",
    targetAudience: "Empreendedores com visão de plataforma, conhecimento em produto digital.",
    notFor: "Quem quer resultado rápido sem construir comunidade.",
    objective: "Criar um marketplace local que conecta prestadores de serviço a clientes.",
    revenueModel: "Comissão de 10–20% por transação + planos premium para prestadores.",
    acquisitionSources: ["Panfletagem digital local", "Google Meu Negócio", "Parcerias com associações", "Indicação boca a boca"],
    costStructure: ["Desenvolvimento da plataforma", "Marketing local", "Suporte operacional"],
    deliveryMethod: "Plataforma web/mobile com matching automático.",
    expansionStrategy: "Expansão cidade a cidade + categorias de serviço.",
    dataBlocks: ["Prestadores", "Clientes", "Solicitações", "Matches", "Transações", "Avaliações"],
    benchmarks: [
      { metric: "Prestadores cadastrados", value: "200" },
      { metric: "Solicitações/mês", value: "500" },
      { metric: "Taxa de match", value: "60%" },
      { metric: "Ticket médio", value: "R$ 150" },
      { metric: "Receita (comissão)", value: "R$ 9.000" },
    ],
    conversionRates: [
      { stage: "Visita → Cadastro", rate: "12%" },
      { stage: "Cadastro → Solicitação", rate: "35%" },
      { stage: "Solicitação → Transação", rate: "60%" },
    ],
    timeline: [
      { phase: "MVP da plataforma", duration: "21 dias" },
      { phase: "100 prestadores", duration: "30–45 dias" },
      { phase: "Break-even", duration: "90 dias" },
    ],
    packContents: ["Arquitetura da plataforma", "Playbook de onboarding bilateral", "Templates de comunicação", "Planilha de unit economics", "Guia de expansão geográfica", "SOPs de moderação"],
    aiAgentDescription: "IA especialista em marketplaces. Ajuda com o problema do ovo e da galinha, estratégias de liquidez, pricing de comissão e expansão geográfica.",
  },
  {
    id: "infoproduto-high-ticket",
    name: "Infoproduto High Ticket",
    shortDescription: "Crie e venda um programa premium de alto valor com mentoria e resultados garantidos.",
    price: 247,
    category: "Infoprodutos",
    targetAudience: "Especialistas, consultores, profissionais com conhecimento profundo em uma área.",
    notFor: "Quem não tem expertise comprovada ou cases de sucesso.",
    objective: "Criar um programa de mentoria/curso high ticket (R$ 2.000–R$ 10.000).",
    revenueModel: "Vendas diretas de programa premium com margem de 70–90%.",
    acquisitionSources: ["Webinários", "Conteúdo no YouTube/Instagram", "Lançamentos", "Indicações de alunos"],
    costStructure: ["Produção de conteúdo", "Plataforma de ensino", "Tráfego pago para lançamentos"],
    deliveryMethod: "Plataforma online + calls ao vivo + comunidade exclusiva.",
    expansionStrategy: "Novos módulos + programa de certificação + licenciamento.",
    dataBlocks: ["Audiência", "Leads", "Inscritos em evento", "Compradores", "Resultados", "Depoimentos"],
    benchmarks: [
      { metric: "Audiência aquecida", value: "5.000" },
      { metric: "Inscritos no webinar", value: "800" },
      { metric: "Presentes ao vivo", value: "320" },
      { metric: "Compradores", value: "16" },
      { metric: "Receita (R$ 5k ticket)", value: "R$ 80.000" },
    ],
    conversionRates: [
      { stage: "Lead → Inscrito evento", rate: "16%" },
      { stage: "Inscrito → Presente", rate: "40%" },
      { stage: "Presente → Compra", rate: "5%" },
    ],
    timeline: [
      { phase: "Criação do programa", duration: "14 dias" },
      { phase: "Primeiro lançamento", duration: "30 dias" },
      { phase: "Operação recorrente", duration: "90 dias" },
    ],
    packContents: ["Framework de criação de programa", "Template de página de vendas", "Scripts de webinar", "Planilha de lançamento", "Modelos de contrato", "Guia de suporte ao aluno"],
    aiAgentDescription: "IA treinada em infoprodutos high ticket. Ajuda com criação de oferta, estrutura de webinar, objeções de venda e estratégia de lançamento.",
  },
  {
    id: "negocio-local-recorrente",
    name: "Negócio Local com Recorrência",
    shortDescription: "Transforme qualquer negócio local em uma máquina de receita recorrente previsível.",
    price: 167,
    category: "Negócios Locais",
    targetAudience: "Donos de negócios locais, empreendedores de bairro, franqueados.",
    notFor: "Quem não tem presença física ou atendimento local.",
    objective: "Implementar modelo de recorrência (assinatura/plano) em negócio local existente.",
    revenueModel: "Planos mensais de serviço/produto recorrente (R$ 99–R$ 499/mês).",
    acquisitionSources: ["Base de clientes existente", "Google Meu Negócio", "Indicações", "Ações locais"],
    costStructure: ["Operação local", "Equipe", "Insumos/produtos"],
    deliveryMethod: "Atendimento presencial com frequência definida.",
    expansionStrategy: "Novos planos + novos pontos + franquia do modelo.",
    dataBlocks: ["Clientes ativos", "Planos", "Frequência", "Churn", "NPS", "Receita recorrente"],
    benchmarks: [
      { metric: "Base de clientes", value: "300" },
      { metric: "Conversão para plano", value: "15%" },
      { metric: "Assinantes", value: "45" },
      { metric: "Ticket médio", value: "R$ 199" },
      { metric: "MRR", value: "R$ 8.955" },
    ],
    conversionRates: [
      { stage: "Cliente → Interesse", rate: "40%" },
      { stage: "Interesse → Assinatura", rate: "38%" },
      { stage: "Assinatura → Renovação", rate: "85%" },
    ],
    timeline: [
      { phase: "Estruturação dos planos", duration: "7 dias" },
      { phase: "Primeiros assinantes", duration: "14 dias" },
      { phase: "Operação rodando", duration: "30 dias" },
    ],
    packContents: ["Modelos de planos de assinatura", "Scripts de conversão presencial", "Planilha de gestão de assinantes", "Template de comunicação", "Guia de retenção local", "Checklist operacional"],
    aiAgentDescription: "IA especialista em negócios locais. Ajuda a definir planos, precificar, reter clientes e expandir a base de assinantes.",
  },
];
