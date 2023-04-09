// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}

module.exports = nextConfig
