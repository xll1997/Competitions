/*
 * @Descripttion:
 * @version:
 * @Date:
 */

const path = require('path')
module.exports = {
  // productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // outputDir: "dist",
  lintOnSave: true,
  // runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.15:9527',
        ws: false,
        secure: false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  // chainWebpack: config => {

  //   const fileRule = config.module.rule('file')
  //   fileRule.uses.clear()
  //   fileRule
  //     .test(/\.(eot|svg|ttf|woff|woff2)$/)
  //     .exclude.add(path.resolve(__dirname, './src/fonts'))
  //     .end()
  //     .use('file-loader')
  //     .loader('file-loader')
  // }
}
