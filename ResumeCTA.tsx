import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../components/ui/Button";

export const ResumeCTA = () => {
  const handleDownload = () => {
    // Basic check for placeholder - in a real app, you might want to show a toast here if the file doesn't exist
    // This is a simple implementation that just lets the browser handle the 404 if the file is missing,
    // but the console warning is there for the developer.
    console.log("Downloading resume from /resume.pdf. Make sure this file exists in the public directory.");
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a14] p-12 text-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">WITH DATA.</span>
            </h2>
            <p className="text-lg text-slate-400">
              Interested in my work? Explore my projects, GitHub repositories and professional profile to see how I can add value to your team.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleDownload} variant="primary" size="lg" className="gap-2">
                <FileText size={18} /> DOWNLOAD RESUME
              </Button>
              <Button href={profile.socials.github} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="gap-2">
                <FaGithub size={18} /> VIEW GITHUB
              </Button>
              <Button href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="gap-2">
                <FaLinkedin size={18} /> VIEW LINKEDIN
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
