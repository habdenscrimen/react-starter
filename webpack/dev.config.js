const merge = require('webpack-merge')

const sharedConfig = require('./shared.config')

module.exports = merge(sharedConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    stats: {
      all: false,

      errors: true,
      errorDetails: true,
      warnings: true,
      logging: true,

      timings: true,
    },
  },
})
