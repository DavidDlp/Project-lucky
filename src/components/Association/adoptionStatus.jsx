import { patchAceptAdoption, patchRejectAdoption } from "../../api/servicesAssociation/adoptionStatus";

export const adoptionAccept = async (id,data) => {
//console.log("fun prop",id)
//console.log("fun prop",data)

    try {
      await patchAceptAdoption(id,data);
      //console.log("SERV pet id ->",id," SERV adoption status ->",data)
    } catch (error) {
      return console.log(error);
    }
  };

export const adoptionReject = async (id,data) => {
  try {
    await patchRejectAdoption(id,data);
    //console.log("SERV pet id ->",id," SERV adoption status ->",data)
  } catch (error) {
    return console.log(error);
  }
};

