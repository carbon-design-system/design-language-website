import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import { useStaticQuery, graphql } from 'gatsby';

const currentYear = new Date().getFullYear();

const Content = () => {
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY {
      site {
        buildTime(formatString: "MMMM Do, YYYY")
      }
    }
  `);
  return (
    <>
      <p>
        Have questions? Email us or open
        <br /> an issue in{' '}
        <a href="https://github.com/carbon-design-system/design-language-website/issues/new/choose">
          GitHub.
        </a>
      </p>
      <p>
        Last updated {site.buildTime}
        <br />
        Copyright © {currentYear} IBM
      </p>
    </>
  );
};

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
