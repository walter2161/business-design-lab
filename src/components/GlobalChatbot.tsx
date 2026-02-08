import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { models } from "@/data/models";
import { sendMistralMessage, getStoreChatbotPrompt, ChatMessage } from "@/lib/mistralAI";

const GlobalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Contexto dos produtos para o prompt
  const productsContext = models.map(m => 
    `- ${m.name} (${m.category}): ${m.shortDescription} - R$${m.price}`
  ).join("\n");

  const systemPrompt = getStoreChatbotPrompt(productsContext);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Prepara histórico para API
    const chatHistory: ChatMessage[] = [
      ...messages.map(m => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: userMessage }
    ];

    const response = await sendMistralMessage(chatHistory, systemPrompt);

    if (response.success) {
      setMessages(prev => [...prev, { role: "assistant", content: response.content }]);
    } else {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Desculpe, ocorreu um erro. Tente novamente ou entre em contato pelo email contato@lojadenegocios.com.br" 
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Qual modelo para MEI?",
    "Como funciona a compra?",
    "Tem garantia?",
    "Qual o mais vendido?",
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:scale-110 transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div 
      className={`fixed bottom-24 right-6 z-50 bg-card border border-border rounded-xl shadow-2xl transition-all duration-300 ${
        isMinimized ? "w-72 h-14" : "w-80 sm:w-96 h-[500px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-accent/10 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Bot className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">Assistente IA</p>
            <p className="text-xs text-muted-foreground">Online agora</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 h-[360px]">
            {messages.length === 0 && (
              <div className="text-center py-4">
                <Bot className="h-10 w-10 mx-auto text-accent/50 mb-3" />
                <p className="text-sm text-muted-foreground mb-4">
                  Olá! Sou o assistente da Loja de Negócios. Como posso ajudar?
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestedQuestions.map((q) => (
                    <Badge
                      key={q}
                      variant="outline"
                      className="cursor-pointer text-xs hover:bg-accent/10 transition-colors"
                      onClick={() => setInput(q)}
                    >
                      {q}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Pensando...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua pergunta..."
                className="min-h-[40px] max-h-[80px] resize-none text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GlobalChatbot;
