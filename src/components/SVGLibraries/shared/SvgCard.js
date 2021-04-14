/* eslint-disable camelcase */
import React, { useState } from 'react';
import ActionBar from './ActionBar';
import ErrorBoundry from './ErrorBoundry';

import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const SvgCard = ({ icon, containerIsVisible, isLastCard, ...rest }) => {
  const { name, Component, friendlyName, assets } = icon;
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);

  let { source } = assets[0];

  if (assets.length > 1) {
    source = assets.find(({ size }) => size === 32).source;
  }

  return (
    <li
      onMouseEnter={() => {
        setIsActionBarVisible(true);
      }}
      onMouseLeave={() => {
        setIsActionBarVisible(false);
      }}
      className={svgCard}>
      <div className={svgCardInside}>
        <span className={triggerText}>{friendlyName}</span>
        {containerIsVisible && (
          <ErrorBoundry>
            <div className={flexContainer}>
              {Component && (
                <Component {...rest}>
                  <title>{friendlyName}</title>
                </Component>
              )}
            </div>
            <ActionBar
              isLastCard={isLastCard}
              name={name}
              source={source}
              friendlyName={friendlyName}
              isActionBarVisible={isActionBarVisible}
              setIsActionBarVisible={setIsActionBarVisible}
            />
          </ErrorBoundry>
        )}
      </div>
    </li>
  );
};

export default SvgCard;
