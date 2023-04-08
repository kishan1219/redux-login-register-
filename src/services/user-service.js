import axios from "axios";
export const loginUserApi = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const registerUserApi = async (user) => {
  try {
    const response = await axios.post("http://localhost:5000/users", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};