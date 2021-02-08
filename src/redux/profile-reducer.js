import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = '/react-social/auth/ADD_POST';
const DELETE_POST = '/react-social/auth/DELETE_POST';
const SET_USER_PROFILE = '/react-social/auth/SET_USER_PROFILE';
const SET_STATUS = '/react-social/auth/SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Test msg 1', likesCount: 5},
        {id: 2, message: 'Test msg 2', likesCount: 6},
        {id: 3, message: 'Test msg 3', likesCount: 7},
        {id: 4, message: 'Test msg 4', likesCount: 8},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: {
            return state;
        }
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;