import React, { Dispatch, SetStateAction } from "react";
import { StudentPanelEnum } from "../../types/enums/StudentPanelEnum";
import { Status } from "types";

interface SelectProps {
  panelSection: StudentPanelEnum;
  setPanelSection: Dispatch<SetStateAction<StudentPanelEnum>>;
}

export function Select({ panelSection, setPanelSection }: SelectProps) {
  return (
    <div className="studentPanel__select">
      <div
        className={`studentPanel__option ${!panelSection ? "active" : ""}`}
        onClick={() => {
          setPanelSection(StudentPanelEnum.profile);
        }}
      >
        Profil
      </div>

      <div
        className={`studentPanel__option ${
          panelSection === StudentPanelEnum.hired ? "active" : ""
        }`}
        onClick={() => {
          setPanelSection(StudentPanelEnum.hired);
        }}
      >
        Zatrudniony?
      </div>

      <div
        className={`studentPanel__option ${
          panelSection === StudentPanelEnum.changePassword ? "active" : ""
        }`}
        onClick={() => {
          setPanelSection(StudentPanelEnum.changePassword);
        }}
      >
        Zmiana hasła
      </div>
    </div>
  );
}
