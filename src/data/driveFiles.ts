// Estrutura de pastas e arquivos do Drive para cada modelo de negócio
export interface DriveFile {
  id: string;
  name: string;
  type: "doc" | "xls";
  size: string;
  content: string; // Conteúdo pré-visualizável
}

export interface DriveFolder {
  id: string;
  name: string;
  icon: string;
  files: DriveFile[];
}

// Documentos .DOC com conteúdo fixado
export const docFiles: DriveFile[] = [
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
    name: "Descricao_Completa_do_Modelo_de_Negocio.doc",
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
    id: "proposta-valor",
    name: "Proposta_de_Valor_e_Posicionamento.doc",
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
    id: "scripts-atendimento",
    name: "Scripts_de_Atendimento_e_Onboarding.doc",
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
O que podemos melhorar?"`
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
Breve apresentação da empresa e credenciais.

───────────────────────────────────
2. ENTENDIMENTO DA NECESSIDADE
• Desafio atual do cliente
• Impacto do problema
• Resultado desejado

───────────────────────────────────
3. SOLUÇÃO PROPOSTA
Descrição detalhada do que será entregue:
✓ Item 1
✓ Item 2
✓ Item 3

───────────────────────────────────
4. INVESTIMENTO
Opção 1: R$ XXX (descrição)
Opção 2: R$ XXX (descrição) ★ RECOMENDADO
Opção 3: R$ XXX (descrição)

Condições: [pagamento]

───────────────────────────────────
5. PRÓXIMOS PASSOS
1. Aprovação desta proposta
2. Envio do contrato
3. Início em [data]

───────────────────────────────────
ACEITE: ___________________________`
  },
  {
    id: "contrato-servico",
    name: "Modelo_de_Contrato_Servico.doc",
    type: "doc",
    size: "178 KB",
    content: `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

IDENTIFICAÇÃO DAS PARTES:

CONTRATADA: [Razão Social], inscrita no CNPJ sob nº [XX.XXX.XXX/0001-XX], com sede em [endereço].

CONTRATANTE: [Nome/Razão Social], inscrito no CPF/CNPJ sob nº [XXX], residente/com sede em [endereço].

CLÁUSULA 1ª - DO OBJETO
O presente contrato tem por objeto a prestação de serviços de [descrição do serviço].

CLÁUSULA 2ª - DO PRAZO
O presente contrato terá vigência de [X] meses, iniciando em [data] e terminando em [data].

CLÁUSULA 3ª - DO VALOR E PAGAMENTO
Pela prestação dos serviços, o CONTRATANTE pagará à CONTRATADA o valor de R$ [XXX], nas seguintes condições: [forma de pagamento].

CLÁUSULA 4ª - DAS OBRIGAÇÕES
4.1 Da Contratada: [obrigações]
4.2 Do Contratante: [obrigações]

CLÁUSULA 5ª - DA RESCISÃO
[Condições de rescisão]

CLÁUSULA 6ª - DO FORO
Fica eleito o foro da comarca de [cidade/UF].

[Local], [data].

_______________________     _______________________
      CONTRATADA                 CONTRATANTE`
  },
  {
    id: "guia-processos",
    name: "Guia_de_Processos_Operacionais.doc",
    type: "doc",
    size: "234 KB",
    content: `GUIA DE PROCESSOS OPERACIONAIS

1. FLUXO DIÁRIO
━━━━━━━━━━━━━━━━━━━━━━━━
08:00 - Verificar mensagens e leads
09:00 - Atendimentos agendados
12:00 - Pausa / Almoço
14:00 - Produção / Entregas
17:00 - Follow-ups e fechamentos
18:00 - Planejamento do dia seguinte

2. PROCESSO DE ATENDIMENTO
Etapa 1: Recepção do lead
Etapa 2: Qualificação
Etapa 3: Agendamento
Etapa 4: Apresentação
Etapa 5: Proposta
Etapa 6: Fechamento
Etapa 7: Onboarding

3. PROCESSO DE ENTREGA
• Confirmação do pedido
• Preparação do serviço
• Execução
• Verificação de qualidade
• Entrega ao cliente
• Pós-entrega

4. GESTÃO DE ESTOQUE/MATERIAIS
• Lista de materiais necessários
• Fornecedores aprovados
• Ponto de reposição
• Controle de validade

5. ROTINAS SEMANAIS/MENSAIS
• Segunda: Planejamento da semana
• Sexta: Revisão de resultados
• Dia 1: Fechamento financeiro
• Dia 15: Análise de métricas`
  },
  {
    id: "manual-implementacao",
    name: "Manual_de_Implementacao_do_Modelo.doc",
    type: "doc",
    size: "298 KB",
    content: `MANUAL DE IMPLEMENTAÇÃO DO MODELO

INTRODUÇÃO
Este manual guia você passo a passo na implementação do modelo de negócio, desde a preparação até a operação plena.

FASE 1: PREPARAÇÃO (Semana 1-2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Estudar todo o material do pack
□ Definir estrutura jurídica
□ Abrir CNPJ (se necessário)
□ Criar conta bancária PJ
□ Configurar ferramentas digitais

FASE 2: ESTRUTURAÇÃO (Semana 3-4)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Personalizar templates
□ Definir preços finais
□ Criar materiais de divulgação
□ Configurar canais de venda
□ Preparar ambiente de trabalho

FASE 3: LANÇAMENTO (Semana 5-8)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Iniciar divulgação
□ Buscar primeiros clientes
□ Executar primeiras entregas
□ Coletar feedback
□ Ajustar processos

FASE 4: OTIMIZAÇÃO (Semana 9-12)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Analisar resultados
□ Identificar pontos de melhoria
□ Implementar ajustes
□ Documentar aprendizados
□ Preparar para escala`
  },
  {
    id: "checklist-implementacao",
    name: "Checklist_de_Implementacao.doc",
    type: "doc",
    size: "123 KB",
    content: `CHECKLIST DE IMPLEMENTAÇÃO

DOCUMENTAÇÃO LEGAL
□ MEI ou ME aberto
□ Alvará de funcionamento
□ Licenças específicas do setor
□ Conta bancária PJ
□ Certificado digital (se necessário)

FERRAMENTAS DIGITAIS
□ WhatsApp Business configurado
□ Conta de e-mail profissional
□ Sistema de gestão (CRM)
□ Meio de pagamento (maquininha/online)
□ Redes sociais criadas

MATERIAIS DE VENDA
□ Lista de preços
□ Catálogo de serviços
□ Cartão de visita
□ Proposta comercial
□ Contrato padrão

ESTRUTURA OPERACIONAL
□ Local de trabalho definido
□ Equipamentos necessários
□ Materiais de trabalho
□ Fornecedores selecionados
□ Rotina operacional definida

MARKETING INICIAL
□ Perfil do Instagram completo
□ Google Meu Negócio
□ 10 primeiros posts prontos
□ Lista de contatos inicial
□ Campanha de lançamento

FINANCEIRO
□ Planilha de controle
□ Conta separada
□ Reserva de emergência
□ Metas mensais definidas`
  },
  {
    id: "guia-metricas",
    name: "Guia_de_Metricas_e_KPIs.doc",
    type: "doc",
    size: "156 KB",
    content: `GUIA DE MÉTRICAS E KPIs

MÉTRICAS DE AQUISIÇÃO
━━━━━━━━━━━━━━━━━━━━
• Leads gerados por mês
• Taxa de conversão (leads → clientes)
• CAC (Custo de Aquisição de Cliente)
• Canais mais eficientes

MÉTRICAS DE RECEITA
━━━━━━━━━━━━━━━━━━
• Receita Mensal (MRR)
• Ticket Médio
• Receita por Cliente
• Crescimento mês a mês (%)

MÉTRICAS DE RETENÇÃO
━━━━━━━━━━━━━━━━━━━━
• Taxa de retenção mensal
• Taxa de churn
• LTV (Lifetime Value)
• NPS (Net Promoter Score)

MÉTRICAS OPERACIONAIS
━━━━━━━━━━━━━━━━━━━━━
• Tempo médio de atendimento
• Taxa de conclusão
• Satisfação do cliente
• Produtividade (entregas/dia)

MÉTRICAS FINANCEIRAS
━━━━━━━━━━━━━━━━━━━━
• Margem de lucro
• Ponto de equilíbrio
• ROI de marketing
• Fluxo de caixa

COMO ACOMPANHAR:
• Diário: Leads, atendimentos
• Semanal: Vendas, conversão
• Mensal: Receita, custos, lucro
• Trimestral: LTV, CAC, NPS`
  },
  {
    id: "faq-estrategico",
    name: "FAQ_Estrategico_do_Modelo.doc",
    type: "doc",
    size: "189 KB",
    content: `FAQ ESTRATÉGICO DO MODELO

PERGUNTAS SOBRE O NEGÓCIO

P: Quanto preciso investir para começar?
R: O investimento inicial varia de R$ [X] a R$ [Y], dependendo da estrutura escolhida. O detalhamento está na planilha de custos.

P: Em quanto tempo começo a ter lucro?
R: O payback médio é de [X] meses, considerando uma execução dentro do cronograma sugerido.

P: Preciso de funcionários?
R: Inicialmente não. O modelo foi pensado para operação solo. Funcionários podem ser contratados na fase de escala.

P: Posso fazer isso como renda extra?
R: Sim, mas dedicação parcial pode estender o prazo de resultados.

PERGUNTAS SOBRE IMPLEMENTAÇÃO

P: Por onde devo começar?
R: Siga o checklist de implementação. Comece pela documentação legal e ferramentas.

P: E se eu não tiver experiência na área?
R: O modelo inclui todo o treinamento necessário. Use o Consultor IA para dúvidas específicas.

PERGUNTAS SOBRE VENDAS

P: Como consigo os primeiros clientes?
R: Use a estratégia dos "círculos concêntricos" no Plano de Aquisição.

P: O que fazer se ninguém comprar?
R: Revise a precificação e ajuste a comunicação. Consulte o FAQ de objeções.`
  }
];

// Planilhas .XLS com conteúdo fixado
export const xlsFiles: DriveFile[] = [
  {
    id: "projecao-financeira",
    name: "Projecao_Financeira_12_24_36_Meses.xls",
    type: "xls",
    size: "156 KB",
    content: `PROJEÇÃO FINANCEIRA

| MÊS | RECEITA | CUSTOS | LUCRO |
|-----|---------|--------|-------|
| 1   | R$ 2.000 | R$ 1.500 | R$ 500 |
| 2   | R$ 3.500 | R$ 1.800 | R$ 1.700 |
| 3   | R$ 5.000 | R$ 2.000 | R$ 3.000 |
| 6   | R$ 8.000 | R$ 3.000 | R$ 5.000 |
| 12  | R$ 15.000 | R$ 5.000 | R$ 10.000 |
| 24  | R$ 25.000 | R$ 8.000 | R$ 17.000 |
| 36  | R$ 40.000 | R$ 12.000 | R$ 28.000 |

CENÁRIOS:
• Conservador: -20%
• Realista: Base
• Otimista: +30%

PREMISSAS:
• Ticket médio: R$ [X]
• Clientes por mês: [Y]
• Taxa de crescimento: [Z]%`
  },
  {
    id: "estrutura-custos",
    name: "Estrutura_de_Custos_e_Despesas.xls",
    type: "xls",
    size: "98 KB",
    content: `ESTRUTURA DE CUSTOS E DESPESAS

CUSTOS FIXOS MENSAIS
━━━━━━━━━━━━━━━━━━━
| ITEM | VALOR |
|------|-------|
| Aluguel/Coworking | R$ 500 |
| Internet | R$ 100 |
| Telefone | R$ 50 |
| Software/Ferramentas | R$ 150 |
| Contador | R$ 200 |
| Marketing | R$ 300 |
| Outros | R$ 100 |
| TOTAL | R$ 1.400 |

CUSTOS VARIÁVEIS
━━━━━━━━━━━━━━━━
| ITEM | % RECEITA |
|------|-----------|
| Materiais | 15% |
| Comissões | 5% |
| Impostos (MEI) | 5% |
| TOTAL | 25% |

INVESTIMENTO INICIAL
━━━━━━━━━━━━━━━━━━━
| ITEM | VALOR |
|------|-------|
| Equipamentos | R$ 2.000 |
| Marketing inicial | R$ 500 |
| Capital de giro | R$ 2.000 |
| TOTAL | R$ 4.500 |`
  },
  {
    id: "simulador-precificacao",
    name: "Simulador_de_Precificacao.xls",
    type: "xls",
    size: "87 KB",
    content: `SIMULADOR DE PRECIFICAÇÃO

CÁLCULO DO PREÇO DE VENDA
━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOS DIRETOS
| Item | Valor |
|------|-------|
| Material | R$ 30 |
| Mão de obra | R$ 50 |
| Deslocamento | R$ 20 |
| SUBTOTAL | R$ 100 |

DESPESAS INDIRETAS (30%)
| Item | Valor |
|------|-------|
| Overhead | R$ 30 |

IMPOSTOS (15%)
| Item | Valor |
|------|-------|
| Tributos | R$ 22,50 |

MARGEM DE LUCRO (25%)
| Item | Valor |
|------|-------|
| Lucro | R$ 50 |

═══════════════════════
PREÇO FINAL: R$ 202,50
═══════════════════════

ARREDONDAMENTO SUGERIDO: R$ 199,00
MARKUP TOTAL: 2,0x`
  },
  {
    id: "simulador-receita-ltv",
    name: "Simulador_de_Receita_e_LTV.xls",
    type: "xls",
    size: "92 KB",
    content: `SIMULADOR DE RECEITA E LTV

DADOS DO CLIENTE
━━━━━━━━━━━━━━━
Ticket Médio: R$ 150
Frequência/Mês: 2x
Tempo de Retenção: 12 meses
Taxa de Churn: 5%

CÁLCULOS
━━━━━━━━
Receita Mensal por Cliente: R$ 300
Receita Anual por Cliente: R$ 3.600

LTV (Lifetime Value): R$ 3.600

CAC Máximo Recomendado (30% LTV): R$ 1.080
CAC Ideal (20% LTV): R$ 720

PROJEÇÃO DE RECEITA
| Clientes | Receita/Mês |
|----------|-------------|
| 10 | R$ 3.000 |
| 25 | R$ 7.500 |
| 50 | R$ 15.000 |
| 100 | R$ 30.000 |

META PARA PRIMEIRO ANO:
50 clientes = R$ 15.000/mês`
  },
  {
    id: "volumetria-esperada",
    name: "Volumetria_Esperada_do_Modelo.xls",
    type: "xls",
    size: "76 KB",
    content: `VOLUMETRIA ESPERADA DO MODELO

CAPACIDADE OPERACIONAL
━━━━━━━━━━━━━━━━━━━━━
| Métrica | Valor |
|---------|-------|
| Atendimentos/Dia | 5 |
| Dias Trabalhados/Mês | 22 |
| Capacidade Mensal | 110 |
| Taxa de Ocupação Ideal | 70% |
| Atendimentos Reais | 77 |

FUNIL DE VENDAS MENSAL
━━━━━━━━━━━━━━━━━━━━━
| Etapa | Volume | Taxa |
|-------|--------|------|
| Leads | 200 | 100% |
| Qualificados | 100 | 50% |
| Propostas | 50 | 25% |
| Fechamentos | 15 | 7,5% |

PROJEÇÃO POR MATURIDADE
| Mês | Volume |
|-----|--------|
| 1-3 | 20% capacidade |
| 4-6 | 40% capacidade |
| 7-9 | 60% capacidade |
| 10-12 | 80% capacidade |`
  },
  {
    id: "benchmark-conversao",
    name: "Benchmark_de_Taxas_de_Conversao.xls",
    type: "xls",
    size: "68 KB",
    content: `BENCHMARK DE TAXAS DE CONVERSÃO

FUNIL DE MARKETING
━━━━━━━━━━━━━━━━━
| Etapa | Taxa Mercado | Meta |
|-------|--------------|------|
| Impressão → Clique | 1-3% | 2% |
| Clique → Lead | 5-15% | 10% |
| Lead → MQL | 20-40% | 30% |
| MQL → SQL | 30-50% | 40% |

FUNIL DE VENDAS
━━━━━━━━━━━━━━━
| Etapa | Taxa Mercado | Meta |
|-------|--------------|------|
| SQL → Reunião | 40-60% | 50% |
| Reunião → Proposta | 50-70% | 60% |
| Proposta → Fechamento | 20-40% | 30% |

CONVERSÃO TOTAL
━━━━━━━━━━━━━━━
Lead → Cliente: 5-10%
Meta: 7,5%

RETENÇÃO
━━━━━━━━
| Métrica | Benchmark | Meta |
|---------|-----------|------|
| Retenção Mensal | 90-95% | 93% |
| Churn Mensal | 5-10% | 7% |
| NPS | 40-60 | 50 |`
  },
  {
    id: "controle-leads",
    name: "Controle_de_Leads_e_Funil.xls",
    type: "xls",
    size: "112 KB",
    content: `CONTROLE DE LEADS E FUNIL

REGISTRO DE LEADS
━━━━━━━━━━━━━━━━
| Data | Nome | Contato | Origem | Status |
|------|------|---------|--------|--------|
| ___  | ___  | _______ | ______ | ______ |
| ___  | ___  | _______ | ______ | ______ |

STATUS POSSÍVEIS:
• Novo
• Qualificado
• Em negociação
• Proposta enviada
• Fechado
• Perdido

RESUMO DO FUNIL
━━━━━━━━━━━━━━━
| Status | Qtd | % |
|--------|-----|---|
| Novos | ___ | _% |
| Qualificados | ___ | _% |
| Em negociação | ___ | _% |
| Proposta | ___ | _% |
| Fechados | ___ | _% |

ANÁLISE POR ORIGEM
| Origem | Leads | Fechados | Conv. |
|--------|-------|----------|-------|
| Instagram | ___ | ___ | __% |
| Indicação | ___ | ___ | __% |
| Google | ___ | ___ | __% |
| WhatsApp | ___ | ___ | __% |`
  },
  {
    id: "dashboard-kpis",
    name: "Dashboard_de_KPIs_do_Negocio.xls",
    type: "xls",
    size: "134 KB",
    content: `DASHBOARD DE KPIs DO NEGÓCIO

═══════════════════════════════
        RESUMO MENSAL
═══════════════════════════════

FINANCEIRO
┌─────────────┬───────────┐
│ Receita     │ R$ ___    │
│ Custos      │ R$ ___    │
│ Lucro       │ R$ ___    │
│ Margem      │ ___%      │
└─────────────┴───────────┘

AQUISIÇÃO
┌─────────────┬───────────┐
│ Leads       │ ___       │
│ Clientes    │ ___       │
│ Conversão   │ ___%      │
│ CAC         │ R$ ___    │
└─────────────┴───────────┘

RETENÇÃO
┌─────────────┬───────────┐
│ Churn       │ ___%      │
│ NPS         │ ___       │
│ LTV         │ R$ ___    │
└─────────────┴───────────┘

OPERACIONAL
┌─────────────┬───────────┐
│ Atendimentos│ ___       │
│ Ocupação    │ ___%      │
│ Satisfação  │ ___/10    │
└─────────────┴───────────┘

METAS vs REALIZADO
| Meta | Previsto | Real | % |
|------|----------|------|---|
| Receita | ___ | ___ | _% |
| Clientes | ___ | ___ | _% |
| NPS | ___ | ___ | _% |`
  },
  {
    id: "planejamento-marketing",
    name: "Planejamento_de_Marketing_e_Campanhas.xls",
    type: "xls",
    size: "98 KB",
    content: `PLANEJAMENTO DE MARKETING E CAMPANHAS

CALENDÁRIO MENSAL
━━━━━━━━━━━━━━━━━
| Semana | Tema | Ação | Canal |
|--------|------|------|-------|
| 1 | Awareness | Post educativo | Instagram |
| 2 | Consideração | Depoimento | WhatsApp |
| 3 | Conversão | Oferta | Todos |
| 4 | Fidelização | Conteúdo VIP | E-mail |

CAMPANHAS DO MÊS
━━━━━━━━━━━━━━━━
| Campanha | Orçamento | Meta |
|----------|-----------|------|
| Campanha 1 | R$ ___ | ___ leads |
| Campanha 2 | R$ ___ | ___ leads |
| Total | R$ ___ | ___ leads |

CONTEÚDO SEMANAL
| Dia | Tipo | Horário |
|-----|------|---------|
| Seg | Dica | 10:00 |
| Qua | Bastidor | 19:00 |
| Sex | Oferta | 11:00 |

DATAS COMEMORATIVAS
| Data | Evento | Ação |
|------|--------|------|
| _/_  | ______ | ____ |`
  },
  {
    id: "controle-execucao",
    name: "Controle_de_Execucao_do_Plano_de_Acao.xls",
    type: "xls",
    size: "87 KB",
    content: `CONTROLE DE EXECUÇÃO DO PLANO DE AÇÃO

SEMANA: ___/___

TAREFAS DA SEMANA
━━━━━━━━━━━━━━━━
| # | Tarefa | Prazo | Status | Obs |
|---|--------|-------|--------|-----|
| 1 | ______ | __/__ | ☐ | ___ |
| 2 | ______ | __/__ | ☐ | ___ |
| 3 | ______ | __/__ | ☐ | ___ |
| 4 | ______ | __/__ | ☐ | ___ |
| 5 | ______ | __/__ | ☐ | ___ |

LEGENDA DE STATUS:
☐ Pendente
◐ Em andamento
☑ Concluído
✗ Cancelado

RESUMO SEMANAL
| Métrica | Valor |
|---------|-------|
| Total de tarefas | ___ |
| Concluídas | ___ |
| Taxa de conclusão | ___% |

IMPEDIMENTOS/BLOQUEIOS:
1. _______________
2. _______________

APRENDIZADOS DA SEMANA:
1. _______________
2. _______________

PRIORIDADES PRÓXIMA SEMANA:
1. _______________
2. _______________`
  }
];

// Estrutura de pastas
export const driveFolders: DriveFolder[] = [
  {
    id: "documentos",
    name: "Documentos",
    icon: "📄",
    files: docFiles
  },
  {
    id: "planilhas",
    name: "Planilhas",
    icon: "📊",
    files: xlsFiles
  }
];

// Total de arquivos
export const getTotalFiles = () => docFiles.length + xlsFiles.length;
