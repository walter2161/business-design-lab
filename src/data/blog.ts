import { Category } from "./models";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  image: string;
  author: string;
  readTime: string;
  publishedAt: Date;
  tags: string[];
  relatedModelIds?: string[];
}

export const blogPosts: BlogPost[] = [
  // SERVIÇOS PESSOAIS
  {
    id: "como-fidelizar-clientes-salao",
    title: "5 Estratégias para Fidelizar Clientes no Salão de Beleza",
    excerpt: "Descubra como criar uma base de clientes fiéis que retornam mensalmente ao seu salão.",
    content: `A fidelização de clientes é o coração de qualquer negócio de beleza. Aqui estão 5 estratégias comprovadas:

1. **Programa de Pontos**: Crie um sistema onde cada serviço acumula pontos que podem ser trocados por tratamentos gratuitos.

2. **Lembrete Inteligente**: Envie mensagens personalizadas lembrando do próximo corte ou tratamento.

3. **Experiência Premium**: Ofereça café, água aromatizada e Wi-Fi gratuito. Pequenos gestos fazem grande diferença.

4. **Pacotes Mensais**: Crie planos de assinatura com serviços recorrentes a preços especiais.

5. **Indicação Premiada**: Recompense clientes que indicam novos clientes com descontos ou serviços extras.

Implemente essas estratégias e veja sua taxa de retorno aumentar significativamente!`,
    category: "Serviços Pessoais",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "4 min",
    publishedAt: new Date("2024-01-15"),
    tags: ["fidelização", "salão", "clientes"],
    relatedModelIds: ["salao-beleza", "barbearia"],
  },
  {
    id: "precificacao-servicos-beleza",
    title: "Como Precificar Serviços de Beleza Corretamente",
    excerpt: "Aprenda a calcular o preço ideal dos seus serviços sem perder competitividade.",
    content: `A precificação correta é fundamental para a saúde financeira do seu negócio. Siga esta fórmula:

**Custo Total = Materiais + Tempo + Overhead + Margem**

1. **Materiais**: Some todos os produtos usados no serviço
2. **Tempo**: Calcule seu valor/hora baseado no salário desejado
3. **Overhead**: Divida custos fixos pelo número de atendimentos
4. **Margem**: Adicione 20-30% para lucro e reinvestimento

**Dica**: Pesquise a concorrência, mas não baseie seu preço apenas nisso. Valor percebido conta muito!`,
    category: "Serviços Pessoais",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-10"),
    tags: ["precificação", "beleza", "finanças"],
    relatedModelIds: ["salao-beleza", "manicure-pedicure", "clinica-estetica"],
  },
  {
    id: "instagram-barbearia",
    title: "Instagram para Barbearias: O Guia Completo",
    excerpt: "Domine o Instagram e atraia clientes todos os dias para sua barbearia.",
    content: `O Instagram é a principal ferramenta de marketing para barbearias. Veja como usar:

**Conteúdo que funciona:**
- Before/After de cortes
- Vídeos curtos do processo
- Depoimentos de clientes
- Bastidores do dia a dia

**Frequência ideal:** 1 post/dia + 5-10 stories

**Hashtags estratégicas:** Misture hashtags locais (#barbeariaSP) com gerais (#barber)

**Stories que convertem:**
- Enquetes sobre estilos
- Horários disponíveis
- Promoções relâmpago`,
    category: "Serviços Pessoais",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "6 min",
    publishedAt: new Date("2024-01-08"),
    tags: ["instagram", "marketing", "barbearia"],
    relatedModelIds: ["barbearia"],
  },

  // SAÚDE E BEM-ESTAR
  {
    id: "marketing-clinica-estetica",
    title: "Marketing Digital para Clínicas de Estética",
    excerpt: "Estratégias de marketing que funcionam para atrair pacientes de alto ticket.",
    content: `Clínicas de estética precisam de marketing sofisticado. Aqui está o que funciona:

**1. Google Ads Local**
Invista em palavras-chave como "botox [sua cidade]" e "harmonização facial [bairro]"

**2. Conteúdo Educativo**
Crie posts explicando procedimentos de forma clara e acessível

**3. Prova Social**
Depoimentos em vídeo de pacientes satisfeitas são ouro

**4. Parcerias Estratégicas**
Conecte-se com dermatologistas e médicos que podem indicar

**5. WhatsApp Business**
Tenha catálogo de serviços e respostas rápidas configuradas`,
    category: "Saúde e Bem-Estar",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-12"),
    tags: ["marketing", "clínica", "estética"],
    relatedModelIds: ["clinica-estetica", "clinica-odontologica"],
  },
  {
    id: "consulta-nutricional-online",
    title: "Como Estruturar Consultas Nutricionais Online",
    excerpt: "Expanda seu alcance com atendimentos online bem estruturados.",
    content: `O atendimento online veio para ficar. Estruture assim:

**Antes da Consulta:**
- Envie questionário completo de anamnese
- Solicite exames recentes
- Defina expectativas claras

**Durante a Consulta:**
- Use plataforma profissional (não WhatsApp)
- Tenha segundo monitor para anotações
- Mantenha contato visual

**Após a Consulta:**
- Envie plano alimentar em PDF
- Agende retorno
- Ofereça suporte por mensagem

**Ferramentas recomendadas:** Google Meet, Zoom, ou plataformas específicas de telemedicina`,
    category: "Saúde e Bem-Estar",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "4 min",
    publishedAt: new Date("2024-01-05"),
    tags: ["nutrição", "telemedicina", "online"],
    relatedModelIds: ["nutricionista"],
  },

  // ALIMENTAÇÃO
  {
    id: "delivery-restaurante-lucrativo",
    title: "Como Tornar seu Delivery Lucrativo",
    excerpt: "Estratégias para aumentar vendas e reduzir custos no delivery.",
    content: `O delivery pode ser muito lucrativo se bem gerenciado:

**Otimização de Custos:**
- Negocie taxas com apps de entrega
- Considere entregadores próprios acima de 30 pedidos/dia
- Use embalagens que mantêm qualidade

**Aumentando o Ticket Médio:**
- Combos atrativos
- Sugestões de complementos
- Sobremesas de impulso

**Marketing no iFood/Rappi:**
- Fotos profissionais (investimento obrigatório)
- Descrições que vendem
- Cupons estratégicos para primeira compra

**Métricas importantes:**
- Custo por pedido
- Tempo médio de entrega
- Taxa de reclamação`,
    category: "Alimentação",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-14"),
    tags: ["delivery", "restaurante", "iFood"],
    relatedModelIds: ["delivery-refeicoes", "restaurante", "hamburgueria"],
  },
  {
    id: "padaria-produtos-alto-valor",
    title: "Produtos de Alto Valor para sua Padaria",
    excerpt: "Aumente seu ticket médio com produtos premium e especiais.",
    content: `Padarias podem ir muito além do pão francês. Produtos premium:

**Confeitaria Artesanal:**
- Bolos decorados sob encomenda
- Tortas especiais
- Doces finos para eventos

**Pães Especiais:**
- Fermentação natural (sourdough)
- Pães funcionais (sem glúten, integral)
- Focaccias e ciabattas

**Café Especial:**
- Grãos de origem
- Métodos alternativos
- Combos café + bolo

**Kits e Cestas:**
- Café da manhã para presente
- Cestas de Natal/Páscoa
- Kits para empresas

Esses produtos têm margem de 60-80%, muito acima dos 30% do pão comum.`,
    category: "Alimentação",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "4 min",
    publishedAt: new Date("2024-01-11"),
    tags: ["padaria", "produtos", "premium"],
    relatedModelIds: ["padaria", "confeitaria"],
  },

  // TECNOLOGIA E DIGITAL
  {
    id: "precificacao-agencia-marketing",
    title: "Como Precificar Serviços de Agência de Marketing",
    excerpt: "Modelos de precificação que funcionam para agências digitais.",
    content: `Precificar serviços de marketing é desafiador. Aqui estão os modelos:

**1. Por Projeto (Fixed Price)**
- Bom para: sites, campanhas pontuais
- Risco: scope creep

**2. Retainer Mensal**
- Bom para: gestão contínua
- Vantagem: receita previsível

**3. Performance/Comissão**
- Bom para: e-commerces
- Risco: dependência de resultados externos

**4. Híbrido**
- Fee mensal + bônus por resultado
- Modelo mais equilibrado

**Tabela base (mercado 2024):**
- Gestão redes sociais: R$ 1.500-5.000/mês
- Google Ads: R$ 1.000-3.000/mês + % do investimento
- Site institucional: R$ 3.000-15.000`,
    category: "Tecnologia e Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "6 min",
    publishedAt: new Date("2024-01-13"),
    tags: ["agência", "marketing", "precificação"],
    relatedModelIds: ["agencia-marketing", "agencia-publicidade"],
  },
  {
    id: "saas-metricas-essenciais",
    title: "Métricas Essenciais para seu SaaS",
    excerpt: "Os KPIs que todo fundador de SaaS precisa acompanhar.",
    content: `Se você está construindo um SaaS, estas métricas são obrigatórias:

**MRR (Monthly Recurring Revenue)**
Receita recorrente mensal - a métrica rei

**Churn Rate**
% de clientes que cancelam. Abaixo de 5% é bom.

**CAC (Customer Acquisition Cost)**
Quanto custa adquirir um cliente

**LTV (Lifetime Value)**
Quanto um cliente gasta ao longo do tempo

**A regra de ouro: LTV > 3x CAC**

**NPS (Net Promoter Score)**
De -100 a +100. Acima de 50 é excelente.

**Time to Value**
Tempo até o cliente ter valor. Quanto menor, melhor.

Monitore semanalmente e tome decisões baseadas em dados!`,
    category: "Tecnologia e Digital",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-09"),
    tags: ["SaaS", "métricas", "startup"],
    relatedModelIds: ["software-house-saas"],
  },

  // COMÉRCIO VAREJISTA
  {
    id: "visual-merchandising-loja-roupas",
    title: "Visual Merchandising para Lojas de Roupas",
    excerpt: "Técnicas de exposição que aumentam vendas em até 40%.",
    content: `A forma como você expõe seus produtos impacta diretamente nas vendas:

**Vitrine:**
- Troque a cada 15 dias
- Conte uma história
- Use iluminação direcionada

**Layout da Loja:**
- Produtos de alto giro à direita da entrada
- Provadores no fundo (cliente percorre a loja)
- Zona de descompressão na entrada

**Técnicas de Exposição:**
- Cores em degradê
- Looks completos nos manequins
- Cross-merchandising (bolsa + roupa)

**Iluminação:**
- 3000K para ambiente acolhedor
- Spots nos produtos destaque
- Provadores bem iluminados (vendas aumentam!)`,
    category: "Comércio Varejista",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-07"),
    tags: ["visual", "loja", "roupas"],
    relatedModelIds: ["loja-roupas", "loja-calcados"],
  },
  {
    id: "gestao-estoque-pet-shop",
    title: "Gestão de Estoque para Pet Shop",
    excerpt: "Como evitar rupturas e excesso de estoque no pet shop.",
    content: `Estoque bem gerenciado = dinheiro no bolso:

**Curva ABC:**
- A (20% dos produtos = 80% do faturamento): estoque alto
- B (30% dos produtos = 15% do faturamento): estoque médio
- C (50% dos produtos = 5% do faturamento): estoque mínimo

**Ponto de Pedido:**
Calcule: (Consumo diário x Lead time) + Estoque de segurança

**Validade:**
- FIFO (primeiro que entra, primeiro que sai)
- Promoções antes do vencimento
- Parceria com ONGs para produtos próximos

**Sazonalidade:**
- Verão: antipulgas e carrapaticidas
- Inverno: roupinhas e camas
- Festas: petiscos e brinquedos`,
    category: "Comércio Varejista",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "4 min",
    publishedAt: new Date("2024-01-06"),
    tags: ["estoque", "pet shop", "gestão"],
    relatedModelIds: ["pet-shop"],
  },

  // IMOBILIÁRIO E CONSTRUÇÃO
  {
    id: "captacao-imoveis-corretor",
    title: "Técnicas de Captação de Imóveis para Corretores",
    excerpt: "Como construir uma carteira de imóveis exclusivos.",
    content: `Captação é a base do negócio imobiliário:

**Prospecção Ativa:**
- Bata porta em prédios antigos
- Converse com porteiros e zeladores
- Monitore classificados de particulares

**Marketing de Atração:**
- Conteúdo sobre o bairro
- Avaliação gratuita de imóveis
- Parceria com síndicos

**Networking:**
- Eventos da região
- Grupos de moradores
- Comerciantes locais

**Argumentos para exclusividade:**
- Fotos profissionais
- Tour virtual
- Divulgação premium

**Dica de ouro:** Especialize-se em um bairro. Seja O corretor daquela região.`,
    category: "Imobiliário e Construção",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-04"),
    tags: ["imobiliário", "captação", "corretor"],
    relatedModelIds: ["corretor-imoveis", "imobiliaria"],
  },

  // JURÍDICO E CONSULTORIA
  {
    id: "marketing-juridico-etico",
    title: "Marketing Jurídico: O Que Pode e Não Pode",
    excerpt: "Estratégias de marketing dentro das regras da OAB.",
    content: `Marketing jurídico é permitido, mas tem regras. Veja o que pode:

**Permitido:**
- Conteúdo educativo (artigos, vídeos)
- Site institucional com informações
- LinkedIn e redes profissionais
- Participação em eventos
- Newsletter para clientes

**Proibido:**
- Promessas de resultado
- Captação direta de clientes
- Comparação com outros escritórios
- Preços em publicidade
- Marketing sensacionalista

**Estratégias eficientes:**
1. Blog com artigos sobre sua área
2. LinkedIn ativo com insights
3. Parcerias com contadores e RH
4. Palestras em eventos empresariais

O Provimento 205/2021 flexibilizou regras. Estude-o!`,
    category: "Jurídico e Consultoria",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-03"),
    tags: ["advocacia", "marketing", "OAB"],
    relatedModelIds: ["escritorio-advocacia"],
  },

  // SERVIÇOS OPERACIONAIS
  {
    id: "escalando-empresa-limpeza",
    title: "Como Escalar uma Empresa de Limpeza",
    excerpt: "De autônomo a empresa com equipe: o passo a passo.",
    content: `Escalar serviços de limpeza requer método:

**Fase 1: Padronização**
- Checklist de limpeza por tipo de ambiente
- Tempo padrão por m²
- Kit de materiais definido

**Fase 2: Primeiras Contratações**
- Comece com diaristas fixas
- Treine no seu padrão
- Supervisione as primeiras semanas

**Fase 3: Comercial**
- Foque em contratos recorrentes (condomínios, escritórios)
- Preço por m² ou por frequência
- Proposta profissional

**Fase 4: Gestão**
- Sistema de controle de escalas
- Feedback de clientes
- Indicadores de qualidade

**Margem esperada:** 30-40% sobre o custo da mão de obra`,
    category: "Serviços Operacionais",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    author: "Equipe Loja de Negócio",
    readTime: "5 min",
    publishedAt: new Date("2024-01-02"),
    tags: ["limpeza", "escala", "operações"],
    relatedModelIds: ["servicos-limpeza"],
  },
];

// Get posts by category
export const getPostsByCategory = (category: Category): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Get posts related to a model
export const getRelatedPosts = (modelId: string): BlogPost[] => {
  return blogPosts.filter(post => post.relatedModelIds?.includes(modelId));
};

// Get recent posts
export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);
};

// Get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag.toLowerCase()));
};
