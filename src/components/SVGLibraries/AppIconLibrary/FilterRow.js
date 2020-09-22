import React from 'react';
import { Search, Dropdown } from 'carbon-components-react';
import cx from 'classnames';
import useSticky from '../shared/useSticky';
import {
  filterRow,
  pictograms,
  dropdown,
} from '../shared/SvgLibrary.module.scss';

const FilterRow = ({
  onSearchChange,
  onDropdownChange,
  selectedCategory,
  categoryList,
}) => {
  const [filterRowRef, isSticky] = useSticky();
  const placeHolderText = 'Search by business unit, name, or descriptors';
  return (
    <div
      data-stuck={isSticky || undefined}
      ref={filterRowRef}
      className={cx(filterRow, pictograms)}>
      <Search
        light
        labelText={`filter app icons by searching for their name or category`}
        onChange={onSearchChange}
        placeHolderText={placeHolderText}
      />
      <Dropdown
        className={dropdown}
        id="category-filter"
        size="xl"
        direction="bottom"
        light
        selectedItem={selectedCategory}
        onChange={onDropdownChange}
        label={`Filter app icons by category`}
        items={[`All app icons`, ...categoryList]}
      />
    </div>
  );
};

export default FilterRow;
