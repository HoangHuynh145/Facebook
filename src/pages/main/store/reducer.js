import { SET_POST_INPUT, ADD_POST, DELETE_POST } from './constans'

const initState = {
    posts: [], 
    postInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_POST_INPUT:
            return({
                ...state,
                postInput: action.payload,
            })
        case ADD_POST:
            return({
                ...state,
                posts: [...state.posts, action.payload]
            })
        case DELETE_POST: 
            const newPosts = [...state.posts]
            newPosts.splice(action.payload, 1)
            return({
                ...state,
                posts: newPosts
            })
        default:
            throw new Error(`Invalid action ${action.type}`)
    }
}

export { initState }
export default reducer
