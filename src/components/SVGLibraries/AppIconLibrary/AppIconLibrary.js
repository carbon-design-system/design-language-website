/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { groupBy } from 'lodash-es';

import AppIconCategory from './AppIconCategory';
import FilterRow from './FilterRow';
import { svgPage } from '../shared/SvgLibrary.module.scss';

// import AppIconCategory from './AppIconCategory';
// import NoResult from '../shared/NoResult';

const CATEGORY_LIST = ['Stroke', 'Fill', 'Line', 'IBM Plex'];

const IconLibrary = () => {
  const { allAppIconsYaml } = useStaticQuery(graphql`
    query AppIconQuery {
      allAppIconsYaml(sort: { fields: name, order: ASC }) {
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
  //   const brokenIcons = rawData.filter(({ name }) => broken.includes(name));

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All app icons');
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);

  let categories = groupBy(data, 'category');

  if (CATEGORY_LIST.includes(selectedCategory)) {
    categories = {
      [selectedCategory]: categories[selectedCategory],
    };
  }

  return (
    <div className={svgPage}>
      <FilterRow
        type="pictogram"
        categoryList={CATEGORY_LIST}
        selectedCategory={selectedCategory}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onDropdownChange={({ selectedItem }) =>
          setSelectedCategory(selectedItem)
        }
      />
      <button type="button" onClick={() => setIsDarkTheme(!isDarkTheme)}>
        change theme
      </button>
      {Object.keys(categories).map((category) => {
        return (
          <AppIconCategory
            key={category}
            category={category}
            icons={categories[category]}
            isDarkTheme={isDarkTheme}
          />
        );
      })}
      {/* <AppIconCategory category={} */}
    </div>
  );
};

export default IconLibrary;
