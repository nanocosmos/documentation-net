// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nanocosmos Docs',
  tagline: 'nanocosmos Official Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.nanocosmos.de',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nanocosmos', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // deploymentBranch: 'gh-pages', // default
  trailingSlash: false, //
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: ['static', 'docs/assets/analytics/public'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/nanocosmos/docs/tree/master/docs/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-D55K07W445',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      typesense: {
        typesenseCollectionName: "nanocosmosv2",
        typesenseServerConfig: {
          nodes: [{
            host: "typesense.int.nanostream.cloud",
            port: 443,
            protocol: "https"
          }],
          /**  readonly public key */
          apiKey: "BISB8HptFvcxTyov40Bt37FrYybI8ttY"
        },
      },
      // Social Card
      image: 'img/social-card.jpeg',
      // Navbar
      navbar: {
        style: 'primary',
        // title: 'nanocosmos Documentation',
        logo: {
          alt: 'nanocosmos Logo',
          src: 'img/logo.svg',
          // srcDark: 'img/logo_dark.svg',
          href: 'https://docs.nanocosmos.de',
          target: '_self',
        },
        // Navigation Items
        items: [
          {
            type: 'doc',
            docId: 'cloud/cloud_overview',
            sidebarid: "nanoStream Cloud",
            position: 'left',
            label: "nanoStream Cloud",
          }, 
          // {
          //   type: 'doc',
          //   docId: 'cloud-frontend-v3/Dashboard_Overview',
          //   sidebarid: "Dashboard_Overview",
          //   position: 'left',
          //   label: "Dashboard",
          // }, 
          {
            type: 'doc',
            docId: 'nanoplayer/nanoplayer_introduction',
            sidebarid: "H5Live Player",
            position: 'left',
            label: "H5Live Player",
          }, {
            type: 'doc',
            docId: 'webrtc/nanostream_webrtc_introduction',
            sidebarid: "Webcaster",
            position: 'left',
            label: "Webcaster",
          }, {
            type: 'doc',
            docId: 'cloud/analytics-introduction',
            sidebarid: "Analytics",
            position: 'left',
            label: "Analytics",
          }, {
            type: 'doc',
            docId: 'faq/faq',
            sidebarid: "FAQ",
            position: 'left',
            label: "FAQ",
          }, {
            type: 'doc',
            docId: 'samples/samples',
            sidebarid: "Samples",
            position: 'left',
            label: "Samples",
          },
        ],
      },
      // Footer Items
      footer: {
        style: 'dark',
        logo: {
          alt: 'nanocosmos Logo',
          src: 'img/logo.svg',
          href: 'https://www.nanocosmos.de/',
          width: 160,
          target: '_self',
        },
        links: [
          {
            title: 'nanoStream Cloud',
            items: [
              {
                label: 'Dashboard',
                href: 'https://dashboard.nanostream.cloud/'
              },
              {
                label: 'Overview',
                href: 'https://info.nanocosmos.de/',
              },
              {
                label: 'Use Cases',
                href: 'https://info.nanocosmos.de/interactivelivestreaming/',
              },
              {
                label: 'Pricing',
                href: 'https://www.nanocosmos.de/buy',
              },
              {
                label: 'Free Trial',
                href: 'https://info.nanocosmos.de/free-trial/',
              },
              {
                label: 'Career',
                href: 'https://www.nanocosmos.de/blog/jobs/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: 'https://www.nanocosmos.de/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nanocosmos/docs',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nanocosmos-gmbh/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/nanovideo',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@nanocosmos',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Website',
                href: 'https://info.nanocosmos.de/',
              },
              {
                label: 'Contact',
                href: 'https://www.nanocosmos.de/contact',
              },
              {
                label: 'Support',
                href: 'https://www.nanocosmos.de/support',
              },
              {
                label: 'Imprint',
                href: 'https://www.nanocosmos.de/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. nanocosmos GmbH - Docs Version: ${new Date().toUTCString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      // Announcement Bar
      // announcementBar: {
      //   id: 'announcement_bar',
      //   content:
      //     'Hey, this is a test announcement',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [{ name: 'keywords', content: 'live streaming, video live streaming, streaming, docs, developer docs' }],
    }),
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Define your redirects here
          {
            to: '/docs/analytics/alerting', // New URI
            from: ['/docs/cloud/alerting'], // Old URIs to be redirected
          },
        ],
      },
    ],
  ],
};

module.exports = config;
