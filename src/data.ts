// Shared data for the portfolio site.
//
// TypeScript idea: an `interface` describes the shape of an object.
// Every project in the list below MUST have a title, description, language,
// and link — if one is missing, `npm run build` fails with a type error.
// That is the whole point of TypeScript: mistakes get caught while you type,
// not after the site is live.

export interface Project {
  title: string;
  description: string;
  language: string;
  link: string;
}

export interface SkillGroup {
  heading: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "stl-generators",
    description:
      "Parametric STL generators for 3D printing — name plates, pet tags, golf markers, and household goods. No-support PLA design, computed as raw triangle meshes.",
    language: "Python",
    link: "https://github.com/Stephenstets/stl-generators",
  },
  {
    title: "powershell-admin-toolkit",
    description:
      "Network diagnostics, a remote-session helper, system inventory, and dev-environment setup scripts for Windows admin work.",
    language: "PowerShell",
    link: "https://github.com/Stephenstets/powershell-admin-toolkit",
  },
  {
    title: "java-inventory-cli",
    description:
      "Command-line inventory manager for a maker business — track filament rolls, products, and stock levels from the terminal.",
    language: "Java",
    link: "https://github.com/Stephenstets/java-inventory-cli",
  },
  {
    title: "csharp-order-tracker",
    description:
      "Console order tracker for a small shop — add, list, and ship orders, stored as JSON.",
    language: "C#",
    link: "https://github.com/Stephenstets/csharp-order-tracker",
  },
  {
    title: "cpp-gcode-tool",
    description:
      "G-code analyzer — reads a 3D printer G-code file and reports filament used, layer count, and a print-time estimate.",
    language: "C++",
    link: "https://github.com/Stephenstets/cpp-gcode-tool",
  },
  {
    title: "ruby-task-manager",
    description:
      "Small CLI task manager with JSON storage — add, list, and complete tasks.",
    language: "Ruby",
    link: "https://github.com/Stephenstets/ruby-task-manager",
  },
  {
    title: "php-mysql-shop",
    description:
      "Small product catalog backed by MySQL, using prepared statements throughout.",
    language: "PHP + MySQL",
    link: "https://github.com/Stephenstets/php-mysql-shop",
  },
  {
    title: "dev-environment-setup",
    description:
      "Guides and scripts for Python virtual environments, Node.js, SSH and remote access, and VM setup.",
    language: "Guides + scripts",
    link: "https://github.com/Stephenstets/dev-environment-setup",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Java",
      "Ruby",
      "C#",
      "C++",
      "PowerShell",
    ],
  },
  {
    heading: "Web & Data",
    skills: ["HTML5", "CSS3", "Node.js", "Rails", "MySQL"],
  },
  {
    heading: "IT & Systems",
    skills: [
      "Networking",
      "Remote access",
      "Virtual environments",
      "Microsoft Office",
    ],
  },
  {
    heading: "Design & Fabrication",
    skills: [
      "CAD",
      "Blender",
      "G-code",
      "Adobe Creative Suite",
      "3D printing",
      "Laser engraving",
      "Soldering",
    ],
  },
  {
    heading: "Trades",
    skills: ["HVAC/R", "EPA Section 608 Core + 410A", "OSHA 10"],
  },
];
