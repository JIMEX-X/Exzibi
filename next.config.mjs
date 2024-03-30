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
            {
                hostname: 'ssl.gstatic.com'
            },
            {
                hostname: 'www.credly.com'
            },
            {
                hostname: 'images.credly.com'
            },
            {
                hostname: 'lh3.googleusercontent.com'
            },
        ]
    },
    transpilePackages: ['html-to-text'],
};

export default nextConfig;
