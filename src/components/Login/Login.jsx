import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/Login/apiLogin";

const Login = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();

  const submit = (data) => {
    signIn(data);
  };

  const signIn = async (user) => {
    try {
      const res = await loginUser(user);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.userInBd));
      if(!res.token){
        alert("WRONG CREDENTIALS")
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email"><br/>email:</label>
        <input type="text" name="email" {...register("email", {required:{value:true, message:"please enter email"}})} />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password"><br/>password:</label>
        <input type="password" name="password" {...register("password",{required:{value:true,message:"please enter password"}})} />
        {errors.password && <span>{errors.password.message}</span>}
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
