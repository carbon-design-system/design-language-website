import React, { useRef, useCallback } from 'react';
import { OverflowMenuVertical20 } from '@carbon/icons-react';
import cx from 'classnames';
import styles from './Menu.module.scss';
import { useOnClickOutside } from '../../hooks';

export const Menu = ({ children, expanded, setExpanded, ...rest }) => {
  const wrapperRef = useRef();

  const handler = useCallback(() => {
    if (expanded) {
      setExpanded(false);
    }
  }, [expanded, setExpanded]);

  useOnClickOutside(wrapperRef, handler);

  return (
    <div
      ref={wrapperRef}
      className={cx(styles.wrapper, { [styles.expanded]: expanded })}>
      <button
        type="button"
        id="menubutton1"
        aria-haspopup="true"
        aria-controls="menu1"
        className={styles.menuButton}
        onClick={() => setExpanded(!expanded)}
        {...rest}>
        <OverflowMenuVertical20 />
      </button>
      {expanded && (
        <ul
          className={styles.menuButtonList}
          id="menu1"
          role="menu"
          aria-labelledby="menubutton1">
          {children}
        </ul>
      )}
    </div>
  );
};

export const MenuItem = ({ children, ...rest }) => (
  <li role="menuitem" {...rest}>
    {children}
  </li>
);
