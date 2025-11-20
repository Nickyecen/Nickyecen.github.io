import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nicolas Ebone Cendron",
  description: "Meu balde de coisas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Textos', link: '/texts/' },
    ],

    sidebar: [
      {
        text: 'Textos',
        items: [
          { text: 'Introdução', link: '/texts/index.md' },
          { text: 'A menina do ônibus', link: '/texts/a-menina-do-onibus.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nickyecen' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nicolasecendron' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nicolas-ebone-cendron/' },
      { icon: 'instagram', link: 'https://www.instagram.com/nickyecen/' },
    ],

  }
})
