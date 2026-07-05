export function initReveal(): void {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (reduced) {
        elements.forEach((el) => el.classList.add('is-revealed'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-revealed'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const delay = el.dataset.revealDelay ?? '0';
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    // Failsafe: ensure anything still in the viewport 1.2s after load
    // gets revealed, even if the observer hasn't fired (e.g. images
    // reflowing layout).
    window.addEventListener('load', () => {
        setTimeout(() => {
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                if (inView && !el.classList.contains('is-revealed')) {
                    const delay = el.dataset.revealDelay ?? '0';
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('is-revealed');
                    observer.unobserve(el);
                }
            });
        }, 600);
    });
}
