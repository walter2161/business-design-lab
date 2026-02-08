import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { BlogCard } from "@/components/BlogComponents";
import { blogPosts, getPostsByCategory, getRecentPosts } from "@/data/blog";
import { categoryIcons } from "@/data/models";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Artigo não encontrado.</p>
          <Button asChild className="mt-4">
            <Link to="/blog">Voltar ao blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link
              to="/blog"
              className="mb-4 inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
            <Badge className="mb-3 border-0 bg-accent/20 text-amber font-medium">
              {categoryIcons[post.category]} {post.category}
            </Badge>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {post.publishedAt.toLocaleDateString("pt-BR")}
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              {post.excerpt}
            </p>

            <Separator className="mb-6" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="font-display text-xl font-bold text-foreground mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("**")) {
                  const [title, ...rest] = paragraph.split("**");
                  return (
                    <div key={i} className="mb-4">
                      <h4 className="font-semibold text-foreground">{rest[0]}</h4>
                      <p className="text-muted-foreground">{rest.slice(1).join("")}</p>
                    </div>
                  );
                }
                if (paragraph.startsWith("-")) {
                  const items = paragraph.split("\n").filter(l => l.startsWith("-"));
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^-\s*/, "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split("\n").filter(l => l.match(/^\d\./));
                  return (
                    <ol key={i} className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^\d+\.\s*/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Compartilhar:</span>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA */}
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="font-display font-bold text-foreground mb-2">
                Quer aplicar essas estratégias?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conheça nossos modelos de negócio completos com templates, planilhas e IA especializada.
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/#catalogo">Ver catálogo</Link>
              </Button>
            </div>

            {/* Related */}
            {relatedPosts.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-foreground">
                  Artigos relacionados
                </h3>
                <div className="space-y-3">
                  {relatedPosts.map(p => (
                    <BlogCard key={p.id} post={p} compact />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Loja de Negócio. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
