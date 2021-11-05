const express = require("express");
const { createTask, getAllTaskByUser, updateTaskByUser, deleteTaskByUser } = require("../Controllers/tasksToDo");
const { verifyJWT } = require("../auth/JWToken");

const router = express.Router();
router.route("/")
.post(verifyJWT, createTask)
.get(verifyJWT,getAllTaskByUser)

router.route('/:id')
.put(verifyJWT, updateTaskByUser)
.delete(verifyJWT, deleteTaskByUser);

module.exports = router;
