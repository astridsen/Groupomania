import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_POST,
  } from "./types";
  
  import {Register, Login, Logout} from "../services/auth.service";
  
  export const register = (username, email, password) => (dispatch) => {
    return Register(username, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_POST,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const post =
          (error.response &&
            error.response.data &&
            error.response.data.post) ||
          error.post ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_POST,
          payload: post,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return Login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const post =
          (error.response &&
            error.response.data &&
            error.response.data.post) ||
          error.post ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_POST,
          payload: post,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    Logout();
  
    dispatch({
      type: LOGOUT,
    });
  };