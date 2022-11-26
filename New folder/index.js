import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import Test from './Test';
import Clock from './Clock';
import Comment from './Comment';
import LogConi from './Conditional';
import Log from './Log';
import List from './List';
import Blog from './Blog';
import Form from './Form';
import Main from './Data/Main';
const destination = document.querySelector('#root');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <div>
    <App />
    {/* <Main /> */}
    {/* <Clock date={new Date()} /> */}
    {/* <Clock /> */}
    {/* <App /> */}
    {/* <Toggle /> */}
    {/* <LogConi isLoggedIn={} /> */}
    {/* <ul>{listItems}</ul>, */}
    {/* <Item  /> */}
    {/* <List numbers = {numbers} /> */}
    {/* <Blog posts={posts} /> */}
    {/* <Form /> */}
    {/* <Main /> */}
  </div>, 
  destination
  )
