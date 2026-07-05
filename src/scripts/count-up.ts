export function initCountUp(): void {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll<HTMLElement>('[data-count-up]');
    if (!elements.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const formatValue = (value: number, decimals: number, suffix: string, prefix: string) => {
        const formatted = value.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });
        return `${prefix}${formatted}${suffix}`;
    };

    const animate = (el: HTMLElement) => {
        const target = Number(el.dataset.countUp ?? '0');
        const decimals = Number(el.dataset.countDecimals ?? '0');
        const suffix = el.dataset.countSuffix ?? '';
        const prefix = el.dataset.countPrefix ?? '';
        const duration = Number(el.dataset.countDuration ?? '1600');

        if (reduced) {
            el.textContent = formatValue(target, decimals, suffix, prefix);
            return;
        }

        const start = performance.now();
        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = formatValue(value, decimals, suffix, prefix);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
        elements.forEach(animate);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animate(entry.target as HTMLElement);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 },
    );

    elements.forEach((el) => observer.observe(el));
}
