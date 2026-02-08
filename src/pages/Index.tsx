import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ModelCard from "@/components/ModelCard";
import Footer from "@/components/Footer";
import { PromotionBanner, ActiveCoupons } from "@/components/PromotionComponents";
import { BlogSection } from "@/components/BlogComponents";
import { models, type Category } from "@/data/models";

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filtered = useMemo(() => {
    return models.filter((m) => {
      const matchesCategory = !selectedCategory || m.category === selectedCategory;
      const matchesSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Promotion Banner */}
      <PromotionBanner />
      
      <Header />
      <HeroSection />

      <main id="catalogo" className="flex-1 container mx-auto px-4 py-12">
        {/* Active Coupons Section */}
        <div className="mb-8">
          <ActiveCoupons />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar modelo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">Nenhum modelo encontrado.</p>
          </div>
        )}

        {/* Blog Section */}
        <div className="mt-16">
          <BlogSection title="Conteúdos para Empreendedores" limit={3} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
