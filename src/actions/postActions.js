import _castArray from 'lodash/castArray';
import _curry from 'lodash/curry';

// Services
import {fetchPosts} from '../services/postService';

// Constants
import {
  LOAD_POSTS,
} from '../reducers/post';

const dispatchPostsToStore = _curry((dispatch, posts) => {
  const postsToDispatch = _castArray(posts);
  dispatch({
    type: LOAD_POSTS,
    payload: {
      posts: postsToDispatch,
    }
  });
});

export const getPosts = () => function(dispatch) {
  return fetchPosts()
    .then(dispatchPostsToStore(dispatch))
}