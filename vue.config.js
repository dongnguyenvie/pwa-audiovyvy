const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        'plugins': path.join(__dirname, 'src/plugins'),
        'router': path.join(__dirname, 'src/router'),
        'views': path.join(__dirname, 'src/views'),
        'components': path.join(__dirname, 'src/components'),
        'services': path.join(__dirname, 'src/services'),
        'store': path.join(__dirname, 'src/store')
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true // autofix esline
    })
  }
}
