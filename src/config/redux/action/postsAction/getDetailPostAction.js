import axios from "axios";

const getDetailPostAction = (id) => async (dispatch) => {
    try {
        const posts = await axios.get(`${process.env.REACT_APP_API_KEY}/post/${id}`);
        const result = posts.data.data[0];
        dispatch({ type: "GET_DETAIL_POSTS", payload: result });
    } catch (error) {
        console.log(error);
    }
};

export default getDetailPostAction;