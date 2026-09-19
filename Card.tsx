import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
        className={cn(
          "glass-card rounded-xl p-6 relative overflow-hidden group",
          className
        )}
        {...props}
      >
        {hoverEffect && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";
