import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';

// utils
import createReduxStore from './utils/createReduxStore';

// components
import PostListContainer from './components/containers/PostListContainer';

const store = createReduxStore();

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <PostListContainer/>
      </Provider>
    );
  }
}

export default App;
