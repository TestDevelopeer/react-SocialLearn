import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png" alt="Content" />
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;