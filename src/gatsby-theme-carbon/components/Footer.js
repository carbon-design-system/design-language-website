import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
// eslint-disable-next-line import/no-webpack-loader-syntax
import timestamp from 'raw-loader!../../../build-timestamp';

const currentYear = new Date().getFullYear();
const lastUpdated = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date(Number(timestamp)));

const Content = () => (
  <>
    <p>
      Have questions? Email us or open
      <br /> an issue in{' '}
      <a href="https://github.com/carbon-design-system/design-language-website/issues/new/choose">
        GitHub.
      </a>
    </p>
    <p>
      Last updated {lastUpdated}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'https://www.carbondesignsystem.com/contributing/designers/',
      linkText: 'Contribute',
    },
    {
      href: 'https://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen',
      linkText: 'Privacy',
    },
    {
      href: 'https://www.ibm.com/legal/us/en/?lnk=flg-tous-usen',
      linkText: 'Terms of Use',
    },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'IBM.com' },
    { href: 'https://twitter.com/ibmdesign', linkText: 'Twitter' },
  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
