import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Test msg 1', likesCount: 5},
        {id: 2, message: 'Test msg 2', likesCount: 6},
        {id: 3, message: 'Test msg 3', likesCount: 7},
        {id: 4, message: 'Test msg 4', likesCount: 8},
    ]
};

test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator("TestDevelopeer");
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new posts should be correct', () => {
    // 1. Test data
    let action = addPostActionCreator("TestDevelopeer");
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts[4].message).toBe('TestDevelopeer');
});

test('after deleting length of messages should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. Test data
    let action = deletePost(1000);
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(4);
});