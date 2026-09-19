export type Proficiency = 'Learning' | 'Working Knowledge' | 'Developing' | 'Intermediate';

export interface Skill {
  name: string;
  proficiency: Proficiency;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: [
      { name: "Python", proficiency: "Intermediate", description: "Core language for data analysis and ML." },
      { name: "Java", proficiency: "Working Knowledge", description: "Object-oriented programming and DSA." },
      { name: "JavaScript", proficiency: "Developing", description: "Web development and interactive UI." },
    ]
  },
  {
    title: "DATA",
    skills: [
      { name: "SQL", proficiency: "Intermediate", description: "Data querying and database management." },
      { name: "MySQL", proficiency: "Working Knowledge", description: "Relational database systems." },
      { name: "Pandas", proficiency: "Intermediate", description: "Data manipulation and cleaning." },
      { name: "NumPy", proficiency: "Working Knowledge", description: "Numerical computing." },
    ]
  },
  {
    title: "DATA VISUALIZATION",
    skills: [
      { name: "Matplotlib", proficiency: "Working Knowledge", description: "Basic plotting and graphing." },
      { name: "Seaborn", proficiency: "Developing", description: "Statistical data visualization." },
      { name: "Plotly", proficiency: "Learning", description: "Interactive visualizations." },
    ]
  },
  {
    title: "MACHINE LEARNING",
    skills: [
      { name: "Scikit-learn", proficiency: "Developing", description: "Implementing standard ML models." },
      { name: "Regression", proficiency: "Working Knowledge", description: "Predictive modeling for continuous values." },
      { name: "Classification", proficiency: "Working Knowledge", description: "Categorizing data points." },
      { name: "Model Evaluation", proficiency: "Developing", description: "Metrics and validation techniques." },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", proficiency: "Working Knowledge", description: "Version control." },
      { name: "GitHub", proficiency: "Working Knowledge", description: "Code hosting and collaboration." },
      { name: "VS Code", proficiency: "Intermediate", description: "Primary IDE." },
      { name: "Jupyter", proficiency: "Intermediate", description: "Interactive notebooks for data exploration." },
    ]
  }
];

export const dataLabStats = [
  { label: "Python", level: 60, proficiency: "Intermediate" },
  { label: "SQL", level: 65, proficiency: "Intermediate" },
  { label: "Java", level: 45, proficiency: "Working Knowledge" },
  { label: "Data Structures", level: 50, proficiency: "Developing" },
  { label: "Statistics", level: 40, proficiency: "Learning" },
  { label: "Data Analysis", level: 55, proficiency: "Developing" },
  { label: "Machine Learning", level: 35, proficiency: "Learning" },
  { label: "Git/GitHub", level: 50, proficiency: "Working Knowledge" },
];
