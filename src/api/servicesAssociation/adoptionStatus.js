import axios from "axios"
import { addToken } from "../../utils/jwt"
import { ASSOCIATIONS_ADOPTION_ACCEPT, ASSOCIATIONS_ADOPTION_REJECT } from "../apiRoutes"


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const patchAceptAdoption = async (id,data) => {
    try {
        //console.log("api id pet->",id,"api status ->",data)
        config.headers.Authorization = addToken()
        const req = await axios.patch(ASSOCIATIONS_ADOPTION_ACCEPT + id, data, config )
        //console.log("api adop req ->",req)
        return req
    } catch (error) {
        return console.error(error)
    }
}

export const patchRejectAdoption = async (id,data) => {
    try {
        //console.log("api id pet->",id,"api status ->",data)
        config.headers.Authorization = addToken()
        const req = await axios.patch(ASSOCIATIONS_ADOPTION_REJECT + id, data, config )
        //console.log("api adop req ->",req)
        return req
    } catch (error) {
        return console.error(error)
    }
}