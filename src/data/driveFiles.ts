// Estrutura de pastas e arquivos do Drive organizados por setores da empresa
export interface DriveFile {
  id: string;
  name: string;
  type: "doc" | "xls";
  size: string;
  content: string;
}

export interface DriveFolder {
  id: string;
  name: string;
  icon: string;
  files: DriveFile[];
}

// =====================================================
// SETOR ADMINISTRATIVO
// =====================================================
const adminFiles: DriveFile[] = [
  {
    id: "plano-negocio-validado",
    name: "Plano_de_Negocio_Validado.doc",
    type: "doc",
    size: "245 KB",
    content: `PLANO DE NEGÓCIO VALIDADO

1. SUMÁRIO EXECUTIVO
Este documento apresenta um plano de negócio completo e validado, estruturado para orientar a implementação e operação do modelo de negócio escolhido.

2. VISÃO GERAL DO NEGÓCIO
• Missão: Definição clara do propósito do negócio
• Visão: Onde o negócio pretende chegar em 3-5 anos
• Valores: Princípios que guiam a operação

3. ANÁLISE DE MERCADO
• Tamanho do mercado endereçável
• Tendências do setor
• Oportunidades identificadas
• Ameaças e riscos mapeados

4. MODELO DE RECEITA
• Fontes de receita primárias e secundárias
• Estrutura de preços recomendada
• Projeção de faturamento

5. ESTRATÉGIA DE IMPLEMENTAÇÃO
• Cronograma de 90 dias
• Marcos importantes
• Indicadores de sucesso`
  },
  {
    id: "resumo-executivo",
    name: "Resumo_Executivo_do_Modelo.doc",
    type: "doc",
    size: "128 KB",
    content: `RESUMO EXECUTIVO DO MODELO DE NEGÓCIO

OPORTUNIDADE DE MERCADO
O modelo de negócio foi desenvolvido para atender uma demanda crescente no mercado brasileiro, focando em MEIs e Microempresas que buscam estruturação profissional.

PROPOSTA DE VALOR
• Solução completa e testada
• Implementação guiada passo a passo
• Suporte via IA especializada
• Templates prontos para uso

DIFERENCIAL COMPETITIVO
• Modelo validado com dados reais
• Arquitetura de dados estruturada
• Benchmarks do mercado inclusos
• Atualização contínua do conteúdo

INVESTIMENTO E RETORNO
• Investimento inicial estimado
• Prazo de payback esperado
• ROI projetado para 12 meses`
  },
  {
    id: "descricao-completa",
    name: "Descricao_Completa_do_Modelo.doc",
    type: "doc",
    size: "312 KB",
    content: `DESCRIÇÃO COMPLETA DO MODELO DE NEGÓCIO

1. INTRODUÇÃO
Este documento detalha todos os aspectos do modelo de negócio, fornecendo uma visão completa de como a operação deve funcionar.

2. ESTRUTURA DO NEGÓCIO
2.1 Natureza Jurídica Recomendada
2.2 Regime Tributário Indicado
2.3 Licenças e Autorizações Necessárias

3. OPERAÇÃO
3.1 Fluxo Operacional Diário
3.2 Processos-Chave
3.3 Ferramentas Necessárias
3.4 Equipe Mínima Recomendada

4. CLIENTES
4.1 Perfil do Cliente Ideal (ICP)
4.2 Jornada do Cliente
4.3 Pontos de Contato
4.4 Experiência Esperada

5. FORNECEDORES E PARCEIROS
5.1 Fornecedores Essenciais
5.2 Parcerias Estratégicas
5.3 Critérios de Seleção`
  },
  {
    id: "arquitetura-modelo",
    name: "Arquitetura_do_Modelo_de_Negocio.doc",
    type: "doc",
    size: "198 KB",
    content: `ARQUITETURA DO MODELO DE NEGÓCIO

1. VISÃO GERAL DA ARQUITETURA
Diagrama completo mostrando como todos os elementos do negócio se conectam.

2. BLOCOS DE CONSTRUÇÃO
• Segmentos de Clientes
• Proposta de Valor
• Canais de Distribuição
• Relacionamento com Clientes
• Fontes de Receita
• Recursos-Chave
• Atividades-Chave
• Parcerias-Chave
• Estrutura de Custos

3. FLUXO DE VALOR
Como o valor é criado, entregue e capturado.

4. INTEGRAÇÕES
• Sistemas necessários
• Automações recomendadas
• Pontos de integração

5. ESCALABILIDADE
• Gargalos potenciais
• Estratégias de crescimento
• Limites do modelo atual`
  },
  {
    id: "roadmap-12meses",
    name: "Roadmap_Estrategico_12_Meses.doc",
    type: "doc",
    size: "189 KB",
    content: `ROADMAP ESTRATÉGICO - 12 MESES

TRIMESTRE 1: VALIDAÇÃO
Objetivo: Provar que o modelo funciona
• Mês 1: Setup e primeiros clientes
• Mês 2: Ajustes e otimização
• Mês 3: Consolidação do processo

Meta: 10-20 clientes ativos

TRIMESTRE 2: CRESCIMENTO
Objetivo: Escalar a operação
• Mês 4: Ampliar canais de aquisição
• Mês 5: Automatizar processos
• Mês 6: Expandir oferta

Meta: 30-50 clientes ativos

TRIMESTRE 3: CONSOLIDAÇÃO
Objetivo: Profissionalizar
• Mês 7: Estruturar equipe
• Mês 8: Otimizar custos
• Mês 9: Melhorar experiência

Meta: 50-80 clientes ativos

TRIMESTRE 4: EXPANSÃO
Objetivo: Ampliar fronteiras
• Mês 10: Novos segmentos
• Mês 11: Parcerias estratégicas
• Mês 12: Planejamento ano 2

Meta: 80-120 clientes ativos`
  },
  {
    id: "controle-execucao-admin",
    name: "Controle_de_Execucao_Plano.xls",
    type: "xls",
    size: "156 KB",
    content: `CONTROLE DE EXECUÇÃO DO PLANO DE AÇÃO
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  ACOMPANHAMENTO DE TAREFAS E PROJETOS                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  Projeto          │ Tarefa              │ Responsável │ Prazo    │ %    │
├───────────────────┼─────────────────────┼─────────────┼──────────┼──────┤
│  Setup Inicial    │ Registro MEI/ME     │ Admin       │ Sem 1    │ 100% │
│  Setup Inicial    │ Conta bancária PJ   │ Admin       │ Sem 1    │ 100% │
│  Setup Inicial    │ Certificado digital │ Admin       │ Sem 2    │ 75%  │
│  Estruturação     │ Definir preços      │ Comercial   │ Sem 2    │ 50%  │
│  Estruturação     │ Criar materiais     │ Marketing   │ Sem 3    │ 25%  │
│  Lançamento       │ Campanha inicial    │ Marketing   │ Sem 4    │ 0%   │
│  Lançamento       │ Prospecção ativa    │ Comercial   │ Sem 4    │ 0%   │
└─────────────────────────────────────────────────────────────────────────┘

INDICADORES DE PROGRESSO
• Tarefas Concluídas: 2/7
• Progresso Geral: 35%
• Próximo Marco: Semana 2 - Estrutura pronta

NOTAS E OBSERVAÇÕES
[Registre aqui atualizações importantes sobre o progresso]`
  }
];

