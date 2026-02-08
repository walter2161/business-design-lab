// Serviço de integração com Mistral AI
const MISTRAL_API_KEY = "aynCSftAcQBOlxmtmpJqVzco8K4aaTDQ";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface MistralResponse {
  success: boolean;
  content: string;
  error?: string;
}

export const sendMistralMessage = async (
  messages: ChatMessage[],
  systemPrompt: string
): Promise<MistralResponse> => {
  try {
    const response = await fetch(MISTRAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mistral API error:", response.status, errorText);
      return {
        success: false,
        content: "",
        error: `Erro na API: ${response.status}`,
      };
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    return {
      success: true,
      content,
    };
  } catch (error) {
    console.error("Mistral API error:", error);
    return {
      success: false,
      content: "",
      error: "Erro de conexão com a IA",
    };
  }
};

// Prompt do sistema para o chatbot global da loja
export const getStoreChatbotPrompt = (productsContext: string, baseUrl: string) => `
Você é o assistente virtual da Loja de Negócios, uma plataforma que vende modelos de negócio prontos para empreendedores MEI e ME no Brasil.

SOBRE A LOJA:
- Vendemos 50 modelos de negócio em 8 categorias diferentes
- Cada modelo inclui: planilhas, templates, guias, scripts, checklists e acesso a um consultor IA especializado
- Preços variam de R$89 a R$149
- Acesso renovável por 1 ano com atualizações incluídas
- Pagamentos via PIX, cartão de crédito (Visa, Mastercard, Elo, Amex)

CATEGORIAS:
1. Serviços Pessoais (salão, barbearia, manicure, etc.)
2. Saúde e Bem-Estar (clínicas, academias, etc.)
3. Jurídico e Consultoria
4. Imobiliário e Construção
5. Comércio Varejista
6. Alimentação
7. Tecnologia e Digital
8. Serviços Operacionais

PRODUTOS DISPONÍVEIS (use os IDs para criar links):
${productsContext}

URL BASE: ${baseUrl}

FORMATAÇÃO OBRIGATÓRIA:
- Use markdown para formatar suas respostas
- Sempre que mencionar um produto, inclua o link: [Nome do Produto](${baseUrl}/modelo/ID-DO-PRODUTO)
- Use **negrito** para destacar informações importantes
- Use listas com - para organizar opções
- Separe seções com linhas em branco
- Seja objetivo mas amigável
- Preços sempre em formato: **R$ XX**

EXEMPLO DE RESPOSTA BEM FORMATADA:
---
Ótima escolha! Temos algumas opções perfeitas para você:

**🐕 Para negócios com pets:**

- **[Pet Shop](${baseUrl}/modelo/pet-shop)** - **R$ 129**
  Modelo completo para loja de produtos e serviços pet.

- **[E-commerce Generalista](${baseUrl}/modelo/ecommerce-generalista)** - **R$ 119**
  Ideal para vendas online de qualquer segmento.

👉 Qual desses te interessa mais? Posso explicar os detalhes!
---

REGRAS:
- SEMPRE inclua links clicáveis quando mencionar produtos
- Use emojis relevantes (🎯 💼 📊 💰 🚀) para tornar visual
- Seja sempre educado e prestativo
- Use português brasileiro informal mas profissional
- Nunca invente informações sobre produtos
- Incentive a ação com CTAs sutis

Responda de forma organizada, visual e com links funcionais.
`;

// Prompt do sistema para agentes especializados em cada produto
export const getProductAgentPrompt = (productName: string, productDetails: string) => `
Você é um consultor especialista no modelo de negócio "${productName}".

SOBRE VOCÊ:
- Você é um agente IA treinado especificamente para ajudar empreendedores que compraram este modelo
- Você conhece todos os detalhes do negócio, métricas, processos e melhores práticas
- Seu objetivo é ajudar o cliente a implementar o negócio com sucesso

DETALHES DO MODELO:
${productDetails}

COMO AJUDAR:
- Tire dúvidas sobre implementação
- Dê dicas práticas baseadas nas métricas e benchmarks
- Ajude com precificação e estratégias
- Sugira próximos passos personalizados
- Explique como usar os templates e planilhas
- Dê orientações sobre o cronograma (Delta T)

REGRAS:
- Seja específico e prático nas respostas
- Use os dados de benchmark como referência
- Adapte as sugestões para o contexto brasileiro
- Incentive o uso dos materiais do pack
- Se a pergunta fugir do escopo do modelo, seja honesto

Responda de forma clara, prática e motivadora.
`;
