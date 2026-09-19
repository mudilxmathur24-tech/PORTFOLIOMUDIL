import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { projects, type ProjectCategory, type Project } from "../data/projects";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "../utils/cn";

const FILTERS: ProjectCategory[] = ['ALL', 'PYTHON', 'DATA', 'SQL', 'ML', 'WEB'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter((p: Project) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading title="SELECTED PROJECTS" subtitle="Practical applications of my skills." className="mb-0" />
          
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group p-0 overflow-hidden border-white/10 hover:border-blue-500/40">
                  {/* Image Placeholder area */}
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-black border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                    <Code2 size={48} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.technologies.slice(0, 3).map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-[10px]">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      {project.githubUrl && (
                        <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm" className="px-2">
                          <FaGithub size={16} className="mr-2" /> Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm" className="px-2">
                          <ExternalLink size={16} className="mr-2" /> Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
