import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

const PALETTES = {
  rose: {
    10: {
      hex: '#fcf2ed',
      cmyk: 'c1 m4 y4 k0',
    },
    20: {
      hex: '#f9d9d1',
      cmyk: 'c1 m16 y13 k0',
    },
    30: {
      hex: '#f0b8a7',
      cmyk: 'c4 m32 y29 k0',
    },
    40: {
      hex: '#e99179',
      cmyk: 'c5 m51 y50 k0',
    },
    50: {
      hex: '#d37258',
      cmyk: 'c14 m66 y68 k1',
    },
    60: {
      hex: '#ab5638',
      cmyk: 'c24 m74 y84 k14',
    },
    70: {
      hex: '#853c27',
      cmyk: 'c31 m81 y88 k32',
    },
    80: {
      hex: '#622517',
      cmyk: 'c36 m85 y89 k52',
    },
    90: {
      hex: '#46170c',
      cmyk: 'c44 m82 y82 k68',
    },
    100: {
      hex: '#2a0d09',
      cmyk: 'c56 m75 y71 k80',
    },
  },
  almond: {
    10: {
      hex: '#f8f3ea',
      cmyk: 'c2 m3 y7 k0',
    },
    20: {
      hex: '#efdcc8',
      cmyk: 'c5 m12 y20 k0',
    },
    30: {
      hex: '#e1bd9f',
      cmyk: 'c11 m26 y37 k0',
    },
    40: {
      hex: '#d1a080',
      cmyk: 'c18 m39 y51 k1',
    },
    50: {
      hex: '#b88361',
      cmyk: 'c26 m50 y65 k5',
    },
    60: {
      hex: '#97633f',
      cmyk: 'c33 m61 y80 k19',
    },
    70: {
      hex: '#76472b',
      cmyk: 'c38 m69 y85 k36',
    },
    80: {
      hex: '#55301e',
      cmyk: 'c43 m72 y83 k56',
    },
    90: {
      hex: '#3a1e12',
      cmyk: 'c51 m74 y78 k72',
    },
    100: {
      hex: '#27120a',
      cmyk: 'c58 m72 y73 k80',
    },
  }
};
const CUTOFF_POINT_FOR_DARK_TEXT = 50;

const Swatch = ({ name, hex, txtcolor, value }) => (
  <div
    key={name}
    className={`${prefix}--swatch ${prefix}--type-body-long-01`}
    style={{ backgroundColor: hex, color: txtcolor }}>
    <span className={`${prefix}--swatch-name`}>{name}</span>
    <span className={`${prefix}--swatch-value`}>{value}</span>
  </div>
);

const hexToRgb = (hex) => {
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
    default:
      return colorObj[format];
  }
};

const SwatchPeoplePalette = ({ palette, format }) => {
  const paletteObj = PALETTES[palette];
  return (
    <div key={palette} className={`${prefix}--swatch-palette`}>
      {Object.keys(paletteObj)
        .reverse()
        .map((grade) => {
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
    </div>
  );
};

SwatchPeoplePalette.propTypes = {
  palette: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default SwatchPeoplePalette;
