"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function CategoryPills({ rows }: { rows: string[][] }) {
  const [active, setActive] = useState("Featured");
  return (
    <div className="mx-auto flex max-w-[1199px] flex-col gap-[22px]">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex flex-wrap items-center justify-center gap-4 xl:flex-nowrap"
        >
          {row.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={active === label}
              onClick={() => setActive(label)}
              className={cn(
                "h-[42px] rounded-(--radius-pill) px-4 transition-colors",
                active === label
                  ? "bg-accent text-ink"
                  : "bg-surface-alt text-body hover:bg-line",
              )}
            >
              {label}
            </button>
          ))}
          {i === rows.length - 1 && (
            <button type="button" className="text-primary px-0.5">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
