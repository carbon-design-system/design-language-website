/* eslint-disable no-debugger */
import React, { useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { groupBy } from 'lodash-es';

import AppIconCategory from './AppIconCategory';
import FilterRow from './FilterRow';
import { svgPage } from '../shared/SvgLibrary.module.scss';

// import AppIconCategory from './AppIconCategory';
// import NoResult from '../shared/NoResult';

const CATEGORY_LIST = ['Stroke style', 'Fill style', 'IBM Plex® style'];

const IconLibrary = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All app icons');
  const [searchValue, setSearchValue] = useState('');
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

  const data = useMemo(() => {
    const allIcons = allAppIconsYaml.edges
      .map(({ node }) => node)
      .filter(({ name }) => Boolean(name));

    const searchPattern = new RegExp(searchValue, 'i');
    const containsSearchString = (test) => searchPattern.test(test);

    return allIcons.filter(({ friendly_name, name, aliases }) => {
      return (
        containsSearchString(friendly_name) ||
        containsSearchString(name) ||
        aliases?.some(containsSearchString)
      );
    });
  }, [allAppIconsYaml, searchValue]);

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
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onCategoryChange={({ selectedItem }) =>
          setSelectedCategory(selectedItem)
        }
      />
      {Object.keys(categories).map((category, i) => {
        return (
          <AppIconCategory
            topCategory={i === 0}
            key={category}
            category={category}
            icons={categories[category]}
            isDarkTheme={isDarkTheme}
          />
        );
      })}
    </div>
  );
};

export default IconLibrary;
