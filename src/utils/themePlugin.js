const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const appConfig = require('../config/app-config')

const JoinFileContentPlugin = require('join-file-content-plugin')

module.exports = [
  // 将theme-changed.scss应用到element-ui，供babel-plugin-component按需加载
  new JoinFileContentPlugin({
    file: 'node_modules/element-theme-chalk/src/common/var.scss',
    prependFile: 'src/style/element-theme/theme-changed.scss'
  }),
  new ThemeColorReplacer({
    fileName: 'style/theme-colors.[contenthash:8].css',
    matchColors: [
      ...forElementUI.getElementUISeries(appConfig.themeColor), // element-ui主色系列    
      // '#0cdd3a',  //自定义颜色
      // '#c655dd',      
    ],
    // externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'],
    changeSelector: forElementUI.changeSelector,
  })
]