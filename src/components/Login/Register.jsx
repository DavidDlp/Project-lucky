import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/Login/apiRegister";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    addUser(data);
  };

  const addUser = async (user) => {
    try {
      const newUser = await registerUser(user);
      return newUser;
      /* if(newUser){
                navigate('/...')
            } */
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" {...register("name")} />

        <label htmlFor="surname">Surname:</label>
        <input type="text" name="surname" {...register("surname")} />

        <label htmlFor="DNI">DNI:</label>
        <input type="text" name="DNI" {...register("DNI")} />

        <label htmlFor="telephone">Telephone:</label>
        <input type="text" name="telephone" {...register("telephone")} />

        <label htmlFor="street">Street:</label>
        <input type="text" name="street" {...register("street")} />

        <label htmlFor="city">City:</label>
        <input type="text" name="city" {...register("city")} />

        <label htmlFor="pc">Postal code:</label>
        <input type="text" name="pc" {...register("pc")} />

        <label htmlFor="imgAvatar">Avatar:</label>
        <input type="text" name="imgAvatar" {...register("imgAvatar")} />

        <label htmlFor="email">email:</label>
        <input type="text" name="email" {...register("email")} />

        <label htmlFor="password">password:</label>
        <input type="text" name="password" {...register("password")} />

        <label htmlFor="role">role:</label>
        <input type="text" name="role" {...register("role")} />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Register;
