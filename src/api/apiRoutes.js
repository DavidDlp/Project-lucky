const BASE_URL = "https://adopta-una-mascota.herokuapp.com";
const REGISTER = `${BASE_URL}/user/register`;
const LOGIN = `${BASE_URL}/user/login`;
const PROFILE_UPDATE = `${BASE_URL}/user/patch/`;

const ASSOCIATIONS = `${BASE_URL}/associations`
const ASSOCIATIONS_REGISTER = `${BASE_URL}/associations/register`
const ASSOCIATIONS_LOGIN = `${BASE_URL}/associations/login`
const ASSOCIATIONS_LOGOUT = `${BASE_URL}/associations/logout`

const PETS_URL = `${BASE_URL}/pets`

export {
    BASE_URL,
    REGISTER,
    LOGIN,
    PETS_URL,
    ASSOCIATIONS,
    ASSOCIATIONS_REGISTER,
    ASSOCIATIONS_LOGIN,
    ASSOCIATIONS_LOGOUT,
    PROFILE_UPDATE
}