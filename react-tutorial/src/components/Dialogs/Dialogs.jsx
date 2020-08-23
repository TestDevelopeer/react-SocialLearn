import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Test1</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Test2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Test3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Test4</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Msg1
                </div>
                <div className={s.message}>
                    Msg2
                </div>
                <div className={s.message}>
                    Msg3
                </div>
            </div>
        </div>
    );
}

export default Dialogs;