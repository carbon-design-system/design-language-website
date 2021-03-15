import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  const script = `
  if(!window) window = {};
  window.idaPageIsSPA = true;
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
`;

  return setHeadComponents([
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      async="async"
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ibm-common.js"
      type="text/javascript"
    />,
  ]);
};
