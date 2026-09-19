import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  { text: "$ whoami", delay: 500 },
  { text: "mudil@datascience:~$ python portfolio.py", delay: 1500 },
  { text: "Loading skills...", delay: 2500 },
  { text: "Loading projects...", delay: 3000 },
  { text: "Loading ambitions...", delay: 3500 },
  { text: "STATUS: BUILDING", delay: 4200, highlight: true }
];

export const TerminalComponent = () => {
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    const timers = commands.map((cmd, index) => {
      return setTimeout(() => {
        setLines(index + 1);
      }, cmd.delay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl font-mono text-sm w-full max-w-md">
      <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
        <Terminal size={14} className="text-slate-400 mr-2" />
        <span className="text-xs text-slate-400">Terminal</span>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
      </div>
      <div className="p-4 space-y-1.5 text-slate-300 min-h-[160px]">
        {commands.slice(0, lines).map((cmd, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={cmd.highlight ? "text-blue-400 font-bold mt-4" : ""}
          >
            {cmd.text}
          </motion.div>
        ))}
        {lines < commands.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-slate-400 ml-1 translate-y-1"
          />
        )}
      </div>
    </div>
  );
};
