import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { journey } from "../data/certifications";
import { GraduationCap, Award, Briefcase, Zap } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case 'education': return <GraduationCap size={20} />;
    case 'hackathon': return <Zap size={20} />;
    case 'experience': return <Briefcase size={20} />;
    default: return <Award size={20} />;
  }
};

const getColorClass = (type: string) => {
  switch (type) {
    case 'education': return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case 'hackathon': return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case 'experience': return "bg-violet-500/20 text-violet-400 border-violet-500/50";
    default: return "bg-slate-500/20 text-slate-400 border-slate-500/50";
  }
};

export const Journey = () => {
  return (
    <section id="journey" className="py-24 relative z-10 bg-black/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="JOURNEY & ACTIVITIES" subtitle="Education, experiences, and hackathons." />

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {journey.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-0 relative md:flex items-center group"
            >
              {/* Timeline dot/icon */}
              <div className={`absolute -left-12 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border ${getColorClass(item.type)} z-10 bg-black group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(item.type)}
              </div>

              {/* Content area */}
              <div className={`md:w-1/2 md:px-8 ${index % 2 === 0 ? "md:text-right md:ml-0 md:mr-auto" : "md:ml-auto"}`}>
                <div className="glass-card p-6 rounded-xl border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <span className="text-xs font-mono text-blue-400 tracking-widest block mb-2">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-slate-400 text-sm mb-3">{item.subtitle}</h4>
                  {item.description && (
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {/* Subtle line continuation at bottom */}
          <div className="absolute bottom-0 left-0 md:left-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
