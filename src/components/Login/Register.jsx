import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerUser } from "../../api/Login/apiRegister";

const Register = () => {
  const { register, handleSubmit,formState:{ errors } } = useForm();
  const navigate = useNavigate()


  const submit = (data) => {
    /* console.table(data) */
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("surname",data.surname)
    formData.append("telephone",data.telephone)
    formData.append("email",data.email)
    formData.append("password",data.password)
    formData.append("imgAvatar",data.imgAvatar[0])
    addUser(formData);
  };

  const addUser = async (user) => {
    try {
      const newUser = await registerUser(user);
      if (newUser) {
        navigate("/user/login");
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name"><br/>Name:</label>
        <input type="text" name="name" {...register("name")} />

        <label htmlFor="surname"><br/>Surname:</label>
        <input type="text" name="surname" {...register("surname")} />

        <label htmlFor="telephone"><br/>Phone:</label>
        <input type="text" name="telephone" {...register("telephone")} />

        <label htmlFor="email"><br/>*Email:</label>
        <input type="text" name="email" {...register("email",{required:{value:true, message:"please enter a email!!"}})} />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="imgAvatar"><br/>*Avatar:</label>
        <input type="file" name="imgAvatar" {...register("imgAvatar")} />

        <label htmlFor="password"><br/>*Password:</label>
        <input type="text" name="password" {...register("password",{required:{value:true, message:"please enter a password!!"}})} />
        {errors.password && <span>{errors.password.message}</span>}
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Register;
