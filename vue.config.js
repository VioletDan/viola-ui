const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      // 将target映射为/api
      '/api': {
        target: 'https://c.y.qq.com/', // 接口域名
        secure: true, // 如果是https接口，需要配置这个参数
        ws: true,
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 需要rewrite的
        }
      }
    }
  }
}
