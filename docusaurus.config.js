// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Herman Streltsov',
  url: 'https://blog.streltsov.dev',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'streltsov',
  projectName: 'blog',

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
	  // Please change this to your repo.
	  editUrl:
	  'https://github.com/streltsov/blog/edit/main/website/blog/',
	},
	theme: {
	  customCss: require.resolve('./src/css/custom.css'),
	},
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Herman Streltsov',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  })
};
