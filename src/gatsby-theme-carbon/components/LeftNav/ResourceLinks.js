import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [];

const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
