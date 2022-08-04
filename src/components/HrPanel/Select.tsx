import React, { Dispatch, SetStateAction } from "react";
import {StudentListEnum} from '../../types/enums/studentListEnum'

interface SelectProps {
  studentListType: StudentListEnum;
  setStudentListType: Dispatch<SetStateAction<StudentListEnum>>;
}

export function Select({studentListType, setStudentListType}: SelectProps) {
  return (
  <div className="hrPanel__select">
    <div className={`hrPanel__option ${!studentListType ? "active" : ""}`} onClick={() => setStudentListType(StudentListEnum.available)}>
    Dostępni Kursanci
    </div>
    <div className={`hrPanel__option ${studentListType ? "active" : ""}`} onClick={() => setStudentListType(StudentListEnum.readyToTalk)}>
    Do rozmowy
    </div>
  </div>
  );
}
