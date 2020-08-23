import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://pickaface.net/gallery/avatar/unr_test_180316_0529_vkbto.png" alt="avatar" />
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;