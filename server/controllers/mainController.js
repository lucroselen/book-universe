const express = require("express");

const { errorHandler } = require("../middlewares/errorHandler");
const router = express.Router();
const bookServices = require("../services/bookServices");
const User = require("../models/User");
const authServices = require("../services/authServices");

let generalError =
  "We are experiencing technical difficulties and are working to resolve them. Thank you for your understanding!";

router.get("/all-books", async (req, res) => {
  try {
    let books = await bookServices.getAll();

    res.json({ books });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: generalError,
    });
  }
});

router.get("/top-10", async (req, res) => {
  try {
    let books = await bookServices.getTop10();

    res.json({ books });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: generalError,
    });
  }
});

router.post("/add", async (req, res) => {
  let { bookName, authorName, imgUrl, isbn, date, summary, genre, creator } =
    req.body;

  try {
    let books = await bookServices.create({
      bookName,
      authorName,
      imgUrl,
      isbn,
      date,
      summary,
      genre,
      creator,
    });
    res.json({ books });
  } catch (error) {
    res.status(400).json({ error: errorHandler(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    let book = await bookServices.getOne(req.params.id);
    let user = await User.findById(req.user?._id);
    let voted = book.votes.find((x) => x._id.toString() === req.user?._id);
    let isOwnedBy = book.creator._id.toString() === req.user?._id;
    let isInFavorites = user?.favorites.find(
      (x) => book._id.toString() === x.toString()
    );
    res.json({ book, voted, isOwnedBy, isInFavorites });
  } catch (error) {
    res.json({ error: errorHandler(error) });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await bookServices.deleteRecord(req.params.id);
    res.json({ message: "Book deleted successfully!" });
  } catch (error) {
    res.json({ error: errorHandler(error) });
  }
});

router.get("/vote-up/:id", async (req, res) => {
  let bookId = req.params.id;
  let book = await bookServices.getOne(req.params.id);
  try {
    if (
      !(book.creator._id.toString() === req.user._id) &&
      !book.votes.find((x) => x._id.toString() === req.user._id)
    ) {
      await bookServices.voteUp(bookId, req.user._id);

      res.json({ message: "Book liked" });
    } else {
      res.json({ message: "You are not allowed to like/dislike this book!" });
    }
  } catch (error) {
    res.status(400).json({ error: generalError });
  }
});

router.get("/vote-down/:id", async (req, res) => {
  let bookId = req.params.id;
  let book = await bookServices.getOne(req.params.id);
  try {
    if (
      !(book.creator._id.toString() === req.user._id) &&
      !book.votes.find((x) => x._id.toString() === req.user._id)
    ) {
      await bookServices.voteDown(bookId, req.user._id);

      res.json({ message: "Book disliked!" });
    } else {
      res.json({ message: "You are not allowed to like/dislike this book!" });
    }
  } catch (error) {
    res.status(400).json({ error: generalError });
  }
});

router.get("/favorite/:id", async (req, res) => {
  let bookId = req.params.id;
  let book = await bookServices.getOne(req.params.id);
  let user = await authServices.getUserById(req.user?._id);
  try {
    if (
      !(book.creator._id.toString() === req.user._id) &&
      !user.favorites.find((x) => x._id.toString() === bookId)
    ) {
      await bookServices.favorite(bookId, req.user._id);

      res.json({ message: "Book added to favorites!" });
    } else {
      res.json({
        message: "You are not allowed to add this book to favourites!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: generalError });
  }
});

module.exports = router;
