import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? <a href="mailto:branding@us.ibm.com">Email</a> us or Slack{' '}
      <br />
      <a href="https://ibm-studios.slack.com/archives/CK6LZR3PZ">
        #ibm-brand
      </a>{' '}
      (internal IBM users only)
    </p>
    <p>
      Last updated {buildTime}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'https://www.ibm.com/privacy',
      linkText: 'Privacy',
    },
    {
      href: 'https://www.ibm.com/legal',
      linkText: 'Terms of use',
    },
    {
      href: 'https://ibm.com',
      linkText: 'IBM.com',
    },
  ],
  secondCol: [
    { href: 'https://twitter.com/ibmdesign', linkText: 'Twitter' },
    { href: 'https://www.instagram.com/ibm/?hl=en', linkText: 'Instagram' },
  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
