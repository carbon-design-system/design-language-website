/* eslint-disable react/no-danger */
export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  const script = `
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
`;

  return setPostBodyComponents([
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      defer
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ida_stats.js"
      type="text/javascript"
    />,
  ]);
};