// =====================================================
// SETOR DE RECURSOS HUMANOS
// =====================================================
const rhFiles: DriveFile[] = [
  {
    id: "manual-implementacao",
    name: "Manual_de_Implementacao.doc",
    type: "doc",
    size: "234 KB",
    content: `MANUAL DE IMPLEMENTAÇÃO DO MODELO

1. INTRODUÇÃO
Este manual orienta passo a passo a implementação do modelo de negócio, desde a preparação inicial até a operação plena.

2. REQUISITOS INICIAIS
Antes de começar:
□ Tempo disponível: mínimo 10h/semana
□ Capital inicial: conforme projeção
□ Habilidades básicas necessárias
□ Ferramentas mínimas

3. ESTRUTURA DE EQUIPE
Fase 1 (Início): Somente você
• Todas as funções concentradas
• Foco em vendas e entrega

Fase 2 (Crescimento): 1-2 colaboradores
• Delegar atendimento
• Manter vendas consigo

Fase 3 (Escala): 3-5 colaboradores
• Áreas definidas
• Gestão por resultados

4. PROCESSOS DE CONTRATAÇÃO
• Perfil ideal por função
• Critérios de seleção
• Treinamento inicial
• Avaliação de desempenho

5. CULTURA E VALORES
• Definição de cultura
• Comunicação interna
• Reconhecimento
• Desenvolvimento de equipe`
  },
  {
    id: "checklist-implementacao",
    name: "Checklist_de_Implementacao.doc",
    type: "doc",
    size: "145 KB",
    content: `CHECKLIST DE IMPLEMENTAÇÃO

═══════════════════════════════════════
FASE 1: PREPARAÇÃO (Semana 1-2)
═══════════════════════════════════════
□ Estudar todo o material do modelo
□ Definir estrutura legal (MEI ou ME)
□ Abrir conta bancária PJ
□ Obter certificado digital (se necessário)
□ Configurar ferramentas básicas
□ Personalizar templates com sua marca
□ Definir horário de trabalho
□ Montar ambiente de trabalho

═══════════════════════════════════════
FASE 2: ESTRUTURAÇÃO (Semana 3-4)
═══════════════════════════════════════
□ Definir preços dos serviços
□ Criar página de vendas/portfólio
□ Configurar WhatsApp Business
□ Criar perfil profissional nas redes
□ Preparar proposta comercial
□ Definir processos de entrega
□ Testar fluxo completo internamente

═══════════════════════════════════════
FASE 3: LANÇAMENTO (Semana 5-8)
═══════════════════════════════════════
□ Comunicar para rede de contatos
□ Publicar primeiros conteúdos
□ Iniciar prospecção ativa
□ Buscar primeiros 5 clientes
□ Coletar e documentar feedbacks
□ Ajustar processos conforme necessário

═══════════════════════════════════════
FASE 4: OTIMIZAÇÃO (Semana 9-12)
═══════════════════════════════════════
□ Analisar métricas do período
□ Identificar principais gargalos
□ Implementar automações básicas
□ Otimizar processos com mais volume
□ Planejar escala para próximo trimestre`
  },
  {
    id: "scripts-onboarding",
    name: "Scripts_de_Atendimento_Onboarding.doc",
    type: "doc",
    size: "167 KB",
    content: `SCRIPTS DE ATENDIMENTO E ONBOARDING

BOAS-VINDAS (Após a compra)
"Parabéns, [NOME]! 🎉
Seja muito bem-vindo(a) à [EMPRESA]!
Estou aqui para garantir que você tenha a melhor experiência possível.
Nos próximos dias, vou te guiar pelo processo de [SERVIÇO].
Qualquer dúvida, é só me chamar!"

ONBOARDING - DIA 1
"Olá [NOME]! Vamos começar?
Hoje vou te passar as primeiras orientações:
1. [Instrução 1]
2. [Instrução 2]
3. [Instrução 3]
Consegue fazer isso até amanhã?"

ACOMPANHAMENTO - SEMANA 1
"Oi [NOME]! Tudo bem?
Já se passou uma semana desde que começamos.
Como está sendo sua experiência até agora?
Tem alguma dúvida ou dificuldade?"

RESOLUÇÃO DE PROBLEMAS
"Entendo sua frustração, [NOME].
Vou resolver isso para você agora mesmo.
[Explicar solução]
Isso resolve seu problema?"

PESQUISA DE SATISFAÇÃO
"[NOME], sua opinião é muito importante!
De 0 a 10, quanto você recomendaria nosso serviço?
O que podemos melhorar?"

TREINAMENTO DE EQUIPE
• Protocolo de atendimento padrão
• Escalação de problemas
• Tom de voz da empresa
• Limites de autonomia`
  },
  {
    id: "guia-processos-rh",
    name: "Guia_de_Processos_RH.doc",
    type: "doc",
    size: "178 KB",
    content: `GUIA DE PROCESSOS DE RECURSOS HUMANOS

1. RECRUTAMENTO E SELEÇÃO
• Descrição de cargos
• Canais de divulgação
• Etapas do processo seletivo
• Critérios de avaliação
• Checklist de contratação

2. ONBOARDING DE COLABORADORES
Dia 1:
• Apresentação da empresa
• Tour pelas ferramentas
• Entrega de acessos
• Primeiro treinamento

Semana 1:
• Acompanhamento diário
• Treinamentos específicos
• Primeiras tarefas supervisionadas

Mês 1:
• Avaliação de adaptação
• Feedback bidirecional
• Ajustes de expectativas

3. GESTÃO DE DESEMPENHO
• OKRs por função
• Check-ins semanais
• Avaliação mensal
• Plano de desenvolvimento

4. CULTURA E ENGAJAMENTO
• Rituais da empresa
• Comunicação interna
• Reconhecimento
• Eventos e integrações

5. DESLIGAMENTO
• Processo de offboarding
• Entrevista de saída
• Documentação necessária`
  }
];

