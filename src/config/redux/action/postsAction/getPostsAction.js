import axios from "axios";

const getPostsAction = (params, setIsLoading) => async (dispatch) => {
    try {
        const posts = await axios.get(`${process.env.REACT_APP_API_KEY}/post`, {params});
        const result = posts.data.data;
        dispatch({ type: "GET_ALL_POSTS", payload: result });
        setIsLoading(false)
    } catch (error) {
        console.log(error);
    }
};

export default getPostsAction;