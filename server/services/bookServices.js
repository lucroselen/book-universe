const Book = require("../models/Book");
//const User = require("../models/User");

const create = (data) => Book.create(data);
const getAll = () => Book.find({});
const getOne = (id) => Book.findById(id).populate("creator").populate("votes");

const bookServices = {
  create,
  getAll,
  getOne,
};

module.exports = bookServices;
