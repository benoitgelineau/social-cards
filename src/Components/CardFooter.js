import React from 'react';

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

export default CardFooter;
