import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import PropTypes from 'prop-types';

class Card extends Component {
  
  render() {
    const retweetsCount = Math.floor(Math.random() * 100);
    const likesCount = Math.floor(Math.random() * 500);
    return (
      <div className="Card">
        <CardHeader user={this.props.user} imgUrl={this.props.imgUrl + '50x50'}/>
        <CardBody post={this.props.post} imgUrl={this.props.imgUrl + '450x450'}/>
        <CardFooter retweets={retweetsCount} likes={likesCount}/>
      </div>
    );
  }
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default Card;
