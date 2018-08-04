import React from 'react';
import Card from './Card';

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
        <Card key={post.id} post={post} user={user}/>
      )
    })

    return (
      <div>
        {Cards}
      </div>
    );
  }
}

export default CardsList;