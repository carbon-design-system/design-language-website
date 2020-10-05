import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IDL library',
    href: 'sketch://add-library/cloud/nwqmk',
  },
  {
    title: 'Carbon libraries',
    href: 'https://www.carbondesignsystem.com/designing/kits/sketch',
  },
];

const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
