import { patchAdoptedPetById } from './../../../api/UserServices/UserPatch'

export default async function addAdoptedPet(id,data){
//console.log(id)
//console.log(data)

    try {
      await patchAdoptedPetById(id,data);
      console.log("user",id,"adopted pet -->",data)
    } catch (error) {
      return console.log(error);
    }
  };