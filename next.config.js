/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com',"img.youtube.com","d2t1xqejof9utc.cloudfront.net"], // Add your image domains here
  }
}

module.exports = nextConfig
