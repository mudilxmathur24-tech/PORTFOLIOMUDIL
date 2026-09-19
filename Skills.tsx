import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { skillCategories } from "../data/skills";
import { Terminal, Database, LineChart, BrainCircuit, Wrench } from "lucide-react";
import { cn } from "../utils/cn";

const iconMap: Record<string, any> = {
  "PROGRAMMING": Terminal,
  "DATA": Database,
  "DATA VISUALIZATION": LineChart,
  "MACHINE LEARNING": BrainCircuit,
  "TOOLS": Wrench
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <SectionHeading title="TECH STACK" subtitle="Technologies and tools I use to build solutions." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.title] || Terminal;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-mono font-semibold tracking-wide text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="relative group/skill">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-200 font-medium group-hover/skill:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className={cn(
                            "text-xs font-mono px-2 py-0.5 rounded-full",
                            {
                              "bg-green-500/10 text-green-400": skill.proficiency === "Intermediate",
                              "bg-blue-500/10 text-blue-400": skill.proficiency === "Working Knowledge",
                              "bg-yellow-500/10 text-yellow-400": skill.proficiency === "Developing",
                              "bg-slate-500/10 text-slate-400": skill.proficiency === "Learning",
                            }
                          )}>
                            {skill.proficiency}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-xs text-slate-500 opacity-0 h-0 group-hover/skill:opacity-100 group-hover/skill:h-auto group-hover/skill:mt-1 transition-all duration-300">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
