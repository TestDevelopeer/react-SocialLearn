import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messages
        .map(m => <Message key={m.id} message={m.message}/>);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}



export default Dialogs;