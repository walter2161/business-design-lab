import { Link } from "react-router-dom";
import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Loja de Negócios
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modelos de negócio validados para empreendedores brasileiros. 
              Tudo que você precisa para começar seu negócio com segurança.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Mapa do Site</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo de Modelos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Meu Painel
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-muted-foreground hover:text-primary transition-colors">
                  Cadastro
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000 - Sala 1501<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contato@lojadenegocios.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@lojadenegocios.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Formas de Pagamento</h3>
            <div className="grid grid-cols-4 gap-2">
              {/* Credit Card Flags */}
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">VISA</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">MC</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">ELO</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">AMEX</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">PIX</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2">
                <span className="text-xs font-bold text-foreground">BOLETO</span>
              </div>
              <div className="flex h-8 items-center justify-center rounded bg-background border border-border px-2 col-span-2">
                <span className="text-xs font-bold text-foreground">HIPERCARD</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-accent/10 p-3 border border-accent/20">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Compra 100% Segura</span><br />
                Seus dados estão protegidos com criptografia SSL.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* LGPD Notice */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>
            Este site está em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).{" "}
            <Link to="/privacidade" className="text-primary underline hover:text-primary/80">
              Saiba mais
            </Link>
          </span>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            <p>© {currentYear} Loja de Negócios. Todos os direitos reservados.</p>
            <p className="mt-1">
              CNPJ: 00.000.000/0001-00 | Razão Social: Loja de Negócios LTDA
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
