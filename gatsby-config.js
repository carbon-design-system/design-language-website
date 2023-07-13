require('dotenv').config();

const { PATH_PREFIX = '/design/language' } = process.env;

module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
    siteUrl: 'https://www.ibm.com/design/language',
    keywords: 'IBM,Design Language,IBM Design Language,IDL,Carbon',
    description:
      'The IBM Design Language provides the guidance and assets used to express the IBM brand in products, communications, marketing, events and digital experiences.',
  },
  pathPrefix: PATH_PREFIX,
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/favicon.svg',
        mdxExtensions: ['.mdx'],
        titleType: 'append',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/design-language-website',
          branch: 'master',
        },
        theme: {
          homepage: 'g10',
          interior: 'g10',
        },
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `AppIcons`,
      options: {
        path: `${__dirname}/src/data/app-icons.yaml`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Design Language',
        description:
          'The IBM Design Language provides the guidance and assets used to express the IBM brand in products, communications, marketing, events and digital experiences.',
        short_name: 'IDL',
        start_url: 'https://www.ibm.com/design/language/',
        icon: 'src/images/favicon.svg',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
