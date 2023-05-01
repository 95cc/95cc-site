import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "95cc",
  titleTemplate: ':title',
  description: "Recoding something.",
  srcDir: 'src',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '95cc',
    outline: {
      level: 'deep',
      label: ''
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText: '更新于',
    nav: [
      { text: '首页', link: '/' },
      { text: '读书', link: '/readings/' },
      { text: '学极客时间', link: '/geektimes/' },
      { text: '看文章', link: '/articles/'},
      { text: '写blog', link: '/blogs/'},
    ],
    sidebar: {
      '/readings/': [
        {
          text: '读书',
          collapsed: false,
          items: [
            { text: '2 -《Web全栈工程师的自我修养》', link: '/readings/books/1-50/2.md' },
            { text: '1 -《早晨从中午开始》', link: '/readings/books/1-50/1.md' },
          ]
        }
      ],
      '/geektimes': [
        {
          text: '学极客时间',
          collapsed: false,
          items: [
            { text: '2 -《乔新亮的 CTO 成长复盘》', link: '/geektimes/contents/2.md'},
            { text: '1 -《如何成为学习高手》', link: '/geektimes/contents/1.md'}
          ]
        }
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/95cc' }
    ]
  }
})
