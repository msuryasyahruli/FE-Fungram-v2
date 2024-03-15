import axios from "axios"
import Swal from "sweetalert2";

const loginAction = (userData, navigate) => async (dispatch) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_API_KEY}/users/login`, userData)
        const result = data.data.data
        if (data.data.message === "Email is incorrect") {
            Swal.fire({
                text: data.data.message,
                icon: "info"
            });
        } else if (data.data.message === "Password is incorrect") {
            Swal.fire({
                text: data.data.message,
                icon: "info"
            });
        } else {
            Swal.fire({
                title: "Login Success",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });
            setTimeout(function () {
                navigate("/");
                window.location.reload()
            }, 1000)
            localStorage.setItem("token", result.token);
            localStorage.setItem("userId", result.user_id);
            localStorage.setItem("userNick", result.user_nickname);
            dispatch({ type: "LOGIN_USER", payload: result })
        }
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
        });
        console.log(err);
    }
}

export default loginAction