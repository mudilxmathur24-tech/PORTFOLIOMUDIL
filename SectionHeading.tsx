import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ title, subtitle, align = "left", className, ...props }: SectionHeadingProps) => {
  return (
    <div
      className={cn("mb-12 flex flex-col", align === "center" ? "items-center text-center" : "items-start text-left", className)}
      {...props}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
