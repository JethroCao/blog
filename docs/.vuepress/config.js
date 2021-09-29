const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
module.exports = {
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "JethroCao's blog",
  description: '',

  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
