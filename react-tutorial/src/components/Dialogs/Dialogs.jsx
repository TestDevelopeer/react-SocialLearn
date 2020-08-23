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
    let dialogsData = [
        {id: 1, name: 'Test1'},
        {id: 2, name: 'Test2'},
        {id: 3, name: 'Test3'},
        {id: 4, name: 'Test4'},
    ]

    let messagesData = [
        {id: 1, message: 'Msg1'},
        {id: 2, message: 'Msg2'},
        {id: 3, message: 'Msg3'},
        {id: 4, message: 'Msg4'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;