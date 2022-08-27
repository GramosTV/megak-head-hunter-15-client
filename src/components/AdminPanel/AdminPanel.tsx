import React, { useState } from "react";
import { AdminSectionEnum } from "../../types/enums/AdminSectionEnum";
import { ChangePassword } from "../ChangePassword";
import { AddHrForm } from "./Sections/AddHrForm";
import { AddStudents } from "./Sections/AddStudents/AddStudents";
import { Select } from "./Select";

export function AdminPanel() {
  const [adminSection, setAdminSection] = useState<AdminSectionEnum>(
    AdminSectionEnum.addHr
  );
  return (
    <div className="adminPanel">
      <Select adminSection={adminSection} setAdminSection={setAdminSection} />
      {adminSection === AdminSectionEnum.addHr ? <AddHrForm /> : null}
      {adminSection === AdminSectionEnum.importStudents ? <AddStudents /> : null}
      {adminSection === AdminSectionEnum.changePassword ? <ChangePassword /> : null}
    </div>
  );
}
