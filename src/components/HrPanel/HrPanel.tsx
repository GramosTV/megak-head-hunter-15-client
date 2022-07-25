import React, { useState } from "react";
import { AvailableStudents } from "./AvailableStudents/AvailableStudents";
import { Filter } from "./AvailableStudents/Filter";
import { ItemsControl } from "./AvailableStudents/ItemsControl";
import { StudentList } from "./AvailableStudents/StudentList";
import { Select } from "./Select";
import {StudentListEnum} from '../../types/enums/studentListEnum'

// any because waiting for student types
export function HrPanel() {
  const [students, setStudents] = useState<any[]>([
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "1234@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "1235@test.pl",
      courseScore: 5,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "1236@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "112354516123234@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "124124512512535@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "123312512512126@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "124124155534@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "12415612341241445@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "123121567731236@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "1231236176772311236@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "1231212341245551232311236@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
    {
      firstName: "Jan2",
      lastName: "Kowalski2",
      email: "1231212331231232311236@test.pl",
      courseScore: 4,
      courseEngagementScore: 3,
      ownProjectScore: 2,
      workInScrumTeamScore: 4,
      preferredWorkPlace: "Biuro",
      targetCity: "Warszawa",
      expectedContractType: "Umowa o pracę",
      expectedNetSalary: 9000,
      AgreementForInternship: false,
      CommercialProgrammingExperienceInMonths: 4,
      expandStudentInfo: false,
    },
  ]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [localStudents, setLocalStudents] = useState(students);
  const [filterState, setFilterState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [studentListType, setStudentListType] = useState<StudentListEnum>(
    StudentListEnum.available
  );
  return (
    <>
      <div className="hrPanel">
        <Filter
          students={students}
          setLocalStudents={setLocalStudents}
          filterState={filterState}
          setFilterState={setFilterState}
          page={page}
          searchValue={searchValue}
          studentListType={studentListType}
        />
        <Select studentListType={studentListType} setStudentListType={setStudentListType}/>
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
