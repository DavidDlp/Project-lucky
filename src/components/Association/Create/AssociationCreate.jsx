import React, { useState } from 'react';

import { postAssociations } from '../../../api/apiAssociation';
import {useNavigate} from 'react-router-dom'

const INIT = {
    name: '',
    email: '',
    phone: '',
    address:'',
    city:''
}

const AssociationCreate = () => {

   
    const [association, setAssociation] = useState(INIT)
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        setAssociation({ ...association, [name]: value })
    }

     const submitForm =  (e) => {
        e.preventDefault();
        addAssociation()
    }
    const addAssociation = async () => {
      try {
          const newAssociation = await postAssociations(association)
          if (newAssociation) {
             // alert('Personaje Creado')
             navigate('/associations')
          }
      } catch (error) {
          console.error(error)
      }
  }

    return (
        <>
            <form onSubmit={submitForm}>
                <fieldset>
                    <label>
                        <p>Nombre</p>
                        <input type='text' name='name' value={association.name} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input type='text' name='email' value={association.email} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Telefono</p>
                        <input type='text' name='phone' value={association.phone} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Dirección</p>
                        <input type='text' name='address' value={association.address} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Ciudad</p>
                        <input type='text' name='city' value={association.city} onChange={handleInput} />
                    </label>
                    <div>
                        <button type='submit'>Guardar Asociación</button>
                    </div>
                </fieldset>
            </form>
            <div>
                <p>Nombre: {association.name}</p>
                <p>Email: {association.email}</p>
                <p>Telefono: {association.phone}</p>
                <p>Dirección: {association.address}</p>
                <p>Ciudad: {association.city}</p>
            
                   
            </div>

        </>
    )
}

export default AssociationCreate
