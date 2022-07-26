import React from "react";
import {LoginContainer} from "../LoginContainer/LoginContainer";

import './LayoutNotLoggedIn.css'


export const LayoutNotLoggedIn = () => {

    return (
        <>
            <div className="LayoutNotLoggedIn">
                <LoginContainer/>

            </div>
        </>
    );
};
