import axios from "axios";
import { LOGIN } from "../apiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const loginUser = async (user) => {
  try {
    const req = await axios.post(LOGIN, user, config);
    console.log("propiedades login ->", req);
    return req.data;
  } catch (error) {
    return console.log(error);
  }
};

