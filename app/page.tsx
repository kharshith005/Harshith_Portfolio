import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <main className="min-h-screen text-slate-100 selection:bg-blue-800/40 selection:text-slate-100">
      <Nav />
      <Hero />
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-32">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Contact />
    </main>
  );
}
