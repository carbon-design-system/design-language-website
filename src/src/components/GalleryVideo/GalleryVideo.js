import React from 'react';
import PropTypes from 'prop-types';
import { video } from './GalleryVideo.module.scss';

const GalleryVideo = props => (
  <video className={video} playsInline muted autoPlay loop {...props}></video>
);

export default GalleryVideo;

GalleryVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
