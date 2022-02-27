const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: "./",
  trailingSlash: true,
  reactStrictMode: true,
  basePath: isProd ? './' : '',
  images: {
    loader: "akamai",
    path: isProd ? './' : '',
  },
}

// const withPlugins = require('next-compose-plugins')
// const withPWA = require('next-pwa')
// const withOptimizedImages = require('next-optimized-images')
// module.exports = withPlugins([
//   [withOptimizedImages, {
//     optimizeImagesInDev: true,
//     responsive: {
//       adapter: require('responsive-loader/sharp')
//     }
//   }],
//   [withPWA, {
//     pwa: {
//       dest: 'public'
//     }
//   }],
//   {
//     images: {
//       loader: 'akamai',
//       path: ''
//     }
//   }
// ])
  
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const isProd = process.env.NODE_ENV === 'production'
// module.exports = withPlugins([
//   [optimizedImages, {
//     mozjpeg: {
//       quality: 80,
//     },
//     pngquant: {
//       speed: 3,
//       strip: true,
//       verbose: true,
//     },
//     imagesFolder: 'assets',
//   }],
//   {
//     basePath: isProd ? '/juju-portfolio' : '',
//     assetPrefix: isProd ? '/juju-portfolio/' : './',
//     reactStrictMode: true,
//     images: {
//       loader: 'akamai',
//       path: ''
//     }
//   },
// ]);