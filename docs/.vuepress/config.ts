import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/', // default config is '/'
  lang: 'zh-CN',
  title: '95cc-blog',
  description: 'write something.',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/README.md'
      },
      {
        text: '阅读',
        link: '/read/index.md',
        activeMatch: '^/read'
      }
    ]
  }),
  markdown: {
    
  }
})