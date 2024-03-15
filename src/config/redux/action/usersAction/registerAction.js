import axios from "axios"
import Swal from "sweetalert2";

const registerAction = (userData, navigate) => async (dispatch) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_API_KEY}/users/register`, userData)
        const result = data.data.data
        if (data.data.message === "User created") {
            Swal.fire("Success", "Register success", "success");
            navigate("/login");
        } else {
            Swal.fire({
                text: data.data.message,
                icon: "info"
            });
            dispatch({ type: "REGISTER_USER", payload: result })
        }
    } catch (err) {
        console.log(err)
    }
}

export default registerAction