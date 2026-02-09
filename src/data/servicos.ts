export type CategoriaServico = 
  | "Marketing Digital"
  | "Design Gráfico"
  | "Fotografia e Vídeo"
  | "Contabilidade"
  | "Gestão Digital";

export interface Prestador {
  nome: string;
  foto: string;
  empresa: string;
  experiencia: string;
  telefone: string;
  email: string;
  portfolio?: string;
}

export interface Servico {
  id: string;
  nome: string;
  categoria: CategoriaServico;
  descricao: string;
  descricaoCompleta: string;
  preco: number;
  precoAte?: number;
  prazo: string;
  inclui: string[];
  imagem: string;
  destaque?: boolean;
  prestador: Prestador;
}

export const servicos: Servico[] = [
  {
    id: "site-institucional",
    nome: "Criação de Site Institucional",
    categoria: "Marketing Digital",
    descricao: "Site profissional responsivo com até 5 páginas, otimizado para SEO e velocidade.",
    descricaoCompleta: "Desenvolvemos seu site institucional do zero com design personalizado, responsivo para todos os dispositivos e otimizado para buscadores (SEO). Inclui até 5 páginas (Home, Sobre, Serviços, Portfólio, Contato), formulário de contato funcional, integração com Google Analytics e Search Console, certificado SSL e hospedagem no primeiro ano. Nosso processo inclui briefing detalhado, wireframe, design aprovado e desenvolvimento em até 15 dias úteis.",
    preco: 1500,
    precoAte: 4000,
    prazo: "7-15 dias",
    inclui: ["Design responsivo", "5 páginas", "Formulário de contato", "Integração Google Analytics", "SSL gratuito", "1 mês de suporte"],
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    destaque: true,
    prestador: {
      nome: "Lucas Ferreira",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      empresa: "WebCraft Digital",
      experiencia: "8 anos em desenvolvimento web. +200 sites entregues para empresas de todos os portes.",
      telefone: "(11) 99887-6655",
      email: "lucas@webcraftdigital.com.br",
      portfolio: "https://webcraftdigital.com.br",
    },
  },
  {
    id: "landing-page",
    nome: "Landing Page de Alta Conversão",
    categoria: "Marketing Digital",
    descricao: "Página única focada em conversão com copy persuasiva e CTA estratégico.",
    descricaoCompleta: "Landing page projetada para maximizar a conversão de visitantes em leads ou clientes. Utilizamos técnicas avançadas de copywriting, design UX focado em conversão, e integração com ferramentas de automação. Cada landing page é testada em múltiplos dispositivos e otimizada para velocidade de carregamento. Inclui integração com pixel do Facebook e Google Ads para rastreamento de conversões.",
    preco: 800,
    precoAte: 2000,
    prazo: "3-7 dias",
    inclui: ["Design de alta conversão", "Copy persuasiva", "Formulário integrado", "Teste A/B", "Pixel Facebook/Google", "Hospedagem 1 ano"],
    imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    prestador: {
      nome: "Lucas Ferreira",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      empresa: "WebCraft Digital",
      experiencia: "8 anos em desenvolvimento web. Especialista em páginas de conversão com taxa média de 8%.",
      telefone: "(11) 99887-6655",
      email: "lucas@webcraftdigital.com.br",
    },
  },
  {
    id: "loja-virtual",
    nome: "Loja Virtual Completa",
    categoria: "Marketing Digital",
    descricao: "E-commerce completo com catálogo, carrinho, checkout seguro e meios de pagamento.",
    descricaoCompleta: "Loja virtual completa desenvolvida com as melhores plataformas do mercado. Inclui catálogo de produtos ilimitado, carrinho de compras, checkout seguro com SSL, integração com PagSeguro, Mercado Pago e PIX, cálculo automático de frete (Correios e transportadoras), painel administrativo intuitivo para gestão de pedidos, estoque e clientes. Design responsivo e otimizado para SEO.",
    preco: 3000,
    precoAte: 8000,
    prazo: "15-30 dias",
    inclui: ["Catálogo ilimitado", "Checkout seguro", "Integração PagSeguro/Mercado Pago", "Painel administrativo", "Frete automático", "3 meses de suporte"],
    imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    destaque: true,
    prestador: {
      nome: "Juliana Martins",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      empresa: "E-Commerce Pro",
      experiencia: "6 anos especializados em e-commerce. +80 lojas virtuais em operação.",
      telefone: "(11) 98776-5544",
      email: "juliana@ecommercepro.com.br",
      portfolio: "https://ecommercepro.com.br",
    },
  },
  {
    id: "cartao-visita",
    nome: "Cartão de Visita Profissional",
    categoria: "Design Gráfico",
    descricao: "Design exclusivo de cartão de visita com identidade visual profissional.",
    descricaoCompleta: "Criamos cartões de visita que causam impacto e transmitem profissionalismo. O processo inclui análise da sua marca, criação de 2 opções de layout (frente e verso), ajustes até a aprovação final e entrega dos arquivos em alta resolução para impressão offset ou digital. Também entregamos versão digital para compartilhamento via WhatsApp e redes sociais.",
    preco: 150,
    precoAte: 400,
    prazo: "2-3 dias",
    inclui: ["2 opções de layout", "Frente e verso", "Arquivo para impressão", "Versão digital", "2 revisões"],
    imagem: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    prestador: {
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      empresa: "Studio Camila Design",
      experiencia: "10 anos em design gráfico. Especialista em identidade visual para pequenos negócios.",
      telefone: "(11) 97665-4433",
      email: "camila@studiocamila.com.br",
    },
  },
  {
    id: "panfletos",
    nome: "Panfletos e Flyers",
    categoria: "Design Gráfico",
    descricao: "Design de panfletos e flyers promocionais com layout impactante.",
    descricaoCompleta: "Panfletos e flyers que chamam atenção e geram resultados. Desenvolvemos peças com design profissional, hierarquia visual clara e chamadas persuasivas. Entregamos 2 opções de layout em frente e verso, com arquivos prontos para impressão gráfica e versão digital otimizada para compartilhamento em redes sociais e WhatsApp.",
    preco: 200,
    precoAte: 500,
    prazo: "2-5 dias",
    inclui: ["Design frente e verso", "2 opções de layout", "Arquivo para impressão", "Versão digital para redes sociais", "2 revisões"],
    imagem: "https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=600&h=400&fit=crop",
    prestador: {
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      empresa: "Studio Camila Design",
      experiencia: "10 anos em design gráfico. +500 peças gráficas entregues.",
      telefone: "(11) 97665-4433",
      email: "camila@studiocamila.com.br",
    },
  },
  {
    id: "folder",
    nome: "Folder Institucional",
    categoria: "Design Gráfico",
    descricao: "Folder profissional bi ou tri-fold para sua empresa.",
    descricaoCompleta: "Folder institucional que transmite a essência do seu negócio com design elegante e conteúdo bem estruturado. Disponível nos formatos bi-fold (2 dobras) ou tri-fold (3 dobras). O processo inclui diagramação do conteúdo fornecido, design profissional alinhado à identidade visual, e entrega de arquivos para impressão gráfica e versão digital em PDF interativo.",
    preco: 350,
    precoAte: 800,
    prazo: "3-7 dias",
    inclui: ["Design bi ou tri-fold", "Conteúdo diagramado", "Arquivo para impressão", "Versão digital PDF", "3 revisões"],
    imagem: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    prestador: {
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      empresa: "Studio Camila Design",
      experiencia: "10 anos em design gráfico e diagramação editorial.",
      telefone: "(11) 97665-4433",
      email: "camila@studiocamila.com.br",
    },
  },
  {
    id: "fotografia",
    nome: "Sessão de Fotografia Profissional",
    categoria: "Fotografia e Vídeo",
    descricao: "Sessão fotográfica profissional para produtos, ambientes ou equipe.",
    descricaoCompleta: "Sessão fotográfica profissional completa com equipamento de ponta (câmera full-frame, iluminação de estúdio portátil). Ideal para fotos de produtos (still), ambientes comerciais, equipe corporativa ou eventos. Cada foto passa por tratamento individual incluindo correção de cor, retoque e enquadramento. Entrega em alta resolução para impressão e versões otimizadas para web e redes sociais.",
    preco: 500,
    precoAte: 2000,
    prazo: "5-10 dias",
    inclui: ["Sessão de 2-4 horas", "30+ fotos tratadas", "Edição profissional", "Entrega em alta resolução", "Versões para web"],
    imagem: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
    destaque: true,
    prestador: {
      nome: "Rafael Oliveira",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      empresa: "RO Fotografia & Vídeo",
      experiencia: "12 anos como fotógrafo profissional. Trabalhou com +300 empresas no ABC e litoral.",
      telefone: "(11) 96554-3322",
      email: "rafael@rofotografia.com.br",
      portfolio: "https://rofotografia.com.br",
    },
  },
  {
    id: "gravacao-video",
    nome: "Gravação e Edição de Vídeo",
    categoria: "Fotografia e Vídeo",
    descricao: "Produção de vídeo institucional ou comercial com captação e edição completa.",
    descricaoCompleta: "Produção audiovisual completa: do roteiro à entrega final. Captação com câmera 4K, iluminação profissional e áudio de estúdio. Edição inclui cortes, transições, trilha sonora licenciada, legendas e colorização cinematográfica. Entregamos versões otimizadas para YouTube, Instagram (Reels/Stories), TikTok e LinkedIn. Vídeos de até 3 minutos na versão base.",
    preco: 1200,
    precoAte: 5000,
    prazo: "7-15 dias",
    inclui: ["Captação profissional", "Edição completa", "Trilha sonora", "Legendas", "Versões para redes sociais", "Até 3 minutos"],
    imagem: "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=600&h=400&fit=crop",
    prestador: {
      nome: "Rafael Oliveira",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      empresa: "RO Fotografia & Vídeo",
      experiencia: "12 anos em audiovisual. +150 vídeos institucionais produzidos.",
      telefone: "(11) 96554-3322",
      email: "rafael@rofotografia.com.br",
    },
  },
  {
    id: "drone",
    nome: "Gravação com Drone",
    categoria: "Fotografia e Vídeo",
    descricao: "Captação aérea com drone profissional para imóveis, eventos e terrenos.",
    descricaoCompleta: "Captação aérea profissional com drone DJI Mavic 3 Pro em resolução 4K. Ideal para filmagens de imóveis, terrenos, obras, eventos e vídeos institucionais com imagens aéreas impressionantes. Todas as filmagens são realizadas com autorização ANAC/DECEA e seguem as normas de segurança vigentes. Inclui edição do vídeo aéreo com trilha sonora e entrega de fotos aéreas em alta resolução.",
    preco: 800,
    precoAte: 3000,
    prazo: "3-7 dias",
    inclui: ["Captação aérea 4K", "Fotos aéreas em alta resolução", "Edição do vídeo", "20+ fotos aéreas", "Autorização ANAC"],
    imagem: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    prestador: {
      nome: "Thiago Drone",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      empresa: "Sky Vision Drones",
      experiencia: "5 anos em captação aérea. Piloto certificado ANAC. +400 voos comerciais realizados.",
      telefone: "(11) 95443-2211",
      email: "thiago@skyvisiondrones.com.br",
      portfolio: "https://skyvisiondrones.com.br",
    },
  },
  {
    id: "edicao-video",
    nome: "Edição de Vídeo",
    categoria: "Fotografia e Vídeo",
    descricao: "Edição profissional de vídeos para YouTube, redes sociais ou uso corporativo.",
    descricaoCompleta: "Serviço de edição profissional para vídeos já gravados. Inclui organização do material bruto, cortes dinâmicos, transições suaves, correção de cor, mixagem de áudio, inserção de legendas (SRT), trilha sonora licenciada e entrega em múltiplos formatos otimizados para cada plataforma (YouTube, Instagram, TikTok, LinkedIn).",
    preco: 300,
    precoAte: 1500,
    prazo: "3-7 dias",
    inclui: ["Edição profissional", "Correção de cor", "Trilha sonora", "Legendas", "Versões para diferentes plataformas"],
    imagem: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    prestador: {
      nome: "Rafael Oliveira",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      empresa: "RO Fotografia & Vídeo",
      experiencia: "12 anos em pós-produção audiovisual.",
      telefone: "(11) 96554-3322",
      email: "rafael@rofotografia.com.br",
    },
  },
  {
    id: "google-meu-negocio",
    nome: "Setup Google Meu Negócio",
    categoria: "Gestão Digital",
    descricao: "Configuração completa do Google Meu Negócio para visibilidade local.",
    descricaoCompleta: "Configuração e otimização completa do seu perfil no Google Meu Negócio para maximizar sua visibilidade nas buscas locais e Google Maps. Inclui criação ou reivindicação do perfil, otimização com palavras-chave estratégicas, upload de fotos profissionais, configuração de horários, categorias e atributos, criação de posts iniciais e entrega de um guia completo para gestão contínua do perfil.",
    preco: 300,
    precoAte: 600,
    prazo: "2-5 dias",
    inclui: ["Criação/otimização do perfil", "Fotos profissionais", "Categorias estratégicas", "Posts iniciais", "Guia de gestão contínua"],
    imagem: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
    prestador: {
      nome: "Amanda Digital",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      empresa: "Presença Digital Co.",
      experiencia: "7 anos em marketing digital local. +250 perfis otimizados no Google.",
      telefone: "(11) 94332-1100",
      email: "amanda@presencadigital.com.br",
    },
  },
  {
    id: "cronograma-redes",
    nome: "Cronograma de Redes Sociais",
    categoria: "Gestão Digital",
    descricao: "Planejamento estratégico de conteúdo para redes sociais com cronograma mensal.",
    descricaoCompleta: "Planejamento estratégico completo de conteúdo para suas redes sociais. Inclui análise do seu público-alvo e concorrentes, definição de pilares de conteúdo, cronograma mensal com 30 ideias de posts detalhadas, 10 templates editáveis no Canva, calendário de datas comemorativas relevantes ao seu segmento, pesquisa de hashtags estratégicas e relatório de tendências. Tudo personalizado para o seu nicho de atuação.",
    preco: 400,
    precoAte: 1200,
    prazo: "5-7 dias",
    inclui: ["Cronograma mensal", "30 ideias de posts", "10 templates editáveis", "Calendário de datas comemorativas", "Guia de hashtags", "Análise de concorrentes"],
    imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    prestador: {
      nome: "Amanda Digital",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      empresa: "Presença Digital Co.",
      experiencia: "7 anos em social media. Gerencia +40 contas ativas.",
      telefone: "(11) 94332-1100",
      email: "amanda@presencadigital.com.br",
    },
  },
  {
    id: "contabilidade",
    nome: "Contabilidade para MEI/ME",
    categoria: "Contabilidade",
    descricao: "Serviço contábil completo para MEI e Microempresas.",
    descricaoCompleta: "Assessoria contábil completa para MEI e Microempresas. Cuidamos de toda a burocracia para você focar no seu negócio: abertura e regularização de CNPJ, emissão de notas fiscais, declarações mensais e anuais (DASN-MEI, IRPF), guias de impostos, folha de pagamento (para ME), consultoria fiscal para escolha do melhor regime tributário e suporte contínuo por WhatsApp. Planos mensais com preço fixo e sem surpresas.",
    preco: 150,
    precoAte: 500,
    prazo: "Mensal",
    inclui: ["Abertura de CNPJ", "Emissão de notas fiscais", "Declaração anual", "Guia de impostos", "Consultoria fiscal mensal", "Suporte por WhatsApp"],
    imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    destaque: true,
    prestador: {
      nome: "Dr. Fernando Contábil",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      empresa: "FC Contabilidade",
      experiencia: "15 anos em contabilidade empresarial. CRC ativo. +500 empresas atendidas.",
      telefone: "(11) 93221-0099",
      email: "fernando@fccontabilidade.com.br",
      portfolio: "https://fccontabilidade.com.br",
    },
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
