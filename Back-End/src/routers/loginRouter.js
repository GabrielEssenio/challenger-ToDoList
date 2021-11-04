const express = require("express");
const { checkLogin } = require("../Controllers/login");

const router = express.Router();
router.route("/").post(checkLogin);

module.exports = router;
