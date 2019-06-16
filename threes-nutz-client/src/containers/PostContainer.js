import React, { Component } from 'react';
import Post from '../components/Post'

class PostContainer extends Component {

  state = {
    posts: [1]
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.posts === [1] ?
          null
          :
          this.state.posts.map(post => {
            return <Post post={post} />
          })
        }

      </div>
    );
  }

}

export default PostContainer;
