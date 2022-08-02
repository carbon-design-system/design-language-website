/* eslint-disable global-require */
import './src/styles/index.scss';

// import with "$font-prefix: /fonts" in dev and deploy previews
if (process.env.NODE_ENV !== 'production') {
  require('./src/styles/plex-variants.scss');
} else {
  // import with "$font-prefix: /design/language/fonts"
  require('./src/styles/plex-variants-production.scss');
}

export const onRouteUpdate = ({ location }) => {
  if (window && window.digitalData && window.createPageviewTagForSPA) {
    window.digitalData.page.pageInfo.pageID = location.pathname;
    window.createPageviewTagForSPA();
  }
}