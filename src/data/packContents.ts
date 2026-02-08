// Lista padrão de 30 itens que todo modelo de negócio inclui
export interface PackItem {
  id: string;
  name: string;
  category: PackCategory;
  description: string;
  fileType: "pdf" | "doc" | "xlsx" | "pptx" | "ai" | "video" | "template";
}

export type PackCategory = 
  | "Planejamento Estratégico"
  | "Operações e Processos"
  | "Marketing e Vendas"
  | "Finanças e Métricas"
  | "Ferramentas e Templates"
  | "Recursos Exclusivos";

export const packCategories: { name: PackCategory; icon: string; description: string }[] = [
  { 
    name: "Planejamento Estratégico", 
    icon: "🎯", 
    description: "Documentos fundamentais para estruturar seu negócio" 
  },
  { 
    name: "Operações e Processos", 
    icon: "⚙️", 
    description: "Guias operacionais e fluxos de trabalho" 
  },
  { 
    name: "Marketing e Vendas", 
    icon: "📈", 
    description: "Estratégias de aquisição e conversão" 
  },
  { 
    name: "Finanças e Métricas", 
    icon: "💰", 
    description: "Projeções financeiras e indicadores" 
  },
  { 
    name: "Ferramentas e Templates", 
    icon: "📋", 
    description: "Documentos prontos para usar" 
  },
  { 
    name: "Recursos Exclusivos", 
    icon: "⭐", 
    description: "Recursos premium e suporte contínuo" 
  },
];

