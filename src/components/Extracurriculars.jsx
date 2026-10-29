import { useReveal } from "../hooks/useReveal";

const activities = [
    {
        role: "Campus Team Member",
        org: "Excellence Bangladesh",
        date: "2026 – 2027",
    },
    { role: "Campus Ambassador", org: "InfoGram", date: "2026 – 2027" },
    { role: "Campus Ambassador", org: "Progsity", date: "2025 – 2026" },
    {
        role: "Campaign Coordinator",
        org: "Hult Prize at Varendra University",
        date: "2025 – 2026",
    },
    {
        role: "Branding & Promotion Team",
        org: "Hult Prize at Varendra University",
        date: "2024 – 2025",
    },
    {
        role: "Executive Committee Member",
        org: "BASIS Students' Forum (Varendra University)",
        date: "2024 – 2025",
    },
    {
        role: "Event Manager",
        org: "Bdapps Varendra University Chapter",
        date: "2024 – 2025",
    },
    {
        role: "General Member",
        org: "Robotics Society of Varendra University (RSVU)",
        date: "2023 – 2026",
    },
];

function ActivityCard({ activity }) {
    const ref = useReveal();
    return (
        <div className="glass-card extra-card reveal" ref={ref}>
            <span className="extra-role">{activity.role}</span>
            <span className="extra-org">{activity.org}</span>
            <span className="extra-date">{activity.date}</span>
        </div>
    );
}

export default function Extracurriculars() {
    const titleRef = useReveal();

    return (
        <section id="extracurriculars" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Leadership</span>
                    <h2 className="section-title">
                        Extracurricular Activities
                    </h2>
                    <p className="section-subtitle">
                        Leadership and ambassador roles that I held across
                        university chapters and organizations.
                    </p>
                </div>

                <div className="extracurricular-grid">
                    {activities.map((a, i) => (
                        <ActivityCard key={i} activity={a} />
                    ))}
                </div>
            </div>
        </section>
    );
}
