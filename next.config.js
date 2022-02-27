const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: isProd ? 'https://juliaroedesign.com/' : '',
  reactStrictMode: true,
  basePath: '',
  images: {
    loader: "akamai",
    path: '',
  },
}