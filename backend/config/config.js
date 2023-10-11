const dotenv = require("dotenv").config();

const { env } = process;

module.exports = {
  PORT: env.PORT,
  MONGO_DB: env.MONGO_DB,
};