// =====================================================
// SETOR DE MARKETING
// =====================================================
const marketingFiles: DriveFile[] = [
  {
    id: "plano-marketing",
    name: "Plano_de_Marketing_Estrategico.doc",
    type: "doc",
    size: "276 KB",
    content: `PLANO DE MARKETING ESTRATÉGICO

1. ANÁLISE DA SITUAÇÃO
• Análise SWOT do negócio
• Mapeamento de concorrentes
• Pesquisa de público-alvo

2. OBJETIVOS DE MARKETING
• Awareness: Tornar a marca conhecida
• Consideração: Gerar interesse
• Conversão: Transformar em clientes
• Retenção: Fidelizar clientes

3. ESTRATÉGIA DE CANAIS
CANAIS ORGÂNICOS:
• Instagram/TikTok
• Google Meu Negócio
• WhatsApp Business
• Indicações

CANAIS PAGOS:
• Google Ads (busca local)
• Meta Ads (Instagram/Facebook)
• Parcerias pagas

4. CALENDÁRIO DE CONTEÚDO
• Frequência de posts
• Tipos de conteúdo
• Datas comemorativas
• Campanhas sazonais

5. ORÇAMENTO SUGERIDO
• Investimento inicial
• Distribuição por canal
• Métricas de acompanhamento`
  },
  {
    id: "plano-aquisicao",
    name: "Plano_de_Aquisicao_de_Clientes.doc",
    type: "doc",
    size: "198 KB",
    content: `PLANO DE AQUISIÇÃO DE CLIENTES

1. FUNIL DE AQUISIÇÃO
TOPO (Awareness):
• Redes sociais
• Conteúdo educativo
• Parcerias locais

MEIO (Consideração):
• Landing page
• WhatsApp
• Demonstrações

FUNDO (Decisão):
• Proposta comercial
• Negociação
• Fechamento

2. CANAIS PRIORITÁRIOS
Canal 1: [Principal] - 50% do esforço
Canal 2: [Secundário] - 30% do esforço
Canal 3: [Teste] - 20% do esforço

3. MÉTRICAS DE AQUISIÇÃO
• CPL (Custo por Lead)
• CAC (Custo de Aquisição)
• Taxa de conversão por etapa
• Tempo médio de conversão

4. METAS MENSAIS
• Leads gerados
• Propostas enviadas
• Clientes fechados
• Receita nova`
  },
  {
    id: "plano-retencao",
    name: "Plano_de_Retencao_e_Crescimento.doc",
    type: "doc",
    size: "187 KB",
    content: `PLANO DE RETENÇÃO E CRESCIMENTO

1. ESTRATÉGIA DE RETENÇÃO
• Onboarding estruturado
• Comunicação recorrente
• Programa de fidelidade
• Pesquisa de satisfação

2. REDUÇÃO DE CHURN
Sinais de Alerta:
• Cliente não usa o serviço
• Reclamações recorrentes
• Atrasos de pagamento

Ações Preventivas:
• Check-ins proativos
• Ofertas de reativação
• Upgrade de serviço

3. EXPANSÃO DE RECEITA
• Upsell: Upgrade de plano
• Cross-sell: Produtos complementares
• Indicações: Programa de referral

4. MÉTRICAS DE RETENÇÃO
• Taxa de retenção mensal
• NPS (Net Promoter Score)
• LTV (Lifetime Value)
• Taxa de expansão de receita

5. AÇÕES POR SEGMENTO
• Clientes novos (0-3 meses)
• Clientes em maturação (3-6 meses)
• Clientes maduros (6+ meses)`
  },
  {
    id: "proposta-valor",
    name: "Proposta_de_Valor_Posicionamento.doc",
    type: "doc",
    size: "156 KB",
    content: `PROPOSTA DE VALOR E POSICIONAMENTO

1. PROPOSTA DE VALOR ÚNICA (UVP)
Definição clara do valor entregue ao cliente e como isso resolve suas principais dores.

2. CANVAS DE PROPOSTA DE VALOR
• Tarefas do Cliente (Jobs to be Done)
• Dores do Cliente
• Ganhos Desejados
• Analgésicos (como aliviamos as dores)
• Criadores de Ganho

3. POSICIONAMENTO DE MERCADO
• Categoria de atuação
• Público-alvo primário
• Diferenciação dos concorrentes
• Percepção desejada

4. MENSAGEM-CHAVE
• Tagline principal
• Argumentos de venda
• Provas sociais sugeridas

5. IDENTIDADE DE MARCA
• Tom de voz
• Personalidade da marca
• Elementos visuais recomendados`
  },
  {
    id: "faq-estrategico",
    name: "FAQ_Estrategico_do_Modelo.doc",
    type: "doc",
    size: "134 KB",
    content: `FAQ ESTRATÉGICO DO MODELO

PERGUNTAS SOBRE O NEGÓCIO
═════════════════════════

P: Preciso de experiência prévia?
R: Não. O modelo foi desenhado para iniciantes, com todo o passo a passo documentado.

P: Quanto tempo até ver resultados?
R: Primeiros clientes podem vir em 2-4 semanas. Operação estável em 90 dias.

P: Preciso de muito investimento inicial?
R: Não. O modelo permite começar com investimento mínimo e escalar gradualmente.

PERGUNTAS SOBRE A OPERAÇÃO
══════════════════════════

P: Quantas horas por semana preciso dedicar?
R: Mínimo 10h/semana no início. Pode reduzir com automações depois.

P: Posso conciliar com outro trabalho?
R: Sim. Muitos começam como renda extra até o negócio se consolidar.

P: Preciso contratar funcionários?
R: Não no início. A estrutura permite operar sozinho até certo volume.

OBJEÇÕES COMUNS DOS CLIENTES
════════════════════════════

"Está caro": Veja o custo de não resolver esse problema...
"Preciso pensar": Entendo. O que especificamente te preocupa?
"Já tentei antes": O que deu errado? Nossa abordagem é diferente...
"Não tenho tempo": É exatamente por isso que precisamos otimizar...`
  },
  {
    id: "planejamento-marketing",
    name: "Planejamento_Marketing_Campanhas.xls",
    type: "xls",
    size: "178 KB",
    content: `PLANEJAMENTO DE MARKETING E CAMPANHAS
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  CALENDÁRIO DE CAMPANHAS ANUAL                                          │
├─────────────────────────────────────────────────────────────────────────┤
│  Mês       │ Campanha            │ Canal       │ Orçamento │ Meta       │
├────────────┼─────────────────────┼─────────────┼───────────┼────────────┤
│  Janeiro   │ Ano Novo, Vida Nova │ Instagram   │ R$ 500    │ 50 leads   │
│  Fevereiro │ Carnaval de Ofertas │ WhatsApp    │ R$ 300    │ 30 leads   │
│  Março     │ Mês do Cliente      │ Email       │ R$ 200    │ 25 leads   │
│  Abril     │ Páscoa Especial     │ Instagram   │ R$ 400    │ 40 leads   │
│  Maio      │ Dia das Mães        │ Multi-canal │ R$ 600    │ 60 leads   │
│  Junho     │ Festa Junina        │ Local       │ R$ 300    │ 35 leads   │
└─────────────────────────────────────────────────────────────────────────┘

PLANEJAMENTO SEMANAL DE CONTEÚDO
┌──────────────┬─────────────────┬──────────────┬────────────────────────┐
│  Dia         │ Tipo            │ Formato      │ Tema                   │
├──────────────┼─────────────────┼──────────────┼────────────────────────┤
│  Segunda     │ Educativo       │ Carrossel    │ Dicas do Segmento      │
│  Terça       │ Bastidores      │ Stories      │ Dia a dia do negócio   │
│  Quarta      │ Depoimento      │ Vídeo curto  │ Cliente satisfeito     │
│  Quinta      │ Educativo       │ Post único   │ Benefícios do serviço  │
│  Sexta       │ Promoção        │ Carrossel    │ Oferta da semana       │
│  Sábado      │ Interação       │ Stories      │ Enquete/Quiz           │
│  Domingo     │ Inspiracional   │ Post único   │ Motivação              │
└──────────────┴─────────────────┴──────────────┴────────────────────────┘

MÉTRICAS A ACOMPANHAR
• Alcance por post
• Taxa de engajamento
• Cliques no link
• Mensagens recebidas
• Leads gerados
• Custo por lead`
  },
  {
    id: "controle-leads",
    name: "Controle_de_Leads_e_Funil.xls",
    type: "xls",
    size: "145 KB",
    content: `CONTROLE DE LEADS E FUNIL DE VENDAS
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  REGISTRO DE LEADS                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  Data    │ Nome        │ Origem     │ Status      │ Próxima Ação        │
├──────────┼─────────────┼────────────┼─────────────┼─────────────────────┤
│  01/01   │ Maria Silva │ Instagram  │ Qualificado │ Enviar proposta     │
│  02/01   │ João Santos │ Indicação  │ Em análise  │ Follow-up 3 dias    │
│  03/01   │ Ana Costa   │ Google     │ Novo        │ Primeiro contato    │
│  04/01   │ Pedro Lima  │ WhatsApp   │ Proposta    │ Aguardar resposta   │
│  05/01   │ Carla Dias  │ Instagram  │ Fechado     │ Iniciar onboarding  │
└─────────────────────────────────────────────────────────────────────────┘

FUNIL DE CONVERSÃO
┌─────────────────────────────────────────────────────────────────────────┐
│  Etapa              │ Quantidade │ % Conversão │ Valor Potencial       │
├─────────────────────┼────────────┼─────────────┼───────────────────────┤
│  Visitantes         │ 1.000      │ 100%        │ -                     │
│  Leads gerados      │ 100        │ 10%         │ R$ 50.000             │
│  Leads qualificados │ 30         │ 30%         │ R$ 15.000             │
│  Propostas enviadas │ 15         │ 50%         │ R$ 7.500              │
│  Clientes fechados  │ 5          │ 33%         │ R$ 2.500              │
└─────────────────────────────────────────────────────────────────────────┘

ANÁLISE POR ORIGEM
• Instagram: 40% dos leads | 25% conversão
• Google: 30% dos leads | 35% conversão
• Indicação: 20% dos leads | 50% conversão
• WhatsApp: 10% dos leads | 20% conversão`
  }
];

