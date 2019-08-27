import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(!window) window = {};
            window.digitalData = {
              page: {
                category: {
                  primaryCategory: 'DESIGN',
                },
                pageInfo: {
                  ibm: {
                    siteID: 'DESIGN_LANGUAGE',
                    country: 'US',
                    industry: 'Design',
                    owner: 'Mike J Abbink/New York/IBM',
                  },
                },
              },
            }
          `,
            }}
          />
          <script
            src="https://1.www.s81c.com/common/stats/ida_stats.js"
            type="text/javascript"
            async
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>This website requires JavaScript.</noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};