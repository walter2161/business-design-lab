import { useState } from "react";
import {
  Download,
  FileText,
  Table,
  Presentation,
  Video,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  FileType,
  Layout,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { standardPackItems, packCategories, PackItem, PackCategory } from "@/data/packContents";

const getFileIcon = (fileType: PackItem["fileType"]) => {
  switch (fileType) {
    case "pdf":
      return <FileText className="h-5 w-5 text-destructive" />;
    case "doc":
      return <FileType className="h-5 w-5 text-primary" />;
    case "xlsx":
      return <FileSpreadsheet className="h-5 w-5 text-accent" />;
    case "pptx":
      return <Presentation className="h-5 w-5 text-amber" />;
    case "ai":
      return <Bot className="h-5 w-5 text-accent" />;
    case "video":
      return <Video className="h-5 w-5 text-primary" />;
    case "template":
      return <Layout className="h-5 w-5 text-accent" />;
    default:
      return <FileText className="h-5 w-5 text-muted-foreground" />;
  }
};

const getFileLabel = (fileType: PackItem["fileType"]) => {
  switch (fileType) {
    case "pdf":
      return "PDF";
    case "doc":
      return "DOC";
    case "xlsx":
      return "Excel";
    case "pptx":
      return "PPT";
    case "ai":
      return "IA";
    case "video":
      return "Vídeo";
    case "template":
      return "Template";
    default:
      return "Arquivo";
  }
};

interface PackCategoryGroupProps {
  category: PackCategory;
  icon: string;
  description: string;
  items: PackItem[];
  defaultOpen?: boolean;
}

const PackCategoryGroup = ({
  category,
  icon,
  description,
  items,
  defaultOpen = false,
}: PackCategoryGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">{category}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="font-medium">
              {items.length} itens
            </Badge>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2 space-y-2 pl-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start gap-3 flex-1">
                {getFileIcon(item.fileType)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {getFileLabel(item.fileType)}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {item.fileType !== "ai" && (
                <Button variant="ghost" size="sm" className="shrink-0 gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Baixar</span>
                </Button>
              )}
              {item.fileType === "ai" && (
                <Badge className="shrink-0 bg-accent/20 text-accent border-accent/30">
                  <Star className="h-3 w-3 mr-1" />
                  Exclusivo
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

interface PackContentsDisplayProps {
  modelName: string;
}

export const PackContentsDisplay = ({ modelName }: PackContentsDisplayProps) => {
  // Agrupa os itens por categoria
  const itemsByCategory = packCategories.map((cat) => ({
    ...cat,
    items: standardPackItems.filter((item) => item.category === cat.name),
  }));

  const totalItems = standardPackItems.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">
              Pack Completo: {modelName}
            </h3>
            <p className="text-sm text-muted-foreground">
              Acesso vitalício a todos os materiais inclusos
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span className="font-display font-bold text-accent text-lg">
              {totalItems} itens
            </span>
          </div>
        </div>
      </div>

      {/* Lista de categorias */}
      <div className="space-y-3">
        {itemsByCategory.map((cat, index) => (
          <PackCategoryGroup
            key={cat.name}
            category={cat.name}
            icon={cat.icon}
            description={cat.description}
            items={cat.items}
            defaultOpen={index === 0}
          />
        ))}
      </div>

      {/* Footer info */}
      <div className="rounded-lg border border-border bg-muted/50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">
              Atualizações Gratuitas Incluídas
            </p>
            <p>
              Sempre que houver novas versões ou melhorias dos materiais, você
              receberá acesso automático sem custo adicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackContentsDisplay;
