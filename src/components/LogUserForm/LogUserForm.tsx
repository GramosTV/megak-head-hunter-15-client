import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {

    email: string;
    password: string;
};

export const LogUserForm = () => {
    const { register, handleSubmit } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <input {...register("password")} />
            <input type="submit" />
        </form>
    );
}