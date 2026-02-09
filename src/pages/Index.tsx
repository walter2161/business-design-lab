import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryFilter from "@/components/CategoryFilter";
import ModelCard from "@/components/ModelCard";
import Footer from "@/components/Footer";
import SuperPromotionBanner from "@/components/SuperPromotionBanner";
import { PromotionBanner, ActiveCoupons } from "@/components/PromotionComponents";
import { BlogSection } from "@/components/BlogComponents";
import { models, type Category } from "@/data/models";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const ITEMS_PER_PAGE = 20;

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

  const {
    displayedItems,
    hasMore,
    isLoading,
    loadMoreRef,
    displayedCount,
    totalItems,
  } = useInfiniteScroll({ items: filtered, itemsPerPage: ITEMS_PER_PAGE });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Promotion Banner */}
      <PromotionBanner />
      
      <Header />
      <HeroCarousel />

      <main id="catalogo" className="flex-1 container mx-auto px-4 py-12">
        {/* Active Coupons Section */}
        <div className="mb-8">
          <ActiveCoupons />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
            <p className="text-sm text-muted-foreground mt-2">
              Mostrando {displayedCount} de {totalItems} produtos
            </p>
          </div>
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

        {/* Grid - first batch */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedItems.slice(0, 3).map((model) => (
            <ModelCard key={model.id} model={model} showPromoPrice />
          ))}
        </div>

        {/* Super Promotion */}
        {displayedItems.length > 0 && <SuperPromotionBanner />}

        {/* Grid - rest */}
        {displayedItems.length > 3 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedItems.slice(3).map((model) => (
              <ModelCard key={model.id} model={model} showPromoPrice />
            ))}
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={loadMoreRef} className="h-10 mt-8" />

        {!hasMore && displayedItems.length > 0 && totalItems > ITEMS_PER_PAGE && (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">
              Você viu todos os {totalItems} produtos! 🎉
            </p>
          </div>
        )}

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
