import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        { id: 1, message: 'Test msg 1', likesCount: 5 },
        { id: 2, message: 'Test msg 2', likesCount: 6 },
        { id: 3, message: 'Test msg 3', likesCount: 7 },
        { id: 4, message: 'Test msg 4', likesCount: 8 },
    ];

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;