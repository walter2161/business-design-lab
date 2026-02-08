import { Link, useLocation } from "react-router-dom";
import { Store, User, LayoutDashboard, LogOut, Coins, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

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
              <span className="hidden sm:inline">Catálogo</span>
            </Link>
          </Button>
          
          <Button
            variant={location.pathname.startsWith("/blog") ? "secondary" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/blog" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Blog</span>
            </Link>
          </Button>
          
          {isAuthenticated && (
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
          )}

          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm" className="ml-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  {user.role === "admin" && <Shield className="h-4 w-4" />}
                  {user.role !== "admin" && <User className="h-4 w-4" />}
                  {user.username}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium text-foreground">{user.username}</p>
                  <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <Coins className="h-4 w-4" />
                  <span>{user.credits} créditos</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="gap-2 cursor-pointer">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Meu Painel</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={logout} 
                  className="gap-2 text-destructive focus:text-destructive cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" size="sm" className="ml-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
                Entrar
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
