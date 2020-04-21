import React from 'react';
import IconLibrary from './IconLibrary';
import LibraryProvider from '../../../plugins/gatsby-theme-carbon-svgs/components/shared/LibraryProvider';

export default ({ site }) => (
  <LibraryProvider site={site} type="icon">
    <IconLibrary />
  </LibraryProvider>
);
