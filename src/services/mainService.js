import { resCheck } from "../Helpers/resCheck";
const serverUrl = "http://localhost:5000";

export const getAll = () => {
  return fetch(`${serverUrl}/all-books`, {
    credentials: "include",
  }).then((res) => res.json());
};

export const getTop10 = () => {
  return fetch(`${serverUrl}/top-10`, {
    credentials: "include",
  }).then((res) => res.json());
};

export const deleteOne = (id) => {
  return fetch(`${serverUrl}/delete/${id}`, {
    credentials: "include",
  }).then((res) => resCheck(res));
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
  }).then((res) => resCheck(res));
};

export const edit = (
  id,
  bookName,
  authorName,
  imgUrl,
  isbn,
  date,
  summary,
  genre,
  creator
) => {
  return fetch(`${serverUrl}/edit/${id}`, {
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
  }).then((res) => resCheck(res));
};

export const voteUp = (id) => {
  return fetch(`${serverUrl}/vote-up/${id}`, {
    credentials: "include",
  }).then((res) => resCheck(res));
};

export const voteDown = (id) => {
  return fetch(`${serverUrl}/vote-down/${id}`, {
    credentials: "include",
  }).then((res) => resCheck(res));
};

export const favorite = (id) =>
  fetch(`${serverUrl}/favorite/${id}`, {
    credentials: "include",
  }).then((res) => resCheck(res));

export const comment = (id, comment) =>
  fetch(`${serverUrl}/comment/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      comment,
    }),
  }).then((res) => resCheck(res));
