import { SET_POST_INPUT, ADD_POST, DELETE_POST } from './constans'

export const setPostInput = payload => {
    return({
        type: SET_POST_INPUT,
        payload
    })
}

export const addPost = payload => {
    return({
        type: ADD_POST,
        payload
    })
}

export const deletePost = payload => {
    return({
        type: DELETE_POST,
        payload
    })
}
