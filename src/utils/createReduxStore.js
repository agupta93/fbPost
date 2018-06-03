import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import reducers from '../reducers';

const createReduxStore = () => createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger
  )
)

export default createReduxStore;