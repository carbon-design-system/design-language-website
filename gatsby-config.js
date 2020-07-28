module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
  },
  pathPrefix: '/design/language',
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/favicon.svg',
        gatsbyPluginSharpOptions: {
          srcSetBreakpoints: [600],
        },
        mdxExtensions: ['.mdx'],
        titleType: 'append',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/design-language-website',
          branch: 'master',
        },
      },
    },
  ],
};
