import React, { useState } from "react";
import { toast } from "react-toastify";
import { errorNotif } from "../../../utils/notifications/errorNotif";
import { successNotif } from "../../../utils/notifications/successNotif";
import { warningNotif } from "../../../utils/notifications/warningNotif";

export function Hired() {
  const [areYouSure, setAreYouSure] = useState(false);
  const handleHired = async () => {
    if (!areYouSure) {
      warningNotif("Czy jesteś pewny, że zostałeś zatrudniony?");
      setAreYouSure(true);
      setTimeout(() => {
        setAreYouSure(false);
      }, 5000);
    } else {
      try {
        const res = await fetch("/student/hired", {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.ok) {
          console.log(data);
          successNotif("Gratulacje!");
        } else {
          console.log(data);
          errorNotif('Coś poszło nie tak, spróbuj ponownie.')
        }
      } catch (e) {
        console.log(e);
        errorNotif('Coś poszło nie tak, spróbuj ponownie.')
      }
    }
  };
  return (
    <>
      <div className="centered">
        <h2>Jeśli zostałeś zatrudniony, kliknij w przycisk poniżej</h2>
        <button className="mainBtn" onClick={handleHired}>
          Zatrudniony!
        </button>
      </div>
    </>
  );
}