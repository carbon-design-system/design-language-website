import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IDL library',
    href: 'sketch://add-library/cloud/nwqmk',
  },
  {
    title: 'Carbon libraries',
    href: 'https://www.carbondesignsystem.com/resources/#theme-libraries',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
