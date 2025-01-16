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
    compiler: {
        styledComponents: true, // Enables styled-components support via SWC
    },
};

export default nextConfig;
