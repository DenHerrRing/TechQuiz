import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config

export default withMermaid({
  lang: 'de',
  base: '/TechQuiz/',
  title: "TechQuiz",
  description: "Fragenkatalog zu verschiedenen TechStacks und Frameworks",
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // @ts-ignore
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Allgemein', link: '/general' },
      { text: 'JavaScript', link: '/javascript/questions' },
      { text: 'Angular', link: '/angular/questions' },
      { text: 'Vue', link: '/vue/questions' },
      { text: 'React', link: '/react/questions' }
    ],

    sidebar: [
      {
        text: 'Allgemein',
        items: [
          { text: 'SOLID', link: '/general/solid' },
          { text: 'Kiss', link: '/general/kiss' },
          { text: 'Dry', link: '/general/dry' }
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'Allgemein', link: '/javascript/index' },
          { text: 'Fragen', link: '/javascript/questions' }
        ]
      },
      {
        text: 'Angular',
        items: [
          { text: 'Allgemein', link: '/angular/index' },
          { text: 'Fragen - Allgemein', link: '/angular/questions' },
          {
            text: 'Fragen - Components',
            link: '/angular/questions-components',
          },
          {
            text: 'Fragen - Services',
            link: '/angular/questions-services',
          },
          {
            text: 'Fragen - Directives',
            link: '/angular/questions-directives',
          },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: 'Allgemein', link: '/vue/index' },
          { text: 'Fragen', link: '/vue/questions' }
        ]
      },{
        text: 'React',
        items: [
          { text: 'Allgemein', link: '/react/index' },
          { text: 'Fragen', link: '/react/questions' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DenHerrRing/TechQuiz' }
    ]
  }
})
