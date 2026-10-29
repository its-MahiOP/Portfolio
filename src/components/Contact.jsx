import { useState, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
    const titleRef = useReveal();
    const infoRef = useReveal();
    const formRef = useReveal();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [sending, setSending] = useState(false);
    const formEl = useRef(null);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);
        try {
            // Using FormSubmit for zero-backend contact — replace the email below.
            const res = await fetch(
                "https://formsubmit.co/ajax/mehedimahi07@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject || "Portfolio Contact",
                        message: formData.message,
                    }),
                },
            );
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                formEl.current?.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
        setSending(false);
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-subtitle">
                        Have a project idea, an opportunity, or just want to say
                        hello? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left: Info */}
                    <div className="contact-info reveal" ref={infoRef}>
                        <div className="contact-header">
                            <h3>Let's Build Something Together</h3>
                            <p>
                                I'm currently open to internship opportunities,
                                collaborative projects, and freelance work. Feel
                                free to reach out via any of the channels below.
                            </p>
                        </div>

                        <div className="contact-methods">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">
                                        <a href="mailto:mehedimahi07@gmail.com">
                                            mehedimahi07@gmail.com
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">
                                        LinkedIn
                                    </span>
                                    <span className="contact-value">
                                        <a
                                            href="https://www.linkedin.com/in/md-mehedi-hasan-chowdhury-mahi"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            md-mehedi-hasan-chowdhury-mahi
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-brands fa-github"></i>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">
                                        GitHub
                                    </span>
                                    <span className="contact-value">
                                        <a
                                            href="https://github.com/its-MahiOP"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            github.com/its-MahiOP
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">
                                        Location
                                    </span>
                                    <span className="contact-value">
                                        Rajshahi, Bangladesh
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="reveal" ref={formRef}>
                        <form
                            className="contact-form glass-card"
                            ref={formEl}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="form-row">
                                <div className="form-group">
                                    <label
                                        htmlFor="contact-name"
                                        className="form-label"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="Md. Mehedi Hasan"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="contact-email"
                                        className="form-label"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="hello@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="contact-subject"
                                    className="form-label"
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    className="form-input"
                                    placeholder="Internship Opportunity / Project Collaboration"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="contact-message"
                                    className="form-label"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="form-input"
                                    placeholder="Tell me about your project or opportunity..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {status === "success" && (
                                <div className="form-alert success">
                                    <i className="fa-solid fa-circle-check"></i>
                                    &nbsp; Message sent successfully! I'll get
                                    back to you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="form-alert error">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    &nbsp; Something went wrong. Please try
                                    emailing me directly.
                                </div>
                            )}

                            <button
                                id="contact-submit"
                                type="submit"
                                className="btn btn-primary"
                                disabled={sending}
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                }}
                            >
                                {sending ? (
                                    <>
                                        <i className="fa-solid fa-spinner fa-spin"></i>{" "}
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-paper-plane"></i>{" "}
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
