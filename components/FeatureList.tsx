import { Check } from "lucide-react";
import { Stagger, Item } from "./Motion";

export default function FeatureList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <Stagger className={className ? className : "grid gap-3"}>
      {items.map((t, i) => (
        <Item key={i}>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-green/15 text-accent-green">
              <Check size={12} strokeWidth={3} />
            </span>
            <p className="text-ink-100 leading-relaxed">{t}</p>
          </div>
        </Item>
      ))}
    </Stagger>
  );
}
