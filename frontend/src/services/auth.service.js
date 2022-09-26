import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

export const Register = (firstname, lastname, email, password) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

export const Login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const Logout = () => {
  localStorage.removeItem("user");
};
