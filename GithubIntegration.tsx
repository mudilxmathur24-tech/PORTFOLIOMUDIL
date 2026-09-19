import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const GithubIntegration = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We are simulating an API call here for safety/rate limits, 
    // but in a real app, you might fetch from: https://api.github.com/users/${profile.githubUsername}/repos
    const fetchRepos = async () => {
      try {
        setLoading(true);
        // Fallback simulated data if API isn't connected
        setTimeout(() => {
          setRepos([
            {
              id: 1,
              name: "machine-learning-portfolio",
              description: "A collection of my ML projects including regression, classification, and clustering models.",
              html_url: "#",
              stargazers_count: 12,
              forks_count: 3,
              language: "Python"
            },
            {
              id: 2,
              name: "data-analysis-tools",
              description: "Custom scripts and tools for cleaning and analyzing large datasets with Pandas.",
              html_url: "#",
              stargazers_count: 8,
              forks_count: 1,
              language: "Jupyter Notebook"
            }
          ]);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Failed to fetch GitHub repos", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading title="CODE. BUILD. LEARN." subtitle="Open source contributions and active repositories." className="mb-0" />
          <Button href={profile.socials.github} target="_blank" rel="noopener noreferrer" variant="secondary" className="gap-2">
            <FaGithub size={18} /> VIEW GITHUB PROFILE
          </Button>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="animate-pulse h-48 border-white/5 bg-white/5" hoverEffect={false} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col group border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                      <FaGithub size={20} />
                      <h3>{repo.name}</h3>
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-1">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
