import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { dataLabStats } from "../data/skills";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const CountUp = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <Card ref={ref} className="text-center p-6 border-blue-500/20 hover:border-blue-500/50 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
          {count}
        </div>
        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">
          {label}
        </div>
      </motion.div>
    </Card>
  );
};

// Custom Tooltip for the Radar Chart
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass p-3 rounded-lg border border-white/10 shadow-xl">
        <p className="font-bold text-white mb-1">{data.label}</p>
        <p className="text-blue-400 text-sm">Level: {data.proficiency}</p>
      </div>
    );
  }
  return null;
};

export const DataLab = () => {
  return (
    <section id="datalab" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-black to-black -z-10" />
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="MY DATA LAB" 
          subtitle="A quantitative look at my technical journey and capabilities."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <CountUp end={projects.length} label="PROJECTS" />
          <CountUp end={certifications.length} label="CERTIFICATIONS" />
          <CountUp end={3} label="HACKATHONS" /> {/* Adjust actual number as needed based on journey timeline */}
          <CountUp end={20} label="TECHNOLOGIES" /> {/* Rough count of listed skills */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataLabStats}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="label" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12, fontFamily: 'monospace' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Radar name="Skills" dataKey="level" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Skill Distribution</h3>
            <p className="text-slate-400">
              This visualization represents my current focus areas and proficiency levels. I prioritize transparency over exaggeration—my strongest areas are currently in core programming and database management, while actively developing my machine learning and advanced data analysis capabilities.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Data Foundations (Python, SQL)</span>
                    <span className="text-sm font-mono text-blue-400">Intermediate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-blue-500" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Data Analysis (Pandas, Visualization)</span>
                    <span className="text-sm font-mono text-violet-400">Developing</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "55%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-violet-500" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Machine Learning (Scikit-Learn)</span>
                    <span className="text-sm font-mono text-cyan-400">Learning</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "35%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} className="h-full bg-cyan-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
