export function initMobileMenu(): void {
    if (typeof window === 'undefined') return;

    const trigger = document.querySelector<HTMLButtonElement>('[data-mobile-menu-trigger]');
    const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
    const closeBtn = document.querySelector<HTMLButtonElement>('[data-mobile-menu-close]');
    const links = document.querySelectorAll<HTMLAnchorElement>('[data-mobile-menu-link]');

    if (!trigger || !menu) return;

    let isOpen = false;
    let previouslyFocused: HTMLElement | null = null;

    const getFocusable = (): HTMLElement[] => {
        const selector =
            'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        return Array.from(menu.querySelectorAll<HTMLElement>(selector)).filter(
            (el) => !el.hasAttribute('aria-hidden'),
        );
    };

    const open = () => {
        previouslyFocused = document.activeElement as HTMLElement | null;
        isOpen = true;
        menu.classList.remove('pointer-events-none', 'opacity-0');
        menu.classList.add('pointer-events-auto', 'opacity-100');
        menu.setAttribute('aria-hidden', 'false');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');

        const focusables = getFocusable();
        focusables[0]?.focus();
    };

    const close = () => {
        isOpen = false;
        menu.classList.add('pointer-events-none', 'opacity-0');
        menu.classList.remove('pointer-events-auto', 'opacity-100');
        menu.setAttribute('aria-hidden', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');

        previouslyFocused?.focus();
    };

    const onTriggerClick = () => (isOpen ? close() : open());
    const onLinkClick = () => close();
    const onSurfaceClick = (e: MouseEvent) => {
        // Close when tapping empty surface (not a child like nav links or the close button).
        if (e.target === menu) close();
    };
    const onKeydown = (e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
            return;
        }
        if (e.key === 'Tab') {
            const focusables = getFocusable();
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    };
    const onResize = () => {
        if (window.innerWidth >= 1024 && isOpen) close();
    };

    trigger.addEventListener('click', onTriggerClick);
    closeBtn?.addEventListener('click', close);
    links.forEach((link) => link.addEventListener('click', onLinkClick));
    menu.addEventListener('click', onSurfaceClick);
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onResize);
}
