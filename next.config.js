const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: isProd ? 'http://juliaroedesign.com/' : '',
  reactStrictMode: true,
  basePath: '',
  images: {
    loader: "akamai",
    path: '',
  },
}