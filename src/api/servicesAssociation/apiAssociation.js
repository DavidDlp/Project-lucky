import { addToken } from "./../../utils/jwt";
import { ASSOCIATIONS } from "./../apiRoutes";

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Authorization": addToken()
};


export const getAssociations = async () => {
  const request = await fetch(ASSOCIATIONS, {
      method:'GET',
      headers: headers
  })
  const response = await request.json()
  console.log("esto es", response)
  return response
}

export const postAssociations = async (associations) =>{
  try{
      const req = await fetch(ASSOCIATIONS,{
          method:'POST',
          headers:headers,
          body: JSON.stringify(associations)
      })
      const res = await req.json()
      return res
  }catch(error){
      console.error(error)
  }
} 

export const deleteAssociations = async (id) => {
  try {
      const req = await fetch(ASSOCIATIONS + '/' + id, {
          method: 'DELETE',
          headers: headers
      })
      const res = await req.json()
      return res

  } catch (error) {
      console.error(error)
  }
} 


