// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/1f4123be6f45abcd/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《ES6 教程》', link: '/note/es6/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/backend/',
    items: [
      { text: '语言', link: '' },
      { text: 'MySQL', link: '' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/ad247c4332211551/' },
      { text: 'GitHub技巧', link: '/pages/95331c6a9613faf8/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
