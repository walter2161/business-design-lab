export type TipoImovel = "Venda" | "Locação";
export type TipoEspaco = "Residencial" | "Comercial" | "Sala Comercial";
export type Regiao = "ABC Paulista" | "Litoral Paulista";

export interface Responsavel {
  nome: string;
  foto: string;
  tipo: "Proprietário" | "Corretor";
  creci?: string;
  telefone: string;
  email: string;
  empresa?: string;
}

export interface Imovel {
  id: string;
  titulo: string;
  tipo: TipoImovel;
  espaco: TipoEspaco;
  regiao: Regiao;
  cidade: string;
  bairro: string;
  endereco: string;
  area: number;
  preco: number;
  precoAluguel?: number;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  comPonto?: boolean;
  descricao: string;
  descricaoCompleta: string;
  imagem: string;
  imagens?: string[];
  destaque?: boolean;
  responsavel: Responsavel;
  caracteristicas?: string[];
}

export const imoveis: Imovel[] = [
  // ====== ABC PAULISTA ======
  {
    id: "abc-1",
    titulo: "Sala Comercial no Centro de Santo André",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "ABC Paulista",
    cidade: "Santo André",
    bairro: "Centro",
    endereco: "Rua Coronel Oliveira Lima, 456 - Sala 802",
    area: 45,
    preco: 280000,
    precoAluguel: 2200,
    comPonto: false,
    descricao: "Sala comercial nova em edifício empresarial moderno. Pronta para uso, com ar-condicionado e piso elevado. Próximo ao Metrô.",
    descricaoCompleta: "Excelente sala comercial de 45m² em edifício empresarial recém-inaugurado no coração de Santo André. O espaço conta com ar-condicionado split já instalado, piso elevado, infraestrutura para cabeamento de rede e telefonia, e banheiro privativo. O edifício oferece recepção, segurança 24h, 2 elevadores e estacionamento rotativo. Localização privilegiada a 200m da estação de Metrô Santo André, com fácil acesso a bancos, cartórios e restaurantes.",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    imagens: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    ],
    destaque: true,
    responsavel: {
      nome: "Carlos Eduardo Silva",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "142.567-F",
      telefone: "(11) 99876-5432",
      email: "carlos.silva@imobiliariaabc.com.br",
      empresa: "ABC Imóveis Comerciais",
    },
    caracteristicas: ["Ar-condicionado", "Piso elevado", "Banheiro privativo", "Segurança 24h", "Próximo ao Metrô"],
  },
  {
    id: "abc-2",
    titulo: "Loja com Ponto - Av. Industrial, São Bernardo",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "ABC Paulista",
    cidade: "São Bernardo do Campo",
    bairro: "Centro",
    endereco: "Av. Industrial, 1200",
    area: 120,
    preco: 650000,
    comPonto: true,
    quartos: 0,
    banheiros: 2,
    vagas: 2,
    descricao: "Loja ampla com ponto comercial estabelecido há 15 anos. Alto fluxo de pedestres. Inclui equipamentos e carteira de clientes.",
    descricaoCompleta: "Loja comercial de 120m² em avenida de grande movimento em São Bernardo do Campo. O ponto está estabelecido há 15 anos no ramo de vestuário feminino, com carteira de 500+ clientes cadastrados, equipamentos completos (araras, vitrines, sistema PDV) e estoque inicial. Faturamento médio de R$ 45 mil/mês. 2 banheiros, 2 vagas de estacionamento frontal. Ideal para quem quer começar com um negócio já rodando.",
    imagem: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&h=400&fit=crop",
    responsavel: {
      nome: "Roberto Almeida",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      tipo: "Proprietário",
      telefone: "(11) 98765-4321",
      email: "roberto.almeida@email.com",
    },
    caracteristicas: ["Ponto estabelecido", "Carteira de clientes", "Equipamentos inclusos", "Alto fluxo", "Estacionamento"],
  },
  {
    id: "abc-3",
    titulo: "Apartamento 3 Dorms - São Caetano do Sul",
    tipo: "Venda",
    espaco: "Residencial",
    regiao: "ABC Paulista",
    cidade: "São Caetano do Sul",
    bairro: "Santa Paula",
    endereco: "Rua Manoel Coelho, 320 - Apto 72",
    area: 85,
    preco: 520000,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    descricao: "Apartamento reformado em condomínio com lazer completo. 3 dormitórios (1 suíte), varanda gourmet e vista privilegiada.",
    descricaoCompleta: "Apartamento de 85m² totalmente reformado em São Caetano do Sul, a cidade com melhor IDH do Brasil. 3 dormitórios sendo 1 suíte com closet, sala ampla em L, cozinha planejada, varanda gourmet com churrasqueira e vista panorâmica. Condomínio com piscina, academia, salão de festas, playground e segurança 24h. 2 vagas de garagem cobertas. Próximo a escolas, comércio e transporte público.",
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    responsavel: {
      nome: "Fernanda Costa",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "198.432-F",
      telefone: "(11) 97654-3210",
      email: "fernanda@premierimoveis.com.br",
      empresa: "Premier Imóveis",
    },
    caracteristicas: ["Reformado", "Suíte com closet", "Varanda gourmet", "Lazer completo", "2 vagas cobertas"],
  },
  {
    id: "abc-4",
    titulo: "Sala Comercial com Ponto - Diadema",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "ABC Paulista",
    cidade: "Diadema",
    bairro: "Centro",
    endereco: "Av. Presidente Kennedy, 890 - Sala 12",
    area: 60,
    preco: 350000,
    precoAluguel: 2800,
    comPonto: true,
    descricao: "Sala comercial montada com ponto de clínica de estética. Mobiliário completo, carteira de 200+ clientes. Pronta para operar.",
    descricaoCompleta: "Oportunidade única: sala comercial de 60m² com ponto de clínica de estética estabelecido há 6 anos. Inclui todo o mobiliário, 3 macas, autoclave, equipamentos de estética facial e corporal, sistema de agendamento e carteira com 200+ clientes ativos. Faturamento médio de R$ 25 mil/mês. Ideal para profissionais de estética que querem começar com base sólida.",
    imagem: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
    destaque: true,
    responsavel: {
      nome: "Mariana Souza",
      foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      tipo: "Proprietário",
      telefone: "(11) 96543-2109",
      email: "mariana.estetica@email.com",
    },
    caracteristicas: ["Ponto de estética", "Equipamentos inclusos", "Carteira de clientes", "Agendamento ativo", "Pronto para operar"],
  },
  {
    id: "abc-5",
    titulo: "Sobrado Comercial - Mauá",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "ABC Paulista",
    cidade: "Mauá",
    bairro: "Vila Bocaina",
    endereco: "Rua João Pessoa, 567",
    area: 200,
    preco: 480000,
    comPonto: false,
    banheiros: 3,
    vagas: 4,
    descricao: "Sobrado comercial com 200m², ideal para escritório, clínica ou escola. Amplo estacionamento e boa localização.",
    descricaoCompleta: "Sobrado comercial de 200m² em dois pavimentos na Vila Bocaina, Mauá. Térreo com recepção, 2 salas amplas e banheiro acessível. Pavimento superior com 3 salas, copa e 2 banheiros. Estacionamento para 4 carros. Ideal para escritórios, clínicas, escolas de idiomas ou cursos profissionalizantes. Documentação em ordem, pronto para transferência.",
    imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    responsavel: {
      nome: "José Ricardo Pereira",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "176.890-F",
      telefone: "(11) 95432-1098",
      email: "jose.ricardo@mauaimoveis.com.br",
      empresa: "Mauá Imóveis",
    },
    caracteristicas: ["2 pavimentos", "Recepção", "5 salas", "Banheiro acessível", "4 vagas"],
  },

  // ====== LITORAL PAULISTA ======
  {
    id: "lit-1",
    titulo: "Sala Comercial Frente Mar - Santos",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "Litoral Paulista",
    cidade: "Santos",
    bairro: "Gonzaga",
    endereco: "Av. Ana Costa, 234 - Sala 1402",
    area: 55,
    preco: 420000,
    precoAluguel: 3200,
    comPonto: false,
    descricao: "Sala comercial em edifício de alto padrão na orla de Santos. Vista para o mar, recepção, segurança 24h e estacionamento rotativo.",
    descricaoCompleta: "Sala comercial premium de 55m² no 14º andar com vista panorâmica para o mar de Santos. Edifício AAA com recepção climatizada, 4 elevadores, segurança 24h, estacionamento rotativo e auditório compartilhado. A sala possui piso porcelanato, ar-condicionado central, 2 ambientes e banheiro privativo. Região nobre do Gonzaga, cercada por restaurantes, bancos e comércio de alto padrão.",
    imagem: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    destaque: true,
    responsavel: {
      nome: "Patricia Mendonça",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "203.456-F",
      telefone: "(13) 99876-5432",
      email: "patricia@santoscomercial.com.br",
      empresa: "Santos Comercial Imóveis",
    },
    caracteristicas: ["Vista mar", "Edifício AAA", "Ar central", "Auditório compartilhado", "Portaria 24h"],
  },
  {
    id: "lit-2",
    titulo: "Loja com Ponto - Guarujá Pitangueiras",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "Litoral Paulista",
    cidade: "Guarujá",
    bairro: "Pitangueiras",
    endereco: "Rua Montenegro, 78",
    area: 80,
    preco: 550000,
    comPonto: true,
    banheiros: 1,
    vagas: 1,
    descricao: "Loja de surf e moda praia com ponto consolidado há 10 anos. Localização premium a 100m da praia. Inclui estoque inicial.",
    descricaoCompleta: "Loja de surf e moda praia de 80m² em Pitangueiras, a praia mais valorizada do Guarujá. Ponto consolidado há 10 anos com marca própria reconhecida. Inclui estoque inicial de R$ 30 mil, mobiliário temático, sistema de vendas e presença digital com 15 mil seguidores no Instagram. Faturamento médio de R$ 40 mil/mês na alta temporada e R$ 18 mil na baixa. Uma vaga de estacionamento.",
    imagem: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    responsavel: {
      nome: "André Surf",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      tipo: "Proprietário",
      telefone: "(13) 98765-4321",
      email: "andre.surf@email.com",
    },
    caracteristicas: ["100m da praia", "Marca consolidada", "15k seguidores", "Estoque incluso", "Faturamento comprovado"],
  },
  {
    id: "lit-3",
    titulo: "Apartamento 2 Dorms - Praia Grande",
    tipo: "Venda",
    espaco: "Residencial",
    regiao: "Litoral Paulista",
    cidade: "Praia Grande",
    bairro: "Guilhermina",
    endereco: "Av. Presidente Kennedy, 4500 - Apto 34",
    area: 65,
    preco: 320000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    descricao: "Apartamento a 200m do mar, reformado, com sacada e vista parcial para o mar. Condomínio com piscina e churrasqueira.",
    descricaoCompleta: "Apartamento de 65m² a apenas 200 metros da praia da Guilhermina, uma das mais valorizadas de Praia Grande. Totalmente reformado com acabamento moderno: piso porcelanato, cozinha americana com armários planejados, sacada com vista parcial para o mar. 2 dormitórios, sala ampla, banheiro com box de vidro. Condomínio com piscina, churrasqueira, salão de jogos e portaria 24h. 1 vaga de garagem coberta.",
    imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    responsavel: {
      nome: "Luciana Ribeiro",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "187.654-F",
      telefone: "(13) 97654-3210",
      email: "luciana@litoralimoveis.com.br",
      empresa: "Litoral Imóveis",
    },
    caracteristicas: ["200m do mar", "Reformado", "Vista parcial mar", "Piscina", "Portaria 24h"],
  },
  {
    id: "lit-4",
    titulo: "Sala Comercial com Ponto - São Vicente",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "Litoral Paulista",
    cidade: "São Vicente",
    bairro: "Centro",
    endereco: "Rua Jacob Emmerich, 365 - Sala 5",
    area: 40,
    preco: 200000,
    precoAluguel: 1800,
    comPonto: true,
    descricao: "Sala de consultório odontológico montado com equipamentos. Carteira de 300+ pacientes e agenda cheia. Oportunidade única.",
    descricaoCompleta: "Consultório odontológico completo de 40m² no centro de São Vicente. Inclui cadeira odontológica, raio-X, autoclave, compressor, sistema de prontuário eletrônico e carteira com 300+ pacientes cadastrados. Agenda cheia para os próximos 3 meses. O profissional está se aposentando e busca passar o ponto para dentista qualificado. Faturamento médio de R$ 20 mil/mês.",
    imagem: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
    responsavel: {
      nome: "Dr. Paulo Henrique",
      foto: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
      tipo: "Proprietário",
      telefone: "(13) 96543-2109",
      email: "dr.paulo@email.com",
    },
    caracteristicas: ["Consultório montado", "Equipamentos completos", "300+ pacientes", "Agenda cheia", "Prontuário digital"],
  },
  {
    id: "lit-5",
    titulo: "Casa Comercial - Bertioga",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "Litoral Paulista",
    cidade: "Bertioga",
    bairro: "Centro",
    endereco: "Av. Anchieta, 890",
    area: 150,
    preco: 680000,
    comPonto: false,
    banheiros: 2,
    vagas: 3,
    descricao: "Casa comercial em avenida principal de Bertioga. Ideal para restaurante, pousada ou comércio. Terreno de 300m² com ampliação possível.",
    descricaoCompleta: "Casa comercial de 150m² construídos em terreno de 300m² na avenida principal de Bertioga. Estrutura versátil com 4 ambientes amplos, 2 banheiros, cozinha industrial e área externa pavimentada. Zoneamento permite uso gastronômico, hoteleiro ou comercial. Possibilidade de ampliação para até 250m². 3 vagas de estacionamento. Região de alto fluxo turístico, especialmente nos meses de verão.",
    imagem: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&h=400&fit=crop",
    destaque: true,
    responsavel: {
      nome: "Marcos Tavares",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      tipo: "Corretor",
      creci: "215.789-F",
      telefone: "(13) 95432-1098",
      email: "marcos@bertimobimoveis.com.br",
      empresa: "Bertioga Imóveis",
    },
    caracteristicas: ["Terreno 300m²", "Cozinha industrial", "Ampliação possível", "Avenida principal", "Alto fluxo turístico"],
  },
];
