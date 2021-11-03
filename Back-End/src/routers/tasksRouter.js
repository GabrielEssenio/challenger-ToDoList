const express = require("express");
const { createTask, getAllTask } = require("../Controllers/tasksToDo");
const { verifyJWT } = require("../auth/JWToken");

const router = express.Router();
router.route("/")
.post(verifyJWT, createTask)
.get(verifyJWT, getAllTask);

module.exports = router;
