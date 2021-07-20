const withBundleStats = require('next-plugin-bundle-stats');

module.exports = withBundleStats()({
  compress: true,
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  pageExtensions: ["page.tsx"],
  sassOptions: {
    prependData: `
      @import "/src/styles/_variables.scss";
      @import "/src/styles/_mixins.scss";
    `
  },
});
