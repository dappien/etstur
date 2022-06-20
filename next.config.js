/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'ipfs.infura.io',
      'flagcdn.com',
      'fakestoreapi.com'
    ],
},
}

module.exports = nextConfig
