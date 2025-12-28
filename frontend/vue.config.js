const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Disable Vue devtools in production
        __VUE_OPTIONS_API__: JSON.stringify(true),   // Enable Options API
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // Disable hydration mismatch details in production
      }),
    ],
  },
});
