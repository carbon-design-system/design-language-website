const { v4: uuid } = require('uuid');

module.exports = {
  plugins: [
    {
      name: 'prefixIds',
      params: {
        prefix: () => {
          return uuid();
        },
      },
    },
    {
      name: 'cleanupIDs',
      active: false,
    },
  ],
};
