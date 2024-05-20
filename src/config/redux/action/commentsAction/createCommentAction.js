import axios from "axios";
import Swal from "sweetalert2";

const createCommentAction = (data) => async (dispatch) => {
    try {
        const comment = await axios.post(`${process.env.REACT_APP_API_KEY}/comment`, data)
        const result = comment.data.data
        // Swal.fire({
        //     icon: "success",
        //     title: result.data.message,
        // });
        dispatch({ type: "CREATE_COMMENT", payload: result })
    } catch (err) {
        console.log(err)
        Swal.fire({
            icon: "error",
            title: err.message,
        });
    }
}

export default createCommentAction