const path = require("path");
module.exports = {
  //基本配置
  publicPath: process.env.NOOE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NOOE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否保存时候进行检查
  lintOnSave: false,
  // webpac配置,
  chainWebpack: config => {},
  configureWebpack: config => {
    config.resolve = {
      extensions:['.js','.json','.vue'],
      alias: {
        '@': path.resolve(__dirname,'./src'),
        'public': path.resolve(__dirname, './public'),
        'components': path.resolve(__dirname, './src/components'),
        'common': path.resolve(__dirname,'./src/common'),
        'api': path.resolve(__dirname,'./src/api'),
        'views': path.resolve(__dirname,'./src/views'),
        'data': path.resolve(__dirname,'./src/data')
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css的相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlung
    extract: true,
    // 开启css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/style/main.scss";`
      }
    },
    modules: false
  },
  parallel: require('os').cpus().length > 1,
 
  devServer: {
    open:false, // 编译完成时是否打开网页
    host:'0.0.0.0', // 指定使用地址，默认localhost,0.0.0代表可以被外界访问
    port: 8080, // 端口
    https: false, // 编译失败时刷新页面
    hot: true, //开启热加载
    hotOnly: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: "http://www.web-jshtml.cn/productapi/token", // API服务器的地址  http:www.web-jshtml.cn/api
        changeOrigin: true,
        pathRewrite: {
          ['^'+process.env.VUE_APP_API]: ''// es5
          // [`^${process.env.VUE_APP_API}`]: '' // es6
        }
      }
    },
    overlay: { // 全屏模式下是否显示脚本错误
        warnings: true,
        errors: true
    },
    before: app => {

    }
  },
  /**
   * 第三方插件配置
   */

  pluginOptions: {}
  
};
