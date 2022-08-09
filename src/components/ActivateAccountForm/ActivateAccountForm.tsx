import React, {useContext, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {AuthContext} from "../../Providers/AuthProvider";

type FormInputs = {
  password: string;
  confirmPassword: string;
};

export const ActivateAccountForm = () => {
  const {signIn} = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [missmatchPassword, setMissmatchPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInputs> = async ({password, confirmPassword}) => {
    try {
      if(password !== confirmPassword) {
        setMissmatchPassword(true);
        return;
      }
      console.log(password);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="loginContainer__layoutLoginForm">
          <img className="loginContainer__logo" src="/assets/images/megak_logo.webp" alt="MegaK logo" />
          <h2>Ustaw hasło i aktywuj konto</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("password", { required: true, maxLength: 255, minLength: 6 })} type="password" placeholder="Hasło" />
            {errors.password?.type === "required" && "To pole jest wymagane"}
            {errors.password?.type === "maxLength" && "Hasło może się składać z maksymalnie 255 znaków"}
            {errors.password?.type === "minLength" && "Hasło musi się składać z co najmniej 6 znaków"}
            <input
              {...register("confirmPassword", { required: true, maxLength: 255, minLength: 6 })}
              type="password"
              placeholder="Potwierdź hasło"
            />
            {errors.confirmPassword?.type === "required" && "To pole jest wymagane"}
            {errors.confirmPassword?.type === "maxLength" && "Hasło może się składać z maksymalnie 255 znaków"}
            {errors.confirmPassword?.type === "minLength" && "Hasło musi się składać z co najmniej 6 znaków"}
            {missmatchPassword && 'Hasła powinny być jednakowe!'}
            <div className="lastLine">
              <div></div>
              <button className="loginButton"
                      type="submit">
                Zatwierdź
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};