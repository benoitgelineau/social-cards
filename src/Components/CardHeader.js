import React from 'react';

const CardHeader = props => (

  <header className="CardHeader">
    {/*<img className="profile-thumbnail" src={`https://picsum.photos/50?random=${props.post.id}`} alt="Random"/>*/}
    <div className="profile-name">
      <h3>{props.user.name}</h3>
      <h4>&#64;{props.user.username}</h4>
    </div>
    <div className="follow-btn">
      <button>Follow</button>
    </div>
  </header>
);

export default CardHeader;
