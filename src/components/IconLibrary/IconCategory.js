import React from 'react';
import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import SvgCard from '../../../plugins/gatsby-theme-carbon-svgs/components/shared/SvgCard';
import useIntersectionObserver from '../../../plugins/gatsby-theme-carbon-svgs/components/shared/useIntersectionObserver';

import {
  svgGrid,
  categoryTitle,
  svgCategory,
} from '../../../plugins/gatsby-theme-carbon-svgs/components/shared/SvgLibrary.module.scss';

const IconCategory = ({ category, icons }) => {
  const [subCategoryRef, containerIsVisible] = useIntersectionObserver();
  return (
    <section className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul ref={subCategoryRef}>
        <ul className={svgGrid}>
          {icons.map(icon => (
            <SvgCard
              containerIsVisible={containerIsVisible}
              key={icon.name}
              icon={icon}
            />
          ))}
        </ul>
      </ul>
    </section>
  );
};

export default IconCategory;
