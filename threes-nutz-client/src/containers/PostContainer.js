import React, { Component } from 'react';
import Post from '../components/Post'
import NewPostForm from '../components/NewPostForm'

class PostContainer extends Component {

  state = {
    posts: [1]
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/10`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data.posts
      })
    })
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        {
          this.state.posts === [1] ?
          null
          :
          this.state.posts.map(post => {
            return <Post post={post} />
          })
        }
        <NewPostForm />
      </div>
    );
  }

}

export default PostContainer;
