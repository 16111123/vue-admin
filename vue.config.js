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
