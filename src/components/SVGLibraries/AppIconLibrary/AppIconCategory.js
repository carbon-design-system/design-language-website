import React from 'react';
import sortBy from 'lodash-es/sortBy';
import remove from 'lodash-es/remove';

import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import { container, card, dark } from './AppIconLibrary.module.scss';

import { categoryTitle, svgCategory } from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, icons, isDarkTheme, topCategory }) => {
  const srcPrefix = `/app-icons/${isDarkTheme ? 'dark-theme' : 'light-theme'}`;
  const sortedIcons = sortBy(icons, 'name');

  const unassignedIcons = remove(
    sortedIcons,
    ({ friendly_name }) => friendly_name === 'Unassigned'
  );

  return (
    <section className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <div className={container}>
        {[...sortedIcons, ...unassignedIcons].map((icon, i) => {
          if (!icon.name) {
            console.error('error', icon);
          }

          // Only lazy load images that are "below the fold" they're not among the first
          // 8 images in the "top" category"
          const loading = topCategory && i < 8 ? 'auto' : 'lazy';

          return (
            <div
              key={`${srcPrefix}/${icon.name}`}
              className={cx(card, isDarkTheme && dark)}>
              <span aria-hidden="true">{icon.friendly_name}</span>
              <img
                loading={loading}
                height="48px"
                width="48px"
                src={`${srcPrefix}/${icon.name}.svg`}
                alt={icon.friendly_name}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IconCategory;
