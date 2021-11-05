import axios from "axios";

const URL = "http://localhost:8080/task";

const postLogin = async ({ description }) => {
  try {
    const { data } = await axios.post(URL, {
      description
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export default postLogin;
