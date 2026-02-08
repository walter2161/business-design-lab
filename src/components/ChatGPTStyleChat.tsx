import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  Send,
  Loader2,
  Bot,
  User,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface ChatGPTStyleChatProps {
  messages: Message[];
  onSend: (message: string) => void;
  isLoading: boolean;
  suggestedQuestions?: string[];
  productName: string;
  aiDescription?: string;
}

const ChatGPTStyleChat = ({
  messages,
  onSend,
  isLoading,
  suggestedQuestions = [],
  productName,
  aiDescription,
}: ChatGPTStyleChatProps) => {
  const [input, setInput] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-background rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border bg-card">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-amber-light flex items-center justify-center">
          <Bot className="h-5 w-5 text-accent-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground">
            Consultor IA — {productName}
          </h3>
          <p className="text-xs text-muted-foreground">
            Especialista treinado para este modelo de negócio
          </p>
        </div>
        <Badge variant="outline" className="gap-1">
          <Sparkles className="h-3 w-3" />
          IA Ativa
        </Badge>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Bot className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Olá! Sou seu consultor especializado
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              {aiDescription || "Estou aqui para ajudar você a implementar e escalar seu negócio. Faça qualquer pergunta!"}
            </p>
            
            {suggestedQuestions.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-4",
              msg.role === "user" ? "flex-row-reverse" : ""
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/10 text-accent"
              )}
            >
              {msg.role === "user" ? (
                <User className="h-4 w-4" />
              ) : (
                <Bot className="h-4 w-4" />
              )}
            </div>

            {/* Message Content */}
            <div
              className={cn(
                "flex-1 max-w-[80%]",
                msg.role === "user" ? "text-right" : ""
              )}
            >
              <div
                className={cn(
                  "inline-block rounded-2xl px-4 py-3 text-sm",
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted text-foreground rounded-tl-sm"
                )}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none [&_a]:text-accent [&_a]:underline [&_a]:font-medium [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_strong]:text-foreground">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>

              {/* Actions for assistant messages */}
              {msg.role === "assistant" && (
                <div className="mt-1 flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => copyToClipboard(msg.content, i)}
                  >
                    {copiedIndex === i ? (
                      <Check className="h-3 w-3 text-accent" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-4">
            <div className="h-8 w-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Pensando...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-4 bg-card">
        <div className="flex gap-3">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Envie uma mensagem..."
            className="min-h-[48px] max-h-[120px] resize-none text-sm rounded-xl"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="h-12 w-12 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
        <p className="mt-2 text-xs text-center text-muted-foreground">
          O consultor IA pode cometer erros. Valide informações importantes.
        </p>
      </div>
    </div>
  );
};

export default ChatGPTStyleChat;
