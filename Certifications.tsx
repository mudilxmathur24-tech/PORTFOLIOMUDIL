import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { certifications } from "../data/certifications";
import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="CERTIFICATIONS" subtitle="Verified achievements and learning milestones." />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col sm:flex-row gap-6 p-6 sm:items-center border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <Award size={32} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <div className="text-slate-400 text-sm mb-2">{cert.issuer}</div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">
                    {cert.date}
                  </div>
                </div>

                <div className="sm:self-end mt-auto sm:mt-0">
                  <Button href={cert.url} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="w-full sm:w-auto gap-2">
                    VIEW CREDENTIAL <ExternalLink size={14} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
