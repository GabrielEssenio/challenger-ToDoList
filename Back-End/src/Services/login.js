const Joi = require("joi");
const userModel = require("../Models/users");
const { createJWT } = require("../auth/JWToken");

const checkLogin = async (email, password) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });
  if (schema.error) return { message: schema.error.message, status: 400 };
  const checkEmail = await userModel.checkLogin(email, password);
  if (!checkEmail) return { message: "Email or Password Invalid", status: 400 };
  const { id } = checkEmail;
  const token = createJWT({ id });
  return { message: token, status: 200 };
};

module.exports = { checkLogin };
