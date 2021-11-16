import axios from 'axios';
import { PETS_URL } from '../apiRoutes';

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

export const getAllPets = async () => {
    try{
        const req = await axios.get(PETS_URL ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
}

