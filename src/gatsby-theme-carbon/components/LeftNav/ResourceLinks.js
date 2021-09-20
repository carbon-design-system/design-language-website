import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IDL Sketch library',
    href: 'sketch://add-library/cloud/4f1cbe6c-6626-405e-8c46-a9ae41a30cba',
  },
  {
    title: 'Carbon Sketch libraries',
    href: 'https://www.carbondesignsystem.com/designing/kits/sketch',
  },
];

const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
