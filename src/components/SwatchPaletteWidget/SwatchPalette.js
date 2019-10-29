import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import {
  black,
  blue,
  coolGray,
  warmGray,
  white,
  yellow,
  magenta,
  orange,
  teal,
  purple,
  red,
  green,
  gray,
  cyan,
} from '@carbon/colors';
const convert = require('color-convert');

const { prefix } = settings;

const convertToCmyk = hex => {
  //converts hex to cmyk => returns num array
  const convertedHex = convert.hex.cmyk(hex);

  // converts cmyk array to one string
  return [
    `c${convertedHex[0]}`,
    `m${convertedHex[1]}`,
    `y${convertedHex[2]}`,
    `k${convertedHex[3]}`,
  ].join(' ');
};

const PALETTES = {
  black: {
    '100': {
      hex: black,
      pms: 'Black 6',
      cmyk: convertToCmyk(black),
    },
  },
  blue: {
    '10': {
      hex: blue[10],
      pms: '657',
      cmyk: convertToCmyk(blue[10]),
    },
    '20': {
      hex: blue[20],
      pms: '2707',
      cmyk: convertToCmyk(blue[20]),
    },
    '30': {
      hex: blue[30],
      pms: '2128',
      cmyk: convertToCmyk(blue[30]),
    },
    '40': {
      hex: blue[40],
      pms: '2381',
      cmyk: convertToCmyk(blue[40]),
    },
    '50': {
      hex: blue[50],
      pms: '2727',
      cmyk: convertToCmyk(blue[50]),
    },
    '60': {
      hex: blue[60],
      pms: '2132',
      cmyk: convertToCmyk(blue[60]),
    },
    '70': {
      hex: blue[70],
      pms: 'Dark Blue',
      cmyk: convertToCmyk(blue[70]),
    },
    '80': {
      hex: blue[80],
      pms: 'Reflex Blue',
      cmyk: convertToCmyk(blue[80]),
    },
    '90': {
      hex: blue[90],
      pms: '280',
      cmyk: convertToCmyk(blue[90]),
    },
    '100': {
      hex: blue[100],
      pms: '282',
      cmyk: convertToCmyk(blue[100]),
    },
  },
  'cool gray': {
    '10': {
      hex: coolGray[10],
      pms: '656',
      cmyk: convertToCmyk(coolGray[10]),
    },
    '20': {
      hex: coolGray[20],
      pms: '650',
      cmyk: convertToCmyk(coolGray[20]),
    },
    '30': {
      hex: coolGray[30],
      pms: '537',
      cmyk: convertToCmyk(coolGray[30]),
    },
    '40': {
      hex: coolGray[40],
      pms: '2162',
      cmyk: convertToCmyk(coolGray[40]),
    },
    '50': {
      hex: coolGray[50],
      pms: '2163',
      cmyk: convertToCmyk(coolGray[50]),
    },
    '60': {
      hex: coolGray[60],
      pms: '2164',
      cmyk: convertToCmyk(coolGray[60]),
    },
    '70': {
      hex: coolGray[70],
      pms: '2165',
      cmyk: convertToCmyk(coolGray[70]),
    },
    '80': {
      hex: coolGray[80],
      pms: '2166',
      cmyk: convertToCmyk(coolGray[80]),
    },
    '90': {
      hex: coolGray[90],
      pms: '7545',
      cmyk: convertToCmyk(coolGray[90]),
    },
    '100': {
      hex: coolGray[100],
      pms: '7546',
      cmyk: convertToCmyk(coolGray[100]),
    },
  },
  cyan: {
    '10': {
      hex: cyan[10],
      pms: '9421',
      cmyk: convertToCmyk(cyan[10]),
    },
    '20': {
      hex: cyan[20],
      pms: '2905',
      cmyk: convertToCmyk(cyan[20]),
    },
    '30': {
      hex: cyan[30],
      pms: '2190',
      cmyk: convertToCmyk(cyan[30]),
    },
    '40': {
      hex: cyan[40],
      pms: '299',
      cmyk: convertToCmyk(cyan[40]),
    },
    '50': {
      hex: cyan[50],
      pms: '2192',
      cmyk: convertToCmyk(cyan[50]),
    },
    '60': {
      hex: cyan[60],
      pms: '2194',
      cmyk: convertToCmyk(cyan[60]),
    },
    '70': {
      hex: cyan[70],
      pms: '2195',
      cmyk: convertToCmyk(cyan[70]),
    },
    '80': {
      hex: cyan[80],
      pms: '300',
      cmyk: convertToCmyk(cyan[80]),
    },
    '90': {
      hex: cyan[90],
      pms: '301',
      cmyk: convertToCmyk(cyan[90]),
    },
    '100': {
      hex: cyan[100],
      pms: '302',
      cmyk: convertToCmyk(cyan[100]),
    },
  },
  gray: {
    '10': {
      hex: gray[10],
      pms: 'Cool Gray 1',
      cmyk: convertToCmyk(gray[10]),
    },
    '20': {
      hex: gray[20],
      pms: 'Cool Gray 2',
      cmyk: convertToCmyk(gray[20]),
    },
    '30': {
      hex: gray[30],
      pms: 'Cool Gray 3',
      cmyk: convertToCmyk(gray[30]),
    },
    '40': {
      hex: gray[40],
      pms: 'Cool Gray 4',
      cmyk: convertToCmyk(gray[40]),
    },
    '50': {
      hex: gray[50],
      pms: 'Cool Gray 6',
      cmyk: convertToCmyk(gray[50]),
    },
    '60': {
      hex: gray[60],
      pms: 'Cool Gray 7',
      cmyk: convertToCmyk(gray[60]),
    },
    '70': {
      hex: gray[70],
      pms: 'Cool Gray 8',
      cmyk: convertToCmyk(gray[70]),
    },
    '80': {
      hex: gray[80],
      pms: 'Cool Gray 9',
      cmyk: convertToCmyk(gray[80]),
    },
    '90': {
      hex: gray[90],
      pms: 'Cool Gray 10',
      cmyk: convertToCmyk(gray[90]),
    },
    '100': {
      hex: gray[100],
      pms: 'Cool Gray 11',
      cmyk: convertToCmyk(gray[100]),
    },
  },
  green: {
    '10': {
      hex: green[10],
      pms: '9540',
      cmyk: convertToCmyk(green[10]),
    },
    '20': {
      hex: green[20],
      pms: '2253',
      cmyk: convertToCmyk(green[20]),
    },
    '30': {
      hex: green[30],
      pms: '352',
      cmyk: convertToCmyk(green[30]),
    },
    '40': {
      hex: green[40],
      pms: '7479',
      cmyk: convertToCmyk(green[40]),
    },
    '50': {
      hex: green[50],
      pms: '7481',
      cmyk: convertToCmyk(green[50]),
    },
    '60': {
      hex: green[60],
      pms: '7482',
      cmyk: convertToCmyk(green[60]),
    },
    '70': {
      hex: green[70],
      pms: '7733',
      cmyk: convertToCmyk(green[70]),
    },
    '80': {
      hex: green[80],
      pms: '7734',
      cmyk: convertToCmyk(green[80]),
    },
    '90': {
      hex: green[90],
      pms: '7484',
      cmyk: convertToCmyk(green[90]),
    },
    '100': {
      hex: green[100],
      pms: '627',
      cmyk: convertToCmyk(green[100]),
    },
  },
  magenta: {
    '10': {
      hex: magenta[10],
      pms: '2050',
      cmyk: convertToCmyk(magenta[10]),
    },
    '20': {
      hex: magenta[20],
      pms: '2036',
      cmyk: convertToCmyk(magenta[20]),
    },
    '30': {
      hex: magenta[30],
      pms: '1905',
      cmyk: convertToCmyk(magenta[30]),
    },
    '40': {
      hex: magenta[40],
      pms: '190',
      cmyk: convertToCmyk(magenta[40]),
    },
    '50': {
      hex: magenta[50],
      pms: '1915',
      cmyk: convertToCmyk(magenta[50]),
    },
    '60': {
      hex: magenta[60],
      pms: '214',
      cmyk: convertToCmyk(magenta[60]),
    },
    '70': {
      hex: magenta[70],
      pms: '227',
      cmyk: convertToCmyk(magenta[70]),
    },
    '80': {
      hex: magenta[80],
      pms: '228',
      cmyk: convertToCmyk(magenta[80]),
    },
    '90': {
      hex: magenta[90],
      pms: '7651',
      cmyk: convertToCmyk(magenta[90]),
    },
    '100': {
      hex: magenta[100],
      pms: '518',
      cmyk: convertToCmyk(magenta[100]),
    },
  },
  orange: {
    '40': {
      hex: orange,
      pms: '2655',
      cmyk: convertToCmyk(orange),
    },
  },
  purple: {
    '10': {
      hex: purple[10],
      pms: '9023',
      cmyk: convertToCmyk(purple[10]),
    },
    '20': {
      hex: purple[20],
      pms: '9361',
      cmyk: convertToCmyk(purple[20]),
    },
    '30': {
      hex: purple[30],
      pms: '2635',
      cmyk: convertToCmyk(purple[30]),
    },
    '40': {
      hex: purple[40],
      pms: '2645',
      cmyk: convertToCmyk(purple[40]),
    },
    '50': {
      hex: purple[50],
      pms: '2655',
      cmyk: convertToCmyk(purple[50]),
    },
    '60': {
      hex: purple[60],
      pms: '2665',
      cmyk: convertToCmyk(purple[60]),
    },
    '70': {
      hex: purple[70],
      pms: '2090',
      cmyk: convertToCmyk(purple[70]),
    },
    '80': {
      hex: purple[80],
      pms: '2091',
      cmyk: convertToCmyk(purple[80]),
    },
    '90': {
      hex: purple[90],
      pms: '2685',
      cmyk: convertToCmyk(purple[90]),
    },
    '100': {
      hex: purple[100],
      pms: '275',
      cmyk: convertToCmyk(purple[100]),
    },
  },
  red: {
    '10': {
      hex: red[10],
      pms: '706',
      cmyk: convertToCmyk(red[10]),
    },
    '20': {
      hex: red[20],
      pms: '1767',
      cmyk: convertToCmyk(red[20]),
    },
    '30': {
      hex: red[30],
      pms: '1775',
      cmyk: convertToCmyk(red[30]),
    },
    '40': {
      hex: red[40],
      pms: '1777',
      cmyk: convertToCmyk(red[40]),
    },
    '50': {
      hex: red[50],
      pms: '1787',
      cmyk: convertToCmyk(red[50]),
    },
    '60': {
      hex: red[60],
      pms: '185',
      cmyk: convertToCmyk(red[60]),
    },
    '70': {
      hex: red[70],
      pms: '200',
      cmyk: convertToCmyk(red[70]),
    },
    '80': {
      hex: red[80],
      pms: '201',
      cmyk: convertToCmyk(red[80]),
    },
    '90': {
      hex: red[90],
      pms: '188',
      cmyk: convertToCmyk(red[90]),
    },
    '100': {
      hex: red[100],
      pms: '504',
      cmyk: convertToCmyk(red[100]),
    },
  },
  teal: {
    '10': {
      hex: teal[10],
      pms: '9040',
      cmyk: convertToCmyk(teal[10]),
    },
    '20': {
      hex: teal[20],
      pms: '317',
      cmyk: convertToCmyk(teal[20]),
    },
    '30': {
      hex: teal[30],
      pms: '7471',
      cmyk: convertToCmyk(teal[30]),
    },
    '40': {
      hex: teal[40],
      pms: '3252',
      cmyk: convertToCmyk(teal[40]),
    },
    '50': {
      hex: teal[50],
      pms: '326',
      cmyk: convertToCmyk(teal[50]),
    },
    '60': {
      hex: teal[60],
      pms: '7716',
      cmyk: convertToCmyk(teal[60]),
    },
    '70': {
      hex: teal[70],
      pms: '7717',
      cmyk: convertToCmyk(teal[70]),
    },
    '80': {
      hex: teal[80],
      pms: '2238',
      cmyk: convertToCmyk(teal[80]),
    },
    '90': {
      hex: teal[90],
      pms: '3165',
      cmyk: convertToCmyk(teal[90]),
    },
    '100': {
      hex: teal[100],
      pms: '2217',
      cmyk: convertToCmyk(teal[100]),
    },
  },
  'warm gray': {
    '10': {
      hex: warmGray[10],
      pms: 'Warm Gray 1',
      cmyk: convertToCmyk(warmGray[10]),
    },
    '20': {
      hex: warmGray[20],
      pms: 'Warm Gray 2',
      cmyk: convertToCmyk(warmGray[20]),
    },
    '30': {
      hex: warmGray[30],
      pms: 'Warm Gray 3',
      cmyk: convertToCmyk(warmGray[30]),
    },
    '40': {
      hex: warmGray[40],
      pms: 'Warm Gray 4',
      cmyk: convertToCmyk(warmGray[40]),
    },
    '50': {
      hex: warmGray[50],
      pms: 'Warm Gray 6',
      cmyk: convertToCmyk(warmGray[50]),
    },
    '60': {
      hex: warmGray[60],
      pms: 'Warm Gray 7',
      cmyk: convertToCmyk(warmGray[60]),
    },
    '70': {
      hex: warmGray[70],
      pms: 'Warm Gray 8',
      cmyk: convertToCmyk(warmGray[70]),
    },
    '80': {
      hex: warmGray[80],
      pms: 'Warm Gray 9',
      cmyk: convertToCmyk(warmGray[80]),
    },
    '90': {
      hex: warmGray[90],
      pms: 'Warm Gray 11',
      cmyk: convertToCmyk(warmGray[90]),
    },
    '100': {
      hex: warmGray[100],
      pms: '438',
      cmyk: convertToCmyk(warmGray[100]),
    },
  },
  white: {
    '0': {
      hex: white,
      pms: '–',
      cmyk: convertToCmyk(white),
    },
  },
  yellow: {
    '20': {
      hex: yellow,
      pms: '2645',
      cmyk: convertToCmyk(yellow),
    },
  },
};
const WHITE = PALETTES.white[0];
const BLACK = PALETTES.black[100];
const CUTOFF_POINT_FOR_DARK_TEXT = 50;
const ALERTS = {
  alert: {
    '50': PALETTES.green[50],
    '20': PALETTES.yellow[20],
    '40': PALETTES.orange[40],
    '60': PALETTES.red[60],
  },
};

