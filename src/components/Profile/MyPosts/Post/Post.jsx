import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/default_user.png";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={userPhoto} alt="avatar" />
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;