import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Tag, TooltipIcon } from 'carbon-components-react';
import './overview-card.scss';
import './overview-card-group.scss';
import { Launch16 } from '@carbon/icons-react';

export default class OverviewCard extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Add tag
     */
    tag: PropTypes.string,

    /**
     * Set url for card
     */
    href: PropTypes.string,

    /**
     * Title
     */
    title: PropTypes.string,

    /**
     * Use for disabled card
     */
    disabled: PropTypes.bool,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,

    /**
     * Tooltip text
     */
    tooltipText: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    tooltipText: 'Carbon implementation',
  };

  render() {
    const {
      children,
      href,
      title,
      disabled,
      className,
      tag,
      tooltipText,
    } = this.props;

    let isLink;
    if (href !== undefined) {
      // Determines if the link is another page in this repo (will have a relative path === "/")
      // or from an external site (will start with "h" from "https" therefore first char !== "/")
      isLink = href.charAt(0) === '/';
    }

    const OverviewCardClassNames = classnames([`overview-card`], {
      [className]: className,
      [`overview-card--disabled`]: disabled,
    });

    const carbonTileclassNames = classnames([`bx--tile`], {
      [`bx--tile--clickable`]: isLink !== false,
      [`overview-card--outgoing`]: isLink === false,
    });

    const aspectRatioClassNames = classnames([`bx--aspect-ratio--object`], {
      [`aspect-ratio__has-tooltip`]: isLink === false,
    });

    const cardContent = (
      <>
        <h4 className="overview-card__title">{title}</h4>
        {tag && <Tag type="teal">{tag}</Tag>}
        <div className="overview-card__img">{children}</div>
        {isLink === false && (
          <a className="overview-card__link" href={href}>
            <TooltipIcon
              className="overview-card__tooltip"
              direction="top"
              align="end"
              tooltipText={tooltipText}>
              <Launch16 />
            </TooltipIcon>
          </a>
        )}
      </>
    );

    let cardContainer;
    if (isLink === true) {
      cardContainer = (
        <Link to={href} className={carbonTileclassNames}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = <div className={carbonTileclassNames}>{cardContent}</div>;
    }

    return (
      <div className={OverviewCardClassNames}>
        <div className="bx--aspect-ratio bx--aspect-ratio--1x1">
          <div className={aspectRatioClassNames}>{cardContainer}</div>
        </div>
      </div>
    );
  }
}
