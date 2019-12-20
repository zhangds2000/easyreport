module.exports = {
    devServer: {
        port:7001, //端口号
        host:"localhost", //主机名
        open: true, //启动服务时自动打开浏览器
        https: false,
        proxy: { //配置跨域
            '/api': {
                target:'http://localhost:5000/api/',
                ws:true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }

        },
        before: app => {  }
    },
    lintOnSave:false, //关闭语法格式检查
    productionSourceMap: false, //打包时不生成map文件
    
  }