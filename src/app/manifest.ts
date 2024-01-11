import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'CyberKach',
        short_name: 'CyberKach',
        start_url: '/',
        description: 'CyberKach is a security consulting firm which assists clients achieve effective cyber programs and provides security awareness trainings.',
        id: '/',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ],
        theme_color: '#D11715',
        background_color: '#ffffff',
        display: 'standalone'
    };
}