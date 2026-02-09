// Sistema de Cursos - Jornada do Herói para implementação de negócios

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  youtubeId?: string; // ID do vídeo do YouTube
  isCompleted?: boolean;
  prerequisites?: string[]; // IDs das aulas que precisam ser concluídas antes
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

// Vídeos de demonstração do YouTube (placeholders educacionais sobre empreendedorismo)
const youtubeVideos = {
  intro: "dQw4w9WgXcQ", // Placeholder - substituir por vídeos reais
  mercado: "9bZkp7q19f0",
  icp: "kJQP7kiw5Fk",
  proposta: "RgKAFK5djSk",
  juridico: "CevxZvSJLk8",
  ferramentas: "fJ9rUzIMcZQ",
  preco: "JGwWNGJdvx8",
  marca: "OPf0YbXqDm0",
  ambiente: "60ItHLz5WEA",
  lancamento: "Zi_XLOBDo_Y",
  rede: "kXYiU_JCYtU",
  marketing: "2Vv-BfVoq4g",
  venda: "lp-EO5I60KA",
  onboarding: "pRpeEdMmmQ0",
  objecoes: "hT_nvWreIhg",
  financeiro: "YQHsXMglC9A",
  crise: "PT2_F-1esPk",
  motivacao: "5qap5aO4i9A",
  processos: "IcrbM1l_BoI",
  metricas: "tgbNymZ7vqY",
  fidelizacao: "DK_0jXPuIr0",
  ticket: "djV11Xbc914",
  sistematizacao: "09R8_2nJtjg",
  contratacao: "n1WpP7iowLc",
  estrategico: "M7lc1UVf-VE",
  escala: "CGyEd0aKWZE",
  marca_forte: "ebXbLfLB6ng",
  parcerias: "Pkh8UtuejGw",
  planejamento: "rYEDA3JcQqw",
};

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
        description: "Introdução ao modelo de negócio e visão geral do que você vai construir.",
        youtubeId: youtubeVideos.intro,
      },
      {
        id: "chamado-2",
        title: "Entendendo o mercado e a oportunidade",
        duration: "15 min",
        description: "Análise do mercado, tendências e por que este é o momento certo para começar.",
        youtubeId: youtubeVideos.mercado,
        prerequisites: ["chamado-1"],
      },
      {
        id: "chamado-3",
        title: "Perfil do cliente ideal (ICP)",
        duration: "12 min",
        description: "Quem são seus clientes, suas dores, desejos e como você vai ajudá-los.",
        youtubeId: youtubeVideos.icp,
        prerequisites: ["chamado-2"],
      },
      {
        id: "chamado-4",
        title: "Sua proposta de valor única",
        duration: "10 min",
        description: "Como se diferenciar da concorrência e criar uma oferta irresistível.",
        youtubeId: youtubeVideos.proposta,
        prerequisites: ["chamado-3"],
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
        description: "MEI, ME ou LTDA? Entenda qual é a melhor opção para o seu momento.",
        youtubeId: youtubeVideos.juridico,
        prerequisites: ["chamado-4"],
      },
      {
        id: "prep-2",
        title: "Ferramentas essenciais para operar",
        duration: "18 min",
        description: "Configuração de WhatsApp Business, sistemas de pagamento e gestão.",
        youtubeId: youtubeVideos.ferramentas,
        prerequisites: ["prep-1"],
      },
      {
        id: "prep-3",
        title: "Precificação estratégica",
        duration: "20 min",
        description: "Como definir seus preços para ter lucro e ser competitivo.",
        youtubeId: youtubeVideos.preco,
        prerequisites: ["prep-2"],
      },
      {
        id: "prep-4",
        title: "Criando sua identidade visual",
        duration: "15 min",
        description: "Elementos básicos de marca: nome, cores, logo e presença digital.",
        youtubeId: youtubeVideos.marca,
        prerequisites: ["prep-3"],
      },
      {
        id: "prep-5",
        title: "Montando seu ambiente de trabalho",
        duration: "10 min",
        description: "Espaço físico ou home office: o que você precisa para começar.",
        youtubeId: youtubeVideos.ambiente,
        prerequisites: ["prep-4"],
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
        description: "Passo a passo para anunciar seu negócio e conseguir os primeiros clientes.",
        youtubeId: youtubeVideos.lancamento,
        prerequisites: ["prep-5"],
      },
      {
        id: "trav-2",
        title: "Ativando sua rede de contatos",
        duration: "12 min",
        description: "Como usar amigos, família e conhecidos para gerar as primeiras vendas.",
        youtubeId: youtubeVideos.rede,
        prerequisites: ["trav-1"],
      },
      {
        id: "trav-3",
        title: "Marketing de baixo custo que funciona",
        duration: "22 min",
        description: "Estratégias orgânicas para atrair clientes sem gastar muito.",
        youtubeId: youtubeVideos.marketing,
        prerequisites: ["trav-2"],
      },
      {
        id: "trav-4",
        title: "Sua primeira venda: do contato ao fechamento",
        duration: "18 min",
        description: "Scripts e técnicas para converter interessados em clientes.",
        youtubeId: youtubeVideos.venda,
        prerequisites: ["trav-3"],
      },
      {
        id: "trav-5",
        title: "Onboarding: encantando desde o início",
        duration: "14 min",
        description: "Como receber seu cliente e garantir uma experiência excepcional.",
        youtubeId: youtubeVideos.onboarding,
        prerequisites: ["trav-4"],
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
        description: "As objeções mais comuns e como respondê-las com confiança.",
        youtubeId: youtubeVideos.objecoes,
        prerequisites: ["trav-5"],
      },
      {
        id: "prov-2",
        title: "Gestão financeira básica",
        duration: "20 min",
        description: "Controle de fluxo de caixa, separação de contas e reinvestimento.",
        youtubeId: youtubeVideos.financeiro,
        prerequisites: ["prov-1"],
      },
      {
        id: "prov-3",
        title: "Quando as coisas dão errado",
        duration: "12 min",
        description: "Como lidar com problemas, reclamações e crises.",
        youtubeId: youtubeVideos.crise,
        prerequisites: ["prov-2"],
      },
      {
        id: "prov-4",
        title: "Mantendo a motivação",
        duration: "10 min",
        description: "Mentalidade empreendedora e como superar momentos difíceis.",
        youtubeId: youtubeVideos.motivacao,
        prerequisites: ["prov-3"],
      },
      {
        id: "prov-5",
        title: "Otimizando processos",
        duration: "18 min",
        description: "Identificando gargalos e melhorando a eficiência operacional.",
        youtubeId: youtubeVideos.processos,
        prerequisites: ["prov-4"],
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
        description: "Os números que você precisa acompanhar para tomar boas decisões.",
        youtubeId: youtubeVideos.metricas,
        prerequisites: ["prov-5"],
      },
      {
        id: "rec-2",
        title: "Fidelização: transformando clientes em fãs",
        duration: "18 min",
        description: "Estratégias para aumentar retenção e gerar indicações.",
        youtubeId: youtubeVideos.fidelizacao,
        prerequisites: ["rec-1"],
      },
      {
        id: "rec-3",
        title: "Aumentando seu ticket médio",
        duration: "14 min",
        description: "Upsell, cross-sell e pacotes para aumentar o valor por cliente.",
        youtubeId: youtubeVideos.ticket,
        prerequisites: ["rec-2"],
      },
      {
        id: "rec-4",
        title: "Sistematizando a operação",
        duration: "20 min",
        description: "Criando processos documentados para não depender só de você.",
        youtubeId: youtubeVideos.sistematizacao,
        prerequisites: ["rec-3"],
      },
      {
        id: "rec-5",
        title: "Preparando para contratar",
        duration: "16 min",
        description: "Quando e como trazer as primeiras pessoas para o time.",
        youtubeId: youtubeVideos.contratacao,
        prerequisites: ["rec-4"],
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
        description: "Como sair da operação e focar no crescimento do negócio.",
        youtubeId: youtubeVideos.estrategico,
        prerequisites: ["rec-5"],
      },
      {
        id: "ret-2",
        title: "Estratégias de escala",
        duration: "22 min",
        description: "Diferentes caminhos para crescer: mais clientes, mais serviços, mais unidades.",
        youtubeId: youtubeVideos.escala,
        prerequisites: ["ret-1"],
      },
      {
        id: "ret-3",
        title: "Construindo uma marca forte",
        duration: "15 min",
        description: "Posicionamento avançado e diferenciação sustentável.",
        youtubeId: youtubeVideos.marca_forte,
        prerequisites: ["ret-2"],
      },
      {
        id: "ret-4",
        title: "Parcerias e networking estratégico",
        duration: "12 min",
        description: "Como criar conexões que aceleram seu crescimento.",
        youtubeId: youtubeVideos.parcerias,
        prerequisites: ["ret-3"],
      },
      {
        id: "ret-5",
        title: "Planejando os próximos 12 meses",
        duration: "20 min",
        description: "Visão de longo prazo e definição de metas ambiciosas.",
        youtubeId: youtubeVideos.planejamento,
        prerequisites: ["ret-4"],
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

// Função para verificar se uma aula está bloqueada
export const isLessonLocked = (lessonId: string, completedLessons: string[]): boolean => {
  const lesson = courseModules
    .flatMap(m => m.lessons)
    .find(l => l.id === lessonId);
  
  if (!lesson?.prerequisites || lesson.prerequisites.length === 0) {
    return false;
  }
  
  return !lesson.prerequisites.every(prereq => completedLessons.includes(prereq));
};

// Função para obter próxima aula disponível
export const getNextAvailableLesson = (completedLessons: string[]): string | null => {
  for (const module of courseModules) {
    for (const lesson of module.lessons) {
      if (!completedLessons.includes(lesson.id) && !isLessonLocked(lesson.id, completedLessons)) {
        return lesson.id;
      }
    }
  }
  return null;
};
