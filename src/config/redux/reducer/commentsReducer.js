const initialState = {
    comments: [],
}

const commentsReducer = (state = initialState, action) => {
    if (action.type === "GET_COMMENTS") {
        return {
            ...state,
            comments: action.payload,
        }
    } else if (action.type === "CREATE_COMMENT") {
        return {
            ...state,
            comments: action.payload,
        }
    } else if (action.type === "UPDATE_COMMENT") {
        return state
    } else if (action.type === "DELETE_COMMENT") {
        return state
    } else {
        return state
    }
}

export default commentsReducer