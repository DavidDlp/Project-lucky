import axios from 'axios';
import { PETS_URL } from '../apiRoutes';
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

//POST
export const postPets = async (pet) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.post(PETS_URL, pet, config)
        return req
    } catch (error) {
        return console.error(error)
    }
}
//PUT

//DELETE
export const deletePets = async (pet) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.delete(PETS_URL,pet,config)
        return req
    } catch (error) {
        return console.error(error)
        
    }
}
