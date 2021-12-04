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
    .then((result) => console.log(result));
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

  let jsonResult = await res.json();

  if (res.ok) {
    console.log(jsonResult);
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
};
