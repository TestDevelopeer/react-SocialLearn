import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Logo" />
        </header>
    );
}

export default Header;