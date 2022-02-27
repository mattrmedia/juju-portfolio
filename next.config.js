const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: ".",
  reactStrictMode: true,
  basePath: isProd ? '/juju-portfolio' : '',
  images: {
    loader: "akamai",
    path: '',
  },
}