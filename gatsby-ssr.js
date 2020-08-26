const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-search-console-verification"
      name="google-site-verification"
      content="200635nBg8zekuhsFo98AVleVi62lJ0hJ65ICFYdBYk"
    />,
  ]);
};
