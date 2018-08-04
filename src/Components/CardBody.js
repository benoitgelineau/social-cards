import React from 'react';
import moment from 'moment';

const CardBody = props => (

  <div className="CardBody">
    {/*<img className="post-picture" src={`https://picsum.photos/350?random=${props.post.id}`} alt="Random"/>*/}
    <h4>{props.post.title}</h4>
    <p>{props.post.body}</p>
    <span className="date">{moment().format('LT')} &bull; {moment().format('D MMM YYYY')}</span>
    <hr />
  </div>
)


export default CardBody;
