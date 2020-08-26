module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
    siteUrl: 'https://www.ibm.com/design/language',
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
    `gatsby-plugin-sitemap`,
  ],
};
