// The hero section: name, one-line pitch, and quick links.
// A React component is just a function that returns JSX (HTML-like syntax).
// This one takes no props — it renders the same content every time.

export default function Hero() {
  return (
    <header className="hero">
      <h1>Stephen Stets</h1>
      <p className="tagline">
        Maker, IT support tech, and developer in Eustis, FL.
      </p>
      <p>
        I build things in two worlds: physical products on a 3D printer and
        laser engraver, and software — websites, CLIs, automation, and
        full-stack apps. I run <strong>5AM Cookies</strong>, a one-person
        business selling 3D-printed and laser-engraved products in Lake County,
        Florida.
      </p>
      <div className="hero-links">
        <a href="https://github.com/Stephenstets">GitHub</a>
        <a href="mailto:stephenstets@gmail.com">stephenstets@gmail.com</a>
      </div>
    </header>
  );
}
