/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    swcMinify: true,
    devIndicators: {
        buildActivity: false,
    },
    output: 'standalone',
    productionBrowserSourceMaps: false,
    reactStrictMode: false,
    compress: true,
    poweredByHeader: false,
    webpack(config) {
        return config;
    }
};

module.exports = nextConfig;
