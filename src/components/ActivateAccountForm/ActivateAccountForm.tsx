import React, {useContext, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {AuthContext} from "../../Providers/AuthProvider";
import {useNavigate, useParams} from "react-router-dom";

type FormInputs = {
  password: string;
  confirmPassword: string;
};

export const ActivateAccountForm = () => {
  const {activateAccount} = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [mismatchPassword, setMismatchPassword] = useState<boolean>(false);
  const {userId, activationToken} = useParams<string>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async ({password, confirmPassword}) => {
    try {
      if(password !== confirmPassword) {
        setMismatchPassword(true);
        return;
      }
      if(!userId || !activationToken) {
        navigate('/');
      } else {
        await activateAccount(userId, activationToken, password);
        navigate('/');
      }
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
            {mismatchPassword && 'Hasła powinny być jednakowe!'}
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