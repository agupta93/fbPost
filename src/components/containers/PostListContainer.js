import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _get from 'lodash/get';
import _values from 'lodash/values';

// Actions
import {
  getPosts,
} from '../../actions/postActions';

// Component
import PostList from '../organisms/PostList';

class PostListContainer extends PureComponent {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <PostList
        posts={this.props.posts}
      />
    );
  }

}

PostListContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
}

const mapDispatchToProps = {
  getPosts,
};

const mapStateToProps = (store, ownProps) => (
  {
    posts: _values(_get(store, 'posts.byId')),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);

