import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import './FormNotLoggedIn.css'

type FormInputs = {
    email: string;
    password: string;
};

export const LayoutNotLoggedIn = () => {
    const {register, handleSubmit} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email" placeholder="E-mail"/>
            <input {...register("password")} type="password" placeholder="Hasło"/>
            <div className="forgotPassword">
                <div/>
                <a href="/">Zapomniałeś hasła?</a>
            </div>
            <div className="lastLine">
                <div></div>
                <input className="loginButton" type="submit" value="Zaloguj się!"/>
            </div>

        </form>
    );
}