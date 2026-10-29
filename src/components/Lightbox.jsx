import { useState, useEffect, useCallback } from "react";

/**
 * Lightbox component for viewing achievement gallery images.
 * Props:
 *   images       - array of { src, alt } objects
 *   currentIndex - initial index to display
 *   onClose      - callback to close the lightbox
 */

export default function Lightbox({ images, currentIndex, onClose }) {
    const [idx, setIdx] = useState(currentIndex);

    const prev = useCallback(
        () => setIdx((i) => (i - 1 + images.length) % images.length),
        [images.length],
    );
    const next = useCallback(
        () => setIdx((i) => (i + 1) % images.length),
        [images.length],
    );

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, prev, next]);

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const img = images[idx];

    return (
        <div
            className="lightbox-modal active"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={onClose}
        >
            <div
                className="lightbox-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className="lightbox-close"
                    aria-label="Close lightbox"
                    onClick={onClose}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="lightbox-content">
                    {/* Prev */}
                    {images.length > 1 && (
                        <button
                            className="lightbox-nav prev"
                            aria-label="Previous image"
                            onClick={prev}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    )}

                    <img
                        src={img.src}
                        alt={img.alt}
                        className="lightbox-image"
                        loading="lazy"
                    />

                    {/* Next */}
                    {images.length > 1 && (
                        <button
                            className="lightbox-nav next"
                            aria-label="Next image"
                            onClick={next}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    )}
                </div>

                {/* Caption & counter */}
                <p className="lightbox-caption">
                    {img.alt}
                    {images.length > 1 && (
                        <span
                            style={{
                                marginLeft: "1rem",
                                opacity: 0.6,
                                fontSize: "0.85em",
                            }}
                        >
                            {idx + 1} / {images.length}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}
