import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/site/',
  title: "95cc",
  titleTemplate: ':title',
  description: "Recoding something.",
  srcDir: 'src',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '95cc',
    search: {
      provider: 'local'
    },
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
      { text: '读书', link: '/readings/' , activeMatch: '/readings'},
      { text: '学极客时间', link: '/geektimes/', activeMatch: '/geektimes' },
      { text: '看文章', link: '/articles/', activeMatch: '/articles'},
      { text: '写blog', link: '/blogs/', activeMatch: '/blogs'},
    ],
    sidebar: {
      '/readings/': [
        {
          text: '读书',
          collapsed: false,
          items: [
            // { text: '2 -《早晨从中午开始》', link: '/readings/books/1-50/2.md' },
            { text: '1 -《Web全栈工程师的自我修养》', link: '/readings/books/1-50/1.md' },
          ]
        }
      ],
      '/geektimes': [
        {
          text: '学极客时间',
          collapsed: false,
          items: [
            { text: '4 -《浏览器工作原理与实践》', link: '/geektimes/contents/4.md'},
            { text: '3 -《重学前端》', link: '/geektimes/contents/3.md'},
            { text: '2 -《乔新亮的 CTO 成长复盘》', link: '/geektimes/contents/2.md'},
            { text: '1 -《如何成为学习高手》', link: '/geektimes/contents/1.md'}
          ]
        }
      ],
      '/blogs': sidebarBlogs()
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/95cc' }
    ]
  }
})

function sidebarBlogs() : DefaultTheme.SidebarItem[] {
  return [
    { text: 'HTML面试总结', link: '/blogs/contents/2-html-interview.md'},
    { text: 'HTML学习', link: '/blogs/contents/1-html-study.md'},
  ]
}