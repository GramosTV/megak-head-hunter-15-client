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
            <input {...register("email")} type="email" placeholder="email"/>
            <input {...register("password")} type="password" placeholder="password"/>
            <div className="forgotPassword">
                <div/>
                <a href="/">Zapomniałeś hasła?</a>
            </div>
            <div className="lastLine">
                <a href="#">Nie masz konta? <strong>Zarejestruj się!</strong></a>
                <input className="loginButton" type="submit" value="Zaloguj się!"/>
            </div>

        </form>
    );
}