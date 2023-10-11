const express = require("express");
const { PORT } = require("./config/config");
const databaseConnection = require("./database/connection");

const app = express();

app.use(express.json());

databaseConnection()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log("db connected");
      console.log(`${PORT} is listening`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
