const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ]
  },
  devServer: {
    host: '0.0.0.0', // 监听所有网络地址
    port: 8080,      // 开发服务器端口
    hot: true,       // 启用 HMR
    liveReload: true // 启用实时刷新（可选）
  }
})
