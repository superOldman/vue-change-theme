const path = require('path');
const dotEnv = require('dotenv');
const webpack = require('webpack')
const Timestamp = Date.now()
const themePlugin=require('./src/utils/themePlugin');

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
        config.output.filename(`js/[name].${process.env.NODE_ENV}.js?v=${Timestamp}`).end();
        config.output.chunkFilename(`js/[name].${process.env.NODE_ENV}.js?v=${Timestamp}`).end();

        // 处理环境变量
        const baseEnv = {};
        const modeEnv = dotEnv.config({
            path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
        }).parsed;
        Object.assign(baseEnv, modeEnv);
        // 我会过滤出以 WD_ 开头的环境变量进行单独的注入，可以根据实际情况调整逻辑即可
        const targetEnv = Object.keys(baseEnv).reduce((env, key) => {
            env[key] = JSON.stringify(baseEnv[key]);
            return env;
        }, {});
        // 修改插件的调用参数
        config.plugin('define').tap(args => {
            let arg = args[0];
            Object.assign(arg['process.env'], targetEnv);
            return args;
        });
    },
    configureWebpack: {
        performance: {
            maxEntrypointSize: 1000000,
            maxAssetSize: 200000,
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                build_time: JSON.stringify(new Date().toLocaleString()),
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 50
            }),
            // new ThemeColorReplacer({
            //     // 需要提取到css文件的颜色数组（可以传入多个颜色值），支持rgb和hsl,也就是换肤改变颜色的变量
            //     matchColors: ['#9564ca'],
            //     //可选.输出css文件名，支持[contenthash]和[hash]
            //     fileName: 'css/theme-colors-[contenthash:8].css',
            //     // 可选的。将 css 文本注入 js 文件，不再需要下载 `theme-colors-xxx.css`。
            //     injectCss: true,
            // })
            ...themePlugin
        ]
    },
    // configureWebpack: config => {
    //     new ThemeColorReplacer({
    //         // 需要提取到css文件的颜色数组（可以传入多个颜色值），支持rgb和hsl,也就是换肤改变颜色的变量
    //         matchColors: ['#9564ca'],
    //         //可选.输出css文件名，支持[contenthash]和[hash]
    //         fileName: 'css/theme-colors-[contenthash:8].css',
    //         // 可选的。将 css 文本注入 js 文件，不再需要下载 `theme-colors-xxx.css`。
    //         injectCss: true,
    //     })
    // },
    // css: {
    //     extract: false,
    //     loaderOptions: {
    //         scss: {
    //             data: `
    //                 @import "~@/styles/variables/index.scss";
    //             `
    //         }
    //     },
    //     sourceMap: false,
    //     modules: false
    // },
    devServer: {
        // allowedHosts: [
        //     '.71360.com'
        // ],
        host: '0.0.0.0',
        port: '8000',
        proxy: {
            '/index.php/': {
                target: 'https://preapiconsole.71360.com/api/app/obor-nginx-php/', // 预发布环境
                changeOrigin: true,
                pathRewrite: {
                    '^/index.php/': ''
                }
            }
        },
    }
}
