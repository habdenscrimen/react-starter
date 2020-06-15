const merge = require('webpack-merge')

// plugins
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const sharedConfig = require('./shared.config')

module.exports = merge(sharedConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CompressionPlugin()],
})
