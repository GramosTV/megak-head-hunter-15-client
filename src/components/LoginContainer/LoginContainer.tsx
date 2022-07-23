import React from "react";
import {Logo} from "../Logo/Logo";

import './LoginContainer.css'
import {LayoutNotLoggedIn} from "../FormNotLoggedIn/FormNotLoggedIn";

export const LoginContainer = () => {

    return (
        <>
            <div className="LoginContainer">
                <Logo/>
                <LayoutNotLoggedIn/>
            </div>
        </>
    );
};
