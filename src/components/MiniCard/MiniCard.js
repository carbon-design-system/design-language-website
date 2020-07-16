import React from 'react';
import PropTypes from 'prop-types';
import './MiniCard.scss';

const MiniCard = props => (
  <a className="mini-card-link" href={props.link}>
    <div className="mini-card">
      <p className="mini-card-label"> {props.labelName}</p>
      <img
        className="mini-card-icon"
        alt={props.altText}
        src={props.iconImage}
      />
    </div>
  </a>
);

export default MiniCard;

MiniCard.propTypes = {
  link: PropTypes.string,
  iconImage: PropTypes.string,
  labelName: PropTypes.string,
  altText: PropTypes.string,
};
