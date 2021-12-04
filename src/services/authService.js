const serverUrl = "http://localhost:5000";

export const register = (firstName, lastName, email, password, rePassword) => {
  return fetch(`${serverUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ firstName, lastName, email, password, rePassword }),
  })
    .then((res) => res.json())
    .then((result) => result);
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

  let result = await res.json();

  if (res.ok) {
    return result;
  } else {
    throw result.message;
  }
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

export const isAuthenticated = () => {
  return Boolean(getUser());
};
