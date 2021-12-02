/* const BASE_URL = "https://adopta-una-mascota.herokuapp.com"; */
const BASE_URL = "http://localhost:4000";

const REGISTER = `${BASE_URL}/user/register`;
const LOGIN = `${BASE_URL}/user/login`;
const PROFILE_UPDATE = `${BASE_URL}/user/patch/`;
const FAVORITE_PET = `${BASE_URL}/user/newfavpet/`;
const ADOPTED_PET = `${BASE_URL}/user/newadoptedpet/`;

const ASSOCIATIONS = `${BASE_URL}/associations`;

const ASSOCIATIONS_REGISTER = `${BASE_URL}/associations/register`;
const ASSOCIATIONS_LOGIN = `${BASE_URL}/associations/login`;
const ASSOCIATIONS_LOGOUT = `${BASE_URL}/associations/logout`;
const ASSOCIATIONS_ADOPTION_ACCEPT = `${BASE_URL}/associations/adoptionaccept/`;
const ASSOCIATIONS_ADOPTION_REJECT = `${BASE_URL}/associations/adoptionreject/`;

const PETS_URL = `${BASE_URL}/pets`;
const PETS_ADD = `${BASE_URL}/pets/addpet`;

export {
    BASE_URL,
    REGISTER,
    LOGIN,
    PETS_URL,
    PETS_ADD,
    ASSOCIATIONS,
    ASSOCIATIONS_REGISTER,
    ASSOCIATIONS_LOGIN,
    ASSOCIATIONS_LOGOUT,
    PROFILE_UPDATE,
    FAVORITE_PET,
    ADOPTED_PET,
    ASSOCIATIONS_ADOPTION_ACCEPT,
    ASSOCIATIONS_ADOPTION_REJECT
}