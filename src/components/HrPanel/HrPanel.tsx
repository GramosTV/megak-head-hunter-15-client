import React, { useState } from "react";
import { AvailableStudents } from "./AvailableStudents/AvailableStudents";
import { Filter } from "./AvailableStudents/Filter";
import { ItemsControl } from "./AvailableStudents/ItemsControl";
import { StudentList } from "./AvailableStudents/StudentList";
import { Select } from "./Select";
import { StudentListEnum } from "../../types/enums/studentListEnum";
import { Cv } from "./AvailableStudents/Cv";
import { ExpectedTypeWork, ExpectedContractType } from 'types'
import { UserFE } from "src/types/interfaces/UserFE";
import { FilterSettings } from "src/types/interfaces/FilterSettings";
// any because waiting for student types
export function HrPanel() {
  const defaultFilterSettings = {
    courseCompletion: null,
    courseEngagement: null,
    projectDegree: null,
    teamProjectDegree: null,
    expectedTypeWork: null,
    expectedContractType: null,
    minNetSalary: null,
    maxNetSalary: null,
    canTakeApprenticeship: null,
    monthsOfCommercialExp: null,
  };

  const [students, setStudents] = useState<UserFE[]>([
    {
      email: "123111236@test.pl",
      firstName: "Jan2",
      lastName: "Kowalski2",
      tel: 48123123123,
      githubUsername: "Lorem",
      portfolioUrls: ["Lorem"],
      bonusProjectUrls: ["Lorem"],
      bio: "Lorem",
      expectedTypeWork: ExpectedTypeWork.Local,
      targetWorkCity: "Warszawa",
      expectedContractType: ExpectedContractType.B2B,
      expectedSalary: 9000,
      canTakeApprenticeship: false,
      monthsOfCommercialExp: 4,
      education: "Lorem",
      workExperience: "Lorem",
      courses: "Lorem",
      courseWork: ["Lorem"],
      courseCompletion: 4,
      courseEngagement: 3,
      projectDegree: 2,
      teamProjectDegree: 4,
      expandStudentInfo: false,
    },
    {
      email: "123111236@test.pl",
      firstName: "Jan2",
      lastName: "Kowalski2",
      tel: 48123123123,
      githubUsername: "Lorem",
      portfolioUrls: ["Lorem"],
      bonusProjectUrls: ["Lorem"],
      bio: "Lorem",
      expectedTypeWork: ExpectedTypeWork.Local,
      targetWorkCity: "Warszawa",
      expectedContractType: ExpectedContractType.B2B,
      expectedSalary: 9000,
      canTakeApprenticeship: false,
      monthsOfCommercialExp: 5,
      education: "Lorem",
      workExperience: "Lorem",
      courses: "Lorem",
      courseWork: ["Lorem"],
      courseCompletion: 4,
      courseEngagement: 3,
      projectDegree: 2,
      teamProjectDegree: 4,
      expandStudentInfo: false,
    },
  ]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [localStudents, setLocalStudents] = useState<UserFE[]>(students);
  const [filterState, setFilterState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [studentListType, setStudentListType] = useState<StudentListEnum>(
    StudentListEnum.available
  );
  const [studentCv, setStudentCv] = useState<UserFE | null>(null);
  const [filterSettings, setFilterSettings] =
    useState<FilterSettings>(defaultFilterSettings);
  const [filterFlag, setFilterFlag] = useState<boolean>(false)
  return studentCv ? (
    <Cv student={studentCv} setStudentCv={setStudentCv} setFilterFlag={setFilterFlag} />
  ) : (
    <>
      <div className="hrPanel">
        <Filter
          filterSettings={filterSettings}
          setFilterSettings={setFilterSettings}
          defaultFilterSettings={defaultFilterSettings}
          filterFlag={filterFlag}
          students={students}
          setLocalStudents={setLocalStudents}
          filterState={filterState}
          setFilterState={setFilterState}
          page={page}
          searchValue={searchValue}
          studentListType={studentListType}
        />
        <Select
          studentListType={studentListType}
          setStudentListType={setStudentListType}
        />
        <AvailableStudents
          students={students}
          setFilterState={setFilterState}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          studentListType={studentListType}
        />
        <StudentList
          itemsPerPage={itemsPerPage}
          page={page}
          localStudents={localStudents}
          setLocalStudents={setLocalStudents}
          studentListType={studentListType}
          setStudentCv={setStudentCv}
        />
      </div>
      <ItemsControl
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        page={page}
        setPage={setPage}
        studentsLength={localStudents.length}
        studentListType={studentListType}
      />
    </>
  );
}
