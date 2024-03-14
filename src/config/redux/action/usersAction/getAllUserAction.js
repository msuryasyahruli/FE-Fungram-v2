import axios from "axios"

const getAllUserAction = (navigate) => async (dispatch) => {
    try {
        const user = await axios.get(`${process.env.REACT_APP_API_KEY}/users`)
        const result = user.data.data;
        dispatch({ type: "GET_ALL_USERS", payload: result });
    } catch (err) {
        console.log(err);
        if (err.response.data.message === "Token expired" || "Token invalid") {
            localStorage.clear();
            navigate("/");
            window.location.reload()
        }
    }
}

export default getAllUserAction