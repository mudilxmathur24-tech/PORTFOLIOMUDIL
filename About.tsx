import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Database, Code2, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-black/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="ABOUT ME" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {profile.bio}
            </p>
          </motion.div>

          {/* Right: Data Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Database className="text-blue-400" size={24} />
                  <h3 className="text-xl font-mono font-semibold tracking-wider text-white">DATA PROFILE</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <GraduationCap size={16} />
                      <span className="text-sm font-mono uppercase">EDUCATION</span>
                    </div>
                    <span className="text-white font-medium">{profile.university}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Code2 size={16} />
                      <span className="text-sm font-mono uppercase">FIELD</span>
                    </div>
                    <span className="text-white font-medium">{profile.field}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={16} />
                      <span className="text-sm font-mono uppercase">LOCATION</span>
                    </div>
                    <span className="text-white font-medium">{profile.location}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-white/5">
                    <span className="text-sm font-mono uppercase text-slate-400">GRADUATION</span>
                    <Badge variant="blue">{profile.graduationYear}</Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-sm font-mono uppercase text-slate-400">FOCUS</span>
                    <Badge variant="violet">{profile.focus}</Badge>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-sm font-mono uppercase text-slate-400 block mb-3">CURRENT STACK</span>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">SQL</Badge>
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">Git</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
