import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Trekkers',
  tagline: 'CPSC 455',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ubc-cpsc455-2024S.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/trekkers-docs-public/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ubc-cpsc455-2024S', // Usually your GitHub org/user name.
  projectName: 'trekkers-docs-public', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/trek-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Trekkers Logo',
        src: 'img/Trekkers_Dark_Logo.svg',
        srcDark: 'img/Trekkers_Light_Logo.svg',
        width: '100px',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Development',
        },
        {to: '/team', label: 'Team', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ubc-cpsc455-2024S/project-04_trekkers',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Release Notes',
              to: '/docs/category/release-notes',
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'About Us',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'CPSC 455 Course',
              href: 'https://www.students.cs.ubc.ca/~cs-455/2024_S/',
            },
            {
              label: 'UBC CS',
              href: 'https://cs.ubc.ca',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ubc-cpsc455-2024S/project-04_trekkers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trekkers, All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
