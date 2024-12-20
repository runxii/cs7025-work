const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  publicPath:'./',
  css: {
    extract: true, // 确保开启 CSS 提取
  },
  productionSourceMap: false, // 关闭 source map 文件
})
