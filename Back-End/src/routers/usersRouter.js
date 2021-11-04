const express = require("express");
const {
  createUser,
  //  getAllUsers,
  // getUserId 
  } = require("../Controllers/users");
// const { verifyJWT } = require("../auth/JWToken");

const router = express.Router();
router.route("/").post(createUser)
  // .get(verifyJWT, getAllUsers);

// router
//   .route('/:id')
//   .get(verifyJWT, getUserId)

  module.exports = router;
