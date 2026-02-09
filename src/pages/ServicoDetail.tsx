import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle2, Phone, Mail, User, Briefcase, Globe, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicos, categoriasServicoIcons } from "@/data/servicos";
import { toast } from "sonner";

const ServicoDetail = () => {
  const { id } = useParams();
  const servico = servicos.find((s) => s.id === id);

  if (!servico) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Serviço não encontrado.</p>
          <Button asChild className="mt-4"><Link to="/servicos">Voltar aos serviços</Link></Button>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse no serviço: ${servico.nome}. Gostaria de um orçamento.`);
  const whatsappLink = `https://wa.me/55${servico.prestador.telefone.replace(/\D/g, "")}?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <div className="relative h-56 md:h-80 overflow-hidden">
        <img src={servico.imagem} alt={servico.nome} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="container mx-auto">
            <Badge className="border-0 bg-accent/90 text-accent-foreground text-xs mb-2">
              {categoriasServicoIcons[servico.categoria]} {servico.categoria}
            </Badge>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-white">{servico.nome}</h1>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/servicos" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Voltar aos serviços
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Prazo */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">A partir de</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-foreground">
                      R$ {servico.preco.toLocaleString("pt-BR")}
                    </span>
                    {servico.precoAte && (
                      <span className="text-sm text-muted-foreground">
                        até R$ {servico.precoAte.toLocaleString("pt-BR")}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent" /> Prazo: {servico.prazo}
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copiado!"); }}>
                <Share2 className="h-4 w-4 mr-1" /> Compartilhar
              </Button>
            </div>

            {/* Description */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Sobre o Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">{servico.descricaoCompleta}</p>
            </div>

            {/* What's included */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">O que está incluso</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {servico.inclui.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Prestador */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 sticky top-20">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                Prestador do Serviço
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={servico.prestador.foto}
                  alt={servico.prestador.nome}
                  className="h-16 w-16 rounded-full object-cover border-2 border-accent/30"
                />
                <div>
                  <p className="font-semibold text-foreground">{servico.prestador.nome}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Briefcase className="h-3 w-3" /> {servico.prestador.empresa}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {servico.prestador.experiencia}
              </p>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" /> {servico.prestador.telefone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" /> {servico.prestador.email}
                </div>
                {servico.prestador.portfolio && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-accent" />
                    <a href={servico.prestador.portfolio} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Ver portfólio
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento via WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${servico.prestador.email}?subject=${encodeURIComponent(`Orçamento: ${servico.nome}`)}`}>
                    Enviar E-mail
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicoDetail;
