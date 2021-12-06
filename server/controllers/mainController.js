const express = require("express");

const { errorHandler } = require("../middlewares/errorHandler");
const router = express.Router();
const bookServices = require("../services/bookServices");

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
    //await bookServices.updateCreatorBooks(req.user._id);
    res.json({ books });
  } catch (error) {
    res.status(400).json({ error: errorHandler(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    let book = await bookServices.getOne(req.params.id);
    res.json({ book });
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

module.exports = router;
