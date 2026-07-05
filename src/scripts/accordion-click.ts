export function initAccordionClick(): void {
    if (typeof window === 'undefined') return;

    const detailsList = document.querySelectorAll<HTMLDetailsElement>(
        '#faq-section details, #case-studies-section details',
    );

    detailsList.forEach((details) => {
        details.addEventListener('click', (e) => {
            // Let the <summary> handle its own click natively
            if (e.target.closest('summary')) return;
            // Don't interfere with interactive descendants
            if (
                e.target.closest(
                    'a, button, input, textarea, select, [role="button"]',
                )
            )
                return;
            details.open = !details.open;
        });
    });
}
