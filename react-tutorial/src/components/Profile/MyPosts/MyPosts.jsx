import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Test msg 1', likesCount: 5},
        {id: 2, message: 'Test msg 2', likesCount: 6},
        {id: 3, message: 'Test msg 3', likesCount: 7},
        {id: 4, message: 'Test msg 4', likesCount: 8},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;