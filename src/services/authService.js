const serverUrl = "http://localhost:5000";

export const register = (firstName, lastName, email, password, rePassword) => {
  return fetch(`${serverUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, password, rePassword }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
};
