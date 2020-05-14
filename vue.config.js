module.exports = {
  // i18n
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    devtool: '#eval-source-map'
  },

  lintOnSave: false
}
