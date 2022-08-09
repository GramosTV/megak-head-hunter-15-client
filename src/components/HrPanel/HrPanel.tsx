import React, {useEffect, useState} from "react";
import { AvailableStudents } from "./AvailableStudents/AvailableStudents";
import { Filter } from "./AvailableStudents/Filter";
import { ItemsControl } from "./AvailableStudents/ItemsControl";
import { StudentList } from "./AvailableStudents/StudentList";
import { Select } from "./Select";
import { StudentListEnum } from "../../types/enums/studentListEnum";
import { Cv } from "./AvailableStudents/Cv";
import { User, GetPaginatedListOfUser } from 'types'
import { UserFE } from "src/types/interfaces/UserFE";
import { FilterSettings } from "types";
// any because waiting for student types
export function HrPanel() {
  const defaultFilterSettings = {
    firstName: null,
    lastName: null,
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

  const [students, setStudents] = useState<UserFE[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [localStudents, setLocalStudents] = useState<UserFE[]>(students);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/student/${itemsPerPage}/${page}`);
        if(res.ok) {
          const data = await res.json() as GetPaginatedListOfUser;
          setPagesCount(data.pagesCount);
          setStudents(
              data.users
                .map((user: User) => ({ ...user, expandStudentInfo: false} as UserFE))
          );
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [itemsPerPage, page]);
  const [filterState, setFilterState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [studentListType, setStudentListType] = useState<StudentListEnum>(
    StudentListEnum.available
  );
  const [studentCv, setStudentCv] = useState<UserFE | null>(null);
  const [filterSettings, setFilterSettings] =
    useState<FilterSettings>(defaultFilterSettings);
  const [filterFlag, setFilterFlag] = useState<boolean>(false);

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
          students={students}
          setStudents={setStudents}
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
        pagesCount={pagesCount}
      />
    </>
  );
}
