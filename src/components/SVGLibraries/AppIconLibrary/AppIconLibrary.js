/* eslint-disable no-debugger */
import React, { useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { groupBy } from 'lodash-es';

import AppIconCategory from './AppIconCategory';
import FilterRow from './FilterRow';
import { svgPage } from '../shared/SvgLibrary.module.scss';
import NoResult from '../shared/NoResult';

// import AppIconCategory from './AppIconCategory';
// import NoResult from '../shared/NoResult';

const CATEGORY_LIST = ['Stroke style', 'Fill style', 'IBM Plex® style'];

const IconLibrary = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const shouldShowNoResult = isObjectEmpty(categories);

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
      {shouldShowNoResult ? (
        <NoResult
          type="appIcon"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allIconResults={0}
          pageName="App icon"
          single="https://github.ibm.com/brand/App-icons/issues/new?assignees=&labels=app-icon%2Crequest%2Csingle&projects=&template=01-app-icon-request-single.yml&title=%5BApp+icon%5D+single%3A+App+name"
          batch="https://github.ibm.com/brand/App-icons/issues/new?assignees=&labels=app-icon%2Crequest%2Cbatch&projects=&template=02-app-icon-request-batch.yml&title=%5BApp+icon%5D+batch%3A+App+name"
          update="https://github.ibm.com/brand/App-icons/issues/new?assignees=&labels=app-icon%2Crequest%2Cupdate&projects=&template=03-app-icon-request-update.yml&title=%5BApp+icon%5D+update%3A+App+name"
          assign="https://github.ibm.com/brand/App-icons/issues/new?assignees=&labels=app-icon%2Cassignment&projects=&template=04-app-icon-request-assignment.yml&title=%5BApp+icon%5D+assignment%3A+App+name"
        />
      ): ( Object.keys(categories).map((category, i) => {
        return (
          <AppIconCategory
            topCategory={i === 0}
            key={category}
            category={category}
            icons={categories[category]}
            isDarkTheme={isDarkTheme}
          />
        );
      }))}
    </div>
  );
};

export default IconLibrary;
