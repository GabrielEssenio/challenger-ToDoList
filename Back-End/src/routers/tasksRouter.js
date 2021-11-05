const express = require("express");
const { createTask, getAllTaskByUser, updateTaskByUser } = require("../Controllers/tasksToDo");
const { verifyJWT } = require("../auth/JWToken");

const router = express.Router();
router.route("/")
.post(verifyJWT, createTask)
.get(verifyJWT,getAllTaskByUser)
.put(verifyJWT, updateTaskByUser);

module.exports = router;
