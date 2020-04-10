module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
  },
  pathPrefix: '/design/language',
  plugins: [
    'gatsby-theme-carbon-svgs',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/favicon.svg',
        mdxExtensions: ['.mdx'],
        titleType: 'append',
      },
    },
  ],
};
