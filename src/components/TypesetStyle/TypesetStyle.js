/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';
import { baseFontSize, breakpoints as carbonBreakpoints } from '@carbon/layout';
import { findLastIndex, values } from 'lodash';
import Slider from 'carbon-components-react/lib/components/Slider';

import TypesetExample from '../TypesetExample';

import typeScale from './typeScale';
import typeSets from './typeSets';

const { prefix } = settings;

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const indexOfCurrentBreakpoint = (viewportWidth) =>
  findLastIndex(values(breakpoints), (width) => viewportWidth >= width);

const nextLargerBreakpointPx = (viewportWidth) =>
  values(breakpoints)[indexOfCurrentBreakpoint(viewportWidth) + 1];

const isWithinBreakpoint = (viewportWidth, currentBreakpoint) => {
  if (viewportWidth === currentBreakpoint) return true;
  return (
    viewportWidth >= currentBreakpoint &&
    viewportWidth < nextLargerBreakpointPx(currentBreakpoint)
  );
};

class TypesetStyle extends React.Component {
  state = {
    simulatedScreenWidth: 1056,
  };

  toggleBreakpoint = (simulatedScreenWidth) => {
    this.setState({ simulatedScreenWidth });
  };

  getButtons = () =>
    Object.keys(breakpoints).map((breakpointName) => (
      <button
        type="button"
        className={`${prefix}--typeset-style-button ${prefix}--type-body-long-01 ${
          isWithinBreakpoint(
            this.state.simulatedScreenWidth,
            breakpoints[breakpointName]
          )
            ? 'selected'
            : ''
        }`}
        value={breakpoints[breakpointName]}
        selected={isWithinBreakpoint(
          this.state.simulatedScreenWidth,
          breakpoints[breakpointName]
        )}
        onClick={(e) => this.toggleBreakpoint(Number(e.target.value))}
        key={`breakpoint-tab${breakpointName}`}>
        {breakpointName}
      </button>
    ));

  render() {
    const { breakpointControls, typesets } = this.props;

    const typesetStyleStickyClassnames = classnames(
      `${prefix}--typeset-style-controls-sticky`,
      `${prefix}--row`,
      {
        [`${prefix}--typeset-style-controls-sticky-stuck`]: this.state.stuck,
      }
    );

    return (
      <div className={`${prefix}--typeset-style-container`}>
        <div className="typestyle-title__container bx--row"></div>
        {breakpointControls && (
          <div className={typesetStyleStickyClassnames}>
            <div className={`${prefix}--typeset-style-breakpoint-controls`}>
              <span
                className={`${prefix}--type-body-long-01 ibm-padding--horizontal`}
                style={{ marginBottom: 0 }}>
                Breakpoints
              </span>
              <div
                className={`${prefix}--typeset-style-button-controls-container`}>
                {this.getButtons()}
              </div>
            </div>
            <div className={`${prefix}--typeset-style-screen-controls`}>
              <span
                className={`${prefix}--type-body-long-01 ${prefix}--typeset-style-screen-width-label`}
                style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                Screen width
              </span>
              <Slider
                min={breakpoints.sm}
                max={breakpoints.max}
                value={this.state.simulatedScreenWidth}
                onChange={(e) => this.toggleBreakpoint(e.value)}
                hideTextInput
              />
              <label
                className={`${prefix}--typeset-style-screen-label ${prefix}--type-body-long-01`}
                htmlFor="screenWidthInput">
                {this.state.simulatedScreenWidth}
              </label>
            </div>
          </div>
        )}
        <div>
          {typesets
            .replace(', ', ',')
            .split(',')
            .map((typeset, i) => (
              <>
                {/* <h3 className="typeset-title">
                  {typeset.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}
                </h3> */}
                <TypesetExample
                  key={i}
                  simulatedScreenWidth={this.state.simulatedScreenWidth}
                  name={typeset}
                  typeSet={typeSets[typeset]}
                  typeScale={typeScale}
                />
              </>
            ))}
        </div>
      </div>
    );
  }
}

export default TypesetStyle;

// these props are passed onto the sticky container
TypesetStyle.propTypes = {
  // show / hide breakpoint controls
  breakpointControls: PropTypes.bool,

  // comma separated list of typesets to display
  typesets: PropTypes.string,
};
