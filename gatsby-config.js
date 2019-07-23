module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
  },
  pathPrefix: '/design/language',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'IBM Design Language',
        shortName: 'IDL',
        iconPath: './src/images/favicon-512.png',
      },
    },
  ],
};
