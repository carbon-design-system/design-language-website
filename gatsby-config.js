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
        mdxExtensions: ['.mdx'],
        iconPath: './src/images/favicon-512.png',
        titleType: 'append',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/design-language-website',
          subDirectory: '',
        },
      },
    },
  ],
};
