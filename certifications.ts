export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage / Deloitte",
    date: "[ADD DATE]",
    url: "#" // [ADD CREDENTIAL LINK]
  },
  {
    id: "cert-2",
    name: "ACP Python for Beginners",
    issuer: "Chandigarh University",
    date: "[ADD DATE]",
    url: "#"
  },
  {
    id: "cert-3",
    name: "ACP Data Science",
    issuer: "Chandigarh University",
    date: "[ADD DATE]",
    url: "#"
  },
  {
    id: "cert-4",
    name: "LinkedIn Learning Certificate", // Placeholder if multiple, or specific name
    issuer: "LinkedIn Learning",
    date: "[ADD DATE]",
    url: "#"
  }
];

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  type: 'education' | 'experience' | 'hackathon' | 'general';
}

export const journey: TimelineEvent[] = [
  {
    id: "edu-1",
    year: "2025 — Present",
    title: "Chandigarh University",
    subtitle: "CSE Engineering",
    description: "Expected Graduation: 2029. Location: Mohali, India.",
    type: "education"
  },
  {
    id: "exp-1",
    year: "2025",
    title: "Started Engineering Journey",
    subtitle: "Foundation",
    description: "Began building programming and database foundations.",
    type: "general"
  },
  {
    id: "hack-1",
    year: "2026",
    title: "Adobe University Hackathon",
    subtitle: "Participant",
    description: "Competed and collaborated in building innovative solutions.",
    type: "hackathon"
  },
  {
    id: "hack-2",
    year: "2026",
    title: "NIT Delhi Event",
    subtitle: "Participation",
    type: "experience"
  },
  {
    id: "hack-3",
    year: "2026",
    title: "Smart India Hackathon",
    subtitle: "Participation",
    type: "hackathon"
  },
  {
    id: "exp-2",
    year: "2026+",
    title: "Developing Specialization",
    subtitle: "Data Science & Machine Learning",
    description: "Deepening skills in data analytics, Python, and applied machine learning.",
    type: "general"
  }
];
