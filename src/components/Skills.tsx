// The skills section.
// React idea: `.map()` turns an array into a list of elements.
// Each element needs a unique `key` so React can track it.
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.heading}>
            <h3>{group.heading}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
