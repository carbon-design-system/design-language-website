/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

export const LibraryContext = React.createContext();

const LibraryProvider = ({ children, type, site = 'carbon' }) => {
  return (
    <LibraryContext.Provider value={{ site, type }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
