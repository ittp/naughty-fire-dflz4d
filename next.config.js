/** @type {import('next').NextConfig} */




const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/about',
            destination: '/',
          },
        ]
      },
    assetPrefix: {

    }
}

module.exports = nextConfig
