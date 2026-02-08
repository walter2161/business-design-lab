import { categories, categoryIcons, type Category } from "@/data/models";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (cat: Category | null) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelect(null)}
        className={selected === null ? "bg-primary text-primary-foreground" : ""}
      >
        Todos
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(cat)}
          className={selected === cat ? "bg-primary text-primary-foreground" : ""}
        >
          {categoryIcons[cat]} {cat}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
