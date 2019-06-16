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
    // console.log(this.props.post.user);
    return (
      <Fragment>

        <div className="single-post">
        {
          this.props.post.likes ?
          <Fragment>
            <h2 >{this.props.post.title}</h2>
            <h3 style={{color:'rgb(54, 124, 255)', lineHeight:'.69', verticalAlign: 'top',borderBottom: '2px solid rgb(54, 124, 255)', width: "15%"}}>- {this.props.post.user.username}</h3>
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
