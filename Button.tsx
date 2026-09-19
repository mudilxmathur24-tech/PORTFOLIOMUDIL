import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const Component = href ? motion.a : motion.button;
    
    return (
      <Component
        ref={ref as any}
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.4)]": variant === "primary",
            "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm": variant === "secondary",
            "border border-white/20 bg-transparent hover:bg-white/5 text-white": variant === "outline",
            "hover:bg-white/5 text-slate-300 hover:text-white": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";
