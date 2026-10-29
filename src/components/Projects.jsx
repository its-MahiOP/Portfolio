import { useReveal } from "../hooks/useReveal";

const projects = [
    {
        image: "/Project Images/HomeSchool Project.png",
        tag: {
            icon: "fa-solid fa-graduation-cap",
            label: "AI Education Platform",
        },
        title: "HomeSchool",
        desc: "Led product and curriculum development of an AI-assisted learning platform aligned with the NCTB curriculum for Classes 6–12. Features AI-generated lessons, quizzes, multilingual learning, student progress tracking, and parent analytics.",
        tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Supabase"],
        links: [
            {
                href: "https://home-school-demo.vercel.app",
                icon: "fa-solid fa-arrow-up-right-from-square",
                label: "Visit Website",
                external: true,
            },
            {
                href: "#contact",
                icon: "fa-solid fa-envelope",
                label: "Inquire Project",
                external: false,
            },
        ],
    },
    {
        image: "/Project Images/Space Weather Explorer Project.png",
        tag: {
            icon: "fa-solid fa-user-astronaut",
            label: "NASA Space Apps 2025",
        },
        title: "Space Weather Explorer",
        desc: "An interactive platform designed to visualize and explore space weather phenomena. Developed as part of the NASA Space Apps Challenge 2025 to make complex space weather data accessible, interactive, and engaging for everyone.",
        tech: [
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Data Visualization",
            "Interactive Simulation",
        ],
        links: [
            {
                href: "https://lovable.dev/projects/ad46ede7-e980-406f-ab3e-b0c2f7f3e90f",
                icon: "fa-solid fa-arrow-up-right-from-square",
                label: "Visit Project",
                external: true,
            },
            {
                href: "#contact",
                icon: "fa-solid fa-envelope",
                label: "Inquire Project",
                external: false,
            },
        ],
    },
    {
        image: "/Project Images/Bazar Dor Project.png",
        tag: {
            icon: "fa-solid fa-magnifying-glass-dollar",
            label: "Market Price Tracking Web App",
        },
        title: "Bazar Dor",
        desc: "BazarDor is a modern, responsive price-tracking web application built to provide citizens with daily updates, analytics, and market comparisons for essential commodities in Bangladesh.",
        tech: [
            "Next.js 16",
            "TypeScript",
            "Tailwind CSS 4",
            "BetterAuth",
            "MongoDB",
        ],
        links: [
            {
                href: "https://bazar-dor-psi.vercel.app",
                icon: "fa-solid fa-arrow-up-right-from-square",
                label: "Visit Website",
                external: true,
            },
            {
                href: "#contact",
                icon: "fa-solid fa-envelope",
                label: "Inquire Project",
                external: false,
            },
        ],
    },
];

function ProjectCard({ project }) {
    const ref = useReveal();
    return (
        <div className="glass-card project-card reveal" ref={ref}>
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                    loading="lazy"
                />
            )}
            <div className="project-header">
                <span className="project-tag">
                    <i className={project.tag.icon}></i> {project.tag.label}
                </span>
                <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
                {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>
            <div className="project-links">
                {project.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="project-link"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        onClick={
                            !link.external
                                ? (e) => {
                                      e.preventDefault();
                                      document
                                          .getElementById("contact")
                                          ?.scrollIntoView({
                                              behavior: "smooth",
                                          });
                                  }
                                : undefined
                        }
                    >
                        <i className={link.icon}></i> {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    const titleRef = useReveal();

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Creations</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A showcase of software developments and platforms I have
                        worked on.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
