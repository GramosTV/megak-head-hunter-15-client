import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async ({ email, password }) => {
    try {
      signIn({ login: email, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginContainer__layoutLoginForm">
          <img
            className="loginContainer__logo"
            src="/assets/images/megak_logo.webp"
            alt="MegaK logo"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true, minLength: 3, maxLength: 255 })} type="email" placeholder="E-mail" />
            {errors.email?.type === "required" && "To pole jest wymagane"}
            {errors.email?.type === "minLength" && "Email musi zawierać min. 3 znaki"}
            {errors.email?.type === "maxLength" && "Email może zawierać maks. 255 znaków"}
            <input
              {...register("password", { required: true, minLength: 6, maxLength: 255 })}
              type="password"
              placeholder="Hasło"
            />
            {errors.password?.type === "required" && "To pole jest wymagane"}
            {errors.password?.type === "minLength" && "Hasło musi zawierać min. 6 znaków"}
            {errors.password?.type === "maxLength" && "Hasło może zawierać maks. 255 znaków"}
            <div className="forgotPassword">
              <div />
              <a href="/">Zapomniałeś hasła?</a>
            </div>
            <div className="lastLine">
              <div></div>
              <button className="loginButton" type="submit">
                Zaloguj się!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
