import React, {useState, useEffect } from "react";
import { getAssociationsById } from "../../../api/servicesAssociation/apiAssociation";


const PetsCrud = () => {
  const [idAssociation, setIdAssociation] = useState([]);
  const [association, setAssociation] = useState("");
  // const [flag, setFlag] = useState(false);

  const associationId = idAssociation._id
  
  //console.log(associationId)

  const getAssociationByIdBd = async () =>{
    try{
      const data = await getAssociationsById(associationId)
      setAssociation(data);
      // console.log(data)

    }catch(error){
      console.error(error)
    }
  }
  // console.log(association)

  useEffect(() =>{
    setIdAssociation(JSON.parse(localStorage.getItem("association")))
    dataBase()
  },[])
  // console.log(idAssociation._id)

  const dataBase = () =>{
    if (associationId){
      getAssociationByIdBd()
    }
}

let itemToRender 
if(association){
  itemToRender = association.pets.map(pet =>{
    return <div><p>Nombre: {pet.name}</p>                         
      <img src={pet.imgPets} alt={pet.name}/>                 
      <p>Especie: {pet.species}</p>                         
      <p>Genero: {pet.gender}</p>                           
      <p>Cumpleaños: {pet.birthday}</p> 
      <p>Ciudad: {pet.city}</p>                         
      <p>Tamaño: {pet.size}</p>                 
      <p>Personalidad: {pet.personality}</p>                         
      <p>Historia: {pet.history}</p>  </div>
  })
}

 return(
   <div>
     <h1>Protectora</h1>
   </div>
 )
}
export default PetsCrud
