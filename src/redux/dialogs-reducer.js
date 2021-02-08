const SEND_MESSAGE = '/react-social/auth/SEND_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 11, message: body }]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;