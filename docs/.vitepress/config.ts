import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

const title = '地瓜'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/site/',
  title: title,
  titleTemplate: ':title',
  description: 'Recoding something.',
  srcDir: 'src',
  appearance: false,

  // vite: {
  //   resolve: {
  //     alias: [
  //       {
  //         find: /^.*\/VPNavBar\.vue$/,
  //         replacement: fileURLToPath(
  //           new URL('./components/DGNavBar.vue', import.meta.url)
  //         ),
  //       },
  //     ],
  //   },
  // },

  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {
    siteTitle: title,
    search: {
      provider: 'local',
    },
    outline: {
      level: 'deep',
      label: '',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdatedText: '更新于',
    nav: navigations(),
    sidebar: sidebar(),

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/95cc' }
    ],
  },
})

function sidebar() {
  return {
    '/readings/': [
      {
        text: '读书',
        collapsed: false,
        items: [
          // { text: '2 -《早晨从中午开始》', link: '/readings/books/1-50/2.md' },
          {
            text: '1 -《Web全栈工程师的自我修养》',
            link: '/readings/books/1-50/1.md',
          },
        ],
      },
    ],
    '/geektimes': [
      {
        text: '学极客时间',
        collapsed: false,
        items: [
          {
            text: '2 -《乔新亮的 CTO 成长复盘》',
            link: '/geektimes/contents/2.md',
          },
          {
            text: '1 -《如何成为学习高手》',
            link: '/geektimes/contents/1.md',
          },
        ],
      },
    ],
    '/blogs': sidebarBlogs(),
  }
}

function sidebarBlogs() {
  return [{ text: 'HTML学习', link: '/blogs/contents/1-html-study.md' }]
}

function navigations() {
  return [
    { text: '公众号阅读', link: '/wxarticles/' },
    { text: '读书', link: '/readings/', activeMatch: '/readings' },
    { text: '学极客时间', link: '/geektimes/', activeMatch: '/geektimes' },
    { text: '看文章', link: '/articles/', activeMatch: '/articles' },
    { text: '写blog', link: '/blogs/', activeMatch: '/blogs' },
  ]
}
