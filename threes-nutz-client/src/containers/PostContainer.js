import React, { Component } from 'react';
import Post from '../components/Post'
import PostTest from '../components/PostTest'
import PostFilter from '../components/PostFilter'

class PostContainer extends Component {

  state = {
    posts: [1],
    comment: false
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

  seeComments = () => {
    this.setState({
      comment: !this.state.comment
    })
  }

  render() {

    return (
      <div className="container">
        <h1>News Feed:</h1>
        <PostFilter />
        <br/>
        {
          this.state.posts === [1] ?
          null
          :
          this.state.posts.map(post => {
            return <PostTest key={post.id} seeComments={this.seeComments} post={post} comment={this.state.comment}/>
          })
        }

      </div>
    );
  }

}

export default PostContainer;
