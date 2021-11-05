import axios from "axios";

const URL = "http://localhost:8080/";

const postLogin = async ({ email, password }) => {
  try {
    const { data } = await axios.post(URL, {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export default postLogin;
