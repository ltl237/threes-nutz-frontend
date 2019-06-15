import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div style={{"border": "dashed"}}>
        <h1>{this.props.post.title}</h1>
        <h5>{this.props.post.content}</h5>
      </div>
    );
  }

}

export default Post;