// =====================================================
// SETOR COMERCIAL / VENDAS
// =====================================================
const comercialFiles: DriveFile[] = [
  {
    id: "scripts-vendas",
    name: "Scripts_de_Vendas.doc",
    type: "doc",
    size: "156 KB",
    content: `SCRIPTS DE VENDAS

SCRIPT 1: PRIMEIRO CONTATO
"Olá [NOME]! Vi que você demonstrou interesse em [SERVIÇO]. 
Sou [SEU NOME] e gostaria de entender melhor sua situação para ver como posso ajudar.
Você tem 5 minutos para conversarmos?"

SCRIPT 2: QUALIFICAÇÃO
"Para entender melhor sua necessidade:
1. Qual é seu principal desafio hoje?
2. Você já tentou resolver isso antes?
3. Qual seria o cenário ideal para você?
4. Qual é seu orçamento para isso?"

SCRIPT 3: APRESENTAÇÃO
"Baseado no que você me contou, acredito que [SOLUÇÃO] seria ideal porque:
✓ Resolve [DOR 1]
✓ Entrega [BENEFÍCIO 2]
✓ Garante [RESULTADO 3]"

SCRIPT 4: OBJEÇÕES COMUNS
"Está caro": "Entendo. Vamos calcular o custo de NÃO resolver isso?"
"Preciso pensar": "Claro! O que especificamente você precisa avaliar?"
"Já tentei antes": "O que deu errado? Nossa abordagem é diferente porque..."

SCRIPT 5: FECHAMENTO
"Então, considerando tudo que conversamos, faz sentido começarmos [DATA]?
Posso enviar a proposta agora e você confirma o pagamento para garantirmos sua vaga."`
  },
  {
    id: "proposta-comercial",
    name: "Modelo_de_Proposta_Comercial.doc",
    type: "doc",
    size: "145 KB",
    content: `PROPOSTA COMERCIAL

═══════════════════════════════════
[LOGO DA EMPRESA]
═══════════════════════════════════

PARA: [Nome do Cliente]
DATA: [Data]
VALIDADE: 7 dias

───────────────────────────────────
1. SOBRE NÓS
───────────────────────────────────
Breve apresentação da empresa, experiência e diferenciais.

───────────────────────────────────
2. ENTENDIMENTO DA NECESSIDADE
───────────────────────────────────
[Descrever o problema/necessidade do cliente conforme levantado na conversa]

───────────────────────────────────
3. SOLUÇÃO PROPOSTA
───────────────────────────────────
[Detalhar o serviço/produto oferecido]

Entregas incluídas:
• [Entrega 1]
• [Entrega 2]
• [Entrega 3]

───────────────────────────────────
4. INVESTIMENTO
───────────────────────────────────
Valor: R$ X.XXX,XX
Condições: [À vista ou parcelado]

───────────────────────────────────
5. PRÓXIMOS PASSOS
───────────────────────────────────
1. Aprovação desta proposta
2. Assinatura do contrato
3. Pagamento inicial
4. Início do projeto

[ASSINATURA]`
  },
  {
    id: "estrutura-oferta",
    name: "Estrutura_de_Oferta_e_Receita.doc",
    type: "doc",
    size: "167 KB",
    content: `ESTRUTURA DE OFERTA E RECEITA

1. PORTFÓLIO DE PRODUTOS/SERVIÇOS
• Oferta Principal (Core)
• Ofertas Complementares
• Upsells e Cross-sells
• Programa de Fidelidade

2. ESTRATÉGIA DE PRECIFICAÇÃO
• Modelo de preços (fixo, variável, assinatura)
• Faixas de preço recomendadas
• Descontos e promoções
• Política de reajuste

3. ESTRUTURA DE RECEITA
• Receita Recorrente (MRR)
• Receita Pontual
• Receita de Parceiros
• Projeção de Mix de Receita

4. FORMAS DE PAGAMENTO
• Meios aceitos
• Condições de parcelamento
• Política de cobrança

5. OTIMIZAÇÃO DE RECEITA
• Estratégias de aumento de ticket
• Redução de churn
• Maximização de LTV`
  },
  {
    id: "plano-acao-90dias",
    name: "Plano_de_Acao_90_Dias.doc",
    type: "doc",
    size: "234 KB",
    content: `PLANO DE AÇÃO - 90 DIAS

SEMANA 1-2: PREPARAÇÃO
□ Definir estrutura legal (MEI ou ME)
□ Abrir conta PJ
□ Configurar ferramentas básicas
□ Estudar material do modelo
□ Personalizar templates

SEMANA 3-4: ESTRUTURAÇÃO
□ Montar oferta inicial
□ Criar materiais de venda
□ Configurar canais de aquisição
□ Definir processos operacionais
□ Testar fluxo de entrega

SEMANA 5-8: LANÇAMENTO
□ Iniciar divulgação
□ Buscar primeiros clientes
□ Coletar feedbacks
□ Ajustar operação
□ Documentar aprendizados

SEMANA 9-12: OTIMIZAÇÃO
□ Analisar métricas
□ Identificar gargalos
□ Implementar melhorias
□ Escalar o que funciona
□ Planejar próximos 90 dias

MARCOS DE SUCESSO:
• Semana 4: Operação pronta para vender
• Semana 8: Primeiros 5 clientes
• Semana 12: Processo validado e repetível`
  },
  {
    id: "simulador-precificacao",
    name: "Simulador_de_Precificacao.xls",
    type: "xls",
    size: "134 KB",
    content: `SIMULADOR DE PRECIFICAÇÃO
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  CÁLCULO DE PREÇO DE VENDA                                              │
├─────────────────────────────────────────────────────────────────────────┤
│  Item                                    │ Valor      │ % do Preço      │
├──────────────────────────────────────────┼────────────┼─────────────────┤
│  Custo Direto (materiais/insumos)        │ R$ 50,00   │ 20%             │
│  Custo de Mão de Obra (hora)             │ R$ 40,00   │ 16%             │
│  Custos Fixos Rateados                   │ R$ 25,00   │ 10%             │
│  Impostos Estimados                      │ R$ 22,50   │ 9%              │
│  Margem de Lucro Desejada                │ R$ 112,50  │ 45%             │
├──────────────────────────────────────────┼────────────┼─────────────────┤
│  PREÇO DE VENDA SUGERIDO                 │ R$ 250,00  │ 100%            │
└─────────────────────────────────────────────────────────────────────────┘

ANÁLISE DE SENSIBILIDADE
┌───────────────────────┬─────────────┬─────────────┬─────────────────────┐
│  Preço                │ Margem      │ Volume      │ Lucro Mensal        │
├───────────────────────┼─────────────┼─────────────┼─────────────────────┤
│  R$ 200,00            │ 30%         │ 50 un       │ R$ 3.000            │
│  R$ 250,00            │ 45%         │ 40 un       │ R$ 4.500            │
│  R$ 300,00            │ 52%         │ 30 un       │ R$ 4.680            │
│  R$ 350,00            │ 58%         │ 20 un       │ R$ 4.060            │
└───────────────────────┴─────────────┴─────────────┴─────────────────────┘

RECOMENDAÇÃO: Preço ótimo entre R$ 250-300 considerando elasticidade de demanda`
  },
  {
    id: "simulador-receita",
    name: "Simulador_de_Receita_e_LTV.xls",
    type: "xls",
    size: "156 KB",
    content: `SIMULADOR DE RECEITA E LTV (LIFETIME VALUE)
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  PROJEÇÃO DE RECEITA MENSAL                                             │
├─────────────────────────────────────────────────────────────────────────┤
│  Produto/Serviço      │ Preço      │ Qtd/Mês    │ Receita              │
├───────────────────────┼────────────┼────────────┼──────────────────────┤
│  Serviço Principal    │ R$ 300,00  │ 20         │ R$ 6.000,00          │
│  Serviço Complementar │ R$ 150,00  │ 10         │ R$ 1.500,00          │
│  Produto Adicional    │ R$ 80,00   │ 15         │ R$ 1.200,00          │
│  Recorrência/Assinat. │ R$ 99,00   │ 30         │ R$ 2.970,00          │
├───────────────────────┼────────────┼────────────┼──────────────────────┤
│  RECEITA TOTAL        │            │            │ R$ 11.670,00         │
└─────────────────────────────────────────────────────────────────────────┘

CÁLCULO DE LTV (Lifetime Value)
┌─────────────────────────────────────────────────────────────────────────┐
│  Ticket Médio por Cliente           │ R$ 450,00                        │
│  Frequência de Compra (mês)         │ 1,5x                             │
│  Tempo Médio de Retenção (meses)    │ 12                               │
│  Margem de Contribuição             │ 40%                              │
├─────────────────────────────────────┼──────────────────────────────────┤
│  LTV ESTIMADO                       │ R$ 3.240,00                      │
└─────────────────────────────────────┴──────────────────────────────────┘

ANÁLISE LTV vs CAC
• LTV: R$ 3.240,00
• CAC (Custo de Aquisição): R$ 200,00
• Razão LTV/CAC: 16,2x
• Meta saudável: > 3x ✓`
  }
];

