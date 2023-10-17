/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://zuku12y3zztzpy-3001.proxy.runpod.net/:path*',
      }
    ]
  },
}
