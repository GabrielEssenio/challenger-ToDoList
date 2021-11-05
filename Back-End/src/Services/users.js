const Joi = require("joi");
const userModel = require("../Models/users");
const { createJWT } = require("../auth/JWToken");

const createUser = async (body) => {
  const schema = Joi.object({
    name: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
  }).validate(body);
  if (schema.error) return { message: schema.error.message, status: 400 };
  const { email } = body;
  const verifyEmail = await userModel.getUserEmail(email);
  if (verifyEmail) return { message: "User already registered", status: 409 };
  const { id } = await userModel.createUser(body);
  const token = createJWT({ id });
  return { message: token, status: 201 };
};

// const getUserId = async (id) => {
//   const userId = await userModel.getUserId(id);
//   if (!userId) return { status: 404, message: "User not found" };
//   else return { status: 200, message: userId };
// };

const getAllUsers = async () => {
  const users = await userModel.getAllUsers();
  return { message: users, status: 200 };
};

module.exports = {
  createUser,
  //getUserId,
  getAllUsers,
};
