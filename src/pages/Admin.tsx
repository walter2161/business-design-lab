import { useState } from "react";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { models, categoryIcons, type BusinessModel } from "@/data/models";
import { toast } from "sonner";

const Admin = () => {
  const { user, isAuthenticated } = useAuth();
  const [searchProducts, setSearchProducts] = useState("");
  const [searchUsers, setSearchUsers] = useState("");
  const [editingProduct, setEditingProduct] = useState<BusinessModel | null>(null);
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

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="products" className="gap-2">
              <Package className="h-4 w-4" />
              Produtos
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2">
              <Users className="h-4 w-4" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="seo" className="gap-2">
              <Globe className="h-4 w-4" />
              SEO
            </TabsTrigger>
          </TabsList>

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

              <div className="grid gap-4 md:grid-cols-2">
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
              </div>

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

      <Footer />
    </div>
  );
};

export default Admin;
