import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nicolas Ebone Cendron",
  description: "Meu balde de coisas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Textos', link: '/texts/' },
      { text: 'Poemas', link: '/poems/' },
    ],

    sidebar: [
      {
        text: 'Textos',
        items: [
          { text: 'Introdução', link: '/texts/' },
          { text: 'A menina do ônibus', link: '/texts/a-menina-do-onibus.md' }
        ]
      },
      {
        text: 'Poemas',
        items: [
          { text: 'Introdução', link: '/poems/' },
          { text: 'Perfeita', link: '/poems/perfeita.md' },
          { text: 'Homem satisfeito', link: '/poems/homem-satisfeito.md' },
          { text: 'O Anjo', link: '/poems/o-anjo.md' },
          { text: 'Arrependimento', link: '/poems/arrependimento.md' },
          { text: 'Ninguém', link: '/poems/ninguem.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nickyecen' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nicolasecendron' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nicolas-ebone-cendron/' },
      { icon: 'instagram', link: 'https://www.instagram.com/nickyecen/' },
    ],

  }
})
