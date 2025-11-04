import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nicolas Ebone Cendron",
  description: "Get to know me!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nickyecen' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nicolasecendron' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nicolas-ebone-cendron/' },
      { icon: 'instagram', link: 'https://www.instagram.com/nickyecen/' },
    ]
  }
})
