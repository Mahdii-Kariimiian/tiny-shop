/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'], // اضافه کردن دامنه مجاز برای تصاویر
  },
};

module.exports = nextConfig;

