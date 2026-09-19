import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "blue" | "violet";
}

export const Badge = ({ className, variant = "default", children, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-white/10 text-white": variant === "default",
          "border border-white/20 text-slate-300": variant === "outline",
          "bg-blue-500/20 text-blue-300 border border-blue-500/30": variant === "blue",
          "bg-violet-500/20 text-violet-300 border border-violet-500/30": variant === "violet",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
