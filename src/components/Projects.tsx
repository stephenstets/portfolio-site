// The projects section — one card per repo, driven by the data in data.ts.
// Adding a project means adding one object to the `projects` array;
// this component does not need to change.
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <p className="section-intro">
        Real, runnable code — each repo builds and runs, and each one
        demonstrates a different language or skill.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>
              <a href={project.link}>{project.title}</a>
            </h3>
            <p>{project.description}</p>
            <span className="language-tag">{project.language}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
