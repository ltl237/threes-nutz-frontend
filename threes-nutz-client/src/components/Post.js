import React, { Fragment, Component } from 'react';

class Post extends Component {

  renderLikes = () => {
    switch (this.props.post.likes) {
      case 0:
        return <p>{this.props.post.likes.length} Likes</p>
        // break;
      case 1:
        return <p>{this.props.post.likes.length} Like</p>
        // break;
      default:
        return <p>{this.props.post.likes.length} Likes</p>
    }
  }


  render() {
    console.log(this.props.post.likes);
    return (
      <Fragment>

        <div className="single-post">
        {
          this.props.post.likes ?
          <Fragment>
            <h1 style={{borderBottom: '2px solid #6b93de', width: "30%"}}>{this.props.post.title}</h1>
            <p>{this.props.post.content}</p>
            <p>{this.props.post.likes.length} Like(s)</p>

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
      </Fragment>
    );
  }

}

export default Post;
