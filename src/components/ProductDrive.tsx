import { useState } from "react";
import {
  FolderOpen,
  FileText,
  Table,
  Download,
  Eye,
  ChevronDown,
  ChevronRight,
  X,
  HardDrive,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { driveFolders, DriveFile, getTotalFiles } from "@/data/driveFiles";
import { cn } from "@/lib/utils";

interface ProductDriveProps {
  modelName: string;
}

const ProductDrive = ({ modelName }: ProductDriveProps) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["documentos", "planilhas"]);
  const [previewFile, setPreviewFile] = useState<DriveFile | null>(null);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId]
    );
  };

  const handleDownload = (file: DriveFile) => {
    // Simula download criando um blob com o conteúdo
    const blob = new Blob([file.content], { 
      type: file.type === "doc" ? "application/msword" : "application/vnd.ms-excel" 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFileIcon = (type: DriveFile["type"]) => {
    switch (type) {
      case "doc":
        return <FileText className="h-5 w-5 text-primary" />;
      case "xls":
        return <Table className="h-5 w-5 text-accent" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getFileTypeLabel = (type: DriveFile["type"]) => {
    switch (type) {
      case "doc":
        return "DOC";
      case "xls":
        return "XLS";
      default:
        return "FILE";
    }
  };

  const getFileTypeBadgeColor = (type: DriveFile["type"]) => {
    switch (type) {
      case "doc":
        return "bg-primary/20 text-primary border-primary/30";
      case "xls":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header do Drive */}
      <div className="rounded-xl border border-accent/30 bg-gradient-to-r from-accent/10 to-transparent p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <HardDrive className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Drive: {modelName}
              </h3>
              <p className="text-sm text-muted-foreground">
                Seus arquivos prontos para download e edição
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span className="font-display font-bold text-accent">
              {getTotalFiles()} arquivos
            </span>
          </div>
        </div>
      </div>

      {/* Estrutura de pastas */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FolderOpen className="h-4 w-4" />
            <span>Navegador de Arquivos</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {driveFolders.length} pastas
          </Badge>
        </div>

        {/* Lista de pastas e arquivos */}
        <div className="divide-y divide-border">
          {driveFolders.map((folder) => (
            <div key={folder.id}>
              {/* Pasta */}
              <button
                onClick={() => toggleFolder(folder.id)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
              >
                {expandedFolders.includes(folder.id) ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-xl">{folder.icon}</span>
                <span className="font-medium text-foreground">{folder.name}</span>
                <Badge variant="outline" className="ml-auto text-xs">
                  {folder.files.length} arquivos
                </Badge>
              </button>

              {/* Arquivos da pasta */}
              {expandedFolders.includes(folder.id) && (
                <div className="bg-muted/20">
                  {folder.files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center gap-3 px-4 py-3 pl-12 hover:bg-muted/40 transition-colors border-t border-border/50"
                    >
                      {/* Ícone do arquivo */}
                      <div className="shrink-0">
                        {getFileIcon(file.type)}
                      </div>

                      {/* Nome e info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {file.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Badge 
                            variant="outline" 
                            className={cn("text-xs", getFileTypeBadgeColor(file.type))}
                          >
                            {getFileTypeLabel(file.type)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {file.size}
                          </span>
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="flex items-center gap-1 shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setPreviewFile(file)}
                          className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline ml-1">Visualizar</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(file)}
                          className="h-8 px-2 text-accent hover:text-accent hover:bg-accent/10"
                        >
                          <Download className="h-4 w-4" />
                          <span className="hidden sm:inline ml-1">Baixar</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info footer */}
      <div className="rounded-lg border border-border bg-muted/50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">
              Acesso Vitalício + Atualizações Gratuitas
            </p>
            <p>
              Todos os arquivos podem ser baixados e editados livremente. 
              Novas versões e melhorias serão adicionadas automaticamente ao seu Drive.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Pré-visualização */}
      <Dialog open={!!previewFile} onOpenChange={() => setPreviewFile(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
          <DialogHeader className="shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {previewFile && getFileIcon(previewFile.type)}
                <div>
                  <DialogTitle className="text-lg font-display">
                    {previewFile?.name}
                  </DialogTitle>
                  <div className="flex items-center gap-2 mt-1">
                    {previewFile && (
                      <Badge 
                        variant="outline" 
                        className={cn("text-xs", getFileTypeBadgeColor(previewFile.type))}
                      >
                        {getFileTypeLabel(previewFile.type)}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {previewFile?.size}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="flex-1 mt-4">
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed">
                {previewFile?.content}
              </pre>
            </div>
          </ScrollArea>

          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border shrink-0">
            <Button variant="outline" onClick={() => setPreviewFile(null)}>
              Fechar
            </Button>
            {previewFile && (
              <Button 
                onClick={() => handleDownload(previewFile)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar Arquivo
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDrive;
