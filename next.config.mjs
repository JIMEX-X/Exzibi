/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'miro.medium.com'
            },
            {
                hostname: 'medium.com'
            },
        ]
    },
    transpilePackages: ['html-to-text'],
};

export default nextConfig;
