const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'admin-app',

  remotes: {
    // 'userApp': 'userApp@http://localhost:4201/remoteEntry.js',
    "userApp": "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
