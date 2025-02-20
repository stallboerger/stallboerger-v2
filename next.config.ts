import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
const path = require('path')

const nextConfig: NextConfig = {
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')]
  },
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
      {
        hostname: 'books.google.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)