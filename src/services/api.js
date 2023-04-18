/* eslint-disable import/no-anonymous-default-export */
import { BACKEND_EC2_URL } from "@env";
import axios from "axios";

const login = async (username, password) => {
  return await axios
    .post(`${BACKEND_EC2_URL}/api/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

const signup = async (username, password) => {
  return await axios
    .post(`${BACKEND_EC2_URL}/api/signup`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

const uploadProfile = async (username, profile) => {
  return await axios
    .post(`${BACKEND_EC2_URL}/api/uploadProfile`, {
      username,
      profile,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

export default { login, signup, uploadProfile };
