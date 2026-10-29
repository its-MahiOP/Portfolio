import { useReveal } from "../hooks/useReveal";

export default function About() {
    const titleRef = useReveal();
    const leftRef = useReveal();
    const rightRef = useReveal();

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Intro</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        A brief overview of my educational background, career
                        goals, and details.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-details reveal" ref={leftRef}>
                        <h3
                            className="glow-text"
                            style={{
                                fontSize: "1.8rem",
                                marginBottom: "1rem",
                                fontFamily: "var(--font-heading)",
                            }}
                        >
                            My Objective
                        </h3>
                        <p className="about-text">
                            I am a Computer Science and Engineering student with
                            hands-on full-stack development experience building
                            real-world applications. My journey is driven by a
                            passion for crafting products that solve real
                            problems — from AI-assisted learning platforms to
                            hosted web services.
                        </p>
                        <p className="about-text">
                            I have been selected as a finalist in two national
                            AI buildathons and contributed to academic research
                            on machine learning classifiers for fraud detection.
                            I am actively seeking internship or entry-level
                            opportunities where I can add value while continuing
                            to grow as a developer.
                        </p>
                    </div>

                    <div className="reveal" ref={rightRef}>
                        <div className="glass-card about-info-grid">
                            <div className="info-card">
                                <span className="info-card-label">Degree</span>
                                <span className="info-card-value">
                                    B.Sc. in CSE
                                </span>
                            </div>
                            <div className="info-card">
                                <span className="info-card-label">
                                    University
                                </span>
                                <span className="info-card-value">
                                    Varendra University
                                </span>
                            </div>
                            <div className="info-card">
                                <span className="info-card-label">
                                    Current CGPA
                                </span>
                                <span className="info-card-value">
                                    3.80 / 4.00
                                </span>
                            </div>
                            <div className="info-card">
                                <span className="info-card-label">
                                    Location
                                </span>
                                <span className="info-card-value">
                                    Rajshahi, Bangladesh
                                </span>
                            </div>
                            <div className="info-card span-2">
                                <span className="info-card-label">
                                    LinkedIn
                                </span>
                                <span className="info-card-value">
                                    <a
                                        href="https://www.linkedin.com/in/md-mehedi-hasan-chowdhury-mahi"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        linkedin.com/in/md-mehedi-hasan-chowdhury-mahi{" "}
                                        <i
                                            className="fa-solid fa-up-right-from-square"
                                            style={{ fontSize: "0.8rem" }}
                                        ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
