import React, { Dispatch, SetStateAction } from "react";
import { Status } from "types";
import {StudentListEnum} from '../../types/enums/StudentListEnum'

interface SelectProps {
  studentListType: StudentListEnum;
  setStudentListType: Dispatch<SetStateAction<StudentListEnum>>;
  setStudentStatus: Dispatch<SetStateAction<Status>>;
}

export function Select({studentListType, setStudentListType, setStudentStatus}: SelectProps) {
  return (
  <div className="hrPanel__select">
    <div className={`hrPanel__option ${!studentListType ? "active" : ""}`}
      onClick={() => {
        setStudentListType(StudentListEnum.available)
        setStudentStatus(Status.AVAILABLE);
      }}
    >
    Dostępni Kursanci
    </div>
    <div className={`hrPanel__option ${studentListType ? "active" : ""}`}
       onClick={() => {
         setStudentListType(StudentListEnum.readyToTalk);
        //  setStudentStatus(Status.RESERVED);
       }}
    >
    Do rozmowy
    </div>
  </div>
  );
}
