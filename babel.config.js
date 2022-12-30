// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

module.exports = {
  presets: [
      '@vue/app'
  ],
  plugins: [
      [
          'babel-plugin-component',
          {
              libraryName: 'element-ui',
              styleLibraryName: '~node_modules/element-theme-chalk/src',
              ext: '.scss'
          }
      ]
  ],
}

