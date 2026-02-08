import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getRecentPosts, getPostsByCategory, getRelatedPosts, type BlogPost } from "@/data/blog";
import { Category, categoryIcons } from "@/data/models";

interface BlogCardProps {
  post: BlogPost;
  compact?: boolean;
}

export const BlogCard = ({ post, compact = false }: BlogCardProps) => {
  if (compact) {
    return (
      <Link to={`/blog/${post.id}`} className="group">
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
          <img
            src={post.image}
            alt={post.title}
            className="w-16 h-16 rounded-lg object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
              {post.title}
            </h4>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.id}`} className="group">
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="relative h-40 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-background/90 text-foreground">
              {categoryIcons[post.category]} {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
            <span className="flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
              Ler mais <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

interface BlogSectionProps {
  title?: string;
  category?: Category;
  modelId?: string;
  limit?: number;
  showViewAll?: boolean;
}

export const BlogSection = ({ 
  title = "Artigos Recentes", 
  category, 
  modelId, 
  limit = 3,
  showViewAll = true 
}: BlogSectionProps) => {
  let posts: BlogPost[] = [];
  
  if (modelId) {
    posts = getRelatedPosts(modelId);
  } else if (category) {
    posts = getPostsByCategory(category);
  } else {
    posts = getRecentPosts(limit);
  }

  if (posts.length === 0) {
    // Fallback to recent posts if no specific posts found
    posts = getRecentPosts(limit);
  }

  posts = posts.slice(0, limit);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <BookOpen className="h-5 w-5 text-accent" />
          {title}
        </h2>
        {showViewAll && (
          <Link 
            to="/blog" 
            className="flex items-center gap-1 text-sm text-accent hover:underline"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

interface RelatedArticlesProps {
  modelId: string;
  category: Category;
}

export const RelatedArticles = ({ modelId, category }: RelatedArticlesProps) => {
  let posts = getRelatedPosts(modelId);
  
  // If no related posts, get posts from the same category
  if (posts.length === 0) {
    posts = getPostsByCategory(category);
  }

  if (posts.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <BookOpen className="h-4 w-4 text-accent" />
        Artigos Relacionados
      </h3>
      <div className="space-y-2">
        {posts.slice(0, 3).map(post => (
          <BlogCard key={post.id} post={post} compact />
        ))}
      </div>
    </div>
  );
};
