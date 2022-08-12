import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import { User, GetPaginatedListOfUser, Status } from "types";
import { UserFE } from "src/types/interfaces/UserFE";
import { FilterSettings } from "types";
import { toast } from "react-toastify";
import { Spinner } from "../common/Spinner";
import { StudentPanelEnum } from "../../types/enums/StudentPanelEnum";
import { Profile } from "./Sections/Profile";
import { ChangePassword } from "./Sections/ChangePassword";

export function StudentPanel() {
  const [panelSection, setPanelSection] = useState<StudentPanelEnum>(
    StudentPanelEnum.profile
  );

  return (
    <div className="studentPanel">
      <Select panelSection={panelSection} setPanelSection={setPanelSection} />
      {panelSection === StudentPanelEnum.profile ? <Profile /> : null}
      {panelSection === StudentPanelEnum.changePassword ? (
        <ChangePassword />
      ) : null}
    </div>
  );
}
