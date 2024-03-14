import axios from "axios";

const getPostsByUserAction = (userId) => async (dispatch) => {
    try {
        const posts = await axios.get(`${process.env.REACT_APP_API_KEY}/post/user/${userId}`);
        const result = posts.data.data;
        dispatch({ type: "GET_POST_BY_USER", payload: result });
    } catch (error) {
        console.log(error);
    }
};

export default getPostsByUserAction;