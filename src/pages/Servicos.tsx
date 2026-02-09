import { useState, useMemo } from "react";
import { Search, ArrowRight, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicos, categoriasServico, categoriasServicoIcons, type CategoriaServico } from "@/data/servicos";

const Servicos = () => {
  const [search, setSearch] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState<CategoriaServico | null>(null);

  const filtered = useMemo(() => {
    return servicos.filter((s) => {
      if (categoriaFiltro && s.categoria !== categoriaFiltro) return false;
      if (search) {
        const q = search.toLowerCase();
        return s.nome.toLowerCase().includes(q) || s.descricao.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, categoriaFiltro]);

  const destaques = servicos.filter((s) => s.destaque);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent via-accent/90 to-accent/80 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-0 mb-4 text-sm">
            <Sparkles className="h-4 w-4 mr-1" /> Serviços Profissionais
          </Badge>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-accent-foreground mb-3">
            Serviços para seu Negócio
          </h1>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto">
            Sites, design gráfico, fotografia, vídeo, drone, contabilidade e gestão digital. 
            Tudo que você precisa para profissionalizar sua empresa.
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
                placeholder="Buscar serviço..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <p className="text-sm text-muted-foreground">{filtered.length} serviços disponíveis</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={categoriaFiltro === null ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaFiltro(null)}
              className="text-xs"
            >
              Todos
            </Button>
            {categoriasServico.map((cat) => (
              <Button
                key={cat}
                variant={categoriaFiltro === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoriaFiltro(cat)}
                className="text-xs"
              >
                {categoriasServicoIcons[cat]} {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Destaques */}
        {!categoriaFiltro && !search && (
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">⭐ Serviços em Destaque</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {destaques.map((servico) => (
                <ServicoCard key={servico.id} servico={servico} />
              ))}
            </div>
          </section>
        )}

        {/* By category */}
        {categoriaFiltro ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((servico) => (
              <ServicoCard key={servico.id} servico={servico} />
            ))}
          </div>
        ) : (
          categoriasServico.map((cat) => {
            const catServicos = filtered.filter((s) => s.categoria === cat);
            if (catServicos.length === 0) return null;
            return (
              <section key={cat} className="mb-12">
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  {categoriasServicoIcons[cat]} {cat}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {catServicos.map((servico) => (
                    <ServicoCard key={servico.id} servico={servico} />
                  ))}
                </div>
              </section>
            );
          })
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">Nenhum serviço encontrado.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

const ServicoCard = ({ servico }: { servico: typeof servicos[0] }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card card-hover">
      <div className="relative h-40 overflow-hidden">
        <img src={servico.imagem} alt={servico.nome} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge className="border-0 bg-accent/90 text-accent-foreground text-xs">
            {categoriasServicoIcons[servico.categoria]} {servico.categoria}
          </Badge>
        </div>
        {servico.destaque && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground border-0 text-xs">
            ⭐ Destaque
          </Badge>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-card-foreground leading-tight mb-2">
          {servico.nome}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{servico.descricao}</p>

        {/* What's included */}
        <div className="space-y-1 mb-4">
          {servico.inclui.slice(0, 3).map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
              {item}
            </div>
          ))}
          {servico.inclui.length > 3 && (
            <p className="text-xs text-accent">+{servico.inclui.length - 3} itens inclusos</p>
          )}
        </div>

        <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> Prazo: {servico.prazo}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-muted-foreground">A partir de</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-foreground">
                R$ {servico.preco.toLocaleString("pt-BR")}
              </span>
              {servico.precoAte && (
                <span className="text-xs text-muted-foreground">
                  até R$ {servico.precoAte.toLocaleString("pt-BR")}
                </span>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-accent hover:text-accent/80">
            Solicitar <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