export const standardPackItems: PackItem[] = [
  // Planejamento Estratégico (5 itens)
  {
    id: "plano-negocio",
    name: "Plano de Negócio Validado",
    category: "Planejamento Estratégico",
    description: "Documento completo em PDF + versão editável com toda a estrutura do modelo de negócio",
    fileType: "pdf",
  },
  {
    id: "business-model-canvas",
    name: "Mapa do Modelo de Negócio (Business Model Canvas)",
    category: "Planejamento Estratégico",
    description: "Canvas visual com todos os blocos do modelo de negócio preenchidos",
    fileType: "pptx",
  },
  {
    id: "arquitetura-oferta",
    name: "Arquitetura de Oferta",
    category: "Planejamento Estratégico",
    description: "Estrutura de produtos, serviços, recorrência e upsells do negócio",
    fileType: "pdf",
  },
  {
    id: "plano-acao-90dias",
    name: "Plano de Ação de Implementação (90 dias)",
    category: "Planejamento Estratégico",
    description: "Cronograma detalhado com ações diárias/semanais para os primeiros 90 dias",
    fileType: "xlsx",
  },
  {
    id: "roadmap-operacional",
    name: "Roadmap Operacional Passo a Passo",
    category: "Planejamento Estratégico",
    description: "Guia visual com todas as etapas para colocar o negócio em operação",
    fileType: "pdf",
  },

  // Operações e Processos (5 itens)
  {
    id: "precificacao-estrategica",
    name: "Estrutura de Precificação Estratégica",
    category: "Operações e Processos",
    description: "Metodologia de precificação com margens e posicionamento de mercado",
    fileType: "xlsx",
  },
  {
    id: "checklist-ferramentas",
    name: "Checklist de Ferramentas Essenciais",
    category: "Operações e Processos",
    description: "Lista completa de softwares e ferramentas recomendadas para o negócio",
    fileType: "pdf",
  },
  {
    id: "automacoes-recomendadas",
    name: "Fluxos de Automação Recomendados",
    category: "Operações e Processos",
    description: "Automações para otimizar processos operacionais e de vendas",
    fileType: "pdf",
  },
  {
    id: "organizacao-processos",
    name: "Modelo de Organização de Processos Internos",
    category: "Operações e Processos",
    description: "SOPs e fluxogramas para padronizar operações",
    fileType: "doc",
  },
  {
    id: "estruturacao-juridica",
    name: "Guia de Estruturação Jurídica e Operacional",
    category: "Operações e Processos",
    description: "Orientações sobre abertura de empresa, tributação e compliance",
    fileType: "pdf",
  },

  // Marketing e Vendas (7 itens)
  {
    id: "funil-vendas",
    name: "Modelo de Funil de Vendas",
    category: "Marketing e Vendas",
    description: "Estrutura completa do funil com etapas e gatilhos de conversão",
    fileType: "pptx",
  },
  {
    id: "plano-marketing",
    name: "Plano de Marketing Estratégico",
    category: "Marketing e Vendas",
    description: "Estratégias de marketing digital e offline para o modelo",
    fileType: "pdf",
  },
  {
    id: "calendario-conteudo",
    name: "Calendário de Conteúdo Base (30/60/90 dias)",
    category: "Marketing e Vendas",
    description: "Planejamento de conteúdo para redes sociais e blog",
    fileType: "xlsx",
  },
  {
    id: "scripts-vendas",
    name: "Scripts de Vendas e Atendimento",
    category: "Marketing e Vendas",
    description: "Roteiros testados para abordagem, negociação e fechamento",
    fileType: "doc",
  },
  {
    id: "playbook-aquisicao",
    name: "Playbook de Aquisição de Clientes",
    category: "Marketing e Vendas",
    description: "Estratégias completas para atrair e converter clientes",
    fileType: "pdf",
  },
  {
    id: "playbook-retencao",
    name: "Playbook de Retenção e Pós-Venda",
    category: "Marketing e Vendas",
    description: "Táticas para fidelização e aumento de lifetime value",
    fileType: "pdf",
  },
  {
    id: "guia-escala",
    name: "Guia de Escala e Crescimento Sustentável",
    category: "Marketing e Vendas",
    description: "Estratégias para escalar o negócio de forma saudável",
    fileType: "pdf",
  },

  // Finanças e Métricas (5 itens)
  {
    id: "benchmark-conversao",
    name: "Benchmark de Conversão do Mercado",
    category: "Finanças e Métricas",
    description: "Taxas de conversão esperadas em cada etapa do funil",
    fileType: "pdf",
  },
  {
    id: "projecao-financeira",
    name: "Projeção Financeira e Volumetria Esperada",
    category: "Finanças e Métricas",
    description: "Planilha com projeções de receita, custos e lucro",
    fileType: "xlsx",
  },
  {
    id: "kpis-metricas",
    name: "Sistema de KPIs e Métricas-Chave",
    category: "Finanças e Métricas",
    description: "Indicadores essenciais para monitorar a saúde do negócio",
    fileType: "xlsx",
  },
  {
    id: "dashboard-performance",
    name: "Dashboard de Acompanhamento de Performance",
    category: "Finanças e Métricas",
    description: "Template de dashboard para visualização de métricas",
    fileType: "xlsx",
  },
  {
    id: "arquitetura-dados",
    name: "Arquitetura de Dados do Negócio",
    category: "Finanças e Métricas",
    description: "Estrutura de CRM, leads e métricas para gestão de dados",
    fileType: "pdf",
  },

  // Ferramentas e Templates (5 itens)
  {
    id: "template-propostas",
    name: "Templates de Propostas Comerciais",
    category: "Ferramentas e Templates",
    description: "Modelos prontos de propostas para diferentes situações",
    fileType: "doc",
  },
  {
    id: "template-contratos",
    name: "Templates de Contratos Editáveis",
    category: "Ferramentas e Templates",
    description: "Modelos de contratos de prestação de serviços e vendas",
    fileType: "doc",
  },
  {
    id: "template-site",
    name: "Template de Site Institucional / Landing Page",
    category: "Ferramentas e Templates",
    description: "Estrutura e copy para site ou página de captura",
    fileType: "template",
  },
  {
    id: "faq-estrategico",
    name: "Base de Perguntas Frequentes Estratégicas (FAQ)",
    category: "Ferramentas e Templates",
    description: "Respostas prontas para objeções e dúvidas comuns",
    fileType: "doc",
  },
  {
    id: "biblioteca-dicas",
    name: "Biblioteca de Dicas Práticas e Boas Práticas",
    category: "Ferramentas e Templates",
    description: "Compilado de insights e lições aprendidas do modelo",
    fileType: "pdf",
  },

  // Recursos Exclusivos (3 itens)
  {
    id: "agente-ia",
    name: "Agente de IA Especialista no Modelo",
    category: "Recursos Exclusivos",
    description: "Consultor de IA treinado especificamente neste modelo de negócio",
    fileType: "ai",
  },
  {
    id: "mini-curso",
    name: "Mini-curso de Implementação do Modelo",
    category: "Recursos Exclusivos",
    description: "Vídeos explicativos sobre cada etapa da implementação",
    fileType: "video",
  },
  {
    id: "atualizacoes-futuras",
    name: "Atualizações Futuras do Modelo",
    category: "Recursos Exclusivos",
    description: "Acesso vitalício a novas versões e melhorias do modelo",
    fileType: "ai",
  },
];

// Retorna os 30 itens como array de strings para compatibilidade com o modelo existente
export const getPackContentsAsStrings = (): string[] => {
  return standardPackItems.map(item => item.name);
};
