import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import { settings } from 'carbon-components';
import SwatchPeoplePalette from './SwatchPeoplePalette';

const { prefix } = settings;

const colorFormats = [
  {
    label: 'HEX',
    value: 'hex',
  },
  {
    label: 'RGB',
    value: 'rgb',
  },
  {
    label: 'CMYK',
    value: 'cmyk',
  },
];

export default function SwatchPeoplePaletteWidget(props) {
  const [format, setFormat] = useState('hex');
  const switchFormat = ({ index }) => setFormat(colorFormats[index].value);

  // palettes is an array of colors to be controlled by ContentSwitcher (see PALETTES object in SwatchPeoplePalette component)
  // add '-bw' to color name to get black and white bars appearing at top and bottom of color palette
  // top value sets top of sticky switcher buttons (only required if not zero)
  const { palettes, top } = props;
  return (
    <div className={`${prefix}--swatch-palettes-container`}>
      <div className="sticky-container" style={{ top }}>
        <div className={`${prefix}--row`} style={{ paddingTop: ".5rem" }}>
          <div
            className={`${prefix}--col-lg-4 ${prefix}--col-md-4 ${prefix}--col-no-gutter`}>
            <ContentSwitcher
              className={`${prefix}--swatch-palettes__format-switcher`}
              onChange={switchFormat}>
              {colorFormats.map(({ value, label }) => (
                <Switch key={value} name={value} text={label} />
              ))}
            </ContentSwitcher>
          </div>
        </div>
      </div>
      {palettes.map((palette, i) => (
        <div key={i} className={`${prefix}--row`}>
          <div
            className={`${prefix}--col-lg-12 ${prefix}--col-md-8 ${prefix}--col-no-gutter ${prefix}--swatch-palettes`}>
            {palette.map(color => {
              const col = color.split('-');
              const showBW = col[1] === 'bw';
              return (
                <SwatchPeoplePalette
                  key={col[0]}
                  palette={col[0]}
                  format={format}
                  showBW={showBW}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

SwatchPeoplePaletteWidget.propTypes = {
  palettes: PropTypes.array.isRequired,
  top: PropTypes.string,
};
