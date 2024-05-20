import axios from "axios";
import Swal from "sweetalert2";

const deletePostAction = (id, img) => async (dispatch) => {
    try {
        const post = await axios.delete(`${process.env.REACT_APP_API_KEY}/post/${id}/${img}`);
        const result = post.data.data;
        dispatch({ type: "DELETE_POST", payload: result })
        Swal.fire({
            icon: "success",
            title: "Post Deleted",
        });
    } catch (err) {
        console.log(err)
    }
}

export default deletePostAction