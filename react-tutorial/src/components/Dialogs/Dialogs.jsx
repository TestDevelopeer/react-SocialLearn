import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Test1
                </div>
                <div className={s.dialog}>
                    Test2
                </div>
                <div className={s.dialog}>
                    Test3
                </div>
                <div className={s.dialog}>
                    Test4
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