import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { packCategories, standardPackItems } from "@/data/packContents";

interface PackPreviewProps {
  maxItems?: number;
}

export const PackPreview = ({ maxItems = 10 }: PackPreviewProps) => {
  const totalItems = standardPackItems.length;
  const previewItems = standardPackItems.slice(0, maxItems);
  const remainingItems = totalItems - maxItems;

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="flex flex-wrap gap-2">
        {packCategories.map((cat) => {
          const count = standardPackItems.filter(
            (item) => item.category === cat.name
          ).length;
          return (
            <Badge key={cat.name} variant="secondary" className="gap-1">
              <span>{cat.icon}</span>
              <span>{count}</span>
            </Badge>
          );
        })}
      </div>

      {/* Preview items */}
      <div className="grid gap-2 sm:grid-cols-2">
        {previewItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
            <span className="text-sm text-foreground line-clamp-1">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Remaining count */}
      {remainingItems > 0 && (
        <div className="text-center py-3 rounded-lg border border-dashed border-accent/50 bg-accent/5">
          <span className="text-sm font-medium text-accent">
            + {remainingItems} itens adicionais inclusos
          </span>
        </div>
      )}

      {/* Total badge */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <CheckCircle2 className="h-5 w-5 text-accent" />
        <span className="font-display font-bold text-foreground">
          {totalItems} itens com acesso vitalício
        </span>
      </div>
    </div>
  );
};

export default PackPreview;
