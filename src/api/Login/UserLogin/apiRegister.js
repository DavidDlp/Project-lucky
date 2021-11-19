import axios from "axios";
import { REGISTER } from "../../apiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const registerUser = async (user) => {
  try {
    const req = await axios.post(REGISTER, user, config);
    console.log("propiedades register ->", req);
    return req.data;
  } catch (error) {
    return console.log(error);
  }
};
