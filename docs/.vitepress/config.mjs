export default {
  title: "Sport Česká Lípa - Dokumentace",
  description: "Dokumentace k rezervačnímu systému sportovišť",
  themeConfig: {
    nav: [
      { text: 'Domů', link: '/' },
      { text: 'Návod', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Architektura', link: '/architecture/' }
    ],
    sidebar: [
      {
        text: 'Úvod',
        items: [
          { text: 'O aplikaci', link: '/' },
          { text: 'Začínáme', link: '/guide/' }
        ]
      },
      {
        text: 'Dokumentace',
        items: [
          { text: 'API Endpointy', link: '/api/' },
          { text: 'Architektura', link: '/architecture/' },
          { text: 'ER Diagram', link: '/er-diagram/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HolyMarkon/sps-fullstack' }
    ]
  }
}