import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        }, dialogsPage: {
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
        }, sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;