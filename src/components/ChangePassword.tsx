import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { errorNotif } from '../utils/notifications/errorNotif';

type FormInputs = {
  password: string
  repeatPassword: string;
};

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async ({password, repeatPassword}) => {
    if (password !== repeatPassword) errorNotif("Passwords don't match")
    try {
      const res = await fetch('/student/password', {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin":"true",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="centered">
      <form className="studentPanel__form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Zmień hasło</h2>
        <label>Hasło</label>
        <input
          {...register("password", { required: true, maxLength: 255 })}
          type="password"
          placeholder="Hasło"
        />
        {errors.password?.type === "required" && "To pole jest wymagane"}
        {errors.password?.type === "maxLength" && "Za długie"}
        <label>Powtórz hasło</label>
        <input
          {...register("repeatPassword", { required: true, maxLength: 255 })}
          type="password"
          placeholder="Powtórz hasło"
        />
        {errors.repeatPassword?.type === "required" && "To pole jest wymagane"}
        {errors.repeatPassword?.type === "maxLength" && "Za długie"}
        <button type="submit">Zatwierdź</button>
      </form>
      </div>
  )
}
