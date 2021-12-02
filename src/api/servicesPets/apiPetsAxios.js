import axios from 'axios';
import { PETS_ADD, PETS_URL } from '../apiRoutes';
import { USER_URL } from '../apiRoutes';
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

export const getUserById = async (id) => {
    try{
        config.headers.Authorization = addToken()
        const req = await axios.get(USER_URL +'/'+ id,config)
        return req
    }catch(error){
        return console.error(error)
    }
}

//POST

export const registerPet = async (pet, id ) =>{
    console.log(pet, id)
    try{
        const req = await axios.post(PETS_ADD, pet, id , config);
        console.log("propiedades pets ->", req);
        return req.data;
    }catch(error){
        console.error(error)
    }
}

//PUT

//DELETE
