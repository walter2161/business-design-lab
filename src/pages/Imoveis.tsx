import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Home, Building2, DoorOpen, ArrowRight, Ruler, Car, Bath, BedDouble, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { imoveis, type TipoImovel, type TipoEspaco, type Regiao } from "@/data/imoveis";

const tipoFilters: { label: string; value: TipoImovel | null }[] = [
  { label: "Todos", value: null },
  { label: "Venda", value: "Venda" },
  { label: "Locação", value: "Locação" },
];

const regiaoFilters: { label: string; value: Regiao | null }[] = [
  { label: "Todas", value: null },
  { label: "🏙️ ABC Paulista", value: "ABC Paulista" },
  { label: "🏖️ Litoral Paulista", value: "Litoral Paulista" },
];

const espacoFilters: { label: string; value: TipoEspaco | null }[] = [
  { label: "Todos", value: null },
  { label: "Residencial", value: "Residencial" },
  { label: "Comercial", value: "Comercial" },
  { label: "Sala Comercial", value: "Sala Comercial" },
];

const Imoveis = () => {
  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState<TipoImovel | null>(null);
  const [regiaoFiltro, setRegiaoFiltro] = useState<Regiao | null>(null);
  const [espacoFiltro, setEspacoFiltro] = useState<TipoEspaco | null>(null);
  const [pontoFiltro, setPontoFiltro] = useState<boolean | null>(null);

  const filtered = useMemo(() => {
    return imoveis.filter((i) => {
      if (tipoFiltro && i.tipo !== tipoFiltro) return false;
      if (regiaoFiltro && i.regiao !== regiaoFiltro) return false;
      if (espacoFiltro && i.espaco !== espacoFiltro) return false;
      if (pontoFiltro !== null && i.comPonto !== pontoFiltro) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          i.titulo.toLowerCase().includes(s) ||
          i.cidade.toLowerCase().includes(s) ||
          i.bairro.toLowerCase().includes(s) ||
          i.descricao.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [search, tipoFiltro, regiaoFiltro, espacoFiltro, pontoFiltro]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-0 mb-4 text-sm">
            <Building2 className="h-4 w-4 mr-1" /> Imóveis & Salas Comerciais
          </Badge>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Encontre o Imóvel Ideal
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Imóveis para venda e locação no ABC Paulista e Litoral Paulista. 
            Salas comerciais com ou sem ponto comercial estabelecido.
          </p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por cidade, bairro..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <p className="text-sm text-muted-foreground">{filtered.length} imóveis encontrados</p>
          </div>

          {/* Filter chips */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mr-1 self-center">Tipo:</span>
              {tipoFilters.map((f) => (
                <Button
                  key={f.label}
                  variant={tipoFiltro === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTipoFiltro(f.value)}
                  className="text-xs"
                >
                  {f.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mr-1 self-center">Região:</span>
              {regiaoFilters.map((f) => (
                <Button
                  key={f.label}
                  variant={regiaoFiltro === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRegiaoFiltro(f.value)}
                  className="text-xs"
                >
                  {f.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mr-1 self-center">Espaço:</span>
              {espacoFilters.map((f) => (
                <Button
                  key={f.label}
                  variant={espacoFiltro === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setEspacoFiltro(f.value)}
                  className="text-xs"
                >
                  {f.label}
                </Button>
              ))}
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider ml-4 mr-1 self-center">Ponto:</span>
              <Button
                variant={pontoFiltro === null ? "default" : "outline"}
                size="sm"
                onClick={() => setPontoFiltro(null)}
                className="text-xs"
              >
                Todos
              </Button>
              <Button
                variant={pontoFiltro === true ? "default" : "outline"}
                size="sm"
                onClick={() => setPontoFiltro(true)}
                className="text-xs"
              >
                Com Ponto
              </Button>
              <Button
                variant={pontoFiltro === false ? "default" : "outline"}
                size="sm"
                onClick={() => setPontoFiltro(false)}
                className="text-xs"
              >
                Sem Ponto
              </Button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((imovel) => (
            <ImovelCard key={imovel.id} imovel={imovel} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">Nenhum imóvel encontrado com os filtros selecionados.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

const ImovelCard = ({ imovel }: { imovel: typeof imoveis[0] }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
  };

  return (
    <Link to={`/imoveis/${imovel.id}`} className="group block overflow-hidden rounded-xl border border-border bg-card card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={imovel.imagem} alt={imovel.titulo} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`border-0 text-xs font-bold ${imovel.tipo === "Venda" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
            {imovel.tipo}
          </Badge>
          <Badge className="border-0 bg-card/80 text-foreground text-xs">
            {imovel.espaco}
          </Badge>
        </div>
        {imovel.comPonto && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground border-0 text-xs font-bold">
            <Tag className="h-3 w-3 mr-1" /> Com Ponto
          </Badge>
        )}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1 text-white/80 text-xs">
            <MapPin className="h-3 w-3" />
            {imovel.cidade}, {imovel.bairro}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-card-foreground leading-tight mb-2 line-clamp-2">
          {imovel.titulo}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{imovel.descricao}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Ruler className="h-3 w-3" /> {imovel.area}m²</span>
          {imovel.quartos && <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" /> {imovel.quartos} quartos</span>}
          {imovel.banheiros && <span className="flex items-center gap-1"><Bath className="h-3 w-3" /> {imovel.banheiros} ban.</span>}
          {imovel.vagas && <span className="flex items-center gap-1"><Car className="h-3 w-3" /> {imovel.vagas} vagas</span>}
        </div>

        <div className="flex items-end justify-between">
          <div>
            {imovel.tipo === "Venda" ? (
              <div>
                <span className="text-xs text-muted-foreground">Venda</span>
                <p className="font-display text-xl font-bold text-foreground">{formatPrice(imovel.preco)}</p>
              </div>
            ) : (
              <div>
                <span className="text-xs text-muted-foreground">Aluguel</span>
                <p className="font-display text-xl font-bold text-accent">{formatPrice(imovel.precoAluguel || 0)}/mês</p>
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-accent hover:text-accent/80">
            Detalhes <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Imoveis;
