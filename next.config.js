const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: ".",
  reactStrictMode: true,
  basePath: '',
  images: {
    loader: "akamai",
    path: '',
  },
}