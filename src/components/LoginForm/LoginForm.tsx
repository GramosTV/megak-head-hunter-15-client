import React, {useContext} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {AuthContext} from "../../Providers/AuthProvider";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {signIn} = useContext(AuthContext);
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async ({email, password}) => {
    try {
      signIn({login: email, password});
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="loginContainer__layoutLoginForm">
        <img className="loginContainer__logo" src="/assets/images/megak_logo.webp" alt="MegaK logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email" placeholder="E-mail" />
            <input
              {...register("password")}
              type="password"
              placeholder="Hasło"
            />
            <div className="forgotPassword">
              <div />
              <a href="/">Zapomniałeś hasła?</a>
            </div>
            <div className="lastLine">
              <div></div>
              <button className="loginButton"
                type="submit">
                Zaloguj się!
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
