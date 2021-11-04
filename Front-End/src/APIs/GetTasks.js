import axios from "axios";

const URL = "http://localhost:8080/task";

const getTask = async () => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: 132,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getTask;
