const isProd    = process.env.NODE_ENV === 'production'
const isLocal   = process.env.HOSTNAME === 'localhost'
const isPreview = process.env.PREVIEW  === 'true'

let assetPrefix = ''
if (isPreview)
  assetPrefix = 'https://transit.kevinrpb.vercel.app/'
else if (isProd && !isLocal)
  assetPrefix = 'https://transit.kevinrpb.me/'

const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  assetPrefix: assetPrefix,
  images: {
    formats: ['image/avif', 'image/webp']
  },
}
