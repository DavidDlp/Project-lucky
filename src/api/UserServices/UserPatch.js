import axios from "axios"
import { addToken } from "../../utils/jwt"
import { PROFILE_UPDATE } from "../apiRoutes"


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const patchUserById = async (id, data) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.patch(PROFILE_UPDATE + id, data , config )
        console.log("patch ->",req)
        return req.data
    } catch (error) {
        return console.error(error)
    }
}