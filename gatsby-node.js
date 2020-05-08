exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Disable sourcemaps in production
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
