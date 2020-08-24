import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Test msg 1', likesCount: 5 },
  { id: 2, message: 'Test msg 2', likesCount: 6 },
  { id: 3, message: 'Test msg 3', likesCount: 7 },
  { id: 4, message: 'Test msg 4', likesCount: 8 },
];

let dialogs = [
  { id: 1, name: 'Test1' },
  { id: 2, name: 'Test2' },
  { id: 3, name: 'Test3' },
  { id: 4, name: 'Test4' },
];

let messages = [
  { id: 1, message: 'Msg1' },
  { id: 2, message: 'Msg2' },
  { id: 3, message: 'Msg3' },
  { id: 4, message: 'Msg4' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
