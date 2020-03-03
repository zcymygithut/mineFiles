module.exports = {
  publicPath: '/', // 根域上下文目录
  outputDir: 'dist', // 构建输出的目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  indexPath: 'index.html',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 80,
    proxy: { // 配置跨域
      '/api': {
　　　　　// 要访问的跨域的api的域名
        target: 'http://192.168.1.202:9900',
        changOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  }
}
