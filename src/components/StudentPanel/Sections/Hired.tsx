import React, { useState } from "react";
import { toast } from "react-toastify";
import { errorNotif } from "../../../utils/notifications/errorNotif";
import { successNotif } from "../../../utils/notifications/successNotif";
import { warningNotif } from "../../../utils/notifications/warningNotif";
import {useFetch} from "../../../hooks/useFetch";

export function Hired() {
  const [areYouSure, setAreYouSure] = useState(false);
  const {sendReq} = useFetch();
  const handleHired = async () => {
    if (!areYouSure) {
      warningNotif("Czy jesteś pewny, że zostałeś zatrudniony?");
      setAreYouSure(true);
      setTimeout(() => {
        setAreYouSure(false);
      }, 5000);
    } else {
      try {
        const data = await sendReq('student/hired', 'PATCH') as {ok: boolean};
        if (data.ok) {
          successNotif("Gratulacje!");
        } else {
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
