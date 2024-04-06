/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/cyberkach_posts_development/**'
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/cyberkach_posts/**'
            },
            {
                protocol: 'https',
                hostname: 'cyberkach.com',
                port: '',
                pathname: '/next/image/**'
            }
        ]
    }
}

module.exports = nextConfig
