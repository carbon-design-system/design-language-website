module.exports = {
  siteMetadata: {
    title: 'IBM Design Language',
  },
  pathPrefix: '/design/language',
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'IBM Design Language',
        shortName: 'IDL',
      },
    },
  ],
};
