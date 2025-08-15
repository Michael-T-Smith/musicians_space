/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    
    assetPrefix: isProd ? '/musicians_space/' : '',
    basePath: isProd ? '/musicians_space' : '',
    output: "export", 
    reactStrictmode: true,
    images: { unoptimized: true }
};

export default nextConfig;
