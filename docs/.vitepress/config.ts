import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config

export default withMermaid({
  lang: "de",
  base: "/TechQuiz/",
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
      { text: "Home", link: "/" },
      {
        text: "Software-Entwicklung",
        items: [
          {
            text: "Software-Entwicklung",
            link: "/software-development/general/",
          },
          {
            text: "Prinzipien",
            link: "/software-development/principles/solid",
          },
        ],
      },
      {
        text: "JavaScript",
        items: [
          { text: "JavaScript", link: "/javascript/general/questions" },
          { text: "Angular", link: "/javascript/angular/questions" },
          { text: "Vue", link: "/javascript/vue/questions" },
          { text: "React", link: "/javascript/react/questions" },
        ],
      },
      {
        text: "Java",
        items: [
          { text: "Java", link: "/java/general/questions" },
          { text: "SpringBoot", link: "/java/spring-boot/questions" },
          { text: "Java EE", link: "/java/java-ee/questions" },
        ],
      },
    ],
    sidebar: {
      "/software-development/": [
        { text: "Allgemein", link: "/software-development/general/" },
        {
          text: "Prinzipien",
          items: [
            { text: "SOLID", link: "/software-development/principles/solid" },
            { text: "KISS", link: "/software-development/principles/kiss" },
            { text: "DRY", link: "/software-development/principles/dry" },
          ],
        },
        { text: "JavaScript ->", link: "/javascript/general/" },
        { text: "Java ->", link: "/java/general/" },
      ],
      "/javascript/": [
        {
          text: "JavaScript",
          items: [
            { text: "Allgemein", link: "/javascript/general/" },
            { text: "Fragen", link: "/javascript/general/questions" },
          ],
        },
        {
          text: "Angular",
          items: [
            { text: "Allgemein", link: "/javascript/angular/" },
            { text: "Fragen", link: "/javascript/angular/questions" },
            {
              text: "Fragen - Components",
              link: "/javascript/angular/questions-components",
            },
            {
              text: "Fragen - Services",
              link: "/javascript/angular/questions-services",
            },
            {
              text: "Fragen - Directives",
              link: "/javascript/angular/questions-directives",
            },
          ],
        },
        {
          text: "Vue",
          items: [
            { text: "Allgemein", link: "/javascript/vue/" },
            { text: "Fragen", link: "/javascript/vue/questions" },
          ],
        },
        {
          text: "React",
          items: [
            { text: "Allgemein", link: "/javascript/react/" },
            { text: "Fragen", link: "/javascript/react/questions" },
          ],
        },
        {
          text: "Software-Entwicklung ->",
          link: "/software-development/general/",
        },
        { text: "Java ->", link: "/java/general/" },
      ],
      "/java/": [
        {
          text: "Java",
          items: [
            { text: "Allgemein", link: "/java/general/" },
            { text: "Fragen", link: "/java/general/questions" },
          ],
        },
        {
          text: "SpringBoot",
          items: [
            { text: "Allgemein", link: "/java/spring-boot/" },
            { text: "Fragen", link: "/java/spring-boot/questions" },
          ],
        },
        {
          text: "Java EE",
          items: [
            { text: "Allgemein", link: "/java/java-ee/" },
            { text: "Fragen", link: "/java/java-ee/questions" },
          ],
        },
        {
          text: "Software-Entwicklung ->",
          link: "/software-development/general/",
        },
        { text: "JavaScript ->", link: "/javascript/general/" },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/DenHerrRing/TechQuiz" },
    ],
  },
});
