import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { BlogCard } from "@/components/BlogComponents";
import { blogPosts } from "@/data/blog";
import { categories, categoryIcons } from "@/data/models";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !search || 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const allTags = [...new Set(blogPosts.flatMap(p => p.tags))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-navy-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 border-0 bg-accent/20 text-amber font-medium">
            <BookOpen className="h-3 w-3 mr-1" />
            Blog
          </Badge>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Conteúdo para Empreendedores
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Artigos, dicas e estratégias para ajudar você a implementar seu modelo de negócio com sucesso.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Todos
              </button>
              {categories.slice(0, 5).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {categoryIcons[cat]} {cat.split(" ")[0]}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar artigo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 10).map(tag => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-accent/10"
                onClick={() => setSearch(tag)}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados"}
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-lg text-muted-foreground">Nenhum artigo encontrado.</p>
            <button
              onClick={() => { setSearch(""); setSelectedCategory(null); }}
              className="mt-4 text-accent hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Loja de Negócio. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Blog;
