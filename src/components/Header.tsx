import { Link, useLocation } from "react-router-dom";
import { Store, User, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Store className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            Loja de Negócio
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant={location.pathname === "/" ? "secondary" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/" className="gap-2">
              <Store className="h-4 w-4" />
              Catálogo
            </Link>
          </Button>
          <Button
            variant={location.pathname === "/dashboard" ? "secondary" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/dashboard" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Meu Painel
            </Link>
          </Button>
          <Button variant="default" size="sm" className="ml-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <User className="h-4 w-4" />
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
