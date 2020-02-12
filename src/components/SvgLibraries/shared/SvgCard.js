/* eslint-disable camelcase */
import React, { useState } from 'react';
import { pascal } from 'change-case';
import { Menu, MenuItem } from './Menu';
import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const SvgCard = ({ icon, ...rest }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const copyHandler = () => {
    alert('You copied an icon');
  };

  const downloadHandler = () => {
    alert('You downloaded an icon');
  };

  return (
    <li className={svgCard}>
      <div className={svgCardInside}>
        <span className={triggerText}>{icon.friendly_name}</span>
        <Menu expanded={menuExpanded} setExpanded={setMenuExpanded}>
          <MenuItem onClick={copyHandler}>Copy component</MenuItem>
          <MenuItem onClick={downloadHandler}>Download SVG</MenuItem>
        </Menu>
        <div className={flexContainer}>
          {icon.Component ? (
            <icon.Component {...rest}>
              <title>{icon.friendly_name}</title>
            </icon.Component>
          ) : (
            <p>Error: no component found for {pascal(icon.friendly_name)}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default SvgCard;
