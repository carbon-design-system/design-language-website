import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

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
      Last updated Jan 1, 1800
      <br />
      sCopyright © 2019 IBM
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
    { href: 'https://ibm.com/design', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://twitter.com/ibmdesign', linkText: 'Twitter' },
    { href: 'https://facebook.com/ibmdesign', linkText: 'Facebook' },
  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
