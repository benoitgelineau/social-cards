import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const CardBody = props => (

  <div className="CardBody">
    <img className="post-picture" src={props.imgUrl + '450x450'} alt="Random"/>
    <h4>{props.post.title}</h4>
    <p>{props.post.body}</p>
    <span className="date">{moment().format('LT')} &bull; {moment().format('D MMM YYYY')}</span>
    <hr />
  </div>
)

CardBody.propTypes = {
  post: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default CardBody;
