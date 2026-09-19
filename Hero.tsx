import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { Button } from "../components/ui/Button";
import { TerminalComponent } from "../components/ui/TerminalComponent";
import { FileText, ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgNDBoMXYtNDBoLTEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-blue-400 font-mono tracking-widest text-sm uppercase">
                {profile.role} • {profile.subRole}
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                {profile.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl text-gradient font-semibold mb-4">
                {profile.tagline}
              </p>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                I’m a CSE Engineering student at {profile.university}, building my foundation in Python, SQL, statistics, data analytics and machine learning while creating practical projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="primary" size="lg" className="gap-2">
                VIEW MY WORK <ArrowRight size={18} />
              </Button>
              <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="outline" size="lg" className="gap-2">
                DOWNLOAD RESUME <FileText size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-6 text-sm font-mono text-slate-500 pt-8"
            >
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors">Email</a>
            </motion.div>
          </div>

          {/* Right Column - Visual/Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-end items-center relative"
          >
            {/* Ambient glow behind terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px]" />
            <TerminalComponent />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono tracking-widest"
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
