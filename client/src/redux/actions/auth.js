import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data });
    window.location = "/";
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/login", authData);

    dispatch({ type: "LOGIN", payload: data });
    window.location = "/";
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};
