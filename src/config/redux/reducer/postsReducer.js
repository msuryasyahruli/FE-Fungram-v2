const initialState = {
    posts: [],
    postDetail: [],
    postByUser: [],
}

const postsReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_POSTS") {
        return {
            ...state,
            posts: action.payload,
        }
    } else if (action.type === "GET_DETAIL_POSTS") {
        return {
            ...state,
            postDetail: action.payload,
        }
    } else if (action.type === "GET_POST_BY_USER") {
        return {
            ...state,
            postByUser: action.payload,
        }
    } else if (action.type === "CREATE_POST") {
        return state
    } else if (action.type === "UPDATE_POST") {
        return state
    } else if (action.type === "DELETE_POST") {
        return state
    } else {
        return state
    }
}

export default postsReducer