import { useReveal } from "../hooks/useReveal";

const skillCategories = [
    {
        icon: "fa-solid fa-terminal",
        title: "Languages",
        skills: [
            { icon: "fa-solid fa-code", label: "C" },
            { icon: "fa-solid fa-code", label: "C++" },
            { icon: "fa-brands fa-java", label: "Java" },
            { icon: "fa-brands fa-python", label: "Python" },
            { icon: "fa-brands fa-js", label: "JavaScript" },
            { icon: "fa-solid fa-code", label: "TypeScript", highlight: true },
        ],
    },
    {
        icon: "fa-solid fa-globe",
        title: "Web Technologies",
        skills: [
            { icon: "fa-brands fa-html5", label: "HTML5" },
            { icon: "fa-brands fa-css3-alt", label: "CSS3" },
            { icon: "fa-brands fa-react", label: "React.js", highlight: true },
            {
                icon: "fa-solid fa-wind",
                label: "Tailwind CSS",
                highlight: true,
            },
            {
                icon: "fa-solid fa-layer-group",
                label: "Next.js",
                highlight: true,
            },
            { icon: "fa-brands fa-node-js", label: "Node.js" },
            { icon: "fa-solid fa-server", label: "Express.js" },
        ],
    },
    {
        icon: "fa-solid fa-database",
        title: "Databases & Auth",
        skills: [
            { icon: "fa-solid fa-database", label: "MongoDB" },
            { icon: "fa-solid fa-database", label: "PostgreSQL" },
            {
                icon: "fa-solid fa-shield-halved",
                label: "BetterAuth",
                highlight: true,
            },
        ],
    },
    {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Developer Tools",
        skills: [
            { icon: "fa-brands fa-git-alt", label: "Git" },
            { icon: "fa-brands fa-github", label: "GitHub" },
            { icon: "fa-solid fa-code", label: "VS Code" },
            { icon: "fa-solid fa-wave-square", label: "MATLAB" },
            { icon: "fa-brands fa-microsoft", label: "MS Office" },
        ],
    },
    {
        icon: "fa-solid fa-brain",
        title: "Core Concepts",
        skills: [
            {
                icon: "fa-solid fa-circle-check",
                label: "Data Structures & Algorithms",
            },
            {
                icon: "fa-solid fa-circle-check",
                label: "Object-Oriented Programming",
            },
            {
                icon: "fa-solid fa-circle-check",
                label: "Database Management (DBMS)",
            },
            { icon: "fa-solid fa-circle-check", label: "Operating Systems" },
        ],
    },
];

function SkillCard({ category }) {
    const ref = useReveal();
    return (
        <div className="glass-card skills-category reveal" ref={ref}>
            <h3 className="category-title">
                <i className={category.icon}></i> {category.title}
            </h3>
            <div className="skills-list">
                {category.skills.map((skill) => (
                    <span
                        key={skill.label}
                        className={`skill-badge${skill.highlight ? " highlight" : ""}`}
                    >
                        <i className={skill.icon}></i> {skill.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const titleRef = useReveal();

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Expertise</span>
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Languages, frameworks, databases, and tools that power
                        my development workflow.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat) => (
                        <SkillCard key={cat.title} category={cat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
