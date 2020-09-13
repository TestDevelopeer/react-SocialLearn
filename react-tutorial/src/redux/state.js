const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Test msg 1', likesCount: 5 },
                { id: 2, message: 'Test msg 2', likesCount: 6 },
                { id: 3, message: 'Test msg 3', likesCount: 7 },
                { id: 4, message: 'Test msg 4', likesCount: 8 },
            ],
            newPostText: 'test post text'
        }, messagesPage: {
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
        }
    },
    _callSubscriber() {
        console.log('Store changed!');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    };
};

window.store = store;
export default store;