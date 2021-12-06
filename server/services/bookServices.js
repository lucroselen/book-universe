const Book = require("../models/Book");
//const User = require("../models/User");

const create = (data) => Book.create(data);
const getAll = () => Book.find({});
const getTop10 = () =>
  Book.find({})
    .sort([["rating", "desc"]])
    .limit(10);
const getOne = (id) => Book.findById(id).populate("creator").populate("votes");
const deleteRecord = (id) => Book.deleteOne({ _id: id });
const bookServices = {
  create,
  getAll,
  getOne,
  deleteRecord,
  getTop10,
};

module.exports = bookServices;
