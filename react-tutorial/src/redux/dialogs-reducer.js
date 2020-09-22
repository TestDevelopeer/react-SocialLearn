const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
        { id: 4, name: 'Test4' },
    ], messages: [
        { id: 1, message: 'Msg1' },
        { id: 2, message: 'Msg2' },
        { id: 3, message: 'Msg3' },
        { id: 4, message: 'Msg4' },
    ], newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 11, message: body }]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;