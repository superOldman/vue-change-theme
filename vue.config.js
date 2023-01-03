const path = require('path');
const dotEnv = require('dotenv');
const webpack = require('webpack')
const themePlugin = require('./src/utils/themePlugin');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                build_time: JSON.stringify(new Date().toLocaleString()),
            }),
            ...themePlugin
        ]
    },
    devServer: {
        publicPath: '',
        host: '0.0.0.0',
        port: '8000'
    }
}
