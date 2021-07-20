const withBundleStats = require('next-plugin-bundle-stats');

module.exports = withBundleStats()({
  reactStrictMode: true,
  compress: true,
  sassOptions: {
    prependData: `
      @import "/src/styles/_variables.scss";
      @import "/src/styles/_mixins.scss";
    `
  },
  rewrites: () => ([
    {
      source: '/',
      destination: '/home',
    },
    {
      source: '/tour',
      destination: '/tour',
    }
  ])
});
