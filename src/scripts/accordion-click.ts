export function initAccordionClick(): void {
    if (typeof window === 'undefined') return;

    const detailsList = document.querySelectorAll<HTMLDetailsElement>(
        '#faq-section details, #case-studies-section details',
    );

    detailsList.forEach((details) => {
        details.addEventListener('click', (e) => {
            const target = e.target as Element | null;
            if (!target) return;
            // Let the <summary> handle its own click natively
            if (target.closest('summary')) return;
            // Don't interfere with interactive descendants
            if (
                target.closest(
                    'a, button, input, textarea, select, [role="button"]',
                )
            )
                return;
            details.open = !details.open;
        });
    });
}
