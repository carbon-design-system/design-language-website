import React from 'react';
import {
  MiniCard,
  CardGroup,
} from '../../../gatsby-theme-carbon/components/MiniCard';
import { Column, Row } from 'gatsby-theme-carbon';
import cx from 'classnames';
import {
  h2,
  paragraph,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';

import {
  noResult,
  allSvgs,
  searchLabel,
  cardMargin,
} from './SvgLibrary.module.scss';

const NoResult = ({
  allIconResults,
  setSelectedCategory,
  selectedCategory,
  single,
  batch,
  update,
  assign = '',
  type = 'icons',
  pageName,
}) => (
  <div className={noResult}>
    {allIconResults ? (
      <>
        <span className={searchLabel}>
          {`0 results found in the "${selectedCategory}" category.`}
        </span>
        <h2 className={h2}>
          {allIconResults} matches found in{' '}
          <button
            type="button"
            onClick={() => setSelectedCategory(`All ${type}`)}
            className={cx(allSvgs, 'bx--link')}>
            all {type}.
          </button>
        </h2>
      </>
    ) : (
      <>
        <Row>
          <Column colMd={6} colLg={8}>
            <h2 className={h2}>No result found</h2>
            { type === 'appIcon' && <p className={paragraph}>
                It appears we don’t have an icon that matches your search. Try different search terms or search for “Unassigned” to see if any existing icons may suit your needs. If you would like to proceed with one of the “unassigned” icons select the “Assign” ticket. Otherwise, you can submit a request for a new icon. Select from the ticket options here or check out the <a href="/iconography/app-icons/contribute">Contribute</a> page for more details and best practices.
                </p>
            }
            { type === 'icon' && <p className={paragraph}>
                It appears we don’t have an icon that matches your search. Try different search terms or submit an issue for a new icon. Select from the ticket options here or check out the <a href="/iconography/ui-icons/contribute">Contribute</a> page for more details and best practices.
                </p>
            }
            { type === 'pictograms' && <p className={paragraph}>
                It appears we don’t have an icon that matches your search. Try different search terms or submit an issue for a new icon. Select from the ticket options here or check out the <a href="/iconography/pictograms/contribute">Contribute</a> page for more details and best practices.
                </p>
            }
          </Column>
        </Row>
        <CardGroup className={cardMargin}>
          <MiniCard
            title={`${pageName} request: Single`}
            href={single}
            actionIcon="github"
          />
          <MiniCard
            title={`${pageName} request: Batch`}
            href={batch}
            actionIcon="github"
          />
          <MiniCard
            title={`${pageName} request: Update`}
            href={update}
            actionIcon="github"
          />
          {type === 'appIcon' && (
            <MiniCard
              title={`${pageName} request: Assign`}
              href={assign}
              actionIcon="github"
            />
          )}
        </CardGroup>
      </>
    )}
  </div>
);

export default NoResult;
