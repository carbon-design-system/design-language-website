module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
    siteUrl: 'https://www.ibm.com/design/language',
    keywords: 'IBM,Design Language,IBM Design Language,IDL,Carbon',
    description:
      'The IBM Design Language provides the guidance and assets used to express the IBM brand in products, communications, marketing, events and digital experiences.',
  },
  pathPrefix: '/design/language',
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
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'HLFJURXW',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
