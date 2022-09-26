import { SET_POST, CLEAR_POST } from "./types";

export const setPost = (message) => ({
  type: SET_POST,
  payload: message,
});

export const clearPost = () => ({
  type: CLEAR_POST,
});
