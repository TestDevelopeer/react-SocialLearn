import { renderEntireTree } from '../render';

let state = {
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
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    renderEntireTree(state);
};

export default state;