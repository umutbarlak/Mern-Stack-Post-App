import axios from "axios";
import { toast } from "react-toastify";

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/getPosts");
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/createPost",
      postData
    );

    dispatch({ type: "CREATE_POST", payload: data.newPost });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const updataPostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:3000/updatePost/${id}`,
      postData
    );
    dispatch({ type: "UPDATE_POSTS", payload: data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/deletePost/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
    toast.info("Post silindi");
  } catch (error) {
    toast.error(error);
  }
};
