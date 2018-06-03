import _get from 'lodash/get';
import _keyBy from 'lodash/keyBy';
import update from 'immutability-helper';

// Constants
import EMPTY_OBJECT_READONLY from '../constants/emptyObject';

export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';

const INITIAL_STATE = {
  byId: EMPTY_OBJECT_READONLY
};

const loadPosts = (state = EMPTY_OBJECT_READONLY, action = EMPTY_OBJECT_READONLY) => {
  const posts = _get(action, 'payload.posts');
  const keyedPosts = _keyBy(posts, '_id');
  const currentPosts = state.byId;
  const updatedPosts = {
    ...keyedPosts,
    ...updatedPosts,
  };

  return update(state, {
    byId: {
      $set: updatedPosts,
    },
  });
}

const HANDLERS = {
  [LOAD_POSTS]: loadPosts,
};

const postReducer = (state = INITIAL_STATE, action = EMPTY_OBJECT_READONLY) => {
  const handler = HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default postReducer;