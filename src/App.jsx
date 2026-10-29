import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Extracurriculars from "./components/Extracurriculars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    const [lightbox, setLightbox] = useState({
        open: false,
        images: [],
        index: 0,
    });

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const openLightbox = (images, index) => {
        setLightbox({ open: true, images, index });
    };

    const closeLightbox = () => {
        setLightbox((prev) => ({ ...prev, open: false }));
    };

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Research />
                <Achievements openLightbox={openLightbox} />
                <Extracurriculars />
                <Contact />
            </main>
            <Footer />
            {lightbox.open && (
                <Lightbox
                    images={lightbox.images}
                    currentIndex={lightbox.index}
                    onClose={closeLightbox}
                />
            )}
        </>
    );
}

export default App;
