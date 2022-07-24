import React, {useState} from "react";

import './LoginButton.css'

export const Btn = () => {

    const [isDisabled, setDisabled] = useState(false);

    const handleSubmit = () => {
        setDisabled(true);
    }

    return (
        <>
            <button className="LoginButton" onClick={handleSubmit} disabled={isDisabled}>
                Zaloguj się
            </button>
        </>
    );
};

