import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

import {
  PlayOutline24,
  PlayOutlineFilled24,
  PauseOutline24,
  PauseOutlineFilled24,
  Play24 as Play32,
  Pause24 as Pause32,
} from '@carbon/icons-react';

const { prefix } = settings;

class PlayPauseButton extends React.Component {
  state = {
    hover: false,
  };

  onOver = () => {
    this.setState({
      hover: true,
    });
  };

  onOut = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    const { onClick, playing, loop, cornerPlayButton, hovering } = this.props;
    const { hover } = this.state;

    return (
      <button
        type="button"
        className={classnames(`${prefix}--play-pause-button`, {
          [`${prefix}--play-pause-hide-on-mobile`]: loop,
          [`${prefix}--play-pause-corner`]: cornerPlayButton,
          [`${prefix}--play-pause-hovering`]: hovering,
        })}
        onMouseOver={this.onOver}
        onMouseOut={this.onOut}
        onFocus={this.onOver}
        onBlur={this.onOut}
        onClick={onClick}>
        {// corner play button - ex homepage player
        cornerPlayButton && (
          <>
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: playing && hover,
              })}>
              <PauseOutlineFilled24 />
            </span>
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: playing && !hover,
              })}>
              <PauseOutline24 />
            </span>
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: !playing && hover,
              })}>
              <PlayOutlineFilled24 />
            </span>
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: !playing && !hover,
              })}>
              <PlayOutline24 />
            </span>
          </>
        )}
        {// standard center play button - use by default
        !cornerPlayButton && (
          <>
            <span className={`${prefix}--play-pause-background`} />
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: playing,
              })}>
              <Pause32 />
            </span>
            <span
              className={classnames(`${prefix}--play-pause-icon`, {
                active: !playing,
              })}>
              <Play32 />
            </span>
          </>
        )}
      </button>
    );
  }
}

PlayPauseButton.propTypes = {
  // action to do on click
  onClick: PropTypes.func,

  // status of media
  playing: PropTypes.bool,

  // use corner button
  cornerPlayButton: PropTypes.bool,

  // video is looping
  loop: PropTypes.bool,

  // parent determines play/pause visibility
  hovering: PropTypes.bool,
};

export default PlayPauseButton;
