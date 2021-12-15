import { resCheck } from "../Helpers/resCheck";
const serverUrl = "http://localhost:5000";

export const register = async (
  firstName,
  lastName,
  email,
  password,
  rePassword
) => {
  let res = await fetch(`${serverUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ firstName, lastName, email, password, rePassword }),
  });
  return resCheck(res);
};

export const login = async (email, password) => {
  let res = await fetch(`${serverUrl}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  return resCheck(res);
};

export const logout = () => {
  return fetch(`${serverUrl}/users/logout`, {
    credentials: "include",
  });
};

export const getUser = () => {
  let username = localStorage.getItem("username");

  return username;
};

export const getUserById = async (id) => {
  return fetch(`${serverUrl}/users/profile/${id}`, {
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
};
