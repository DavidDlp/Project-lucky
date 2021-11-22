import axios from 'axios';
import { PETS_URL } from '../apiRoutes';
import { ASSOCIATIONS } from '../apiRoutes';
import { addToken } from "../../utils/jwt";



const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

//GET
export const getAllPets = async () => {
    try{
        config.headers.Authorization = addToken()
        const req = await axios.get(PETS_URL,config)
        return req
    }catch(error){
        return console.error(error)
    }
}
export const getPetsById = async (id) => {
    try{
        config.headers.Authorization = addToken()
        const req = await axios.get(PETS_URL +'/'+ id,config)
        return req
    }catch(error){
        return console.error(error)
    }
}
export const getAssocionationById = async (id) => {
    try{
        config.headers.Authorization = addToken()
        const req = await axios.get(ASSOCIATIONS + '/' + id,config)
        return req
    }catch(error){
        return console.error(error)
    }
}



//POST

//PUT

//DELETE


