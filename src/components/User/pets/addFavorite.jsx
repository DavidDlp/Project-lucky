import { patchFavPetById } from './../../../api/UserServices/UserPatch'

export default async function addFavPet(id,data){
//console.log(id)
//console.log(data)

    try {
      await patchFavPetById(id,data);
      console.log("user",id,"favorite pet -->",data)
    } catch (error) {
      return console.log(error);
    }
  };

