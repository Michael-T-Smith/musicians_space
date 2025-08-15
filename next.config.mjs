/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: "/musicians_space",
    output: "export", 
    reactStrictMode: true,
    assetPrefix: isProd ? '/<repo-name>/' : '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
