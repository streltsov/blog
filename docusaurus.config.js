// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Herman Streltsov',
  tagline: 'Helluva blog by Herman Streltsov',
  trailingSlash: true,
  url: 'https://blog.streltsov.dev/',
  baseUrl: '/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'streltsov',
  projectName: 'blog',
  baseUrlIssueBanner: true,
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
	docs: false,
	blog: {
	  path: './blog',
	  routeBasePath: '/',
	  showReadingTime: true,
	  postsPerPage: 'ALL',
	  editUrl: 'https://github.com/streltsov/blog',
	},
	theme: {
	  customCss: require.resolve('./src/css/custom.css'),
	},
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Herman Streltsov',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