// =====================================================
// SETOR FINANCEIRO
// =====================================================
const financeiroFiles: DriveFile[] = [
  {
    id: "projecao-financeira",
    name: "Projecao_Financeira_12_24_36_Meses.xls",
    type: "xls",
    size: "198 KB",
    content: `PROJEÇÃO FINANCEIRA - 12, 24 e 36 MESES
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  PROJEÇÃO ANUAL DE RECEITA                                              │
├─────────────────────────────────────────────────────────────────────────┤
│  Período      │ Clientes Ativos │ Ticket Médio │ Receita Mensal        │
├───────────────┼─────────────────┼──────────────┼───────────────────────┤
│  Ano 1 - Q1   │ 5-15            │ R$ 400       │ R$ 2.000 - 6.000      │
│  Ano 1 - Q2   │ 15-30           │ R$ 420       │ R$ 6.300 - 12.600     │
│  Ano 1 - Q3   │ 30-50           │ R$ 450       │ R$ 13.500 - 22.500    │
│  Ano 1 - Q4   │ 50-80           │ R$ 480       │ R$ 24.000 - 38.400    │
├───────────────┼─────────────────┼──────────────┼───────────────────────┤
│  Ano 2        │ 80-150          │ R$ 500       │ R$ 40.000 - 75.000    │
│  Ano 3        │ 150-300         │ R$ 550       │ R$ 82.500 - 165.000   │
└─────────────────────────────────────────────────────────────────────────┘

DEMONSTRATIVO DE RESULTADO (DRE) - ANO 1
┌─────────────────────────────────────────────────────────────────────────┐
│  Receita Bruta Anual                          │ R$ 180.000             │
│  (-) Impostos (Simples Nacional ~6%)          │ R$ 10.800              │
│  (=) Receita Líquida                          │ R$ 169.200             │
│  (-) Custos Variáveis (~25%)                  │ R$ 45.000              │
│  (=) Margem de Contribuição                   │ R$ 124.200             │
│  (-) Custos Fixos                             │ R$ 48.000              │
│  (=) Lucro Operacional                        │ R$ 76.200              │
│  Margem Operacional                           │ 42%                    │
└─────────────────────────────────────────────────────────────────────────┘

PONTO DE EQUILÍBRIO
• Custos Fixos: R$ 4.000/mês
• Margem de Contribuição: 60%
• Ponto de Equilíbrio: R$ 6.667/mês (17 clientes com ticket de R$ 400)`
  },
  {
    id: "estrutura-custos",
    name: "Estrutura_de_Custos_e_Despesas.xls",
    type: "xls",
    size: "167 KB",
    content: `ESTRUTURA DE CUSTOS E DESPESAS
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  CUSTOS FIXOS MENSAIS                                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  Categoria              │ Descrição                    │ Valor          │
├─────────────────────────┼──────────────────────────────┼────────────────┤
│  Ferramentas            │ Softwares e sistemas         │ R$ 300,00      │
│  Comunicação            │ Telefone e internet          │ R$ 150,00      │
│  Contabilidade          │ Serviços contábeis           │ R$ 200,00      │
│  Marketing              │ Investimento base            │ R$ 500,00      │
│  Outros                 │ Diversos/contingência        │ R$ 150,00      │
├─────────────────────────┼──────────────────────────────┼────────────────┤
│  TOTAL CUSTOS FIXOS     │                              │ R$ 1.300,00    │
└─────────────────────────────────────────────────────────────────────────┘

CUSTOS VARIÁVEIS (por unidade vendida)
┌─────────────────────────┬────────────────────────────────────────────────┐
│  Item                   │ % do Preço de Venda                            │
├─────────────────────────┼────────────────────────────────────────────────┤
│  Materiais/Insumos      │ 15%                                            │
│  Comissões              │ 5%                                             │
│  Taxas de pagamento     │ 3%                                             │
│  Outros variáveis       │ 2%                                             │
├─────────────────────────┼────────────────────────────────────────────────┤
│  TOTAL VARIÁVEL         │ 25%                                            │
└─────────────────────────┴────────────────────────────────────────────────┘

ANÁLISE DE MARGEM
• Preço de Venda: R$ 400,00
• Custos Variáveis: R$ 100,00 (25%)
• Margem de Contribuição: R$ 300,00 (75%)
• Custos Fixos/Cliente: R$ 50,00 (estimativa com 26 clientes)
• Lucro por Cliente: R$ 250,00 (62,5%)`
  },
  {
    id: "guia-metricas-kpis",
    name: "Guia_de_Metricas_e_KPIs.doc",
    type: "doc",
    size: "178 KB",
    content: `GUIA DE MÉTRICAS E KPIs

1. KPIs DE VENDAS
• Leads gerados por mês
• Taxa de conversão (%)
• Ciclo médio de vendas (dias)
• Ticket médio
• CAC (Custo de Aquisição)

2. KPIs DE CLIENTES
• Total de clientes ativos
• Taxa de churn mensal (%)
• NPS (Net Promoter Score)
• LTV (Lifetime Value)
• Razão LTV/CAC

3. KPIs FINANCEIROS
• Receita Bruta Mensal
• Receita Recorrente (MRR)
• Margem de Contribuição (%)
• Lucro Operacional
• Fluxo de Caixa

4. KPIs DE MARKETING
• Alcance nas redes
• Custo por Lead (CPL)
• Taxa de engajamento
• ROI de campanhas

5. KPIs OPERACIONAIS
• Tempo médio de atendimento
• Taxa de resolução no primeiro contato
• Satisfação do cliente
• Produtividade da equipe

METAS SUGERIDAS:
• Mês 3: 20 clientes, R$ 8.000 receita
• Mês 6: 40 clientes, R$ 18.000 receita
• Mês 12: 80 clientes, R$ 40.000 receita`
  },
  {
    id: "volumetria-modelo",
    name: "Volumetria_Esperada_do_Modelo.xls",
    type: "xls",
    size: "145 KB",
    content: `VOLUMETRIA ESPERADA DO MODELO
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  CAPACIDADE OPERACIONAL                                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  Fase           │ Estrutura        │ Clientes Max │ Receita Potencial  │
├─────────────────┼──────────────────┼──────────────┼────────────────────┤
│  Solo (você)    │ 40h/semana       │ 25-30        │ R$ 12.000/mês      │
│  + 1 assistente │ 80h/semana       │ 50-60        │ R$ 27.000/mês      │
│  Equipe (3-5)   │ 160-200h/semana  │ 100-150      │ R$ 60.000/mês      │
│  Escala         │ Processos + Tech │ 300+         │ R$ 150.000+/mês    │
└─────────────────────────────────────────────────────────────────────────┘

TEMPO MÉDIO POR ATIVIDADE
┌─────────────────────────────────────────────────────────────────────────┐
│  Atividade                      │ Tempo Médio    │ Frequência          │
├─────────────────────────────────┼────────────────┼─────────────────────┤
│  Atendimento inicial (lead)     │ 15 min         │ Por lead            │
│  Qualificação e proposta        │ 30 min         │ Por lead qualif.    │
│  Onboarding de cliente          │ 1h             │ Por cliente novo    │
│  Entrega do serviço             │ 2-4h           │ Por cliente/mês     │
│  Suporte e acompanhamento       │ 30 min         │ Por cliente/mês     │
└─────────────────────────────────────────────────────────────────────────┘

PROJEÇÃO DE VOLUME
• Mês 1-3: 5-15 clientes/mês (fase de validação)
• Mês 4-6: 15-30 clientes/mês (fase de crescimento)
• Mês 7-12: 30-50 clientes/mês (fase de consolidação)`
  },
  {
    id: "benchmark-conversao",
    name: "Benchmark_de_Taxas_de_Conversao.xls",
    type: "xls",
    size: "134 KB",
    content: `BENCHMARK DE TAXAS DE CONVERSÃO DO MERCADO
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  TAXAS DE CONVERSÃO POR ETAPA DO FUNIL                                  │
├─────────────────────────────────────────────────────────────────────────┤
│  Etapa                    │ Mercado    │ Meta Inicial │ Meta Otimizada │
├───────────────────────────┼────────────┼──────────────┼────────────────┤
│  Visitante → Lead         │ 2-5%       │ 3%           │ 8%             │
│  Lead → Qualificado       │ 20-40%     │ 25%          │ 50%            │
│  Qualificado → Proposta   │ 40-60%     │ 50%          │ 70%            │
│  Proposta → Fechamento    │ 20-40%     │ 25%          │ 45%            │
├───────────────────────────┼────────────┼──────────────┼────────────────┤
│  CONVERSÃO TOTAL          │ 0,1-0,5%   │ 0,09%        │ 1,26%          │
└─────────────────────────────────────────────────────────────────────────┘

TAXAS POR CANAL DE AQUISIÇÃO
┌─────────────────────────────────────────────────────────────────────────┐
│  Canal              │ CPL Médio   │ Conversão    │ CAC Final           │
├─────────────────────┼─────────────┼──────────────┼─────────────────────┤
│  Indicação          │ R$ 0        │ 40-60%       │ R$ 50 (incentivo)   │
│  Orgânico (Redes)   │ R$ 5-15     │ 8-15%        │ R$ 100-200          │
│  Google Ads         │ R$ 20-50    │ 15-25%       │ R$ 150-300          │
│  Meta Ads           │ R$ 10-30    │ 5-12%        │ R$ 150-400          │
│  Parcerias          │ R$ 15-25    │ 20-35%       │ R$ 80-150           │
└─────────────────────────────────────────────────────────────────────────┘

META DE AQUISIÇÃO
Para atingir 20 novos clientes/mês:
• Indicações (30%): 6 clientes | R$ 300
• Orgânico (25%): 5 clientes | R$ 750
• Ads (30%): 6 clientes | R$ 1.350
• Parcerias (15%): 3 clientes | R$ 360
• Total investimento: R$ 2.760 | CAC médio: R$ 138`
  },
  {
    id: "dashboard-kpis",
    name: "Dashboard_de_KPIs_do_Negocio.xls",
    type: "xls",
    size: "189 KB",
    content: `DASHBOARD DE KPIs DO NEGÓCIO
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│  VISÃO GERAL DO MÊS                              Data: ___/___/______  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   RECEITA          CLIENTES         LEADS           NPS                 │
│   R$ ______        ____ ativos      ____ novos      ____ pts           │
│   Meta: R$____     Meta: ____       Meta: ____      Meta: 50+          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

DETALHAMENTO DE MÉTRICAS
┌─────────────────────────────────────────────────────────────────────────┐
│  KPI                        │ Realizado  │ Meta       │ Status          │
├─────────────────────────────┼────────────┼────────────┼─────────────────┤
│  Receita Bruta              │ R$         │ R$         │ 🟢🟡🔴          │
│  Novos Clientes             │            │            │ 🟢🟡🔴          │
│  Taxa de Churn              │     %      │   <5%      │ 🟢🟡🔴          │
│  Ticket Médio               │ R$         │ R$         │ 🟢🟡🔴          │
│  CAC                        │ R$         │ R$         │ 🟢🟡🔴          │
│  NPS                        │            │    50+     │ 🟢🟡🔴          │
└─────────────────────────────────────────────────────────────────────────┘

GRÁFICOS (Preencher com dados reais)
┌─────────────────────────────────────────────────────────────────────────┐
│  Receita Mensal (últimos 6 meses)                                       │
│  |                                                                      │
│  |                                          ████                        │
│  |                              ████        ████                        │
│  |                  ████        ████        ████                        │
│  |      ████        ████        ████        ████                        │
│  |______|____|______|____|______|____|______|____|______                │
│         M1          M2          M3          M4                          │
└─────────────────────────────────────────────────────────────────────────┘

NOTAS DO PERÍODO:
[Registre insights, desafios e próximas ações]`
  }
];

