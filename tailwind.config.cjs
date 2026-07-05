/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#78bbed',
                    rgb: '120, 187, 237',
                },
                accent: {
                    DEFAULT: '#b878ed',
                    rgb: '184, 120, 237',
                },
                surface: {
                    DEFAULT: '#0d111a',
                    mid: '#131b31',
                    light: '#20242f',
                    bg: '#080a10',
                },
                font: {
                    DEFAULT: '#e9e9e9',
                },
            },
            fontFamily: {
                sans: ['Roboto', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '4px',
                sm: '4px',
                md: '8px',
                lg: '12px',
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
                glow: '0 0 24px rgba(120, 187, 237, 0.25)',
                'glow-sm': '0 0 12px rgba(120, 187, 237, 0.18)',
                'glow-accent': '0 0 24px rgba(184, 120, 237, 0.25)',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 12px rgba(120, 187, 237, 0.25)' },
                    '50%': { boxShadow: '0 0 24px rgba(120, 187, 237, 0.5)' },
                },
                'scroll-hint': {
                    '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
                    '50%':      { transform: 'translateY(6px)', opacity: '1' },
                },
                'grid-drift': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '60px 60px' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
                'grid-drift': 'grid-drift 12s linear infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
