/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import FilterRow from '../shared/FilterRow';
import { svgPage } from '../shared/SvgLibrary.module.scss';

import { container, card, light } from './AppIconLibrary.module.scss';

import cx from 'classnames';

// import AppIconCategory from './AppIconCategory';
// import NoResult from '../shared/NoResult';

const IconLibrary = () => {
  const { allAppIconsYaml } = useStaticQuery(graphql`
    query AppIconQuery {
      allAppIconsYaml {
        totalCount
        edges {
          node {
            aliases
            category
            name
            friendly_name
          }
        }
      }
    }
  `);

  const broken = [
    'DataCollectionTool',
    '007',
    '046',
    '047',
    '053',
    '055',
    '058',
    '066',
    '098',
    '112',
    '132',
  ];

  const rawData = allAppIconsYaml.edges.map(({ node }) => node);
  const data = rawData.filter(
    ({ name }) => Boolean(name) && !broken.includes(name)
  );
  const brokenIcons = rawData.filter(({ name }) => broken.includes(name));

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);

  const srcPrefix = `/app-icons/${isDarkTheme ? 'dark-theme' : 'light-theme'}`;
  return (
    <div className={svgPage}>
      <FilterRow
        type="pictogram"
        categoryList={['all', 'stroke', 'fill', 'plex']}
        selectedCategory={selectedCategory}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onDropdownChange={({ selectedItem }) =>
          setSelectedCategory(selectedItem)
        }
      />
      <button type="button" onClick={() => setIsDarkTheme(!isDarkTheme)}>
        change theme
      </button>
      <div className={container}>
        {[...brokenIcons, ...data].map((icon) => {
          if (!icon.name) {
            console.error('error', icon);
          }
          return (
            <div
              key={`${srcPrefix}/${icon.name}`}
              className={cx(card, !isDarkTheme && light)}>
              <img
                src={`${srcPrefix}/${icon.name}.svg`}
                alt={'icon not found'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconLibrary;
