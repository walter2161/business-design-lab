import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Ruler, Car, Bath, BedDouble, Tag, Phone, Mail, Building2, User, CheckCircle2, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { imoveis } from "@/data/imoveis";
import { toast } from "sonner";

const ImovelDetail = () => {
  const { id } = useParams();
  const imovel = imoveis.find((i) => i.id === id);

  if (!imovel) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Imóvel não encontrado.</p>
          <Button asChild className="mt-4"><Link to="/imoveis">Voltar aos imóveis</Link></Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse no imóvel: ${imovel.titulo} (${imovel.cidade}). Gostaria de mais informações.`);
  const whatsappLink = `https://wa.me/55${imovel.responsavel.telefone.replace(/\D/g, "")}?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={imovel.imagem} alt={imovel.titulo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className={`border-0 text-xs font-bold ${imovel.tipo === "Venda" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                {imovel.tipo}
              </Badge>
              <Badge className="border-0 bg-card/80 text-foreground text-xs">{imovel.espaco}</Badge>
              <Badge className="border-0 bg-card/80 text-foreground text-xs">{imovel.regiao}</Badge>
              {imovel.comPonto && (
                <Badge className="bg-destructive text-destructive-foreground border-0 text-xs font-bold">
                  <Tag className="h-3 w-3 mr-1" /> Com Ponto
                </Badge>
              )}
            </div>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-white">{imovel.titulo}</h1>
            <div className="flex items-center gap-1 text-white/80 text-sm mt-2">
              <MapPin className="h-4 w-4" /> {imovel.endereco} - {imovel.cidade}/{imovel.bairro}
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/imoveis" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Voltar aos imóveis
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Features */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                {imovel.tipo === "Venda" ? (
                  <div>
                    <span className="text-sm text-muted-foreground">Valor de Venda</span>
                    <p className="font-display text-3xl font-bold text-foreground">{formatPrice(imovel.preco)}</p>
                  </div>
                ) : (
                  <div>
                    <span className="text-sm text-muted-foreground">Aluguel Mensal</span>
                    <p className="font-display text-3xl font-bold text-accent">{formatPrice(imovel.precoAluguel || 0)}/mês</p>
                    <p className="text-xs text-muted-foreground">Valor do imóvel: {formatPrice(imovel.preco)}</p>
                  </div>
                )}
                <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copiado!"); }}>
                  <Share2 className="h-4 w-4 mr-1" /> Compartilhar
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <FeatureBlock icon={<Ruler className="h-5 w-5" />} label="Área" value={`${imovel.area}m²`} />
                {imovel.quartos !== undefined && <FeatureBlock icon={<BedDouble className="h-5 w-5" />} label="Quartos" value={String(imovel.quartos)} />}
                {imovel.banheiros !== undefined && <FeatureBlock icon={<Bath className="h-5 w-5" />} label="Banheiros" value={String(imovel.banheiros)} />}
                {imovel.vagas !== undefined && <FeatureBlock icon={<Car className="h-5 w-5" />} label="Vagas" value={String(imovel.vagas)} />}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Descrição</h2>
              <p className="text-muted-foreground leading-relaxed">{imovel.descricaoCompleta}</p>
            </div>

            {/* Characteristics */}
            {imovel.caracteristicas && imovel.caracteristicas.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Características</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {imovel.caracteristicas.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {c}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Responsável */}
          <div className="space-y-6">
            {/* Responsavel Card */}
            <div className="rounded-xl border border-border bg-card p-6 sticky top-20">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                {imovel.responsavel.tipo === "Corretor" ? "Corretor Responsável" : "Proprietário"}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={imovel.responsavel.foto}
                  alt={imovel.responsavel.nome}
                  className="h-16 w-16 rounded-full object-cover border-2 border-accent/30"
                />
                <div>
                  <p className="font-semibold text-foreground">{imovel.responsavel.nome}</p>
                  {imovel.responsavel.creci && (
                    <p className="text-xs text-muted-foreground">CRECI: {imovel.responsavel.creci}</p>
                  )}
                  {imovel.responsavel.empresa && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Building2 className="h-3 w-3" /> {imovel.responsavel.empresa}
                    </p>
                  )}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" /> {imovel.responsavel.telefone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" /> {imovel.responsavel.email}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${imovel.responsavel.email}?subject=${encodeURIComponent(`Interesse: ${imovel.titulo}`)}`}>
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

const FeatureBlock = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-muted/50 p-3 text-center">
    <div className="flex justify-center text-accent mb-1">{icon}</div>
    <p className="font-display font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

export default ImovelDetail;
