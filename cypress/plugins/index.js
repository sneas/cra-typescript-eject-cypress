const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const findWebpack = require('find-webpack')

module.exports = (on) => {
  const cleanOptions = {
    reactScripts: true,
    coverage: true,
  }

  const webpackConfig = findWebpack.cleanForCypress(
    cleanOptions,
    require('../../config/webpack.config')('development')
  );

  const options = {
    webpackOptions: webpackConfig,
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
}
