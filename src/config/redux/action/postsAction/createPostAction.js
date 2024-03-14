import axios from "axios";
import Swal from "sweetalert2";

const createPostAction = (data, photo) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("user_id", data.user_id);
        formData.append("post_captions", data.post_captions);
        formData.append("post_image", photo);
        const post = await axios.post(`${process.env.REACT_APP_API_KEY}/post`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        const result = post.data.data;
        dispatch({ type: "CREATE_POST", payload: result })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: res.data.message,
                });
                // setTimeout(function () {
                //     window.location.reload();
                // }, 1000);
            })
    } catch (err) {
        console.log(err);
        Swal.fire({
            icon: "error",
            title: err.message,
        });
    }
};

export default createPostAction