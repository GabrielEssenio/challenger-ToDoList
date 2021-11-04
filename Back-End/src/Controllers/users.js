const userService = require("../Services/users");

const createUser = async (req, res) => {
  const {body} = req;
  const newUser = await userService.createUser(body);
  return res.status(newUser.status).json(newUser.message);
};

// const getUserId = async (req, res) => {
//   const { id } = req.params;
//   const getId = await userService.getUserId(id);
//   return res.status(getId.status).json(getId.message);
// };

// const getAllUsers = async (_req, res) => {
//   const allUsers = await userService.getAllUsers();
//   return res.status(allUsers.status).json(allUsers.message);
// };

module.exports = {
  createUser,
  // getUserId,
  // getAllUsers,
};
