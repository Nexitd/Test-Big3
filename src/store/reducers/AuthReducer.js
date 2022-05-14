import axios from "axios";
import { ACCESS_TOKEN } from "../../api/api";

const AUTH_USER = "AUTH_USER";
const REGISTATE_USER = "REGISTATE_USER";

const initialState = {
  isAuth: localStorage.getItem(ACCESS_TOKEN) ? true : false,
  errorCode: 0,
  errorStatus: 0,
  token: "",
  userName: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      localStorage.setItem(ACCESS_TOKEN, action.token);

      return { ...state, isAuth: action.isAuth };
    case REGISTATE_USER:
      return state;
    default:
      return state;
  }
};

const authAC = (auth, token, userName, code) => {
  return {
    type: AUTH_USER,
    isAuth: auth,
    token: token,
    userName: userName,
    errorCode: code,
  };
};

const registrateAC = () => {
  return {
    type: REGISTATE_USER,
  };
};

export const LoginUser = (values) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://dev.trainee.dex-it.ru/api/Auth/SignIn",
        values
      );

      dispatch(authAC(true, response.data.token, response.data.name));
    } catch (e) {
      console.log(e);
      dispatch(authAC(false, "", "", e.response.status));

      throw new Error(e);
    }
  };
};

export default AuthReducer;
