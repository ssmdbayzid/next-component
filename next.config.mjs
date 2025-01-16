/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'brainedge.ai',
            },
            {
                protocol: 'https',
                hostname: 'app.brainedge.ai',
            },
        ],
    },
};

export default nextConfig;
