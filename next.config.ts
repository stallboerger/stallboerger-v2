import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
const path = require('path')

const nextConfig: NextConfig = {
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')]
  },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
        ]
      },
      {
        source: '/font/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  },
  images: {
		remotePatterns: [
      {
        hostname: 'books.google.com'
			},
			{
				hostname: 'assets.literal.club'
			},
			{
				hostname: 'unavatar.io'
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
