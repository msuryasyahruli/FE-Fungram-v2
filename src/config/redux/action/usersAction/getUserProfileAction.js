import axios from "axios"

const getUserProfileAction = (token, navigate, setIsLoading) => async (dispatch) => {
    try {
        const user = await axios.get(`${process.env.REACT_APP_API_KEY}/users/profile`, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        const result = user.data.data;
        setIsLoading(false)
        dispatch({ type: "GET_USER_PROFILE", payload: result });
    } catch (err) {
        console.log(err);
        if (err.response.data.message === "Token expired" || "Token invalid") {
            localStorage.clear();
            navigate("/");
            window.location.reload()
        }
    }
}

export default getUserProfileAction