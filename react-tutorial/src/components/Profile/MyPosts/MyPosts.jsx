import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Test msg 1" />
                <Post message="Test msg 2" />
                <Post message="Test msg 3" />
            </div>
        </div>
    );
}

export default MyPosts;