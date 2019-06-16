import React, { Fragment, Component } from 'react';

class Post extends Component {



  render() {
    console.log(this.props.post.likes);
    return (
      <div className="post-card">
      {
        this.props.post.likes ?
        <Fragment>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.content}</p>
          <p>{this.props.post.likes.length} Likes</p>
          Comments:
          <ul>
          {
            this.props.post.comments.map(comment => {
              return <li key={comment.id}>{comment.content}</li>
            })
          }
          </ul>

        </Fragment>
        :
        null
      }
      </div>
    );
  }

}

export default Post;
