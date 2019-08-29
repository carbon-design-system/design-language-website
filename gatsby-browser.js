import './src/styles/index.scss';

// If production, import with "$font-prefix: /design/language/fonts"
if (process.env.NODE_ENV === 'production') {
  require('./src/styles/plex-variants-production.scss');
} else {
  // otherwise, import with "$font-prefix: /fonts"
  require('./src/styles/plex-variants.scss');
}
