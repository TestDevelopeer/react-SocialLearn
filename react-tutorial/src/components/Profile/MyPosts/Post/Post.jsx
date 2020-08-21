import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://pickaface.net/gallery/avatar/unr_test_180316_0529_vkbto.png" alt="avatar" />
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;