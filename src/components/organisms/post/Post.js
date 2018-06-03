import React from 'react';
import PropTypes from 'prop-types';
import _keys from 'lodash/keys';
import _pick from 'lodash/pick';

// Components
import PostHeader from '../../molecules/postHeader';
import Reactions from '../../molecules/reactions';

// Styles
import './post.css';

const HEADER_PROPS = _keys(PostHeader.propTypes);
const REACTIONS = ['Like', 'Comment', 'Share'];

const Post = props => (
  <div className="post__container">
    <PostHeader
      {..._pick(props, HEADER_PROPS)}
    />
    <div className="post__description">{props.description}</div>
    <Reactions reactions={REACTIONS} />
  </div>
);

Post.propTypes = {
  ...PostHeader.propTypes,
  description: PropTypes.string,
}

export default Post;
