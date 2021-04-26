module.exports = {
  plugins: [
    'prefixIds',
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: true,
      },
    },
  ],
};
