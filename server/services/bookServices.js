const Book = require("../models/Book");
//const User = require("../models/User");

const create = (data) => Book.create(data);
const getAll = () => Book.find({});
const getOne = (id) => Book.findById(id).populate("creator").populate("votes");
const deleteRecord = (id) => Book.deleteOne({ _id: id });
const bookServices = {
  create,
  getAll,
  getOne,
  deleteRecord,
};

module.exports = bookServices;
