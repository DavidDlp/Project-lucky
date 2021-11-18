import axios from 'axios';
import { PETS_URL } from '../apiRoutes';

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

//GET
export const getAllPets = async () => {
    try{
        const req = await axios.get(PETS_URL ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
}
export const getPetsById = async (id) => {
    try{
        const req = await axios.get(PETS_URL +'/'+ id ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
}

export const getPetsId = async (id) => {
    try{
        const req = await axios.get(PETS_URL + '/' + id  ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
};

export const getPetsName = async (name) => {
    try{
        const req = await axios.get(PETS_URL + '/name' + name  ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
};

export const getPetsSpecies = async (species) => {
    try{
        const req = await axios.get(PETS_URL + '/species' + species  ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
};

export const getPetsGender = async (gender) => {
    try{
        const req = await axios.get(PETS_URL + '/gender' + gender  ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
};

export const getPetsCity = async (city) => {
    try{
        const req = await axios.get(PETS_URL + '/city' + city  ,headers)
        return req
    }catch(error){
        return console.error(error)
    }
};

//POST

//PUT

//DELETE


