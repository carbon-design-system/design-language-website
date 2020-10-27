import React from 'react';
import { Search, Dropdown } from 'carbon-components-react';
import useSticky from '../shared/useSticky';

import { themeDropdown, filterRow } from './AppIconLibrary.module.scss';

const FilterRow = ({
  onSearchChange,
  onCategoryChange,
  selectedCategory,
  isDarkTheme,
  setIsDarkTheme,
  categoryList,
}) => {
  const [filterRowRef, isSticky] = useSticky();
  const placeHolderText = 'Search by business unit, name, or descriptors';
  return (
    <div
      data-stuck={isSticky || undefined}
      ref={filterRowRef}
      className={filterRow}>
      <Search
        labelText={`filter app icons by searching for their name or category`}
        onChange={onSearchChange}
        placeHolderText={placeHolderText}
      />
      <Dropdown
        className={themeDropdown}
        id="category-filter"
        size="xl"
        direction="bottom"
        selectedItem={isDarkTheme ? `Dark theme` : `Light theme`}
        onChange={({ selectedItem }) => {
          setIsDarkTheme(selectedItem === `Dark theme`);
        }}
        label={`Select theme`}
        items={[`Dark theme`, `Light theme`]}
      />
      <Dropdown
        className={themeDropdown}
        id="category-filter"
        size="xl"
        direction="bottom"
        selectedItem={selectedCategory}
        onChange={onCategoryChange}
        label={`Filter app icons by category`}
        items={[`All app icons`, ...categoryList]}
      />
    </div>
  );
};

export default FilterRow;
