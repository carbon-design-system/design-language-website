import { Search, Dropdown } from 'carbon-components-react';

import useSticky from '../../../lib/useSticky';
import { filterRow } from './SvgLibrary.module.scss';

const FilterRow = ({
  onSearchChange,
  onDropdownChange,
  selectedCategory,
  categoryList,
  type = 'icon',
}) => {
  const [filterRowRef, isSticky] = useSticky();
  const placeHolderText =
    type === 'icon'
      ? 'Search by descriptors like “add”, or “check”'
      : 'Search by descriptors like “electronics”, or “weather”';
  return (
    <div
      data-stuck={isSticky || undefined}
      ref={filterRowRef}
      className={filterRow}>
      <Search
        small
        light
        labelText={`filter ${type}s by searching for their name or category`}
        onChange={onSearchChange}
        placeHolderText={placeHolderText}
      />
      <Dropdown
        id="category-filter"
        direction="bottom"
        light
        selectedItem={selectedCategory}
        onChange={onDropdownChange}
        label={`Filter ${type}s by category`}
        items={[`All ${type}`, ...categoryList]}
      />
    </div>
  );
};

export default FilterRow;
