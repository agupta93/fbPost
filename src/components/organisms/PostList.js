import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

// Constants
import EMPTY_ARRAY from '../../constants/emptyArray';

// Components
import Post from './post';

const renderPost = post => (
  <Post
    key={post._id}
    {...post}
    time={new Date(post.createdAt)}
  />
);

const PostList = props => _map(props.posts, renderPost);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

PostList.defaultValues = {
  posts: EMPTY_ARRAY,
}

export default PostList;
