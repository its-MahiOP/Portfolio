import { useEffect, useRef } from "react";

/**
 * useReveal - Returns a ref that, when attached to an element,
 * adds the 'active' class once the element enters the viewport.
 */

export function useReveal(threshold = 0.12) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("active");
                    observer.unobserve(el);
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
