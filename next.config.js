/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/', // Coincide con todas las rutas
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value'
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value'
          }
        ]
      }
    ]
  },
  reactStrictMode: false
}

module.exports = nextConfig
