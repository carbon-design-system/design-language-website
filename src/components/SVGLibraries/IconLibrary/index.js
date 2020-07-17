import React from 'react';
import IconLibraryInternal from './IconLibrary';
import LibraryProvider from '../shared/LibraryProvider';

const IconLibrary = ({ site }) => (
  <LibraryProvider site={site} type="icon">
    <IconLibraryInternal />
  </LibraryProvider>
);

export default IconLibrary;
