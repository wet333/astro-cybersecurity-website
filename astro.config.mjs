import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    vite: {
        resolve: {
            alias: {
                '~': srcDir,
            },
        },
    },
});
