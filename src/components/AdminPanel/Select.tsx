import React, { Dispatch, SetStateAction } from "react";
import { AdminSectionEnum } from "../../types/enums/AdminSectionEnum";

interface SelectProps {
  adminSection: AdminSectionEnum;
  setAdminSection: Dispatch<SetStateAction<AdminSectionEnum>>;
}

export function Select({ adminSection, setAdminSection }: SelectProps) {
  return (
    <div className="adminPanel__select">
      <div
        className={`adminPanel__option ${!adminSection ? "active" : ""}`}
        onClick={() => setAdminSection(AdminSectionEnum.addHr)}
      >
        Dodaj HR
      </div>
      <div
        className={`adminPanel__option ${adminSection === AdminSectionEnum.importStudents ? "active" : ""}`}
        onClick={() => setAdminSection(AdminSectionEnum.importStudents)}
      >
        Dodaj kursantów
      </div>

      <div
        className={`adminPanel__option ${adminSection === AdminSectionEnum.changePassword ? "active" : ""}`}
        onClick={() => setAdminSection(AdminSectionEnum.changePassword)}
      >
        Zmiana hasła
      </div>
    </div>
  );
}