const Swatch = ({ name, hex, txtcolor, value }) => (
  <div
    key={name}
    className={`${prefix}--swatch ${prefix}--type-body-long-01`}
    style={{ backgroundColor: hex, color: txtcolor }}>
    <span className={`${prefix}--swatch-name`}>{name}</span>
    <span className={`${prefix}--swatch-value`}>{value}</span>
  </div>
);

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const formatValueString = (colorObj, format) => {
  switch (format) {
    case 'rgb':
      return (
        `r${hexToRgb(colorObj.hex).r}` +
        ` g${hexToRgb(colorObj.hex).g}` +
        ` b${hexToRgb(colorObj.hex).b}`
      );
    case 'hex':
    case 'cmyk':
      return colorObj[format].replace(/^#/, '').toLowerCase();
    case 'pms':
      return colorObj[format];
    default:
      return colorObj[format];
  }
};

const SwatchPalette = ({ palette, format, showBW }) => {
  const BlackSwatch = showBW ? (
    <Swatch
      name="black"
      hex={BLACK.hex}
      txtcolor={WHITE.hex}
      value={formatValueString(BLACK, format)}
    />
  ) : null;
  const WhiteSwatch = showBW ? (
    <Swatch
      name="white"
      hex={WHITE.hex}
      txtcolor={BLACK.hex}
      value={formatValueString(WHITE, format)}
    />
  ) : null;
  const paletteObj = palette !== 'alert' ? PALETTES[palette] : ALERTS[palette];
  return (
    <div key={palette} className={`${prefix}--swatch-palette`}>
      {BlackSwatch}
      {Object.keys(paletteObj)
        .reverse()
        .map(grade => {
          const { hex } = paletteObj[grade];
          const txtcolor =
            parseInt(grade) > CUTOFF_POINT_FOR_DARK_TEXT
              ? '#ffffff'
              : '#000000';
          const formatStr = formatValueString(paletteObj[grade], format);
          return (
            <Swatch
              key={grade}
              name={`${palette} ${grade}`}
              hex={hex}
              txtcolor={txtcolor}
              value={formatStr}
            />
          );
        })}
      {WhiteSwatch}
    </div>
  );
};

SwatchPalette.propTypes = {
  palette: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  showBW: PropTypes.bool,
};

export default SwatchPalette;
