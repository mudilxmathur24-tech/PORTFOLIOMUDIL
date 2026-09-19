import { profile } from "../../config/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight text-white mb-1 uppercase">
            {profile.name}
          </h3>
          <p className="text-slate-400 text-sm mb-2">
            {profile.field} • {profile.focus}
          </p>
          <p className="text-blue-400 text-xs tracking-widest uppercase opacity-80">
            "Building. Learning. Analyzing."
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border border-white/5 hover:border-blue-500/30"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border border-white/5 hover:border-blue-500/30"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-full bg-white/5 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border border-white/5 hover:border-blue-500/30"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center relative z-10">
        <p className="text-slate-500 text-xs">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
