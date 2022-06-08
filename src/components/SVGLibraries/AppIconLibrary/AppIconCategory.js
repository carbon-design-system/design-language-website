import React, { useEffect, useState } from 'react';
import sortBy from 'lodash-es/sortBy';
import remove from 'lodash-es/remove';

import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import {
  container,
  card,
  dark,
  requestIcon,
  name,
} from './AppIconLibrary.module.scss';

import { categoryTitle, svgCategory } from '../shared/SvgLibrary.module.scss';

import { Launch16 } from '@carbon/icons-react';
import TooltipIcon from 'carbon-components-react/lib/components/TooltipIcon';

const IconCategory = ({ category, icons, isDarkTheme }) => {
  const sortedIcons = sortBy(icons, 'name');
  const themeFolder = isDarkTheme ? 'dark-theme' : 'light-theme';

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

          return (
            <div
              key={`${themeFolder}-${icon.name}-${i}`}
              className={cx(card, isDarkTheme && dark)}>
              <span className={name} aria-hidden="true">
                {icon.friendly_name}
              </span>
              <Icon name={icon.name} themeFolder={themeFolder} />

              {icon.friendly_name === 'Unassigned' ? (
                <span className={requestIcon}>
                  <a
                    target="_blank"
                    href="https://github.ibm.com/brand/App-icons/issues/new?template=existing-app-icon-request.md" rel="noreferrer">
                    <TooltipIcon
                      tooltipText="Request icon"
                      renderIcon={Launch16}
                      direction="top"
                    />
                  </a>
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Icon = ({ name, themeFolder }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const getHtml = async () => {
      const { default: rawHtml } = await import(
        `!!raw-loader!../../../images/app-icons/${themeFolder}/${name}.svg`
      );
      setHtml(rawHtml);
    };
    getHtml();
  }, [name, themeFolder]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default IconCategory;
