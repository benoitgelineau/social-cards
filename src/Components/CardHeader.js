import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = props => (

  <header className="CardHeader">
    <img className="profile-thumbnail" src={props.imgUrl} alt="Random"/>
    <div className="profile-name">
      <h3>{props.user.name}</h3>
      <h4>&#64;{props.user.username}</h4>
    </div>
    <div className="follow-btn">
      <button>Follow</button>
    </div>
  </header>
);

CardHeader.propTypes = {
  user: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default CardHeader;
