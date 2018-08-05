import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = props => (
  
  <footer className="CardFooter">
    <div className="stats">
      <div className="retweets">
        <i className="fas fa-retweet"></i> <strong>{props.retweets}</strong>
      </div>
      <div className="likes">
        <i className="fas fa-heart"></i> <strong>{props.likes}</strong>
      </div>
    </div>
    <div className="btn">
      <button className="share-btn">Share</button>
      <button className="retweet-btn">Retweet</button>
      <button className="like-btn">Like</button>
    </div>
  </footer>
);

CardFooter.propTypes = {
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}

export default CardFooter;
