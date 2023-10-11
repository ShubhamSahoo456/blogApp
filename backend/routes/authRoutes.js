const express = require("express");

const router = express.Router();

router.post("/registerUser", registerUserController);

module.exports = router;
