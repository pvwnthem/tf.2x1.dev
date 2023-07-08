/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wiki.teamfortress.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
}

module.exports = nextConfig
