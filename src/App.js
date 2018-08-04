import React, { Component } from 'react';
import './App.css';
import CardsList from './Components/CardsList';

const API = 'https://jsonplaceholder.typicode.com/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
  }

  getUsers() {
    fetch(API + 'users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
      })
      .catch(error => console.log(error))
  }

  getPosts() {
    fetch(API + 'posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getUsers();
    this.getPosts();
  }

  render() {
    const { posts, users } = this.state;
    // console.log(posts, users);
    return (
      <div>
        <h1 id="title">Social Card</h1>
        <CardsList
          posts={posts}
          users={users} />
      </div>
    );
  }
}

export default App;
