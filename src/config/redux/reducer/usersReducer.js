const initialState = {
    user: [],
    allUsers: [],
}

const usersReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_USERS") {
        return {
            ...state,
            allUsers: action.payload,
        }
    } else if (action.type === "GET_USER") {
        return {
            ...state,
            user: action.payload,
        }
    } else if (action.type === "GET_USER_PROFILE") {
        return {
            ...state,
            user: action.payload,
        }
    } else if (action.type === "CREATE_USER") {
        return state
    } else if (action.type === "UPDATE_USER") {
        return state
    } else if (action.type === "DELETE_USER") {
        return state
    } else {
        return state
    }
}

export default usersReducer