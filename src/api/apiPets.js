
import { addToken } from "../utils/jwt";
import { PETS_URL } from "./apiRoutes";

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Authorization": addToken(),
};


// export const getPets = async () => {
//   const request = await fetch(PETS_URL, {
//       method:'GET',
//       headers: headers
//   })
//   const response = await request.json()
//   console.log("esto es", response)
//   return response
// }

export const postPets = async (pets) =>{
  try{
      const req = await fetch(PETS_URL,{
          method:'POST',
          headers:headers,
          body: JSON.stringify(pets)
      })
      const res = await req.json()
      return res
  }catch(error){
      console.error(error)
  }
} 

export const deletePets = async (id) => {
  try {
      const req = await fetch(PETS_URL + '/' + id, {
          method: 'DELETE',
          headers: headers
      })
      const res = await req.json()
      return res

  } catch (error) {
      console.error(error)
  }
} 


