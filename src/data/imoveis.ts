export type TipoImovel = "Venda" | "Locação";
export type TipoEspaco = "Residencial" | "Comercial" | "Sala Comercial";
export type Regiao = "ABC Paulista" | "Litoral Paulista";

export interface Imovel {
  id: string;
  titulo: string;
  tipo: TipoImovel;
  espaco: TipoEspaco;
  regiao: Regiao;
  cidade: string;
  bairro: string;
  area: number; // m²
  preco: number;
  precoAluguel?: number;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  comPonto?: boolean;
  descricao: string;
  imagem: string;
  destaque?: boolean;
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
    area: 45,
    preco: 280000,
    precoAluguel: 2200,
    comPonto: false,
    descricao: "Sala comercial nova em edifício empresarial moderno. Pronta para uso, com ar-condicionado e piso elevado. Próximo ao Metrô.",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: "abc-2",
    titulo: "Loja com Ponto - Av. Industrial, São Bernardo",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "ABC Paulista",
    cidade: "São Bernardo do Campo",
    bairro: "Centro",
    area: 120,
    preco: 650000,
    comPonto: true,
    quartos: 0,
    banheiros: 2,
    vagas: 2,
    descricao: "Loja ampla com ponto comercial estabelecido há 15 anos. Alto fluxo de pedestres. Inclui equipamentos e carteira de clientes.",
    imagem: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&h=400&fit=crop",
  },
  {
    id: "abc-3",
    titulo: "Apartamento 3 Dorms - São Caetano do Sul",
    tipo: "Venda",
    espaco: "Residencial",
    regiao: "ABC Paulista",
    cidade: "São Caetano do Sul",
    bairro: "Santa Paula",
    area: 85,
    preco: 520000,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    descricao: "Apartamento reformado em condomínio com lazer completo. 3 dormitórios (1 suíte), varanda gourmet e vista privilegiada.",
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    id: "abc-4",
    titulo: "Sala Comercial com Ponto - Diadema",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "ABC Paulista",
    cidade: "Diadema",
    bairro: "Centro",
    area: 60,
    preco: 350000,
    precoAluguel: 2800,
    comPonto: true,
    descricao: "Sala comercial montada com ponto de clínica de estética. Mobiliário completo, carteira de 200+ clientes. Pronta para operar.",
    imagem: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: "abc-5",
    titulo: "Sobrado Comercial - Mauá",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "ABC Paulista",
    cidade: "Mauá",
    bairro: "Vila Bocaina",
    area: 200,
    preco: 480000,
    comPonto: false,
    banheiros: 3,
    vagas: 4,
    descricao: "Sobrado comercial com 200m², ideal para escritório, clínica ou escola. Amplo estacionamento e boa localização.",
    imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
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
    area: 55,
    preco: 420000,
    precoAluguel: 3200,
    comPonto: false,
    descricao: "Sala comercial em edifício de alto padrão na orla de Santos. Vista para o mar, recepção, segurança 24h e estacionamento rotativo.",
    imagem: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: "lit-2",
    titulo: "Loja com Ponto - Guarujá Pitangueiras",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "Litoral Paulista",
    cidade: "Guarujá",
    bairro: "Pitangueiras",
    area: 80,
    preco: 550000,
    comPonto: true,
    banheiros: 1,
    vagas: 1,
    descricao: "Loja de surf e moda praia com ponto consolidado há 10 anos. Localização premium a 100m da praia. Inclui estoque inicial.",
    imagem: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    id: "lit-3",
    titulo: "Apartamento 2 Dorms - Praia Grande",
    tipo: "Venda",
    espaco: "Residencial",
    regiao: "Litoral Paulista",
    cidade: "Praia Grande",
    bairro: "Guilhermina",
    area: 65,
    preco: 320000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    descricao: "Apartamento a 200m do mar, reformado, com sacada e vista parcial para o mar. Condomínio com piscina e churrasqueira.",
    imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
  {
    id: "lit-4",
    titulo: "Sala Comercial com Ponto - São Vicente",
    tipo: "Locação",
    espaco: "Sala Comercial",
    regiao: "Litoral Paulista",
    cidade: "São Vicente",
    bairro: "Centro",
    area: 40,
    preco: 200000,
    precoAluguel: 1800,
    comPonto: true,
    descricao: "Sala de consultório odontológico montado com equipamentos. Carteira de 300+ pacientes e agenda cheia. Oportunidade única.",
    imagem: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
  },
  {
    id: "lit-5",
    titulo: "Casa Comercial - Bertioga",
    tipo: "Venda",
    espaco: "Comercial",
    regiao: "Litoral Paulista",
    cidade: "Bertioga",
    bairro: "Centro",
    area: 150,
    preco: 680000,
    comPonto: false,
    banheiros: 2,
    vagas: 3,
    descricao: "Casa comercial em avenida principal de Bertioga. Ideal para restaurante, pousada ou comércio. Terreno de 300m² com ampliação possível.",
    imagem: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&h=400&fit=crop",
    destaque: true,
  },
];
