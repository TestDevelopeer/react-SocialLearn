import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Test1" id="1" />
                <DialogItem name="Test2" id="2" />
                <DialogItem name="Test3" id="3" />
                <DialogItem name="Test4" id="4" />
            </div>
            <div className={s.messages}>
                <Message message="Msg1"/>
                <Message message="Msg2"/>
                <Message message="Msg3"/>
                <Message message="Msg4"/>
            </div>
        </div>
    );
}

export default Dialogs;