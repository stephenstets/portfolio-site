// App is the root component: it composes the page out of smaller components.
// Each section lives in its own file under src/components/ so it is easy to
// find and change. The data (projects, skills) lives in src/data.ts.
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="page">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
