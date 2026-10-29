import { useReveal } from "../hooks/useReveal";

const papers = [
    {
        title: "Comparative Analysis of Machine Learning Classifiers Using SMOTE Balancing for Credit Card Fraud Detection",
        authors: [
            "Al-Mehedi Hasan",
            "Md. Mehedi Hasan Chowdhury Mahi",
            "Tanver Ahmed",
            "Md. Muktar Hossain",
        ],
        selfAuthor: "Md. Mehedi Hasan Chowdhury Mahi",
        venue: "2nd Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026)",
        type: "Conference Paper",
        icon: "fa-solid fa-microchip",
        keywords: [
            "Machine Learning",
            "SMOTE",
            "Fraud Detection",
            "Classification",
            "Data Imbalance",
        ],
    },
];

function ResearchCard({ paper }) {
    const ref = useReveal();
    return (
        <div className="glass-card research-card reveal" ref={ref}>
            <div className="research-header">
                <div className="research-type-badge">
                    <i className={paper.icon}></i> {paper.type}
                </div>
            </div>
            <h3 className="research-title">{paper.title}</h3>
            <div className="research-meta">
                <div className="research-authors">
                    <i
                        className="fa-solid fa-users"
                        style={{
                            color: "var(--secondary)",
                            marginRight: "0.5rem",
                        }}
                    ></i>
                    {paper.authors.map((author, i) => (
                        <span key={author}>
                            {author === paper.selfAuthor ? (
                                <strong
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {author}
                                </strong>
                            ) : (
                                <span>{author}</span>
                            )}
                            {i < paper.authors.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <div className="research-venue">
                    <i
                        className="fa-solid fa-location-dot"
                        style={{
                            color: "var(--accent)",
                            marginRight: "0.5rem",
                        }}
                    ></i>
                    {paper.venue}
                </div>
            </div>
            <div className="research-keywords">
                {paper.keywords.map((kw) => (
                    <span
                        key={kw}
                        className="skill-badge"
                        style={{
                            fontSize: "0.78rem",
                            padding: "0.3rem 0.75rem",
                        }}
                    >
                        {kw}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Research() {
    const titleRef = useReveal();

    return (
        <section id="research" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Publications</span>
                    <h2 className="section-title">Research</h2>
                    <p className="section-subtitle">
                        Academic research contributions and conference
                        publications in computing and intelligent systems.
                    </p>
                </div>

                <div
                    style={{
                        maxWidth: "820px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    {papers.map((paper) => (
                        <ResearchCard key={paper.title} paper={paper} />
                    ))}
                </div>
            </div>
        </section>
    );
}
