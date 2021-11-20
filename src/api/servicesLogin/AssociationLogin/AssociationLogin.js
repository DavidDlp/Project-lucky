import axios from "axios";
import { ASSOCIATIONS_LOGIN, ASSOCIATIONS_REGISTER } from "../../apiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const loginAssociation = async (association) => {
  try {
    const req = await axios.post(ASSOCIATIONS_LOGIN, association, config);
    console.log("propiedades login ->", req);
    return req.data;
  } catch (error) {
    return console.log(error);
  }
};

export const registerAssociation = async (association) => {
    try {
      const req = await axios.post(ASSOCIATIONS_REGISTER, association, config);
      console.log("propiedades register ->", req);
      return req.data;
    } catch (error) {
      return console.log(error);
    }
  };

  