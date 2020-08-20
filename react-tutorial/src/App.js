import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Logo" />
      </header>
      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img src="https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png" alt="Content" />
        </div>
        <div>
          avatar + description
        </div>
        <div>
          My posts
          <div>
            New Post
          </div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;