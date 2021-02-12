import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { Launch20, ArrowRight20, Error20 } from '@carbon/icons-react';
import { baseFontSize, breakpoints as carbonBreakpoints } from '@carbon/layout';

const { prefix } = settings;
const breakpoints = {
  default: 0,
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};
const HomepageTile = ({
  disabled,
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
  const [width, setWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth
  );
  const [showTile, setShowTile] = useState(false);
  const handleResize = () => setWidth(window.innerWidth);
  useLayoutEffect(() => {
    setWidth(typeof window !== 'undefined' && window.innerWidth);
    if (!width) {
      return;
    }
    setShowTile(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  const getBreakpoints = ({ viewportWidth, points }) =>
    Object.entries(points).reduce(
      (breakpointNames, [breakpointName, breakpointValue]) => {
        if (viewportWidth > breakpointValue) {
          return [...breakpointNames, breakpointName];
        }
        return breakpointNames;
      },
      ['default']
    );
  const validBreakpoints = getBreakpoints({
    viewportWidth: width,
    points: breakpoints,
  });

  // const windowWidth = window.outerWidth;
  // remove/fix this - just testing
  const windowWidth = 1200;
  const ratioReducer = ratioString => {
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
  const calcRatio = ratioInput => {
    if (typeof ratioInput === 'object') {
      // return largest valid breakpoint ratio provided in ratio object
      const currentRatio = validBreakpoints.reduce(
        (currentValidRatio, currentBreakpoint) =>
          ratio[currentBreakpoint] || currentValidRatio
      );
      return ratioReducer(currentRatio);
    }
    return ratioReducer(ratioInput);
  };

  const getActionIcon = type => {
    switch (type) {
      case 'resources':
        return <Launch20 aria-label="Open resource" />;
      case 'disabled':
        return <Error20 aria-label="disabled" />;
      case 'article':
        return <ArrowRight20 aria-label="Go to content" />;
      case 'no-icon':
        return null;
      default:
        return <ArrowRight20 aria-label="Go to content" />;
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
    showTile && (
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
          <Link
            className={
              theme === 'dark'
                ? `${prefix}--homepage-idl-tile ${prefix}--homepage-idl-tile__dark`
                : `${prefix}--homepage-idl-tile`
            }
            style={ratioStyle}
            to={link}
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
              <div
                className={
                  disabled
                    ? `${prefix}--homepage-idl-tile-title ${prefix}--homepage-idl-tile-title--disabled`
                    : `${prefix}--homepage-idl-tile-title`
                }>
                <div className={`${prefix}--type-body-long-01`}>{subtitle}</div>
                <div className={`${prefix}--image-card__title`}>{title}</div>
              </div>
              {identityIcon ? (
                <div className={`${prefix}--homepage-idl-tile-identity-icon`}>
                  <img src={identityIcon} alt="identity-icon" />
                </div>
              ) : null}
              <div
                className={
                  disabled
                    ? `${prefix}--homepage-idl-tile-action-icon ${prefix}--homepage-idl-tile-action-icon--disabled`
                    : `${prefix}--homepage-idl-tile-action-icon`
                }
                style={{ fill: theme === 'dark' ? '#ffffff' : '#282828' }}>
                {getActionIcon(actionIcon)}
              </div>
            </div>
          </Link>
        )}
      </>
    )
  );
};

HomepageTile.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
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
  disabled: PropTypes.bool,
};

export default HomepageTile;
