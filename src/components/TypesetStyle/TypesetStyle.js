/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';
import { baseFontSize, breakpoints as carbonBreakpoints } from '@carbon/layout';
import { findLastIndex, values } from 'lodash';
import Slider from 'carbon-components-react/lib/components/Slider';

import TypesetExample from '../TypesetExample';

const { prefix } = settings;

const typeScale = {
  'caption-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'label-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'helper-text-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-style': 'italic',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },

  'body-short-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'body-short-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    },
  },
  'body-long-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.16,
    },
  },
  'body-long-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.5,
      'letter-spacing': 0,
    },
  },
  'code-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Mono',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'code-02': {
    sm: {
      step: 1,
      font: 'IBM Plex Mono',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.32,
    },
  },
  'heading-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'heading-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    },
  },
  'productive-heading-03': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
  },
  'productive-heading-04': {
    sm: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
  },
  'productive-heading-05': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },

  'expressive-heading-04': {
    sm: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    md: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    lg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },

  'expressive-heading-05': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      step: 9,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      step: 11,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'expressive-paragraph-01': {
    sm: {
      step: 6,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    md: {
      step: 6,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    lg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-01': {
    sm: {
      step: 5,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    md: {
      step: 5,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    lg: {
      step: 6,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    xlg: {
      step: 7,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-02': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      step: 9,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      step: 10,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      step: 11,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'display-01': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 12,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 15,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-02': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 12,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 15,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-03': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 14,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 17,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': '-0.64',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 20,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': '-0.64',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 23,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': '-0.96',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-04': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 14,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 17,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': -0.64,
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 20,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': -0.64,
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 23,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': -0.96,
      warning: 'Never use this style as the main headline',
    },
  },
};

const typeSets = {
  supportingStyle: [
    {
      description:
        'This is for inline code snippets and smaller code elements.',
      version: 'mono',
      key: 'code-01',
      name: 'code-01',
    },
    {
      description: 'This is for large code snippets and larger code elements.',
      version: 'mono',
      key: 'code-02',
      name: 'code-02',
    },
    {
      description:
        'This is for captions or legal content in a layout—not for body copy.',
      key: 'caption-01',
      name: 'caption-01',
    },
    {
      description:
        'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-01',
      name: 'helper-text-01',
    },
  ],
  supportingStyles: [
    {
      description:
        'This is for inline code snippets and smaller code elements.',
      version: 'mono',
      key: 'code-01',
      name: 'code-01',
    },
    {
      description: 'This is for large code snippets and larger code elements.',
      version: 'mono',
      key: 'code-02',
      name: 'code-02',
    },
    {
      description: 'This is for field labels in components and error messages.',
      key: 'label-01',
      name: 'label-01',
    },
    {
      description:
        'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-01',
      name: 'helper-text-01',
    },
  ],
  body: [
    {
      description:
        'This is for short paragraphs with no more than four lines and is commonly used in components.',
      key: 'body-short-01',
      name: 'body-short-01',
    },
    {
      description:
        'This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components such as accordion or structured list. Always left-align this type; never center it.',
      key: 'body-long-01',
      name: 'body-long-01',
    },
    {
      description:
        'This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts.',
      key: 'body-short-02',
      name: 'body-short-02',
    },
    {
      description:
        'This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. Always left-align type; never center it.',
      key: 'body-long-02',
      name: 'body-long-02',
    },
  ],
  fixedHeadings: [
    {
      description: 'This is for component and layout headings.',
      key: 'heading-01',
      name: 'heading-01',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'heading-02',
      name: 'heading-02',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'productive-heading-03',
      name: 'productive-heading-03',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-04',
      name: 'productive-heading-04',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-05',
      name: 'productive-heading-05',
    },
  ],
  fixedHeading: [
    {
      description: 'This is for component and layout headings.',
      key: 'heading-01',
      name: 'heading-01',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'heading-02',
      name: 'heading-02',
    },
  ],
  fluidHeadings: [
    {
      description: 'Heading style',
      key: 'expressive-heading-04',
      name: 'expressive-heading-04',
    },
    {
      description: 'Heading style',
      key: 'expressive-heading-05',
      name: 'expressive-heading-05',
    },
  ],
  FluidParagraphsAndQuotes: [
    {
      description: 'Paragraph',
      key: 'expressive-paragraph-01',
      name: 'expressive-paragraph-01',
    },
    {
      description: '“Quote.”',
      key: 'quotation-01',
      name: 'quotation-01',
    },
    {
      description: '“Quote.”',
      key: 'quotation-02',
      name: 'quotation-02',
    },
  ],
  fluidDisplay: [
    {
      description: 'Display',
      key: 'display-01',
      name: 'display-01',
    },
    {
      description: 'Display',
      key: 'display-02',
      name: 'display-02',
    },
    {
      description: 'Display',
      key: 'display-03',
      name: 'display-03',
    },
    {
      description: 'Display',
      key: 'display-04',
      name: 'display-04',
    },
  ],
};

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

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
  };

  toggleBreakpoint = simulatedScreenWidth => {
    this.setState({ simulatedScreenWidth });
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
        onClick={e => this.toggleBreakpoint(Number(e.target.value))}
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
        <div className="typestyle-title__container bx--row">
          <div className="typestyle-title">{this.props.title}</div>
        </div>
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
                onChange={e => this.toggleBreakpoint(e.value)}
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
