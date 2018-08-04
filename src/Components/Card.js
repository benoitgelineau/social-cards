import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class Card extends Component {
  

  render() {
    const retweetsCount = Math.floor(Math.random() * 100);
    const likesCount = Math.floor(Math.random() * 500);
    return (
      <div className="Card">
        <CardHeader user={this.props.user}/>
        <CardBody post={this.props.post}/>
        <CardFooter retweets={retweetsCount} likes={likesCount}/>
      </div>
    );
  }
}

export default Card;
