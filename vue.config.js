const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('plugins', path.resolve(__dirname, 'src/plugins'))
      .set('router', path.resolve(__dirname, 'src/router'))
      .set('views', path.resolve(__dirname, 'src/views'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('services', path.resolve(__dirname, 'src/services'))
      .set('store', path.resolve(__dirname, 'src/store'))
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true // autofix esline
      })
  }
}
