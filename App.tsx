import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { DataLab } from "./sections/DataLab";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Journey } from "./sections/Journey";
import { Certifications } from "./sections/Certifications";
import { GithubIntegration } from "./sections/GithubIntegration";
import { Contact } from "./sections/Contact";
import { ResumeCTA } from "./sections/ResumeCTA";

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <DataLab />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <GithubIntegration />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
