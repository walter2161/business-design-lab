import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Package,
  Users,
  Settings,
  Search,
  Edit,
  Save,
  X,
  Globe,
  FileText,
  BarChart3,
  TrendingUp,
  DollarSign,
  Tag,
  Percent,
  Plus,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Award,
  BookOpen,
  Video,
  FileSpreadsheet,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { models, categoryIcons, categories, type BusinessModel, type Category, type ModelType } from "@/data/models";
import { 
  getCoupons, 
  getPromotions, 
  saveCoupons, 
  savePromotions,
  addCoupon,
  updateCoupon,
  deleteCoupon,
  addPromotion,
  updatePromotion,
  deletePromotion,
  isPromotionActive,
  type Coupon,
  type Promotion,
} from "@/data/promotions";
import { toast } from "sonner";
import AdminMasterPanel from "@/components/AdminMasterPanel";

const Admin = () => {
  const { user, isAuthenticated } = useAuth();
  const [searchProducts, setSearchProducts] = useState("");
  const [searchUsers, setSearchUsers] = useState("");
  const [editingProduct, setEditingProduct] = useState<BusinessModel | null>(null);
  
  // Cupons e promoções
  const [coupons, setCoupons] = useState<Coupon[]>(getCoupons());
  const [promotions, setPromotions] = useState<Promotion[]>(getPromotions());
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null);
  const [newCoupon, setNewCoupon] = useState<Partial<Coupon>>({
    code: "",
    discount: 10,
    description: "",
    expiresAt: "",
    isRecurring: false,
    isActive: true,
  });
  const [showNewCouponDialog, setShowNewCouponDialog] = useState(false);
  
  const [seoData, setSeoData] = useState({
    siteTitle: "Loja de Negócios",
    siteDescription: "Modelos de negócio validados para empreendedores brasileiros. Encontre o modelo perfeito para começar seu negócio.",
    siteKeywords: "modelos de negócio, empreendedorismo, MEI, microempresa, plano de negócio, startup",
    ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
    twitterHandle: "@lojadenegocios",
    googleAnalyticsId: "GA-XXXXXXXXX",
    facebookPixelId: "",
    canonicalUrl: "https://lojadenegocios.com.br",
  });

  // Refresh coupons and promotions
  const refreshData = () => {
    setCoupons(getCoupons());
    setPromotions(getPromotions());
  };

  // Redirect if not admin
  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // Get users from localStorage
  const getStoredUsers = () => {
    const stored = localStorage.getItem("loja_negocio_users");
    if (stored) {
      return Object.values(JSON.parse(stored)) as Array<{
        id: string;
        username: string;
        role: string;
        credits: number;
        purchasedModels: string[];
      }>;
    }
    return [];
  };

  const storedUsers = getStoredUsers();

  const filteredProducts = models.filter(
    (m) =>
      m.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
      m.category.toLowerCase().includes(searchProducts.toLowerCase())
  );

  const filteredUsers = storedUsers.filter(
    (u) =>
      u.username.toLowerCase().includes(searchUsers.toLowerCase()) ||
      u.role.toLowerCase().includes(searchUsers.toLowerCase())
  );

  const handleSaveSEO = () => {
    localStorage.setItem("loja_negocio_seo", JSON.stringify(seoData));
    toast.success("Configurações de SEO salvas!");
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      // In production, this would update the database
      toast.success(`Produto "${editingProduct.name}" atualizado!`);
      setEditingProduct(null);
    }
  };

  // Stats
  const totalRevenue = storedUsers.reduce((acc, u) => acc + u.purchasedModels.length * 120, 0);
  const totalSales = storedUsers.reduce((acc, u) => acc + u.purchasedModels.length, 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Painel Administrativo
          </h1>
          <p className="mt-2 text-muted-foreground">
            Gerencie produtos, usuários e configurações do site.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produtos</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{models.length}</div>
              <p className="text-xs text-muted-foreground">modelos cadastrados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{storedUsers.length}</div>
              <p className="text-xs text-muted-foreground">cadastrados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vendas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSales}</div>
              <p className="text-xs text-muted-foreground">modelos vendidos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">total estimado</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="master" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="master" className="gap-2">
              <Rocket className="h-4 w-4" />
              <span className="hidden sm:inline">Master</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Categorias</span>
            </TabsTrigger>
            <TabsTrigger value="promotions" className="gap-2">
              <Tag className="h-4 w-4" />
              <span className="hidden sm:inline">Promoções</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Usuários</span>
            </TabsTrigger>
            <TabsTrigger value="seo" className="gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">SEO</span>
            </TabsTrigger>
          </TabsList>

          {/* Master Tab */}
          <TabsContent value="master">
            <AdminMasterPanel />
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Produtos</CardTitle>
                <CardDescription>
                  Edite informações, preços e conteúdo dos modelos de negócio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Buscar produtos..."
                      value={searchProducts}
                      onChange={(e) => setSearchProducts(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Capa</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead className="text-right">Preço</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.slice(0, 20).map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-12 w-16 rounded object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>
                            <Badge variant={product.modelType === "Validado" ? "default" : "secondary"} className={product.modelType === "Validado" ? "bg-accent text-accent-foreground" : ""}>
                              {product.modelType === "Validado" ? <><Award className="h-3 w-3 mr-1" /> Validado</> : <><BookOpen className="h-3 w-3 mr-1" /> Teórico</>}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              {categoryIcons[product.category]} {product.category}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            R$ {product.price}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingProduct(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {filteredProducts.length > 20 && (
                  <p className="mt-4 text-sm text-muted-foreground text-center">
                    Mostrando 20 de {filteredProducts.length} produtos
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories & Validation Tab */}
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Gestão de Categorias e Validação
                </CardTitle>
                <CardDescription>
                  Gerencie tipos de produto (Teórico/Validado), perfis de validadores, taxonomias de investimento e público-alvo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-border bg-card p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">{models.filter(m => m.modelType === "Teórico").length}</p>
                      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1"><BookOpen className="h-4 w-4" /> Modelos Teóricos</p>
                    </div>
                    <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-center">
                      <p className="text-2xl font-bold text-accent">{models.filter(m => m.modelType === "Validado").length}</p>
                      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1"><Award className="h-4 w-4" /> Modelos Validados</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">+R$ 150</p>
                      <p className="text-sm text-muted-foreground">Valor adicional Validado</p>
                    </div>
                  </div>

                  {/* Validated Models List */}
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3">Modelos Validados</h3>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Modelo</TableHead>
                            <TableHead>Validador</TableHead>
                            <TableHead>Área</TableHead>
                            <TableHead>Extras</TableHead>
                            <TableHead>Consultoria</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {models.filter(m => m.modelType === "Validado").map(product => (
                            <TableRow key={product.id}>
                              <TableCell className="font-medium">{product.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {product.validator && (
                                    <>
                                      <img src={product.validator.photo} alt={product.validator.name} className="h-8 w-8 rounded-full object-cover" />
                                      <span className="text-sm">{product.validator.name}</span>
                                    </>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">{product.validator?.area}</TableCell>
                              <TableCell>
                                <Badge variant="secondary">{product.extraContents?.length || 0} itens</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-accent/20 text-accent">R$ {product.consultancyPrice}</Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  {/* Taxonomy Config */}
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3">Configuração de Taxonomias</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-border p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-accent" />
                          Faixas de Investimento
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Cada modelo tem faixas de investimento configuráveis (mínimo, médio, alto).
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">R$ 5.000</Badge>
                            <span className="text-muted-foreground">Investimento mínimo</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">R$ 20.000</Badge>
                            <span className="text-muted-foreground">Investimento médio</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">R$ 50.000</Badge>
                            <span className="text-muted-foreground">Investimento alto</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-border p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-accent" />
                          Público-Alvo
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Define as estratégias de marketing e posicionamento do modelo.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">A e B</Badge>
                            <span className="text-muted-foreground">Premium, alto poder aquisitivo</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">B e C</Badge>
                            <span className="text-muted-foreground">Classe média, equilíbrio</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">C e D</Badge>
                            <span className="text-muted-foreground">Popular, alto volume</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Nota:</strong> Para adicionar novos modelos validados, transformar teóricos em validados, ou alterar perfis de validadores, 
                      edite o produto na aba "Produtos" e configure os campos de validação. As taxonomias de investimento e público-alvo são aplicadas automaticamente 
                      com base na faixa de preço do modelo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promotions" className="space-y-4">
            {/* Coupons Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Cupons de Desconto
                    </CardTitle>
                    <CardDescription>
                      Gerencie cupons ativos e crie novas promoções.
                    </CardDescription>
                  </div>
                  <Button onClick={() => setShowNewCouponDialog(true)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Novo Cupom
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Código</TableHead>
                        <TableHead>Desconto</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Expiração</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Usos</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {coupons.map((coupon) => (
                        <TableRow key={coupon.id}>
                          <TableCell>
                            <code className="rounded bg-muted px-2 py-1 font-mono font-semibold">
                              {coupon.code}
                            </code>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-accent/20 text-accent">
                              {coupon.discount}% OFF
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {coupon.description}
                          </TableCell>
                          <TableCell>
                            <span className={isPromotionActive(coupon.expiresAt) ? "text-foreground" : "text-destructive"}>
                              {new Date(coupon.expiresAt).toLocaleDateString("pt-BR")}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge variant={coupon.isActive && isPromotionActive(coupon.expiresAt) ? "default" : "secondary"}>
                              {coupon.isActive && isPromotionActive(coupon.expiresAt) ? "Ativo" : "Inativo"}
                            </Badge>
                          </TableCell>
                          <TableCell>{coupon.usedCount}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  updateCoupon(coupon.id, { isActive: !coupon.isActive });
                                  refreshData();
                                  toast.success(`Cupom ${coupon.isActive ? "desativado" : "ativado"}!`);
                                }}
                              >
                                {coupon.isActive ? (
                                  <ToggleRight className="h-4 w-4 text-accent" />
                                ) : (
                                  <ToggleLeft className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditingCoupon(coupon)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  deleteCoupon(coupon.id);
                                  refreshData();
                                  toast.success("Cupom excluído!");
                                }}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Promotions Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5" />
                  Promoções Ativas
                </CardTitle>
                <CardDescription>
                  Banners e promoções em destaque no site.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Badge</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead>Desconto</TableHead>
                        <TableHead>Término</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {promotions.map((promo) => (
                        <TableRow key={promo.id}>
                          <TableCell>{promo.badge}</TableCell>
                          <TableCell className="font-medium">{promo.title}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{promo.discount}% OFF</Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(promo.endsAt).toLocaleDateString("pt-BR")}
                          </TableCell>
                          <TableCell>
                            <Badge variant={promo.isActive && isPromotionActive(promo.endsAt) ? "default" : "secondary"}>
                              {promo.isActive && isPromotionActive(promo.endsAt) ? "Ativa" : "Inativa"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  updatePromotion(promo.id, { isActive: !promo.isActive });
                                  refreshData();
                                  toast.success(`Promoção ${promo.isActive ? "desativada" : "ativada"}!`);
                                }}
                              >
                                {promo.isActive ? (
                                  <ToggleRight className="h-4 w-4 text-accent" />
                                ) : (
                                  <ToggleLeft className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  deletePromotion(promo.id);
                                  refreshData();
                                  toast.success("Promoção excluída!");
                                }}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Usuários Cadastrados</CardTitle>
                <CardDescription>
                  Visualize informações dos usuários e suas compras.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Buscar usuários..."
                      value={searchUsers}
                      onChange={(e) => setSearchUsers(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead className="text-right">Créditos</TableHead>
                        <TableHead className="text-right">Compras</TableHead>
                        <TableHead>Modelos Adquiridos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((u) => (
                        <TableRow key={u.id}>
                          <TableCell className="font-medium">{u.username}</TableCell>
                          <TableCell>
                            <Badge variant={u.role === "admin" ? "default" : "secondary"}>
                              {u.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">{u.credits}</TableCell>
                          <TableCell className="text-right">{u.purchasedModels.length}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {u.purchasedModels.slice(0, 3).map((modelId) => {
                                const model = models.find((m) => m.id === modelId);
                                return model ? (
                                  <Badge key={modelId} variant="outline" className="text-xs">
                                    {model.name.substring(0, 15)}...
                                  </Badge>
                                ) : null;
                              })}
                              {u.purchasedModels.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{u.purchasedModels.length - 3}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de SEO</CardTitle>
                <CardDescription>
                  Otimize seu site para mecanismos de busca.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="siteTitle">Título do Site</Label>
                    <Input
                      id="siteTitle"
                      value={seoData.siteTitle}
                      onChange={(e) => setSeoData({ ...seoData, siteTitle: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="canonicalUrl">URL Canônica</Label>
                    <Input
                      id="canonicalUrl"
                      value={seoData.canonicalUrl}
                      onChange={(e) => setSeoData({ ...seoData, canonicalUrl: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Meta Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={seoData.siteDescription}
                    onChange={(e) => setSeoData({ ...seoData, siteDescription: e.target.value })}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {seoData.siteDescription.length}/160 caracteres
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteKeywords">Palavras-chave</Label>
                  <Input
                    id="siteKeywords"
                    value={seoData.siteKeywords}
                    onChange={(e) => setSeoData({ ...seoData, siteKeywords: e.target.value })}
                  />
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ogImage">Imagem OG (Open Graph)</Label>
                    <Input
                      id="ogImage"
                      value={seoData.ogImage}
                      onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitterHandle">Twitter Handle</Label>
                    <Input
                      id="twitterHandle"
                      value={seoData.twitterHandle}
                      onChange={(e) => setSeoData({ ...seoData, twitterHandle: e.target.value })}
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                    <Input
                      id="googleAnalyticsId"
                      placeholder="GA-XXXXXXXXX"
                      value={seoData.googleAnalyticsId}
                      onChange={(e) => setSeoData({ ...seoData, googleAnalyticsId: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                    <Input
                      id="facebookPixelId"
                      placeholder="XXXXXXXXXXXXXXXX"
                      value={seoData.facebookPixelId}
                      onChange={(e) => setSeoData({ ...seoData, facebookPixelId: e.target.value })}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveSEO} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Configurações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Edit Product Dialog */}
      <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Produto</DialogTitle>
            <DialogDescription>
              Atualize as informações do modelo de negócio.
            </DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <img
                  src={editingProduct.image}
                  alt={editingProduct.name}
                  className="h-24 w-32 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <Label>Nome do Produto</Label>
                  <Input
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>URL da Imagem</Label>
                <Input
                  value={editingProduct.image}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, image: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>Preço (R$)</Label>
                  <Input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Input value={editingProduct.category} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Tipo do Modelo</Label>
                  <Select
                    value={editingProduct.modelType}
                    onValueChange={(value: ModelType) =>
                      setEditingProduct({ ...editingProduct, modelType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teórico">📖 Teórico</SelectItem>
                      <SelectItem value="Validado">🏆 Validado (+R$ 150)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Validator fields - shown for Validado models */}
              {editingProduct.modelType === "Validado" && (
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    Dados do Validador
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Nome do Validador</Label>
                      <Input
                        value={editingProduct.validator?.name || ""}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            validator: { ...editingProduct.validator!, name: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Área de Atuação</Label>
                      <Input
                        value={editingProduct.validator?.area || ""}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            validator: { ...editingProduct.validator!, area: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Foto do Validador (URL)</Label>
                    <Input
                      value={editingProduct.validator?.photo || ""}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          validator: { ...editingProduct.validator!, photo: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>História do Profissional</Label>
                    <Textarea
                      value={editingProduct.validator?.story || ""}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          validator: { ...editingProduct.validator!, story: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Preço da Consultoria (R$)</Label>
                    <Input
                      type="number"
                      value={editingProduct.consultancyPrice || 99}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, consultancyPrice: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Descrição Curta</Label>
                <Textarea
                  value={editingProduct.shortDescription}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, shortDescription: e.target.value })
                  }
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Público-Alvo</Label>
                <Textarea
                  value={editingProduct.targetAudience}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, targetAudience: e.target.value })
                  }
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Modelo de Receita</Label>
                <Input
                  value={editingProduct.revenueModel}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, revenueModel: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditingProduct(null)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancelar
                </Button>
                <Button onClick={handleSaveProduct}>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* New Coupon Dialog */}
      <Dialog open={showNewCouponDialog} onOpenChange={setShowNewCouponDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Criar Novo Cupom</DialogTitle>
            <DialogDescription>
              Configure um novo cupom de desconto.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Código do Cupom</Label>
                <Input
                  placeholder="EX: DESCONTO20"
                  value={newCoupon.code || ""}
                  onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                />
              </div>
              <div className="space-y-2">
                <Label>Desconto (%)</Label>
                <Input
                  type="number"
                  min={1}
                  max={100}
                  value={newCoupon.discount || 10}
                  onChange={(e) => setNewCoupon({ ...newCoupon, discount: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Input
                placeholder="Descrição do cupom..."
                value={newCoupon.description || ""}
                onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Validade (horas)</Label>
                <Input
                  type="number"
                  min={1}
                  placeholder="24"
                  onChange={(e) => {
                    const hours = Number(e.target.value) || 24;
                    const date = new Date();
                    date.setHours(date.getHours() + hours);
                    setNewCoupon({ ...newCoupon, expiresAt: date.toISOString() });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label>Compra Mínima (R$)</Label>
                <Input
                  type="number"
                  placeholder="Opcional"
                  onChange={(e) => setNewCoupon({ ...newCoupon, minPurchase: Number(e.target.value) || undefined })}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="recurring"
                checked={newCoupon.isRecurring || false}
                onCheckedChange={(checked) => setNewCoupon({ ...newCoupon, isRecurring: checked })}
              />
              <Label htmlFor="recurring">Cupom recorrente</Label>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowNewCouponDialog(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
              <Button 
                onClick={() => {
                  if (!newCoupon.code || !newCoupon.description || !newCoupon.expiresAt) {
                    toast.error("Preencha todos os campos obrigatórios");
                    return;
                  }
                  addCoupon({
                    code: newCoupon.code,
                    discount: newCoupon.discount || 10,
                    description: newCoupon.description,
                    expiresAt: newCoupon.expiresAt,
                    isRecurring: newCoupon.isRecurring || false,
                    minPurchase: newCoupon.minPurchase,
                    isActive: true,
                  });
                  refreshData();
                  setShowNewCouponDialog(false);
                  setNewCoupon({ code: "", discount: 10, description: "", expiresAt: "", isRecurring: false, isActive: true });
                  toast.success("Cupom criado com sucesso!");
                }}
              >
                <Save className="h-4 w-4 mr-2" />
                Criar Cupom
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Coupon Dialog */}
      <Dialog open={!!editingCoupon} onOpenChange={() => setEditingCoupon(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar Cupom</DialogTitle>
            <DialogDescription>
              Atualize as informações do cupom.
            </DialogDescription>
          </DialogHeader>
          {editingCoupon && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Código do Cupom</Label>
                  <Input
                    value={editingCoupon.code}
                    onChange={(e) => setEditingCoupon({ ...editingCoupon, code: e.target.value.toUpperCase() })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Desconto (%)</Label>
                  <Input
                    type="number"
                    min={1}
                    max={100}
                    value={editingCoupon.discount}
                    onChange={(e) => setEditingCoupon({ ...editingCoupon, discount: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descrição</Label>
                <Input
                  value={editingCoupon.description}
                  onChange={(e) => setEditingCoupon({ ...editingCoupon, description: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Compra Mínima (R$)</Label>
                  <Input
                    type="number"
                    value={editingCoupon.minPurchase || ""}
                    onChange={(e) => setEditingCoupon({ ...editingCoupon, minPurchase: Number(e.target.value) || undefined })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Limite de Uso</Label>
                  <Input
                    type="number"
                    value={editingCoupon.usageLimit || ""}
                    onChange={(e) => setEditingCoupon({ ...editingCoupon, usageLimit: Number(e.target.value) || undefined })}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="edit-recurring"
                    checked={editingCoupon.isRecurring}
                    onCheckedChange={(checked) => setEditingCoupon({ ...editingCoupon, isRecurring: checked })}
                  />
                  <Label htmlFor="edit-recurring">Recorrente</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="edit-active"
                    checked={editingCoupon.isActive}
                    onCheckedChange={(checked) => setEditingCoupon({ ...editingCoupon, isActive: checked })}
                  />
                  <Label htmlFor="edit-active">Ativo</Label>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditingCoupon(null)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancelar
                </Button>
                <Button 
                  onClick={() => {
                    updateCoupon(editingCoupon.id, editingCoupon);
                    refreshData();
                    setEditingCoupon(null);
                    toast.success("Cupom atualizado!");
                  }}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Admin;
