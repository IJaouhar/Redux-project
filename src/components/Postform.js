import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../acctions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  };

  onChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);

    }

  render() {
    return (
      <div>
        <h1>Add Postform</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div>
            <label>Body:</label>
            <textarea type="body" name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}
// No funciona prototype

export default connect(null, { createPost })(PostForm);
