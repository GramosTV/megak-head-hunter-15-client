import React, {Dispatch, SetStateAction, useContext} from "react";
import { Status } from "types";
import {StudentListEnum} from '../../types/enums/studentListEnum'
import {AuthContext} from "../../Providers/AuthProvider";

interface SelectProps {
  studentListType: StudentListEnum;
  setStudentListType: Dispatch<SetStateAction<StudentListEnum>>;
  setStudentStatus: Dispatch<SetStateAction<Status>>;
  setHrEmail: Dispatch<SetStateAction<string | null>>;
}

export function Select({studentListType, setStudentListType, setStudentStatus, setHrEmail}: SelectProps) {
  const {user} = useContext(AuthContext);

  return (
  <div className="hrPanel__select">
    <div className={`hrPanel__option ${!studentListType ? "active" : ""}`}
      onClick={() => {
        setStudentListType(StudentListEnum.available)
        setStudentStatus(Status.AVAILABLE);
        setHrEmail(null);
      }}
    >
    Dostępni Kursanci
    </div>
    <div className={`hrPanel__option ${studentListType ? "active" : ""}`}
       onClick={() => {
         setStudentListType(StudentListEnum.readyToTalk);
         setStudentStatus(Status.AVAILABLE);
         setHrEmail(user!.email);
       }}
    >
    Do rozmowy
    </div>
  </div>
  );
}
