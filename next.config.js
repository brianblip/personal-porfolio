/** @type {import('next').NextConfig} */
const withImage=require('next-images')
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = withImage()