import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'favicon.ico', 'logo.png', 'waves.png', 'accept-terms.svg', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Scales2Care',
                short_name: 'Scales2Care',
                description: 'Las escalas que necesitas en un solo lugar',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    }
                ]
            },
        })
    ],
    server: {
        watch: {
            usePolling: true
        }
    }
});
