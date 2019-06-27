import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { findLastIndex, values } from 'lodash';

import InputRange from './InputRange';
import TypesetExample from './TypesetExample';

import { typeScale, typeSets, breakpoints } from './data';

const { prefix } = settings;

const indexOfCurrentBreakpoint = viewportWidth =>
  findLastIndex(values(breakpoints), width => viewportWidth >= width);

const nextLargerBreakpointPx = viewportWidth =>
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
    tab: 0,
  };

  toggleBreakpoint = e => {
    this.setState({ simulatedScreenWidth: Number(e.target.value) });
  };

  toggleSet = value => {
    this.setState({ tab: value });
  };

  getButtons = () =>
    Object.keys(breakpoints).map(breakpointName => (
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
        onClick={this.toggleBreakpoint}
        key={`breakpoint-tab${breakpointName}`}>
        {breakpointName}
      </button>
    ));

  render() {
    const { breakpointControls, title, typesets } = this.props;

    return (
      <div className={`${prefix}--typeset-style-container`}>
        <div>
          {breakpointControls && (
            <>
              <div
                className={`${prefix}--typeset-style-title-shiv ${prefix}--row`}></div>
              <div
                className={`${prefix}--typeset-style-controls-sticky ${prefix}--row`}>
                <div
                  className={`${prefix}--typeset-style-breakpoint-controls ibm--col-md-5 ibm--col-lg-8`}>
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
                <div
                  className={`${prefix}--typeset-style-screen-controls ibm-padding--horizontal ibm--col-md-3 ibm--col-lg-8`}>
                  <span
                    className={`${prefix}--type-body-long-01 ${prefix}--typeset-style-screen-width-label`}
                    style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                    Screen width
                  </span>
                  <InputRange
                    min={breakpoints.sm}
                    max={breakpoints.max}
                    value={this.state.simulatedScreenWidth}
                    onChange={this.toggleBreakpoint}
                  />
                  <label
                    className={`${prefix}--typeset-style-screen-label ${prefix}--type-body-long-01`}
                    htmlFor="screenWidthInput">
                    {this.state.simulatedScreenWidth}
                  </label>
                </div>
              </div>
            </>
          )}
          <div
            className={`${prefix}--typeset-style-title-shiv ${prefix}--row`}></div>
          <div
            className={`${prefix}--typeset-style-group-title-container ${prefix}--row`}>
            <span className={`${prefix}--type-heading-02 ibm-type-semibold`}>
              {title}
            </span>
          </div>
        </div>
        <div>
          {typesets.map((typeset, i) => (
            <TypesetExample
              key={i}
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name={typeset}
              typeSet={typeSets[typeset]}
              typeScale={typeScale}
            />
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

  // type header
  title: PropTypes.string,

  // comma separated list of typesets to display
  typesets: PropTypes.string,
};
