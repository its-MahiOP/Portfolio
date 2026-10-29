import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import profileImg from "/profile.png";

const typewriterWords = [
    "Full-Stack Developer",
    "Software Engineer",
    "AI Enthusiast",
    "CSE Undergraduate",
];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const contentRef = useReveal();
    const imageRef = useReveal();

    useEffect(() => {
        const currentWord = typewriterWords[wordIndex];
        let delay = isDeleting ? 75 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1500;
        } else if (isDeleting && charIndex === 0) {
            delay = 500;
        }

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setDisplayText(currentWord.substring(0, charIndex + 1));
                setCharIndex((c) => c + 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(currentWord.substring(0, charIndex - 1));
                setCharIndex((c) => c - 1);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((i) => (i + 1) % typewriterWords.length);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section id="home" className="hero">
            <div className="bg-grid"></div>
            <div className="container hero-grid">
                <div className="hero-content reveal" ref={contentRef}>
                    <span className="hero-welcome">
                        Welcome to my Portfolio
                    </span>
                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span>Md. Mehedi Hasan Chowdhury Mahi</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Aspiring{" "}
                        <span className="typewriter">{displayText}</span>
                    </h2>
                    <p className="hero-desc">
                        Computer Science & Engineering undergraduate with
                        hands-on full-stack web development experience. Built
                        real-world AI-assisted learning platforms, competed as a
                        finalist in national buildathons, and contributed to
                        academic research on ML-based fraud detection.
                    </p>
                    <div className="hero-buttons">
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <i className="fa-solid fa-paper-plane"></i> Let's
                            Talk
                        </a>
                        <a
                            href="/Md Mehedi Hasan Chowdhury Mahi.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-solid fa-download"></i> Download CV
                        </a>
                    </div>

                    <div className="hero-socials">
                        <span className="connect-label">Connect:</span>
                        <a
                            href="https://github.com/its-MahiOP"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-mehedi-hasan-chowdhury-mahi"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/mdmehedihasan.chowdhury.52"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="Facebook"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/its__mahi__op/"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            title="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="mailto:mehedimahi07@gmail.com"
                            className="social-link"
                            title="Email"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-val">3.80</span>
                            <span className="stat-label">CGPA</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">4th</span>
                            <span className="stat-label">Year CSE</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">8+</span>
                            <span className="stat-label">Leadership Roles</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper reveal" ref={imageRef}>
                    <div className="hero-image-frame">
                        <img
                            src={profileImg}
                            alt="Md. Mehedi Hasan Chowdhury Mahi"
                            onError={(e) => {
                                e.target.src =
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                            }}
                            loading="eager"
                            width="350"
                            height="auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
