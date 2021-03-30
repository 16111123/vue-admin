<<<<<<< HEAD
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
  parallel: require('os').cpus().length > 1

};
=======
const path = require('path');
module.exports = {
    //基本配置
    publicPath: process.env.NOOE_ENV === 'production' ? '' : '/',
    // 输出文件目录
    outputDir: process.env.NOOE_ENV === 'production' ? 'dist' : 'devdist',
    // eslint-loader 是否保存时候进行检查
    lintOnSave: true,
    // webpac配置,
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css的相关配置
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/style/main.scss";`
            }
        }
    }
}
>>>>>>> d801b90c2335fe15fe1c5f6215c335c5d109ad34
