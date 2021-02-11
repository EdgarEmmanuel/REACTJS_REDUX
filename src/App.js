import React from 'react';
import Post from './components/post';
import PostForm from './components/post_form';
import './App.css';
import {  Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>POSTS</h1>
        <Post/>
        <PostForm/>
      </div>
    </Provider>
  );
}

export default App;
