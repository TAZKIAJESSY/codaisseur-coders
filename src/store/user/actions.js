import axios from "axios";
import { API_URL } from "../../config";

const setLoading = () => ({ type: "user/loading" });

const setToken = (jwt) => ({ type: "user/setToken", payload: jwt });

export const signUp = ({ email, password, name, history }) => async (
  dispatch,
  getState
) => {
  try {
    console.log("Thunk ", name, email, password);
    dispatch(setLoading());

    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });

    // console.log("User signup API response", response);
    console.log("After jwt", response.data.jwt);
    dispatch(setToken(response.data.jwt));

    history.push("/"); //send them to homapage
  } catch (e) {
    console.log(e.message);
  }
};

//axios.post=> take 3 parameter(url, data{}, config(header))
//name:jessy email:jessy@gmail.com password:jessy
