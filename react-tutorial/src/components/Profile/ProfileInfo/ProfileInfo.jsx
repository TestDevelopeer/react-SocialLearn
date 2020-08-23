import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png" alt="Content" />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;