export type CategoriaServico = 
  | "Marketing Digital"
  | "Design Gráfico"
  | "Fotografia e Vídeo"
  | "Contabilidade"
  | "Gestão Digital";

export interface Servico {
  id: string;
  nome: string;
  categoria: CategoriaServico;
  descricao: string;
  preco: number;
  precoAte?: number;
  prazo: string;
  inclui: string[];
  imagem: string;
  destaque?: boolean;
}

export const servicos: Servico[] = [
  // Marketing Digital
  {
    id: "site-institucional",
    nome: "Criação de Site Institucional",
    categoria: "Marketing Digital",
    descricao: "Site profissional responsivo com até 5 páginas, otimizado para SEO e velocidade. Design personalizado à identidade da marca.",
    preco: 1500,
    precoAte: 4000,
    prazo: "7-15 dias",
    inclui: ["Design responsivo", "5 páginas", "Formulário de contato", "Integração Google Analytics", "SSL gratuito", "1 mês de suporte"],
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: "landing-page",
    nome: "Landing Page de Alta Conversão",
    categoria: "Marketing Digital",
    descricao: "Página única focada em conversão com copy persuasiva, CTA estratégico e design otimizado para captura de leads.",
    preco: 800,
    precoAte: 2000,
    prazo: "3-7 dias",
    inclui: ["Design de alta conversão", "Copy persuasiva", "Formulário integrado", "Teste A/B", "Pixel Facebook/Google", "Hospedagem 1 ano"],
    imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "loja-virtual",
    nome: "Loja Virtual Completa",
    categoria: "Marketing Digital",
    descricao: "E-commerce completo com catálogo de produtos, carrinho, checkout seguro e integração com meios de pagamento.",
    preco: 3000,
    precoAte: 8000,
    prazo: "15-30 dias",
    inclui: ["Catálogo ilimitado", "Checkout seguro", "Integração PagSeguro/Mercado Pago", "Painel administrativo", "Frete automático", "3 meses de suporte"],
    imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    destaque: true,
  },

  // Design Gráfico
  {
    id: "cartao-visita",
    nome: "Cartão de Visita Profissional",
    categoria: "Design Gráfico",
    descricao: "Design exclusivo de cartão de visita com identidade visual profissional. Inclui arquivo para impressão em alta resolução.",
    preco: 150,
    precoAte: 400,
    prazo: "2-3 dias",
    inclui: ["2 opções de layout", "Frente e verso", "Arquivo para impressão", "Versão digital", "2 revisões"],
    imagem: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
  },
  {
    id: "panfletos",
    nome: "Panfletos e Flyers",
    categoria: "Design Gráfico",
    descricao: "Design de panfletos e flyers promocionais com layout profissional e impactante para distribuição física ou digital.",
    preco: 200,
    precoAte: 500,
    prazo: "2-5 dias",
    inclui: ["Design frente e verso", "2 opções de layout", "Arquivo para impressão", "Versão digital para redes sociais", "2 revisões"],
    imagem: "https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=600&h=400&fit=crop",
  },
  {
    id: "folder",
    nome: "Folder Institucional",
    categoria: "Design Gráfico",
    descricao: "Folder profissional bi ou tri-fold com design que transmite credibilidade e profissionalismo para sua empresa.",
    preco: 350,
    precoAte: 800,
    prazo: "3-7 dias",
    inclui: ["Design bi ou tri-fold", "Conteúdo diagramado", "Arquivo para impressão", "Versão digital PDF", "3 revisões"],
    imagem: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
  },

  // Fotografia e Vídeo
  {
    id: "fotografia",
    nome: "Sessão de Fotografia Profissional",
    categoria: "Fotografia e Vídeo",
    descricao: "Sessão fotográfica profissional para produtos, ambientes ou equipe. Fotos tratadas e otimizadas para web e impressão.",
    preco: 500,
    precoAte: 2000,
    prazo: "5-10 dias",
    inclui: ["Sessão de 2-4 horas", "30+ fotos tratadas", "Edição profissional", "Entrega em alta resolução", "Versões para web"],
    imagem: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: "gravacao-video",
    nome: "Gravação e Edição de Vídeo",
    categoria: "Fotografia e Vídeo",
    descricao: "Produção de vídeo institucional, comercial ou para redes sociais com captação profissional e edição completa.",
    preco: 1200,
    precoAte: 5000,
    prazo: "7-15 dias",
    inclui: ["Captação profissional", "Edição completa", "Trilha sonora", "Legendas", "Versões para redes sociais", "Até 3 minutos"],
    imagem: "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=600&h=400&fit=crop",
  },
  {
    id: "drone",
    nome: "Gravação com Drone",
    categoria: "Fotografia e Vídeo",
    descricao: "Captação aérea com drone profissional para imóveis, eventos, terrenos e vídeos institucionais com imagens impressionantes.",
    preco: 800,
    precoAte: 3000,
    prazo: "3-7 dias",
    inclui: ["Captação aérea 4K", "Fotos aéreas em alta resolução", "Edição do vídeo", "20+ fotos aéreas", "Autorização ANAC"],
    imagem: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
  },
  {
    id: "edicao-video",
    nome: "Edição de Vídeo",
    categoria: "Fotografia e Vídeo",
    descricao: "Edição profissional de vídeos para YouTube, redes sociais ou uso corporativo. Cortes, transições, legendas e efeitos.",
    preco: 300,
    precoAte: 1500,
    prazo: "3-7 dias",
    inclui: ["Edição profissional", "Correção de cor", "Trilha sonora", "Legendas", "Versões para diferentes plataformas"],
    imagem: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },

  // Gestão Digital
  {
    id: "google-meu-negocio",
    nome: "Setup Google Meu Negócio",
    categoria: "Gestão Digital",
    descricao: "Configuração completa do Google Meu Negócio para aumentar sua visibilidade local e aparecer nas buscas do Google Maps.",
    preco: 300,
    precoAte: 600,
    prazo: "2-5 dias",
    inclui: ["Criação/otimização do perfil", "Fotos profissionais", "Categorias estratégicas", "Posts iniciais", "Guia de gestão contínua"],
    imagem: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
  },
  {
    id: "cronograma-redes",
    nome: "Cronograma de Redes Sociais",
    categoria: "Gestão Digital",
    descricao: "Planejamento estratégico de conteúdo para redes sociais com cronograma mensal, templates e guia de publicação.",
    preco: 400,
    precoAte: 1200,
    prazo: "5-7 dias",
    inclui: ["Cronograma mensal", "30 ideias de posts", "10 templates editáveis", "Calendário de datas comemorativas", "Guia de hashtags", "Análise de concorrentes"],
    imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },

  // Contabilidade
  {
    id: "contabilidade",
    nome: "Contabilidade para MEI/ME",
    categoria: "Contabilidade",
    descricao: "Serviço contábil completo para MEI e Microempresas. Abertura de CNPJ, declarações, impostos e consultoria fiscal.",
    preco: 150,
    precoAte: 500,
    prazo: "Mensal",
    inclui: ["Abertura de CNPJ", "Emissão de notas fiscais", "Declaração anual", "Guia de impostos", "Consultoria fiscal mensal", "Suporte por WhatsApp"],
    imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    destaque: true,
  },
];

export const categoriasServico: CategoriaServico[] = [
  "Marketing Digital",
  "Design Gráfico",
  "Fotografia e Vídeo",
  "Gestão Digital",
  "Contabilidade",
];

export const categoriasServicoIcons: Record<CategoriaServico, string> = {
  "Marketing Digital": "🌐",
  "Design Gráfico": "🎨",
  "Fotografia e Vídeo": "📸",
  "Gestão Digital": "📊",
  "Contabilidade": "📋",
};
