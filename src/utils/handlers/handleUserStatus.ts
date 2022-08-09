import React, {Dispatch, SetStateAction} from "react";
import {toast} from "react-toastify";

export const handleUserStatus = async (
    event: React.MouseEvent<HTMLButtonElement>,
    studentEmail: string,
    address: string,
    setIsChanged: Dispatch<SetStateAction<boolean>>
) => {
    console.log(studentEmail);
    try {
        const res = await fetch(`/hr/${address}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "true",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: studentEmail,
            }),
        });
        const data = await res.json();
        if (data.ok) {
            toast.success(data.message);
            setIsChanged((previousState) => !previousState);
        } else {
            toast.error(data.message);
        }
    } catch (e) {
        console.error(e);
        toast.error('Coś poszło nie tak, spróbuj później!');
    }
}