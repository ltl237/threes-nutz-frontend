import React, { Component } from 'react';

class NewPostForm extends Component {

  render() {
    return (
      <div className="container">

        <form className="form-style-9">
          <h1>Create A New Post</h1>
          <br/>
          <ul>
            <li>
              <input type="text" name="title" className="field-style field-split align-left" placeholder="Post Title" />
            </li>
            <li>
              <textarea name="content" className="field-style" placeholder="Content"></textarea>
            </li>
            <li>
              <select className="select-css">
                <option value="" default>Select A Category</option>
                <option value="Technology">Technology</option>
                <option value="Pop-Culture">Pop-Culture</option>
                <option value="Sports">Sports</option>
              </select>
            </li>
            <li>
              <input className="moveMe" type="submit" value="Create Post" />
            </li>
          </ul>
        </form>
      </div>
    );
  }

}

export default NewPostForm;
