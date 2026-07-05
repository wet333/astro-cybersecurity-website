export function initMobileMenu(): void {
    if (typeof window === 'undefined') return;

    const trigger = document.querySelector<HTMLButtonElement>('[data-mobile-menu-trigger]');
    const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
    const panel = document.querySelector<HTMLElement>('[data-mobile-menu-panel]');
    const backdrop = document.querySelector<HTMLElement>('[data-mobile-menu-backdrop]');
    const links = document.querySelectorAll<HTMLAnchorElement>('[data-mobile-menu-link]');
    const iconOpen = document.querySelector<HTMLElement>('[data-mobile-menu-icon-open]');
    const iconClose = document.querySelector<HTMLElement>('[data-mobile-menu-icon-close]');

    if (!trigger || !menu || !panel || !backdrop) return;

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
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');
        iconOpen?.classList.add('hidden');
        iconClose?.classList.remove('hidden');

        const focusables = getFocusable();
        focusables[0]?.focus();
    };

    const close = () => {
        isOpen = false;
        menu.classList.add('pointer-events-none', 'opacity-0');
        menu.classList.remove('pointer-events-auto', 'opacity-100');
        menu.setAttribute('aria-hidden', 'true');
        panel.classList.add('translate-x-full');
        panel.classList.remove('translate-x-0');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
        iconOpen?.classList.remove('hidden');
        iconClose?.classList.add('hidden');

        previouslyFocused?.focus();
    };

    const onTriggerClick = () => (isOpen ? close() : open());
    const onBackdropClick = () => close();
    const onLinkClick = () => close();
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
    backdrop.addEventListener('click', onBackdropClick);
    links.forEach((link) => link.addEventListener('click', onLinkClick));
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onResize);
}
