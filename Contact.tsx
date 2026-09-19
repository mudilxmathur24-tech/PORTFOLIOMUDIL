import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="LET'S CONNECT" subtitle="Open for opportunities, collaborations, and tech discussions." />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-white/10 p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none placeholder:text-slate-600"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full gap-2">
                  SEND MESSAGE <Send size={18} />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Presence</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 bg-white/5 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-mono">EMAIL</div>
                  <div className="text-white font-medium">{profile.email}</div>
                </div>
              </a>

              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 bg-white/5 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-mono">LINKEDIN</div>
                  <div className="text-white font-medium">Connect with me</div>
                </div>
              </a>

              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 bg-white/5 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-mono">GITHUB</div>
                  <div className="text-white font-medium">View my repositories</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
