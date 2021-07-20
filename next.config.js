const withBundleStats = require('next-plugin-bundle-stats');

// const compressionPlugin = require('./config/webpack/plugins/compression-webpack-plugin');

// const getWebpack = (config, { dev }) => {
//   if (!dev) {
//     config.plugins.push(compressionPlugin());
//   }

//   return config;
// };

module.exports = withBundleStats()({
  reactStrictMode: true,
  compress: true,
  // webpack: getWebpack,
  sassOptions: {
    prependData: `
      @import "/src/styles/_variables.scss";
      @import "/src/styles/_mixins.scss";
    `
  }
});