// =====================================================
// SETOR JURÍDICO
// =====================================================
const juridicoFiles: DriveFile[] = [
  {
    id: "contrato-servico",
    name: "Modelo_de_Contrato_Servico.doc",
    type: "doc",
    size: "189 KB",
    content: `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

═══════════════════════════════════════════════════════════════════════════

CONTRATANTE: [Nome/Razão Social], inscrito no CPF/CNPJ sob nº [número], 
com endereço em [endereço completo], doravante denominado CONTRATANTE.

CONTRATADA: [Sua Empresa], inscrita no CNPJ sob nº [número], 
com endereço em [endereço], doravante denominada CONTRATADA.

───────────────────────────────────────────────────────────────────────────
CLÁUSULA 1ª - DO OBJETO
───────────────────────────────────────────────────────────────────────────
A CONTRATADA prestará ao CONTRATANTE os seguintes serviços:
[Descrever detalhadamente os serviços]

───────────────────────────────────────────────────────────────────────────
CLÁUSULA 2ª - DO PRAZO
───────────────────────────────────────────────────────────────────────────
O presente contrato vigorará por [período], iniciando-se em [data] e 
encerrando-se em [data], podendo ser renovado mediante acordo entre as partes.

───────────────────────────────────────────────────────────────────────────
CLÁUSULA 3ª - DO VALOR E FORMA DE PAGAMENTO
───────────────────────────────────────────────────────────────────────────
Pela prestação dos serviços, o CONTRATANTE pagará à CONTRATADA o valor de 
R$ [valor], conforme condições: [condições de pagamento].

───────────────────────────────────────────────────────────────────────────
CLÁUSULA 4ª - DAS OBRIGAÇÕES
───────────────────────────────────────────────────────────────────────────
[Listar obrigações de cada parte]

───────────────────────────────────────────────────────────────────────────
CLÁUSULA 5ª - DA RESCISÃO
───────────────────────────────────────────────────────────────────────────
O presente contrato poderá ser rescindido por qualquer das partes mediante 
aviso prévio de 30 (trinta) dias.

[Local], [Data]

_______________________          _______________________
CONTRATANTE                      CONTRATADA`
  },
  {
    id: "guia-estruturacao-juridica",
    name: "Guia_de_Estruturacao_Juridica.doc",
    type: "doc",
    size: "234 KB",
    content: `GUIA DE ESTRUTURAÇÃO JURÍDICA E OPERACIONAL

1. ESCOLHA DA NATUREZA JURÍDICA
═══════════════════════════════

MEI (Microempreendedor Individual)
• Faturamento: até R$ 81.000/ano
• Tributos: R$ 70-75/mês (DAS fixo)
• Limite: 1 funcionário
• Ideal para: Início de operação

ME (Microempresa)
• Faturamento: até R$ 360.000/ano
• Tributos: Simples Nacional (6-12%)
• Funcionários: Sem limite
• Ideal para: Crescimento

2. REGIME TRIBUTÁRIO
════════════════════

Simples Nacional (Recomendado)
• Anexo III: Serviços (6% inicial)
• Anexo V: Serviços profissionais
• Vantagens: Simplicidade, alíquota única

3. LICENÇAS E AUTORIZAÇÕES
══════════════════════════

Necessárias:
□ CNPJ
□ Inscrição Municipal
□ Alvará de Funcionamento
□ Licenças específicas do setor

4. DOCUMENTAÇÃO BÁSICA
═════════════════════

• Contrato Social (ME) ou CCMEI
• Certificado Digital (e-CPF ou e-CNPJ)
• Conta bancária PJ
• Notas fiscais (NFS-e)

5. COMPLIANCE E BOAS PRÁTICAS
════════════════════════════

• LGPD: Política de privacidade
• Contratos: Sempre por escrito
• Comprovantes: Guardar por 5 anos
• Contabilidade: Manter em dia`
  },
  {
    id: "politica-privacidade",
    name: "Modelo_Politica_de_Privacidade.doc",
    type: "doc",
    size: "156 KB",
    content: `POLÍTICA DE PRIVACIDADE

[NOME DA EMPRESA] ("nós" ou "empresa") está comprometida em proteger 
sua privacidade. Esta Política de Privacidade explica como coletamos, 
usamos e protegemos suas informações pessoais.

1. INFORMAÇÕES QUE COLETAMOS
════════════════════════════
• Nome e dados de contato
• Informações de pagamento
• Dados de uso do serviço
• Comunicações conosco

2. COMO USAMOS SUAS INFORMAÇÕES
═══════════════════════════════
• Prestar e melhorar nossos serviços
• Processar pagamentos
• Enviar comunicações relevantes
• Cumprir obrigações legais

3. COMPARTILHAMENTO DE DADOS
════════════════════════════
Não vendemos seus dados. Compartilhamos apenas com:
• Processadores de pagamento
• Prestadores de serviços essenciais
• Quando exigido por lei

4. SEUS DIREITOS (LGPD)
═══════════════════════
Você tem direito a:
• Acessar seus dados
• Corrigir informações incorretas
• Solicitar exclusão de dados
• Revogar consentimento

5. CONTATO
══════════
Para dúvidas sobre privacidade:
Email: [email]
Telefone: [telefone]

Última atualização: [Data]`
  },
  {
    id: "termos-uso",
    name: "Modelo_Termos_de_Uso.doc",
    type: "doc",
    size: "167 KB",
    content: `TERMOS DE USO

Bem-vindo aos serviços da [NOME DA EMPRESA]. Ao utilizar nossos 
serviços, você concorda com estes Termos de Uso.

1. ACEITAÇÃO DOS TERMOS
═══════════════════════
Ao contratar ou usar nossos serviços, você concorda integralmente 
com estes termos. Se não concordar, não utilize os serviços.

2. DESCRIÇÃO DOS SERVIÇOS
═════════════════════════
[Descrever os serviços oferecidos]

3. CADASTRO E CONTA
═══════════════════
• Informações precisas e atualizadas
• Confidencialidade da senha
• Responsabilidade por atividades na conta

4. USO ACEITÁVEL
════════════════
Você se compromete a:
• Não violar leis ou regulamentos
• Não infringir direitos de terceiros
• Não usar para fins ilícitos
• Respeitar propriedade intelectual

5. PAGAMENTOS
═════════════
• Preços conforme contratado
• Política de reembolso: [descrever]
• Consequências de inadimplência

6. LIMITAÇÃO DE RESPONSABILIDADE
════════════════════════════════
[Descrever limitações aplicáveis]

7. RESCISÃO
═══════════
Podemos encerrar o acesso por violação destes termos.

8. ALTERAÇÕES
═════════════
Podemos modificar estes termos a qualquer momento, 
notificando com antecedência razoável.

9. FORO
═══════
Fica eleito o foro de [cidade/estado] para dirimir questões.

Data de vigência: [Data]`
  }
];

