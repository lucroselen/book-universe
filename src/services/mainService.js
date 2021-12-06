const serverUrl = "http://localhost:5000";

export const getAll = () => {
  return fetch(`${serverUrl}/all-books`, {
    credentials: "include",
  }).then((res) => res.json());
};

export const deleteOne = (id) => {
  return fetch(`${serverUrl}/delete/${id}`, {
    credentials: "include",
  }).then((res) => res.json());
};

export const getOne = (id) => {
  return fetch(`${serverUrl}/details/${id}`, {
    credentials: "include",
  }).then((res) => res.json());
};

export const add = (
  bookName,
  authorName,
  imgUrl,
  isbn,
  date,
  summary,
  genre,
  creator
) => {
  return fetch(`${serverUrl}/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      bookName,
      authorName,
      imgUrl,
      isbn,
      date,
      summary,
      genre,
      creator,
    }),
  }).then((res) => res.json());
};
