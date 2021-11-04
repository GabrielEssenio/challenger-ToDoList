const connection = require("./connection");

const createUser = async ({name, email, password}) => {
  const db = await connection();
  const user = await db.collection("users").insertOne({ name, email, password });
  return { 
      id: user.insertedId,
      name,
      email, 
      password
    }
};

const getUserEmail = async (email) =>{
  const db = await connection();
  const findEmail = await db.collection("users").findOne({ email })
  return findEmail !== null;
}

// const getUserId = async (id) => {
//   const db = await connection();
//   const findEmail = await db.collection("users").findOne({
//     where: { id },
//   });
//   return findEmail !== null;
// };

// const getAllUsers = async () => {
//   const db = await connection();
//   const allusers = db.findAll({
//     attributes: { exclude: ["password"] },
//   });
//   return allusers;
// };

const checkLogin = async (email, password) => {
  const db = await connection();
  const verifyEmail = await db.collection("users").findOne({ email, password });
  return verifyEmail;
};

module.exports = {
  createUser,
  getUserEmail,
  // getUserId,
  // getAllUsers,
  checkLogin,
};
