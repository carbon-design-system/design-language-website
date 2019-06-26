import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

import { Launch20, ArrowRight24 } from '@carbon/icons-react';

const { prefix } = settings;

const HomepageTile = ({
  ratio,
  marginTop,
  theme,
  hoverDark,
  contentOnHover,
  backgroundColor,
  image,
  transparentImage,
  subtitle,
  title,
  identityIcon,
  actionIcon,
  link,
  target,
  children,
}) => {
  // const windowWidth = window.outerWidth;
  // remove/fix this - just testing
  const windowWidth = 1200;

  const calcRatio = ratioString => {
    switch (ratioString) {
      case '1:1':
        return '100%';
      case '2:1':
        return '50%';
      case '4:1':
        return '25%';
      case '6:1':
        return windowWidth > 1056 ? '16.67%' : '25%';
      case '1:2':
        return '200%';
      case '3:1':
        return '33.33%';
      case '3:2':
        return '66.66%';
      case '4:3':
        return '75%';
      case '16:9':
        return '56.25%';
      default:
        return '50%';
    }
  };

  const getActionIcon = type => {
    switch (type) {
      case 'resources':
        return <Launch20 aria-label="Open resource" />;
      case 'article':
        return <ArrowRight24 aria-label="Go to content" />;
      case 'no-icon':
        return null;
      default:
        return <ArrowRight24 aria-label="Go to content" />;
    }
  };

  const ratioStyle = {
    paddingBottom: calcRatio(ratio),
    marginTop: marginTop || 0,
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor || null,
    backgroundImage: image ? `url(${image})` : null,
  };

  const transparentImageStyle = {
    backgroundImage: transparentImage ? `url(${transparentImage})` : null,
  };

  return (
    <>
      {children ? (
        <div
          className={
            theme === 'dark'
              ? `${prefix}--homepage-idl-tile ${prefix}--homepage-idl-tile__dark`
              : `${prefix}--homepage-idl-tile`
          }
          style={ratioStyle}
          href={link}
          target={target}>
          <div
            className={`${prefix}--homepage-idl-tile-background`}
            style={backgroundStyle}
          />
          <div className={`${prefix}--homepage-idl-tile-nested-content`}>
            {children}
          </div>
        </div>
      ) : (
        <a
          className={
            theme === 'dark'
              ? `${prefix}--homepage-idl-tile ${prefix}--homepage-idl-tile__dark`
              : `${prefix}--homepage-idl-tile`
          }
          style={ratioStyle}
          href={link}
          target={target}>
          <div
            className={
              hoverDark
                ? `${prefix}--homepage-idl-tile-hover ${prefix}--homepage-idl-tile-hover__dark`
                : `${prefix}--homepage-idl-tile-hover`
            }
          />
          <div
            className={`${prefix}--homepage-idl-tile-background`}
            style={backgroundStyle}
          />
          <div
            className={
              contentOnHover
                ? `${prefix}--homepage-idl-tile-content ${prefix}--homepage-idl-tile-content-on-hover-only`
                : `${prefix}--homepage-idl-tile-content`
            }
            style={transparentImageStyle}>
            <div className={`${prefix}--homepage-idl-tile-title`}>
              <div className={`${prefix}--type-body-long-01`}>{subtitle}</div>
              <div className={`${prefix}--type-expressive-heading-03`}>
                {title}
              </div>
            </div>
            {identityIcon ? (
              <div className={`${prefix}--homepage-idl-tile-identity-icon`}>
                <img src={identityIcon} alt="identity-icon" />
              </div>
            ) : null}
            <div
              className={`${prefix}--homepage-idl-tile-action-icon`}
              style={{ fill: theme === 'dark' ? '#ffffff' : '#282828' }}>
              {getActionIcon(actionIcon)}
            </div>
          </div>
        </a>
      )}
    </>
  );
};

HomepageTile.propTypes = {
  ratio: PropTypes.string.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actionIcon: PropTypes.string,
  identityIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  transparentImage: PropTypes.string,
  hoverDark: PropTypes.bool,
  contentOnHover: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node,
};

export default HomepageTile;
