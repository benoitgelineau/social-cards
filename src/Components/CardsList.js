import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const PIC_API = 'https://source.unsplash.com/random/';

const CardsList = ({ posts, users }) => {
  const postsLength = posts.length;
  const usersLength = users.length;

  if (postsLength < 1 || usersLength < 1) {
    return <h3 style={{ textAlign: 'center' }}>Loading</h3>
  } else {
    let Cards = posts.map(post => {
      const index = users.findIndex(user => user.id === post.userId);
      const user = users[index];
      return (
        <Card key={post.id} post={post} user={user} imgUrl={PIC_API}/>
      )
    })

    return (
      <div>
        {Cards}
      </div>
    );
  }
}

CardsList.propTypes = {
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}

export default CardsList;