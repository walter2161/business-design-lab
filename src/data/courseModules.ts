// Sistema de Cursos - Jornada do Herói para implementação de negócios

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl?: string; // Placeholder para futuras integrações
  isCompleted?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  journeyPhase: "chamado" | "preparacao" | "travessia" | "provacao" | "recompensa" | "retorno";
  lessons: Lesson[];
}

// Módulos baseados na Jornada do Herói aplicada a negócios
export const courseModules: CourseModule[] = [
  {
    id: "chamado",
    title: "O Chamado à Aventura",
    subtitle: "Descoberta e Validação",
    icon: "🌅",
    description: "Entenda a oportunidade de mercado e valide sua decisão de empreender neste modelo de negócio.",
    journeyPhase: "chamado",
    lessons: [
      {
        id: "chamado-1",
        title: "Bem-vindo à sua jornada empreendedora",
        duration: "8 min",
        description: "Introdução ao modelo de negócio e visão geral do que você vai construir."
      },
      {
        id: "chamado-2",
        title: "Entendendo o mercado e a oportunidade",
        duration: "15 min",
        description: "Análise do mercado, tendências e por que este é o momento certo para começar."
      },
      {
        id: "chamado-3",
        title: "Perfil do cliente ideal (ICP)",
        duration: "12 min",
        description: "Quem são seus clientes, suas dores, desejos e como você vai ajudá-los."
      },
      {
        id: "chamado-4",
        title: "Sua proposta de valor única",
        duration: "10 min",
        description: "Como se diferenciar da concorrência e criar uma oferta irresistível."
      }
    ]
  },
  {
    id: "preparacao",
    title: "A Preparação",
    subtitle: "Estruturação Inicial",
    icon: "🛠️",
    description: "Prepare todas as ferramentas, documentos e estrutura necessária para começar.",
    journeyPhase: "preparacao",
    lessons: [
      {
        id: "prep-1",
        title: "Escolha da estrutura jurídica",
        duration: "12 min",
        description: "MEI, ME ou LTDA? Entenda qual é a melhor opção para o seu momento."
      },
      {
        id: "prep-2",
        title: "Ferramentas essenciais para operar",
        duration: "18 min",
        description: "Configuração de WhatsApp Business, sistemas de pagamento e gestão."
      },
      {
        id: "prep-3",
        title: "Precificação estratégica",
        duration: "20 min",
        description: "Como definir seus preços para ter lucro e ser competitivo."
      },
      {
        id: "prep-4",
        title: "Criando sua identidade visual",
        duration: "15 min",
        description: "Elementos básicos de marca: nome, cores, logo e presença digital."
      },
      {
        id: "prep-5",
        title: "Montando seu ambiente de trabalho",
        duration: "10 min",
        description: "Espaço físico ou home office: o que você precisa para começar."
      }
    ]
  },
  {
    id: "travessia",
    title: "Cruzando o Limiar",
    subtitle: "Primeiros Clientes",
    icon: "🚀",
    description: "Lance seu negócio e conquiste seus primeiros clientes pagantes.",
    journeyPhase: "travessia",
    lessons: [
      {
        id: "trav-1",
        title: "O lançamento: seus primeiros 7 dias",
        duration: "15 min",
        description: "Passo a passo para anunciar seu negócio e conseguir os primeiros clientes."
      },
      {
        id: "trav-2",
        title: "Ativando sua rede de contatos",
        duration: "12 min",
        description: "Como usar amigos, família e conhecidos para gerar as primeiras vendas."
      },
      {
        id: "trav-3",
        title: "Marketing de baixo custo que funciona",
        duration: "22 min",
        description: "Estratégias orgânicas para atrair clientes sem gastar muito."
      },
      {
        id: "trav-4",
        title: "Sua primeira venda: do contato ao fechamento",
        duration: "18 min",
        description: "Scripts e técnicas para converter interessados em clientes."
      },
      {
        id: "trav-5",
        title: "Onboarding: encantando desde o início",
        duration: "14 min",
        description: "Como receber seu cliente e garantir uma experiência excepcional."
      }
    ]
  },
  {
    id: "provacao",
    title: "Provas e Desafios",
    subtitle: "Superando Obstáculos",
    icon: "⚔️",
    description: "Enfrente os desafios comuns e aprenda a superar os principais obstáculos.",
    journeyPhase: "provacao",
    lessons: [
      {
        id: "prov-1",
        title: "Lidando com objeções de clientes",
        duration: "16 min",
        description: "As objeções mais comuns e como respondê-las com confiança."
      },
      {
        id: "prov-2",
        title: "Gestão financeira básica",
        duration: "20 min",
        description: "Controle de fluxo de caixa, separação de contas e reinvestimento."
      },
      {
        id: "prov-3",
        title: "Quando as coisas dão errado",
        duration: "12 min",
        description: "Como lidar com problemas, reclamações e crises."
      },
      {
        id: "prov-4",
        title: "Mantendo a motivação",
        duration: "10 min",
        description: "Mentalidade empreendedora e como superar momentos difíceis."
      },
      {
        id: "prov-5",
        title: "Otimizando processos",
        duration: "18 min",
        description: "Identificando gargalos e melhorando a eficiência operacional."
      }
    ]
  },
  {
    id: "recompensa",
    title: "A Recompensa",
    subtitle: "Resultados e Crescimento",
    icon: "🏆",
    description: "Consolide seus resultados e prepare-se para escalar.",
    journeyPhase: "recompensa",
    lessons: [
      {
        id: "rec-1",
        title: "Analisando suas métricas",
        duration: "15 min",
        description: "Os números que você precisa acompanhar para tomar boas decisões."
      },
      {
        id: "rec-2",
        title: "Fidelização: transformando clientes em fãs",
        duration: "18 min",
        description: "Estratégias para aumentar retenção e gerar indicações."
      },
      {
        id: "rec-3",
        title: "Aumentando seu ticket médio",
        duration: "14 min",
        description: "Upsell, cross-sell e pacotes para aumentar o valor por cliente."
      },
      {
        id: "rec-4",
        title: "Sistematizando a operação",
        duration: "20 min",
        description: "Criando processos documentados para não depender só de você."
      },
      {
        id: "rec-5",
        title: "Preparando para contratar",
        duration: "16 min",
        description: "Quando e como trazer as primeiras pessoas para o time."
      }
    ]
  },
  {
    id: "retorno",
    title: "O Retorno com o Elixir",
    subtitle: "Domínio e Escala",
    icon: "👑",
    description: "Domine o modelo e prepare-se para novos patamares de crescimento.",
    journeyPhase: "retorno",
    lessons: [
      {
        id: "ret-1",
        title: "Do operacional ao estratégico",
        duration: "18 min",
        description: "Como sair da operação e focar no crescimento do negócio."
      },
      {
        id: "ret-2",
        title: "Estratégias de escala",
        duration: "22 min",
        description: "Diferentes caminhos para crescer: mais clientes, mais serviços, mais unidades."
      },
      {
        id: "ret-3",
        title: "Construindo uma marca forte",
        duration: "15 min",
        description: "Posicionamento avançado e diferenciação sustentável."
      },
      {
        id: "ret-4",
        title: "Parcerias e networking estratégico",
        duration: "12 min",
        description: "Como criar conexões que aceleram seu crescimento."
      },
      {
        id: "ret-5",
        title: "Planejando os próximos 12 meses",
        duration: "20 min",
        description: "Visão de longo prazo e definição de metas ambiciosas."
      }
    ]
  }
];

// Função para calcular progresso total
export const calculateProgress = (completedLessons: string[]): number => {
  const totalLessons = courseModules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  return Math.round((completedLessons.length / totalLessons) * 100);
};

// Função para obter total de aulas
export const getTotalLessons = (): number => {
  return courseModules.reduce((acc, mod) => acc + mod.lessons.length, 0);
};

// Função para obter duração total estimada
export const getTotalDuration = (): string => {
  const totalMinutes = courseModules.reduce((acc, mod) => {
    return acc + mod.lessons.reduce((lessonAcc, lesson) => {
      const mins = parseInt(lesson.duration.replace(" min", ""));
      return lessonAcc + (isNaN(mins) ? 0 : mins);
    }, 0);
  }, 0);
  
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  
  return `${hours}h ${mins}min`;
};
