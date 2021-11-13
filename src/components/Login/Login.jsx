import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/Login/apiLogin";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    signIn(data);
  };

  const signIn = async (user) => {
    try {
      const tokenVar = await loginUser(user);
      localStorage.setItem("token", tokenVar);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">email:</label>
        <input type="text" name="email" {...register("email")} />

        <label htmlFor="password">password:</label>
        <input type="password" name="password" {...register("password")} />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
