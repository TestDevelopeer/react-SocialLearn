import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
        { id: 4, name: 'Test4' },
    ];

    let messages = [
        { id: 1, message: 'Msg1' },
        { id: 2, message: 'Msg2' },
        { id: 3, message: 'Msg3' },
        { id: 4, message: 'Msg4' },
    ];

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;