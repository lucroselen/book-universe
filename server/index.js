const config = require("./config/config")[process.env.NODE_ENV];
const express = require("express");
const app = express();

const initDatabase = require("./config/database");

initDatabase(config.DB_CONNECTION_STRING)
  .then(() => {
    app.listen(
      config.PORT,
      console.log(`Listening at http://localhost:${config.PORT}`)
    );
  })
  .catch((err) => {
    console.error(err);
  });
