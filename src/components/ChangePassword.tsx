import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { successNotif } from '../utils/notifications/successNotif';
import { errorNotif } from '../utils/notifications/errorNotif';
import {useFetch} from "../hooks/useFetch";

type FormInputs = {
  password: string
  repeatPassword: string;
};

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const {sendReq} = useFetch();

  const onSubmit: SubmitHandler<FormInputs> = async ({password, repeatPassword}) => {
    if (password !== repeatPassword) {
      errorNotif("Hasła są różne.");
      return;
    }
    try {
      // const data = await fetch('/student/password', {
      //   method: 'PATCH',
      //   mode: 'cors',
      //   headers: {
      //     "Access-Control-Allow-Origin":"true",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     password,
      //   }),
      // });
      const data = await sendReq('student/password', 'PATCH', {
            password,
          }) as {ok: boolean; message: string};
      if(data.ok) {
        successNotif(data.message);
      } else {
        errorNotif(data.message);
      }
    } catch (e) {
      console.log(e);
      errorNotif('Coś poszło nie tak, spróbuj ponownie.');
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
