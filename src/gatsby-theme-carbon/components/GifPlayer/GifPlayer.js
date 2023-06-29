// Shadowing changes:
// If Media is a Video, set it's poster to be the fallback image
// If Media is a Video, listen for the 'suspend' event. This means
//    a mobile browser has paused loading of the asset. We hide our
//    control because in this circumstance, the browser will add it's own
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  PlayOutline,
  PlayOutlineFilled,
  PauseOutline,
  PauseOutlineFilled,
} from '@carbon/icons-react';
import {
  controls,
  dark,
  container,
  gifInDialog,
  imgHidden,
  imgDisplayed,
  gifDisplayed,
  gifHidden,
} from 'gatsby-theme-carbon/src/components/GifPlayer/GifPlayer.module.scss';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled size={24} /> : <PauseOutline size={24} />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled size={24} /> : <PlayOutline size={24} />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

const GifPlayer = ({ children, color, className, isInDialog }) => {
  const [paused, setPaused] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const suspendedRef = useRef(suspended);
  const containerRef = useRef();
  const [videoElement, setVideoElement] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const video = containerRef.current.querySelector('video');
      const image = containerRef.current.querySelector('img');

      const onSuspend = () => {
        suspendedRef.current = true;
        setSuspended(true);
      };

      const onPlay = () => {
        suspendedRef.current = false;
        setSuspended(false);
      };

      const onPlaying = () => {

        if (suspendedRef.current) {

          suspendedRef.current = false;
          setSuspended(false);
        }
      }

      if (video) {
        // For videos, we want the fallaback image to also be the poster
        // this prevents us from needing to supply it both as the
        // second child and through the `poster` attribute.
        if (!video.poster && image.src) {
          video.setAttribute('poster', image.src);
        }

        video.setAttribute('muted', "");
        setVideoElement(video);

        // when suspended, videos will show the browser's play button, so
        // we can hide ours
        video.addEventListener('suspend', onSuspend);
        video.addEventListener('play', onPlay);
        video.addEventListener('playing', onPlaying);
        return () => {
          video.removeEventListener('suspend', onSuspend);
          video.removeEventListener('play', onPlay);
          video.removeEventListener('playing', onPlaying);
        };
      }
    }
  }, []);

  useEffect(() => {

    if (videoElement) {

      videoElement[paused ? "pause" : "play"]();
    }
  }, [videoElement, paused]);

  const [hovering, setHovering] = useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    setPaused(!paused);
  };

  const controlsClassNames = classnames({
    [controls]: true,
    [dark]: color === 'dark',
  });

  const containerClassNames = classnames({
    [container]: true,
    [className]: className,
    [gifInDialog]: isInDialog,
  });

  const staticImageClassNames = classnames({
    [imgHidden]: true,
    [imgDisplayed]: videoElement ? false : paused,
  });

  const gifClassNames = classnames({
    [gifDisplayed]: true,
    [gifHidden]: videoElement ? false: paused,
  });

  const childrenArray = React.Children.toArray(children);

  const labelText = paused
    ? 'Toggleable animation paused'
    : 'Toggleable animation playing';

  return (
    <div ref={containerRef} className={containerClassNames}>
      <div className={gifClassNames} aria-hidden={videoElement ? false : (paused ? 'true' : false)}>
        {childrenArray[0]}
      </div>
      <div
        className={staticImageClassNames}
        aria-hidden={videoElement ? 'true' : (paused ? false : 'true')}>
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
