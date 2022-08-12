import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import {
  User,
  GetPaginatedListOfUser,
  Status,
  UserProfile,
  ExpectedTypeWork,
  ExpectedContractType,
  BoolValues,
} from "types";
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
  const [studentProfile, setStudentProfile] = useState<UserProfile>({
    email: "",
    tel: 0,
    firstName: "",
    lastName: "",
    githubUsername: "",
    portfolioUrls: ["ok"],
    projectUrls: ["ok, ok"],
    bio: "",
    expectedTypeWork: ExpectedTypeWork.All,
    targetWorkCity: "",
    expectedContractType: ExpectedContractType.B2B,
    expectedSalary: 0,
    canTakeApprenticeship: BoolValues.FALSE,
    monthsOfCommercialExp: 0,
    education: "",
    workExperience: "",
    courses: "",
  });

  return (
    <div className="studentPanel">
      <Select panelSection={panelSection} setPanelSection={setPanelSection} />
      {panelSection === StudentPanelEnum.profile ? (
        <Profile studentProfile={studentProfile} />
      ) : null}
      {panelSection === StudentPanelEnum.changePassword ? (
        <ChangePassword />
      ) : null}
    </div>
  );
}
