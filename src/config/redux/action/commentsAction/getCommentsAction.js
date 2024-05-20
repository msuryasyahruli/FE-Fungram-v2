import axios from "axios"

const getCommetsAction = (id) => async (dispatch) => {
    try {
        const comments = await axios.get(`${process.env.REACT_APP_API_KEY}/comment/${id}`)
        const result = comments.data.data
        dispatch({ type: "GET_COMMENTS", payload: result })
    } catch (err) {
        console.log(err)
    }
}

export default getCommetsAction