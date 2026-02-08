import { useState } from "react";
import {
  ExternalLink,
  Copy,
  Check,
  Key,
  Cloud,
  FolderOpen,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OnHubLicenseCardProps {
  productId: string;
  productName: string;
  userId?: string;
  compact?: boolean;
}

const OnHubLicenseCard = ({ productId, productName, userId, compact = false }: OnHubLicenseCardProps) => {
  const [copied, setCopied] = useState(false);
  
  // Generate a mock license key based on product and user
  const licenseKey = `ONHUB-${productId.toUpperCase().slice(0, 4)}-${(userId || "USER").slice(0, 4).toUpperCase()}-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  const copyLicense = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Versão compacta para sidebar
  if (compact) {
    return (
      <div className="rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-3 space-y-3">
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4 text-accent shrink-0" />
          <span className="font-semibold text-sm text-foreground">onHub.app</span>
          <Badge className="bg-accent/20 text-accent border-0 text-xs ml-auto">
            Ativo
          </Badge>
        </div>
        
        <Button
          size="sm"
          className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-xs"
          asChild
        >
          <a href="https://onhub.app" target="_blank" rel="noopener noreferrer">
            Acessar arquivos
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
    );
  }

  // Versão completa
  return (
    <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Cloud className="h-5 w-5 text-accent" />
            Acesso onHub.app
          </CardTitle>
          <Badge className="bg-accent/20 text-accent border-0">
            Ativo
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Seus arquivos do modelo <strong>{productName}</strong> estão disponíveis na sua conta onHub.
        </p>

        {/* License Key */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Key className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Chave de Licença
            </span>
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-muted px-3 py-2 rounded-lg text-xs font-mono text-foreground break-all">
              {licenseKey}
            </code>
            <Button
              variant="outline"
              size="icon"
              onClick={copyLicense}
              className="shrink-0 h-8 w-8"
            >
              {copied ? (
                <Check className="h-4 w-4 text-accent" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FolderOpen className="h-4 w-4 text-accent shrink-0" />
            <span>Arquivos na nuvem</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-accent shrink-0" />
            <span>Ferramentas inclusas</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <a href="https://onhub.app" target="_blank" rel="noopener noreferrer">
            Acessar meus arquivos no onHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Use a chave de licença para ativar recursos premium no onHub.app
        </p>
      </CardContent>
    </Card>
  );
};

export default OnHubLicenseCard;
