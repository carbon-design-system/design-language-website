// Shadowing changes:
// If Media is a Video, set it's poster to be the fallback image
// If Media is a Video, listen for the 'suspend' event. This means
//    a mobile browser has paused loading of the asset. We hide our
//    control because in this circumstance, the browser will add it's own
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  PlayOutline24,
  PlayOutlineFilled24,
  PauseOutline24,
  PauseOutlineFilled24,
} from '@carbon/icons-react';
import styles from 'gatsby-theme-carbon/src/components/GifPlayer/GifPlayer.module.scss';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled24 /> : <PauseOutline24 />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled24 /> : <PlayOutline24 />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

const GifPlayer = ({ children, color, className, isInDialog }) => {
  const [paused, setPaused] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const video = containerRef.current.querySelector('video');
      const image = containerRef.current.querySelector('img');

      const onSuspend = () => {
        setSuspended(true);
      };

      const onPlay = () => {
        setSuspended(false);
      };

      if (video) {
        // For videos, we want the fallaback image to also be the poster
        // this prevents us from needing to supply it both as the
        // second child and through the `poster` attribute.
        if (!video.poster && image.src) {
          video.setAttribute('poster', image.src);
        }

        // when suspended, videos will show the browser's play button, so
        // we can hide ours
        video.addEventListener('suspend', onSuspend);
        video.addEventListener('play', onPlay);
        return () => {
          video.removeEventListener('suspend', onSuspend);
          video.removeEventListener('play', onPlay);
        };
      }
    }
  }, []);

  const [hovering, setHovering] = useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    setPaused(!paused);
  };

  const controlsClassNames = classnames({
    [styles.controls]: true,
    [styles.dark]: color === 'dark',
  });

  const containerClassNames = classnames({
    [styles.container]: true,
    [className]: className,
    [styles.gifInDialog]: isInDialog,
  });

  const staticImageClassNames = classnames({
    [styles.imgHidden]: true,
    [styles.imgDisplayed]: paused,
  });

  const gifClassNames = classnames({
    [styles.gifDisplayed]: true,
    [styles.gifHidden]: paused,
  });

  const childrenArray = React.Children.toArray(children);

  const labelText = paused
    ? 'Toggleable animation paused'
    : 'Toggleable animation playing';

  return (
    <div ref={containerRef} className={containerClassNames}>
      <div className={gifClassNames} aria-hidden={paused ? 'true' : false}>
        {childrenArray[0]}
      </div>
      <div
        className={staticImageClassNames}
        aria-hidden={paused ? false : 'true'}>
        {childrenArray[1]}
      </div>
      {!suspended && (
        <button
          aria-pressed={paused ? 'true' : 'false'}
          type="button"
          aria-label={labelText}
          className={controlsClassNames}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={onClick}
          onKeyDown={(e) => {
            // Stop keyDown event from propogating to ImageGalleryImage component.
            e.stopPropagation();
          }}>
          <ToggleIcon hovering={hovering} paused={paused} />
        </button>
      )}
    </div>
  );
};

GifPlayer.propTypes = {
  /**
   * Specify if icon color should be "dark" or "light"
   */
  color: PropTypes.string,
  /**
   * Specify optional className
   */
  className: PropTypes.string,
  /**
   * Only pass in the 2 images to be rendered, first must be gif, second must be static image
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Specify if the gifPlayer is inside the expanded ImageGallery (see ImageGallery.js)
   */
  isInDialog: PropTypes.bool,
};

GifPlayer.defaultProps = {
  color: 'light',
  isInDialog: false,
};

export default GifPlayer;