// =====================================================
// SETOR OPERACIONAL
// =====================================================
const operacionalFiles: DriveFile[] = [
  {
    id: "guia-processos-operacionais",
    name: "Guia_de_Processos_Operacionais.doc",
    type: "doc",
    size: "245 KB",
    content: `GUIA DE PROCESSOS OPERACIONAIS

1. PROCESSO DE ATENDIMENTO AO CLIENTE
═════════════════════════════════════

ETAPA 1: Primeiro Contato
• Responder em até 2 horas (horário comercial)
• Usar template de boas-vindas
• Identificar necessidade principal
• Agendar conversa se necessário

ETAPA 2: Qualificação
• Aplicar perguntas de qualificação
• Verificar fit com o serviço
• Identificar urgência e orçamento
• Definir próximo passo

ETAPA 3: Proposta
• Preparar proposta personalizada
• Enviar em até 24 horas
• Fazer follow-up em 2-3 dias
• Negociar se necessário

ETAPA 4: Fechamento
• Enviar contrato para assinatura
• Processar pagamento
• Confirmar início
• Iniciar onboarding

2. PROCESSO DE ENTREGA
══════════════════════

ETAPA 1: Onboarding
• Enviar boas-vindas estruturadas
• Coletar informações necessárias
• Alinhar expectativas
• Definir cronograma

ETAPA 2: Execução
• Realizar entregas conforme acordado
• Manter comunicação ativa
• Documentar progresso
• Reportar status

ETAPA 3: Finalização
• Entregar resultado final
• Coletar feedback
• Solicitar avaliação/depoimento
• Oferecer próximos passos

3. PROCESSOS DE SUPORTE
═══════════════════════

• Canais de atendimento
• Tempo de resposta esperado
• Escalação de problemas
• Registro de atendimentos`
  },
  {
    id: "checklist-diario",
    name: "Checklist_Operacional_Diario.doc",
    type: "doc",
    size: "123 KB",
    content: `CHECKLIST OPERACIONAL DIÁRIO

═══════════════════════════════════════
INÍCIO DO DIA (Primeiros 30 minutos)
═══════════════════════════════════════

□ Verificar mensagens recebidas (WhatsApp, email)
□ Responder mensagens urgentes
□ Revisar agenda do dia
□ Priorizar tarefas mais importantes
□ Preparar ambiente de trabalho

═══════════════════════════════════════
DURANTE O DIA
═══════════════════════════════════════

ATENDIMENTO:
□ Responder leads em até 2h
□ Fazer follow-ups agendados
□ Atualizar status de propostas
□ Registrar conversas importantes

ENTREGAS:
□ Executar tarefas de clientes
□ Atualizar progresso de projetos
□ Comunicar status aos clientes
□ Documentar entregas realizadas

MARKETING:
□ Publicar conteúdo programado
□ Responder comentários/mensagens
□ Interagir em comunidades

═══════════════════════════════════════
FIM DO DIA (Últimos 30 minutos)
═══════════════════════════════════════

□ Revisar tarefas concluídas
□ Atualizar planilha de controle
□ Planejar próximo dia
□ Responder mensagens pendentes
□ Fazer backup de documentos

═══════════════════════════════════════
SEMANAL (Sexta-feira)
═══════════════════════════════════════

□ Revisar métricas da semana
□ Analisar pipeline de vendas
□ Planejar próxima semana
□ Fazer gestão financeira`
  },
  {
    id: "fluxo-atendimento",
    name: "Fluxograma_de_Atendimento.doc",
    type: "doc",
    size: "145 KB",
    content: `FLUXOGRAMA DE ATENDIMENTO

═══════════════════════════════════════════════════════════════════════════

                        ┌─────────────────┐
                        │ LEAD CHEGA      │
                        └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │ Resposta em 2h  │
                        │ (boas-vindas)   │
                        └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │ QUALIFICAÇÃO    │
                        │ (perguntas-chave)│
                        └────────┬────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
     ┌────────▼────────┐  ┌──────▼──────┐  ┌───────▼───────┐
     │ NÃO QUALIFICADO │  │ QUALIFICADO │  │ FRIO/AGUARDAR │
     │ (agradece e     │  │ (envia      │  │ (nutrição)    │
     │  finaliza)      │  │  proposta)  │  │               │
     └─────────────────┘  └──────┬──────┘  └───────────────┘
                                 │
                        ┌────────▼────────┐
                        │ FOLLOW-UP       │
                        │ (2-3 dias)      │
                        └────────┬────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
     ┌────────▼────────┐  ┌──────▼──────┐  ┌───────▼───────┐
     │ RECUSOU         │  │ FECHOU      │  │ PENSANDO      │
     │ (feedback +     │  │ (contrato + │  │ (novo follow) │
     │  arquivo)       │  │  onboarding)│  │               │
     └─────────────────┘  └─────────────┘  └───────────────┘

═══════════════════════════════════════════════════════════════════════════

TEMPOS ESPERADOS:
• Primeiro contato: até 2 horas
• Qualificação: 10-15 minutos
• Proposta: até 24 horas
• Follow-up: 2-3 dias
• Onboarding: em até 48h após fechamento`
  },
  {
    id: "controle-qualidade",
    name: "Checklist_Controle_de_Qualidade.doc",
    type: "doc",
    size: "134 KB",
    content: `CHECKLIST DE CONTROLE DE QUALIDADE

1. ANTES DA ENTREGA
═══════════════════

□ O trabalho está completo conforme escopo?
□ Revisão feita por outra pessoa (ou revisar após pausa)?
□ Todos os itens do checklist do serviço cumpridos?
□ Qualidade visual/estética adequada?
□ Testado/validado antes de enviar?
□ Documentação preparada?

2. DURANTE A ENTREGA
════════════════════

□ Cliente avisado previamente?
□ Explicações claras fornecidas?
□ Orientações de uso incluídas?
□ Próximos passos definidos?
□ Suporte pós-entrega explicado?

3. APÓS A ENTREGA
═════════════════

□ Confirmação de recebimento obtida?
□ Dúvidas esclarecidas?
□ Feedback coletado?
□ Ajustes necessários identificados?
□ Caso de sucesso documentado?

4. MÉTRICAS DE QUALIDADE
════════════════════════

□ Taxa de retrabalho: < 10%
□ NPS: > 50 pontos
□ Entregas no prazo: > 90%
□ Reclamações: < 5%
□ Avaliações positivas: > 80%

5. AÇÕES DE MELHORIA
════════════════════

[Registrar aqui problemas identificados e ações tomadas]
Data: ___/___/___
Problema: _______________________
Ação: __________________________
Responsável: ____________________
Prazo: _________________________`
  },
  {
    id: "ferramentas-recomendadas",
    name: "Lista_de_Ferramentas_Essenciais.doc",
    type: "doc",
    size: "156 KB",
    content: `LISTA DE FERRAMENTAS ESSENCIAIS

1. COMUNICAÇÃO E ATENDIMENTO
════════════════════════════

WhatsApp Business (Gratuito)
• Perfil comercial
• Catálogo de produtos
• Mensagens automáticas
• Etiquetas de organização

Email Profissional (R$ 10-25/mês)
• Gmail Workspace ou
• Zoho Mail
• Domínio próprio

2. GESTÃO E ORGANIZAÇÃO
═══════════════════════

Notion / Trello (Gratuito)
• Gestão de tarefas
• Base de conhecimento
• Organização de projetos

Google Workspace (Gratuito/Pago)
• Drive para arquivos
• Sheets para planilhas
• Docs para documentos
• Calendar para agenda

3. MARKETING E VENDAS
═════════════════════

Canva (Gratuito/Pro)
• Criação de posts
• Materiais de marketing
• Apresentações

RD Station / Mailchimp (Gratuito/Pago)
• Email marketing
• Automações básicas
• Landing pages

4. FINANCEIRO
═════════════

Conta Digital PJ
• Inter, Nubank, C6, etc.
• Sem taxas de manutenção
• Integração com sistemas

Nota Fiscal (Varia por cidade)
• NFS-e municipal
• Sistemas de emissão

5. AUTOMAÇÃO
════════════

Zapier / Make (Gratuito/Pago)
• Automação entre apps
• Integrações simples
• Economiza tempo`
  }
];

