const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      BASE_URL: "${BASE_URL}",
      COMPONENT_URL: '${BASE_URL}/cta/',
      MDQ_URL: "${MDQ_URL}",
      PERSISTENCE_URL: '${BASE_URL}/ps/',
      SEARCH_URL: "${SEARCH_URL}",
      STORAGE_DOMAIN: "${STORAGE_DOMAIN}",
      LOGLEVEL: 'error',
      DEFAULT_CONTEXT: "${DEFAULT_CONTEXT}",
      WHITELIST: "${WHITELIST}"
    })
  ]
});
