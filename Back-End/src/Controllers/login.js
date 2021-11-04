const loginService = require("../Services/login");

const checkLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.checkLogin(email, password);
  return res.status(result.status).json(result.message);
};

module.exports = {
  checkLogin,
};
