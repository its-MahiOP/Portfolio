const socialLinks = [
    {
        href: "https://github.com/its-MahiOP",
        icon: "fa-brands fa-github",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/md-mehedi-hasan-chowdhury-mahi",
        icon: "fa-brands fa-linkedin",
        label: "LinkedIn",
    },
    {
        href: "https://www.facebook.com/mdmehedihasan.chowdhury.52",
        icon: "fa-brands fa-facebook",
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/its__mahi__op/",
        icon: "fa-brands fa-instagram",
        label: "Instagram",
    },
    {
        href: "mailto:mehedimahi07@gmail.com",
        icon: "fa-solid fa-envelope",
        label: "Email",
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    &copy; {year} -{" "}
                    <strong>Md. Mehedi Hasan Chowdhury Mahi</strong>
                </p>

                <nav className="social-links" aria-label="Social links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="social-link"
                            target={
                                link.href.startsWith("mailto")
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                link.href.startsWith("mailto")
                                    ? undefined
                                    : "noreferrer"
                            }
                            title={link.label}
                            aria-label={link.label}
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
