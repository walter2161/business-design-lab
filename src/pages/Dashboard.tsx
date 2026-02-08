import { Link } from "react-router-dom";
import {
  Download,
  Bot,
  ShoppingCart,
  Calendar,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { models, categoryIcons } from "@/data/models";

// Mock data for purchased models
const purchasedModels = [models[0], models[2]];
const purchaseHistory = [
  { model: models[0].name, date: "2026-01-15", value: models[0].price, status: "Ativo" },
  { model: models[2].name, date: "2026-02-01", value: models[2].price, status: "Ativo" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground">Meu Painel</h1>
          <p className="mt-1 text-muted-foreground">
            Gerencie seus modelos de negócio adquiridos.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <StatCard
            icon={<ShoppingCart className="h-5 w-5" />}
            label="Modelos adquiridos"
            value={purchasedModels.length.toString()}
          />
          <StatCard
            icon={<CreditCard className="h-5 w-5" />}
            label="Total investido"
            value={`R$ ${purchaseHistory.reduce((sum, p) => sum + p.value, 0)}`}
          />
          <StatCard
            icon={<Calendar className="h-5 w-5" />}
            label="Última compra"
            value="01/02/2026"
          />
        </div>

        {/* Purchased models */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-xl font-bold text-foreground">Meus Modelos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {purchasedModels.map((model) => (
              <div
                key={model.id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Badge className="border-0 bg-accent/15 text-amber text-xs font-medium">
                    {categoryIcons[model.category]} {model.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">Ativo</Badge>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-card-foreground">
                  {model.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {model.shortDescription}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Downloads
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bot className="h-4 w-4" />
                    IA do Modelo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Purchase history */}
        <section>
          <h2 className="mb-4 font-display text-xl font-bold text-foreground">
            Histórico de Compras
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Modelo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchaseHistory.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {p.model}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{p.date}</td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                      R$ {p.value}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant="secondary" className="text-xs">{p.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 rounded-xl bg-navy-gradient p-8 text-center">
          <h3 className="mb-2 font-display text-xl font-bold text-primary-foreground">
            Explore mais modelos
          </h3>
          <p className="mb-4 text-sm text-primary-foreground/60">
            Descubra novos modelos de negócio para diversificar sua operação.
          </p>
          <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
            <Link to="/">
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
      {icon}
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="font-display text-2xl font-bold text-card-foreground">{value}</p>
  </div>
);

export default Dashboard;
