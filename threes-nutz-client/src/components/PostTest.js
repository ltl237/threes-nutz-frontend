import React, { Component } from 'react';
import Faker from 'faker'

class PostTest extends Component {

  render() {
    if (this.props.post.user) {
      console.log(this.props.post.comments);
    }

    return (
      <div className="col-md-10">
            <div className="panel panel-default">
                <div className="panel-body">
                   <section className="post-heading">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="media">
                                  <div className="media-left">
                                    <a href="#">
                                      <img src={Faker.image.avatar()} width="40" height="40" alt="..."/>
                                    </a>
                                  </div>
                                  <div className="media-body">
                                    <a href="#" className="anchor-username"><h4 className="media-heading">{this.props.post.user? this.props.post.user.username : null}</h4></a>
                                    <a href="#" className="anchor-time">{Math.floor(Math.random() * 60)} mins ago</a>
                                  </div>
                                </div>
                            </div>
                             <div className="col-md-9">
                                <strong>{this.props.post.title}</strong>
                             </div>
                        </div>
                   </section>
                   <section className="post-body">
                       <p>{this.props.post.content}</p>
                   </section>
                   <section className="post-footer">
                       <hr></hr>
                       <div className="post-footer-option container">
                            <ul className="list-unstyled">
                                <li>({this.props.post.user? this.props.post.likes.length: null})<button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>  Like</button></li>
                                <li><button data-toggle="modal" data-target=".bd-example-modal-lg" type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button></li>
                                <li><button type="button" className="btn btn-light"><i className="glyphicon glyphicon-share-alt"></i> Share</button></li>
                            </ul>
                       </div>
                   </section>
                </div>
            </div>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="col-md-9">
                    <div class="panel panel-default">
                        <div class="panel-body">
                          <section class="post-body">
                            <ul class="list-group list-group-flush">
                              {
                                this.props.post.user ?

                                this.props.post.comments.map(comment => {
                                  return <li class="list-group-item">{comment.content}</li>
                                })
                                :
                                null
                              }

                            </ul>
                          </section>
                           <section class="post-heading">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="media">
                                          <div class="media-body">
                                            <h4 class="media-heading">Leave A Comment:</h4>
                                          </div>
                                        </div>
                                    </div>
                                     <div class="col-md-1">
                                         <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                     </div>
                                </div>
                           </section>

                           <section class="post-footer">
                               <hr></hr>
                               <div class="post-footer-comment-wrapper">
                                   <div class="comment-form">

                                   </div>
                                   <div class="comment">
                                        <div class="media">
                                          <div class="media-left">
                                            <a href="#">
                                              <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
                                            </a>
                                          </div>
                                          <div class="media-body">
                                            <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                           </section>
                        </div>
                    </div>
            	</div>
                </div>
              </div>
            </div>
      </div>
    );
  }

}

export default PostTest;
