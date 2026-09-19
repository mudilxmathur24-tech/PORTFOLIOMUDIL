export type ProjectCategory = 'ALL' | 'PYTHON' | 'DATA' | 'SQL' | 'ML' | 'WEB';

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyLearning: string;
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  categories: ProjectCategory[];
  imagePlaceholder?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "[ADD PROJECT NAME]",
    description: "[ADD PROJECT DESCRIPTION]",
    problem: "[ADD PROBLEM SOLVED]",
    approach: "[ADD APPROACH]",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    keyLearning: "[ADD KEY LEARNING]",
    results: "[ADD RESULTS]",
    githubUrl: "#", // [ADD GITHUB LINK]
    liveUrl: "#", // [ADD LIVE DEMO]
    categories: ['PYTHON', 'DATA', 'ML'],
  },
  {
    id: "proj-2",
    name: "[ADD SECOND PROJECT NAME]",
    description: "[ADD PROJECT DESCRIPTION]",
    problem: "[ADD PROBLEM SOLVED]",
    approach: "[ADD APPROACH]",
    technologies: ["SQL", "Python"],
    keyLearning: "[ADD KEY LEARNING]",
    results: "[ADD RESULTS]",
    githubUrl: "#", // [ADD GITHUB LINK]
    categories: ['SQL', 'DATA'],
  },
  {
    id: "proj-3",
    name: "[ADD THIRD PROJECT NAME]",
    description: "[ADD PROJECT DESCRIPTION]",
    problem: "[ADD PROBLEM SOLVED]",
    approach: "[ADD APPROACH]",
    technologies: ["React", "JavaScript"],
    keyLearning: "[ADD KEY LEARNING]",
    results: "[ADD RESULTS]",
    githubUrl: "#", // [ADD GITHUB LINK]
    liveUrl: "#", // [ADD LIVE DEMO]
    categories: ['WEB'],
  }
];
