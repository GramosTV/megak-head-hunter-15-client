import React, {useEffect, useState} from "react";
import { AvailableStudents } from "./AvailableStudents/AvailableStudents";
import { Filter } from "./AvailableStudents/Filter";
import { ItemsControl } from "./AvailableStudents/ItemsControl";
import { StudentList } from "./AvailableStudents/StudentList";
import { Select } from "./Select";
import { StudentListEnum } from "../../types/enums/StudentListEnum";
import { Cv } from "./AvailableStudents/Cv";
import { User, GetPaginatedListOfUser, Status} from 'types'
import { UserFE } from "src/types/interfaces/UserFE";
import { FilterSettings } from "types";
import {toast} from "react-toastify";
import {Spinner} from "../common/Spinner";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<UserFE[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [localStudents, setLocalStudents] = useState<UserFE[]>(students);
  const [studentStatus, setStudentStatus] = useState<Status>(
      Status.AVAILABLE
  );
  const [filterSettings, setFilterSettings] =
      useState<FilterSettings>(defaultFilterSettings);
  const [studentListType, setStudentListType] = useState<StudentListEnum>(
      StudentListEnum.available
  );
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [filterState, setFilterState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [studentCv, setStudentCv] = useState<UserFE | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(prevState => !prevState);
        const url = `/student/filtered/${itemsPerPage}/${page}/${studentStatus}/${searchValue.split(' ')[0] || null}/${searchValue.split(' ')[1] || null}/${filterSettings.courseCompletion}/${filterSettings.courseEngagement}/${filterSettings.projectDegree}/${filterSettings.teamProjectDegree}/${filterSettings.expectedTypeWork}/${filterSettings.expectedContractType}/${filterSettings.minNetSalary}/${filterSettings.maxNetSalary}/${filterSettings.canTakeApprenticeship}/${filterSettings.monthsOfCommercialExp}`;
        console.log(url)
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json() as GetPaginatedListOfUser;
          setPagesCount(data.pagesCount);
          setStudents(
              data.users
                .map((user: User) => ({ ...user, expandStudentInfo: false}))
          );
        } else {
          toast.error('Niepoprawne dane wyszukiwania!');
        }
        setIsLoading(prevState => !prevState);
      } catch (e) {
        toast.error('Coś poszło nie tak, spróbuj później!');
        console.error(e);
      }
    })();
  },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        itemsPerPage,
        page,
        studentListType,
        isChanged,
      ]
  );
 

  // if (isLoading) {
  //   return <Spinner/>
  // }

  return studentCv ? (
    <Cv student={studentCv} setStudentCv={setStudentCv} setIsChanged={setIsChanged} />
  ) : (
    <>
      <div className="hrPanel">
        <Filter
          filterSettings={filterSettings}
          setFilterSettings={setFilterSettings}
          defaultFilterSettings={defaultFilterSettings}
          students={students}
          setLocalStudents={setLocalStudents}
          filterState={filterState}
          setFilterState={setFilterState}
          setIsChanged={setIsChanged}
        />
        <Select
          studentListType={studentListType}
          setStudentListType={setStudentListType}
          setStudentStatus={setStudentStatus}
        />
        <AvailableStudents
          setFilterState={setFilterState}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          studentListType={studentListType}
          setIsChanged={setIsChanged}
          setFilterSettings={setFilterSettings}
        />
        <StudentList
          itemsPerPage={itemsPerPage}
          page={page}
          students={students}
          setStudents={setStudents}
          studentListType={studentListType}
          setStudentCv={setStudentCv}
          setIsChanged={setIsChanged}
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
