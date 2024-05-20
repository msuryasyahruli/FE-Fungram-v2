import axios from "axios"

const getUserAction = (navigate, nick) => async (dispatch) => {
    try {
        const user = await axios.get(`${process.env.REACT_APP_API_KEY}/users/${nick}`)
        const result = user.data.data[0];
        dispatch({ type: "GET_USER", payload: result });
    } catch (err) {
        console.log(err);
        if (err.response.data.message === "Token expired" || "Token invalid") {
            localStorage.clear();
            navigate("/");
            window.location.reload()
        }
    }
}

export default getUserAction