import { useReveal } from "../hooks/useReveal";

const achievements = [
    {
        icon: "fa-solid fa-wand-magic-sparkles",
        meta: "The Infinity AI BuildFest 2026",
        title: "Finalist — NextGen Learners",
        desc: 'Selected for the final round of The Infinity AI BuildFest 2026 with team "NextGen Learners", building curriculum-aligned AI-powered educational solutions.',
        images: [
            {
                src: "/The Infinity AI BuildFest 2026/Group Photo of Our Team with Our Mentor at the Event.jpeg",
                alt: "The Infinity AI BuildFest 2026 - Group Photo of Our Team with Our Mentor at the Event",
            },
            {
                src: "/The Infinity AI BuildFest 2026/Explaining Our Project.jpeg",
                alt: "The Infinity AI BuildFest 2026 - Explaining Our Project",
            },
            {
                src: "/The Infinity AI BuildFest 2026/Environment of the BuildFest.JPG",
                alt: "The Infinity AI BuildFest 2026 - Environment of The Infinity AI BuildFest",
            },
            {
                src: "/The Infinity AI BuildFest 2026/The INFINITY Squad.JPG",
                alt: "The Infinity AI BuildFest 2026 - The INFINITY Squad",
            },
        ],
    },
    {
        icon: "fa-solid fa-lightbulb",
        meta: "Hult Prize at Varendra University 2025-26",
        title: "Campaign Coordinator & Branding Team",
        desc: "Led marketing campaigns, managed promotions, and coordinated event logistics to successfully organize the global Hult Prize challenge chapter.",
        images: [
            {
                src: "/Hult Prize at Varendra University 2025-26/My Certificate, ID Card, and Crest.jpeg",
                alt: "Hult Prize - Certificate, ID Card, and Crest",
            },
            {
                src: "/Hult Prize at Varendra University 2025-26/Our Mentor Handing Over My Certificate To Me.jpeg",
                alt: "Hult Prize - Our Mentor Handing Over My Certificate",
            },
        ],
    },
    {
        icon: "fa-solid fa-trophy",
        meta: "MillionX Bangladesh \u2013 National AI Buildathon 2026",
        title: "Finalist — NextGen Learners",
        desc: 'Qualified for the final round of the National AI Buildathon with team "NextGen Learners", designing curriculum-aligned AI learning solutions for classrooms.',
        images: [
            {
                src: "/MillionX Bangladesh \u2013 2026/Me at the Final Event.jpeg",
                alt: "National AI Build-a-thon - Me at the Final Event",
            },
            {
                src: "/MillionX Bangladesh \u2013 2026/Team NextGen Learners at the Final Event.jpeg",
                alt: "National AI Build-a-thon - Team NextGen Learners at the Final Event",
            },
            {
                src: "/MillionX Bangladesh \u2013 2026/Team NextGen Learners.png",
                alt: "National AI Build-a-thon - Team NextGen Learners Group Photo",
            },
            {
                src: "/MillionX Bangladesh \u2013 2026/My Certificate of National AI BUILD-A-THON.png",
                alt: "National AI Build-a-thon - My Certificate",
            },
            {
                src: "/MillionX Bangladesh \u2013 2026/Selected for the Final Round Announcement.png",
                alt: "National AI Build-a-thon - Selected for Final Round Announcement",
            },
        ],
    },
    {
        icon: "fa-solid fa-user-astronaut",
        meta: "NASA Space Apps Challenge \u2013 2025",
        title: "Galactic Problem Solver — Team Talestra",
        desc: 'Earned the "Galactic Problem Solver" recognition with "Team Talestra" by building interactive space weather visualization platforms addressing NASA-defined global problems.',
        images: [
            {
                src: "/NASA Space Apps Challenge \u2013 2025/My Certificate of NASA Space Apps Challenge.jpeg",
                alt: "NASA Space Apps - My Participant Certificate",
            },
            {
                src: "/NASA Space Apps Challenge \u2013 2025/Team Talestra.png",
                alt: "NASA Space Apps - Team Talestra Group Photo",
            },
            {
                src: "/NASA Space Apps Challenge \u2013 2025/Team Talestra Logo.jpg",
                alt: "NASA Space Apps - Team Talestra Logo",
            },
        ],
    },
    {
        icon: "fa-solid fa-robot",
        meta: "Robo-Soccer \u2013 Tech Carnival at Varendra University 2024",
        title: "Participant — Team Spark",
        desc: "Built a customized physical soccer-playing robot and competed at the Varendra University Tech Carnival robo-soccer track with Team Spark.",
        images: [
            {
                src: "/Robo-Soccer \u2013 2024/Our Robo-Soccer Bot.jpeg",
                alt: "Robo-Soccer - Our Custom Soccer Bot",
            },
            {
                src: "/Robo-Soccer \u2013 2024/Team Spark in the track.jpeg",
                alt: "Robo-Soccer - Team Spark Bot in the Track",
            },
            {
                src: "/Robo-Soccer \u2013 2024/Team Spark.jpeg",
                alt: "Robo-Soccer - Team Spark Members",
            },
        ],
    },
];

const MAX_VISIBLE_THUMBS = 4;

function AchievementCard({ achievement, openLightbox }) {
    const ref = useReveal();
    const visibleImgs = achievement.images.slice(0, MAX_VISIBLE_THUMBS);
    const hiddenCount = achievement.images.length - MAX_VISIBLE_THUMBS;

    return (
        <div className="glass-card achievement-card reveal" ref={ref}>
            <div className="achievement-icon">
                <i className={achievement.icon}></i>
            </div>
            <span className="achievement-meta">{achievement.meta}</span>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-desc">{achievement.desc}</p>

            {visibleImgs.length > 0 && (
                <div className="achievement-gallery">
                    {visibleImgs.map((img, i) => (
                        <div
                            className="achievement-thumb-wrapper"
                            key={i}
                            onClick={() => openLightbox(achievement.images, i)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="achievement-thumb"
                                loading="lazy"
                            />
                            {i === MAX_VISIBLE_THUMBS - 1 &&
                                hiddenCount > 0 && (
                                    <div className="achievement-thumb-overlay">
                                        +{hiddenCount}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Achievements({ openLightbox }) {
    const titleRef = useReveal();

    return (
        <section id="achievements" className="section">
            <div className="container">
                <div className="section-title-wrapper reveal" ref={titleRef}>
                    <span className="section-tag">Milestones</span>
                    <h2 className="section-title">Achievements</h2>
                    <p className="section-subtitle">
                        Recognitions and competitions where I challenged my
                        skills and succeeded.
                    </p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((a) => (
                        <AchievementCard
                            key={a.title}
                            achievement={a}
                            openLightbox={openLightbox}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
