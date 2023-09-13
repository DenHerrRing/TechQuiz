import { DefaultTheme, UserConfig } from "vitepress";
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
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Software-Entwicklung",
        activeMatch: "/software-development/",
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
        activeMatch: "/javascript/",
        items: [
          { text: "JavaScript", link: "/javascript/general/questions" },
          { text: "Angular", link: "/javascript/angular/" },
          { text: "Vue", link: "/javascript/vue/questions" },
          { text: "React", link: "/javascript/react/questions" },
        ],
      },
      {
        text: "Java",
        activeMatch: "/java/",
        items: [
          { text: "Java", link: "/java/general/questions" },
          { text: "SpringBoot", link: "/java/spring-boot/questions" },
          { text: "Java EE", link: "/java/java-ee/questions" },
        ],
      },
    ],
    sidebar: {
      "/software-development/": [
        {
          text: "Allgemein",
          link: "/software-development/general/",
        },
        {
          text: "Prinzipien",
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: "Allgemein", link: "/javascript/general/" },
            { text: "Fragen", link: "/javascript/general/questions" },
          ],
        },
        {
          text: "Angular",
          collapsed: true,
          items: [
            { text: "Allgemein", link: "/javascript/angular/" },
            {
              text: "Fragen",
              link: "javascript/angular/questions/",
              items: [
                {
                  text: "Allgemein",
                  link: "/javascript/angular/questions/general",
                },
                {
                  text: "Components",
                  link: "/javascript/angular/questions/components",
                },
                {
                  text: "Standalone Components",
                  link: "/javascript/angular/questions/standalone",
                },
                {
                  text: "Services",
                  link: "/javascript/angular/questions/services",
                },
                {
                  text: "Directives",
                  link: "/javascript/angular/questions/directives",
                },
              ],
            },
            {
              text: "Coding Challenges",
              link: "javascript/angular/coding/",
              //   items: [
              //     { text: "Allgemein", link: "javascript/angular/coding/" },
              //   ],
            },
          ],
        },
        {
          text: "Vue",
          collapsed: true,
          items: [
            { text: "Allgemein", link: "/javascript/vue/" },
            { text: "Fragen", link: "/javascript/vue/questions" },
          ],
        },
        {
          text: "React",
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: "Allgemein", link: "/java/general/" },
            { text: "Fragen", link: "/java/general/questions" },
          ],
        },
        {
          text: "SpringBoot",
          collapsed: true,
          items: [
            { text: "Allgemein", link: "/java/spring-boot/" },
            { text: "Fragen", link: "/java/spring-boot/questions" },
          ],
        },
        {
          text: "Java EE",
          collapsed: true,
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
} as UserConfig<DefaultTheme.Config>);
