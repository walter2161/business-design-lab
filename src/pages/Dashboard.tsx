import { Link, Navigate } from "react-router-dom";
import {
  Download,
  Bot,
  ShoppingCart,
  Calendar,
  CreditCard,
  ArrowRight,
  Users,
  Package,
  TrendingUp,
  Settings,
  Eye,
  Coins,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { models, categoryIcons } from "@/data/models";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const purchasedModels = models.filter((m) => user.purchasedModels.includes(m.id));
  const totalInvested = purchasedModels.reduce((sum, m) => sum + m.price, 0);

  // Dados de admin (mock)
  const adminStats = {
    totalUsers: 156,
    totalSales: 342,
    totalRevenue: 38420,
    activeModels: 50,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Welcome */}
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              {user.role === "admin" ? "Painel Administrativo" : "Meu Painel"}
            </h1>
            <p className="mt-1 text-muted-foreground">
              {user.role === "admin"
                ? "Gerencie a plataforma e visualize métricas."
                : "Gerencie seus modelos de negócio adquiridos."}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2">
            <Coins className="h-5 w-5 text-accent" />
            <span className="font-display text-lg font-bold text-foreground">
              {user.credits} créditos
            </span>
          </div>
        </div>

        {/* Admin Stats */}
        {user.role === "admin" && (
          <>
            <div className="mb-10 grid gap-4 sm:grid-cols-4">
              <StatCard
                icon={<Users className="h-5 w-5" />}
                label="Total de usuários"
                value={adminStats.totalUsers.toString()}
              />
              <StatCard
                icon={<ShoppingCart className="h-5 w-5" />}
                label="Vendas totais"
                value={adminStats.totalSales.toString()}
              />
              <StatCard
                icon={<CreditCard className="h-5 w-5" />}
                label="Receita total"
                value={`R$ ${adminStats.totalRevenue.toLocaleString()}`}
              />
              <StatCard
                icon={<Package className="h-5 w-5" />}
                label="Modelos ativos"
                value={adminStats.activeModels.toString()}
              />
            </div>

            {/* Admin: Top Models */}
            <section className="mb-10">
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                Modelos Mais Vendidos
              </h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Modelo
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Categoria
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Vendas
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Receita
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.slice(0, 10).map((model, i) => (
                      <tr key={model.id} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                        <td className="px-4 py-3 text-sm font-medium text-foreground">
                          {model.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {categoryIcons[model.category]} {model.category}
                        </td>
                        <td className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                          {Math.floor(Math.random() * 50) + 5}
                        </td>
                        <td className="px-4 py-3 text-right text-sm font-semibold text-accent">
                          R$ {((Math.floor(Math.random() * 50) + 5) * model.price).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/modelo/${model.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Admin: Recent Users */}
            <section className="mb-10">
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                Usuários Recentes
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { name: "João Silva", email: "joao@email.com", purchases: 3 },
                  { name: "Maria Santos", email: "maria@email.com", purchases: 5 },
                  { name: "Pedro Costa", email: "pedro@email.com", purchases: 2 },
                ].map((u) => (
                  <div key={u.email} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold text-foreground">{u.name}</p>
                    <p className="text-sm text-muted-foreground">{u.email}</p>
                    <p className="mt-2 text-xs text-accent">{u.purchases} compras</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* User Stats */}
        {user.role === "user" && (
          <>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <StatCard
                icon={<ShoppingCart className="h-5 w-5" />}
                label="Modelos adquiridos"
                value={purchasedModels.length.toString()}
              />
              <StatCard
                icon={<CreditCard className="h-5 w-5" />}
                label="Total investido"
                value={`R$ ${totalInvested}`}
              />
              <StatCard
                icon={<Calendar className="h-5 w-5" />}
                label="Créditos disponíveis"
                value={user.credits.toString()}
              />
            </div>

            {/* User: Purchased models */}
            {purchasedModels.length > 0 ? (
              <section className="mb-10">
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Meus Modelos
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {purchasedModels.map((model) => (
                    <div
                      key={model.id}
                      className="rounded-xl border border-border bg-card overflow-hidden"
                    >
                      <div className="relative h-32">
                        <img
                          src={model.image}
                          alt={model.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      <div className="p-5">
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
                          <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                            <Link to={`/meu-modelo/${model.id}`}>
                              <Download className="h-4 w-4" />
                              Acessar
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2" asChild>
                            <Link to={`/meu-modelo/${model.id}?tab=ia`}>
                              <Bot className="h-4 w-4" />
                              IA
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : (
              <section className="mb-10">
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Nenhum modelo adquirido
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore nosso catálogo e adquira seu primeiro modelo de negócio.
                  </p>
                  <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/">
                      Ver catálogo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            )}
          </>
        )}

        {/* CTA */}
        <div className="rounded-xl bg-navy-gradient p-8 text-center">
          <h3 className="mb-2 font-display text-xl font-bold text-primary-foreground">
            {user.role === "admin" ? "Gerenciar catálogo" : "Explore mais modelos"}
          </h3>
          <p className="mb-4 text-sm text-primary-foreground/60">
            {user.role === "admin"
              ? "Adicione, edite ou remova modelos do catálogo."
              : "Descubra novos modelos de negócio para diversificar sua operação."}
          </p>
          <Button
            asChild
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold"
          >
            <Link to="/">
              {user.role === "admin" ? "Ver catálogo" : "Ver catálogo"}
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
