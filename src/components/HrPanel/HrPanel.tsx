import React, { useState } from "react";
import { AvailableStudents } from "./AvailableStudents/AvailableStudents";
import { Filter } from "./AvailableStudents/Filter";
import { ItemsControl } from "./AvailableStudents/ItemsControl";
import { StudentList } from "./AvailableStudents/StudentList";
import { Select } from "./Select";
import { StudentListEnum } from "../../types/enums/studentListEnum";
import { Cv } from "./AvailableStudents/Cv";

// any because waiting for student types
export function HrPanel() {
  const [students, setStudents] = useState<any[]>([
    {
      firstName: "Jan2",
      lastName: "Kowalski2",
      email: "123111236@test.pl",
      phone: '+48123123123',
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
      education:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      courses:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      professionalExperience:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      portfolio: ["https://Loremipsum/dolor/sit/amet"],
      projectInScrumTeam: [
        "https://github.com/Ami777/MegaKursTest/commits?author=Ami777",
        "https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777",
      ],
      coursework: [
        "https://Loremipsum/dolor/sit/amet",
        "https://Loremipsum/dolor/sit/amet",
      ],
      github: 'https://github.com/Ami777'
    },
    {
      firstName: "Jan2",
      lastName: "Kowalski2",
      email: "1231111236@test.pl",
      phone: '+48123123123',
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
      education:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      courses:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      professionalExperience:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      portfolio: ["https://Loremipsum/dolor/sit/amet"],
      projectInScrumTeam: [
        "https://github.com/Ami777/MegaKursTest/commits?author=Ami777",
        "https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777",
      ],
      coursework: [
        "https://Loremipsum/dolor/sit/amet",
        "https://Loremipsum/dolor/sit/amet",
      ],
      github: 'https://github.com/Ami777'
    },
    {
      firstName: "Jan2",
      lastName: "Kowalski2",
      email: "1234111236@test.pl",
      phone: '+48123123123',
      courseScore: 3,
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
      education:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      courses:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      professionalExperience:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      portfolio: ["https://Loremipsum/dolor/sit/amet"],
      projectInScrumTeam: [
        "https://github.com/Ami777/MegaKursTest/commits?author=Ami777",
        "https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777",
      ],
      coursework: [
        "https://Loremipsum/dolor/sit/amet",
        "https://Loremipsum/dolor/sit/amet",
      ],
      github: 'https://github.com/Ami777'
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
  const [studentCv, setStudentCv] = useState<any>(null);
  return studentCv ? (
    <Cv student={studentCv} setStudentCv={setStudentCv} />
  ) : (
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