// =====================================================
// ESTRUTURA FINAL DE PASTAS
// =====================================================
export const driveFolders: DriveFolder[] = [
  {
    id: "administrativo",
    name: "Administrativo",
    icon: "🏢",
    files: adminFiles
  },
  {
    id: "recursos-humanos",
    name: "Recursos Humanos",
    icon: "👥",
    files: rhFiles
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "📈",
    files: marketingFiles
  },
  {
    id: "comercial",
    name: "Comercial / Vendas",
    icon: "💼",
    files: comercialFiles
  },
  {
    id: "financeiro",
    name: "Financeiro",
    icon: "💰",
    files: financeiroFiles
  },
  {
    id: "juridico",
    name: "Jurídico",
    icon: "⚖️",
    files: juridicoFiles
  },
  {
    id: "operacional",
    name: "Operacional",
    icon: "⚙️",
    files: operacionalFiles
  }
];

// Função para contar total de arquivos
export const getTotalFiles = (): number => {
  return driveFolders.reduce((total, folder) => total + folder.files.length, 0);
};

// Função para obter arquivos por tipo
export const getFilesByType = (type: "doc" | "xls"): DriveFile[] => {
  return driveFolders.flatMap(folder => folder.files.filter(file => file.type === type));
};

// Função para buscar arquivo por ID
export const getFileById = (fileId: string): DriveFile | undefined => {
  for (const folder of driveFolders) {
    const file = folder.files.find(f => f.id === fileId);
    if (file) return file;
  }
  return undefined;
};
