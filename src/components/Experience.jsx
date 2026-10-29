import { useReveal } from "../hooks/useReveal";

const experiences = [
    {
        date: "2026",
        role: "English Annotator",
        company: "Fixensy · Remote",
        bullets: [
            "Transcribed and synchronized English audio content with accurate subtitle timing.",
            "Performed quality control checks to ensure annotation consistency and precision.",
        ],
    },
    {
        date: "2024",
        role: "Lite App Developer",
        company: "Bdapps · Remote",
        bullets: [
            "Developed SMS-based lightweight applications using the BDApps platform.",
            "Worked within telecom-oriented application constraints and service requirements.",
        ],
    },
];

export default function Experience() {
    const titleRef = useReveal();
    const timelineRef = useReveal();

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Career</span>
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey and hands-on contributions in
                        the tech industry.
                    </p>
                </div>

                <div className="timeline reveal" ref={timelineRef}>
                    {experiences.map((exp, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">
                                    {exp.date}
                                </span>
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">
                                    {exp.company}
                                </h4>
                                <ul className="timeline-bullets">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
