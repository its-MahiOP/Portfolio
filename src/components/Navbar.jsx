import { useState, useEffect } from "react";

const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Research", href: "research" },
    { label: "Achievements", href: "achievements" },
    { label: "Activities", href: "extracurriculars" },
    { label: "Contact", href: "contact" },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll spy
            const sections = document.querySelectorAll("section[id]");
            let current = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const isLight = theme === "light";

    return (
        <header
            className={`navbar${scrolled ? " scrolled" : ""}${menuOpen ? " mobile-active" : ""}`}
            id="navbar"
        >
            <div className="container">
                <a
                    href="#home"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("home");
                    }}
                >
                    MAHI
                </a>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        order: 2,
                    }}
                >
                    <button
                        className="theme-toggle-btn"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        <i
                            className={`fa-solid ${isLight ? "fa-sun" : "fa-moon"}`}
                        ></i>
                    </button>

                    <button
                        className={`menu-toggle${menuOpen ? " active" : ""}`}
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <ul
                    className={`nav-menu${menuOpen ? " active" : ""}`}
                    id="navMenu"
                >
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <button
                                className={`nav-link${activeSection === item.href ? " active" : ""}`}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
