/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                calm: {
                    DEFAULT: '#7eb6e8',
                    soft: '#aacceb',
                    rgb: '126, 182, 232',
                },
                alert: {
                    DEFAULT: '#ff7a45',
                    soft: '#ffb288',
                    rgb: '255, 122, 69',
                },
                ink: {
                    DEFAULT: '#0a0c10',
                    rgb: '10, 12, 16',
                    text: '#d8dce4',
                    muted: '#8a93a3',
                    dim: '#5a6376',
                },
                surface: {
                    DEFAULT: '#11141b',
                    raised: '#1a1f2b',
                    bg: '#0a0c10',
                },
                border: {
                    DEFAULT: '#2a3344',
                    active: '#3a4658',
                    rgb: '42, 51, 68',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '4px',
                sm: '4px',
                md: '8px',
                lg: '12px',
                card: '8px',
                panel: '12px',
            },
            spacing: {
                'gap-1': '12px',
                'gap-2': '20px',
                'gap-3': '32px',
                'gap-4': '48px',
                'gap-5': '64px',
                'gap-6': '96px',
            },
            backdropBlur: {
                xs: '6px',
                glass: '14px',
            },
            boxShadow: {
                'glow-sm': '0 0 12px rgba(126, 182, 232, 0.22)',
                'glow-md': '0 0 24px rgba(126, 182, 232, 0.28)',
                'glow-lg': '0 0 36px rgba(126, 182, 232, 0.40)',
                'glow-alert-sm': '0 0 12px rgba(255, 122, 69, 0.25)',
                'glow-alert-md': '0 0 24px rgba(255, 122, 69, 0.35)',
                'glow-alert-lg': '0 0 36px rgba(255, 122, 69, 0.45)',
                'ring-calm': '0 0 0 1px rgba(126, 182, 232, 0.4)',
                'ring-border': '0 0 0 1px rgba(42, 51, 68, 1)',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 12px rgba(126, 182, 232, 0.22)' },
                    '50%': { boxShadow: '0 0 24px rgba(126, 182, 232, 0.45)' },
                },
                'pulse-alert': {
                    '0%, 100%': { boxShadow: '0 0 8px rgba(255, 122, 69, 0.3)' },
                    '50%': { boxShadow: '0 0 16px rgba(255, 122, 69, 0.6)' },
                },
                'pulse-dot': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(0.85)' },
                },
                'scroll-hint': {
                    '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
                    '50%': { transform: 'translateY(6px)', opacity: '1' },
                },
                'radar-sweep': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'radar-ping': {
                    '0%': { transform: 'scale(0.4)', opacity: '0.6' },
                    '100%': { transform: 'scale(1.4)', opacity: '0' },
                },
                'grid-drift': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '60px 60px' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'pulse-alert': 'pulse-alert 2.5s ease-in-out infinite',
                'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
                'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
                'radar-sweep': 'radar-sweep 6s linear infinite',
                'radar-ping': 'radar-ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
                'grid-drift': 'grid-drift 12s linear infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
