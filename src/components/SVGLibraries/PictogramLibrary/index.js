import React from 'react';
import PictogramLibraryInternal from './PictogramLibrary';
import LibraryProvider from '../shared/LibraryProvider';

const PictogramLibrary = ({ site }) => (
  <LibraryProvider site={site} type="pictogram">
    <PictogramLibraryInternal />
  </LibraryProvider>
);

export default PictogramLibrary;
