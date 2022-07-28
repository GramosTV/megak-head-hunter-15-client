import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fuzzysort from "fuzzysort";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { StudentListEnum } from "src/types/enums/studentListEnum";
import { UserFE } from "src/types/interfaces/UserFE";
import { ExpectedTypeWork, Score } from "types";

// Waiting for shared types from the backend, this is not the final interface
interface FilterSettings {
  courseCompletion: Score | null;
  courseEngagement: Score | null;
  projectDegree: Score | null;
  teamProjectDegree: Score | null;
  expectedTypeWork:
    | "Biuro"
    | "Gotowy do przeprowadzki"
    | "Zdalna"
    | "Biuro i zdalna"
    | "Dowolone"
    | null;
  expectedContractType:
    | "Umowa o pracę"
    | "B2B"
    | "Zlecenie"
    | "Umowa o dzieło"
    | null;
  minNetSalary: number | null;
  maxNetSalary: number | null;
  canTakeApprenticeship: boolean | null;
  monthsOfCommercialExp: number | null;
}
interface FilterProps {
  students: UserFE[];
  setLocalStudents: Dispatch<SetStateAction<UserFE[]>>;
  filterState: boolean;
  setFilterState: Dispatch<SetStateAction<boolean>>;
  page: number;
  searchValue: string;
  studentListType: StudentListEnum;
}

export function Filter({
  students,
  setLocalStudents,
  filterState,
  setFilterState,
  page,
  searchValue,
  studentListType,
}: FilterProps) {
  const defaultSettings = {
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
  useEffect(() => {
    filterStudents();
  }, [page, searchValue]);
  const [filterSettings, setFilterSettings] =
    useState<FilterSettings>(defaultSettings);
  const handleFilterChange = (keyName: string, value: any) => {
    setFilterSettings((previousState) => {
      return { ...previousState, [keyName]: value };
    });
  };

  useEffect(() => {
    setFilterSettings(defaultSettings);
    setMinSalary(0);
    setMaxSalary(0);
    setExperienceInMonths(0);
    setLocalStudents(students);
  }, [studentListType]);
  const filterStudents = () => {
    if (searchValue) {
      setLocalStudents(() => {
        const search = fuzzysort.go(searchValue.split(" ")[0], students, {
          key: "firstName",
        });
        const result = students.filter((o1) => {
          return search.some((o2) => o2.target === o1.firstName);
        });
        const search2 = fuzzysort.go(searchValue.split(" ")[1], students, {
          key: "lastName",
        });
        const result2 = students.filter((o1) => {
          return search2.some((o2) => o2.target === o1.lastName);
        });

        const usersMap = new Map();
        result.forEach((user) => usersMap.set(user.email, user));
        result2.forEach((user) => {
          const exists = usersMap.has(user.email);
          if (!exists) {
            usersMap.set(user.email, user);
          }
        });

        const arr: any[] = [];
        usersMap.forEach((user) => arr.push(user));

        const search3 = fuzzysort.go(searchValue.split(" ")[1], students, {
          key: "firstName",
        });
        const result3 = students.filter((o1) => {
          return search3.some((o2) => o2.target === o1.firstName);
        });
        const search4 = fuzzysort.go(searchValue.split(" ")[0], students, {
          key: "lastName",
        });
        const result4 = students.filter((o1) => {
          return search4.some((o2) => o2.target === o1.lastName);
        });

        const usersMap2 = new Map();
        result3.forEach((user) => usersMap2.set(user.email, user));
        result4.forEach((user) => {
          const exists = usersMap2.has(user.email);
          if (!exists) {
            usersMap2.set(user.email, user);
          }
        });

        const arr2: any[] = [];
        usersMap2.forEach((user) => arr2.push(user));

        const usersMap3 = new Map();
        arr.forEach((user) => usersMap3.set(user.email, user));
        arr2.forEach((user) => {
          const exists = usersMap3.has(user.email);
          if (!exists) {
            usersMap3.set(user.email, user);
          }
        });

        const arr3: any[] = [];
        usersMap3.forEach((user) => arr3.push(user));

        return arr3;
      });
    } else {
      setLocalStudents(students);
    }
    setLocalStudents((previousState) => {
      return previousState.filter((student) => {
        if (
          !(filterSettings.courseCompletion === null) &&
          student.courseCompletion !== filterSettings.courseCompletion
        ) {
          return false;
        }
        if (
          !(filterSettings.courseEngagement === null) &&
          student.courseEngagement !== filterSettings.courseEngagement
        ) {
          return false;
        }
        if (
          !(filterSettings.projectDegree === null) &&
          student.projectDegree !== filterSettings.projectDegree
        ) {
          return false;
        }
        if (
          !(filterSettings.teamProjectDegree === null) &&
          student.teamProjectDegree !== filterSettings.teamProjectDegree
        ) {
          return false;
        }
        if (
          !(filterSettings.expectedTypeWork === null) &&
          (() => {
            switch(student.expectedTypeWork) {
              case 0:
              return 'Biuro'
              case 1:
              return 'Gotowy do przeprowadzki'
              case 2:
              return 'Zdalna'
              case 3:
              return 'Biuro i zdalna'
              case 4:
              return 'Dowolne'
              default:
              return 'Sam nie wiem'
            }
            })() !== filterSettings.expectedTypeWork
        ) {
          return false;
        }
        if (
          !(filterSettings.expectedContractType === null) &&
          (() => {
            switch(student.expectedContractType) {
              case 0:
              return 'Umowa o pracę'
              case 1:
              return 'B2B'
              case 2:
              return 'Zlecenie'
              case 3:
              return 'Umowa o dzieło'
              default:
              return 'Sam nie wiem'
            }
            })() !== filterSettings.expectedContractType
        ) {
          return false;
        }
        if (
          !(filterSettings.minNetSalary === null) &&
          student.expectedSalary <= Number(filterSettings.minNetSalary)
        ) {
          return false;
        }
        if (
          !(filterSettings.maxNetSalary === null) &&
          student.expectedSalary >= Number(filterSettings.maxNetSalary)
        ) {
          return false;
        }
        if (
          !(filterSettings.canTakeApprenticeship === null) &&
          student.canTakeApprenticeship !== filterSettings.canTakeApprenticeship
        ) {
          return false;
        }
        if (
          !(filterSettings.monthsOfCommercialExp === null) &&
          student.monthsOfCommercialExp !== filterSettings.monthsOfCommercialExp
        ) {
          return false;
        }
        return true;
      });
    });
  };

  const generateBtns = (keyName: string, amount: number, custom?: string[]) => {
    const btnArr = [];
    if (custom && custom?.length >= 1) {
      for (let i = 1; i < custom.length + 1; i++) {
        btnArr.push(
          <button
            key={keyName + "=" + custom[i - 1]}
            id={keyName + "=" + custom[i - 1]}
            className={
              filterSettings[keyName as keyof typeof filterSettings] ===
              custom[i - 1]
                ? "selectedFilter"
                : ""
            }
            onClick={() => {
              if (
                filterSettings[keyName as keyof typeof filterSettings] ===
                custom[i - 1]
              ) {
                handleFilterChange(keyName, null);
              } else {
                handleFilterChange(keyName, custom[i - 1]);
              }
            }}
          >
            {custom[i - 1]}
          </button>
        );
      }
      return btnArr;
    } else {
      for (let i = 1; i < amount + 1; i++) {
        btnArr.push(
          <button
            key={keyName + "=" + i}
            id={keyName + "=" + i}
            className={
              filterSettings[keyName as keyof typeof filterSettings] === i
                ? "selectedFilter"
                : ""
            }
            onClick={() => {
              if (
                filterSettings[keyName as keyof typeof filterSettings] === i
              ) {
                handleFilterChange(keyName, null);
              } else {
                handleFilterChange(keyName, i);
              }
            }}
          >
            {i} <FontAwesomeIcon icon={faStar} />
          </button>
        );
      }
      return btnArr.reverse();
    }
  };
  const [minNetSalary, setMinSalary] = useState<number>(0);
  const [maxNetSalary, setMaxSalary] = useState<number>(0);
  const [experienceInMonths, setExperienceInMonths] = useState<number>(0);

  const handleMinNetSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinSalary(Number(e.target.value));
    handleFilterChange("minNetSalary", Number(e.target.value));
  };
  const handleMaxNetSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxSalary(Number(e.target.value));
    handleFilterChange("maxNetSalary", Number(e.target.value));
  };
  const handleExperienceInMonthsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExperienceInMonths(Number(e.target.value));
    handleFilterChange("monthsOfCommercialExp", Number(e.target.value));
  };
  return (
    <div className={filterState ? "filter" : "filter disabled"}>
      <div className="filter__container">
        <div>
          <span>Filtrowanie</span>
          <button
            onClick={() => {
              setFilterSettings(defaultSettings);
              setMinSalary(0);
              setMaxSalary(0);
              setExperienceInMonths(0);
              setLocalStudents(students);
            }}
          >
            Wyczyść wszystkie
          </button>
        </div>

        <div className="filter__scores">
          <span>Ocena przejścia kursu</span>
          <div>{generateBtns("courseCompletion", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena aktywności i zaangażowania na kursie</span>
          <div>{generateBtns("courseEngagement", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena kodu w projekcie własnym</span>
          <div>{generateBtns("projectDegree", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena pracy w zespole w Scrum</span>
          <div>{generateBtns("teamProjectDegree", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Preferowane miejsce pracy</span>
          <div>
            {generateBtns("expectedTypeWork", 0, [
              "Biuro",
              "Gotowy do przeprowadzki",
              "Zdalna",
              "Biuro i zdalna",
              "Dowolone",
            ])}
          </div>
        </div>

        <div className="filter__scores">
          <span>Oczekiwany typ kontraktu</span>
          <div>
            {generateBtns("expectedContractType", 0, [
              "Umowa o pracę",
              "B2B",
              "Zlecenie",
              "Umowa o dzieło",
            ])}
          </div>
        </div>

        <div className="filter__scores">
          <span>Oczekiwane wynagrodzenie miesięczne netto</span>
          <div>
            <label htmlFor="from">Od</label>{" "}
            <input
              id="from"
              type="number"
              placeholder="np. 1000zł"
              value={minNetSalary}
              onChange={handleMinNetSalaryChange}
            />
            <label htmlFor="to">Do</label>{" "}
            <input
              id="to"
              type="number"
              placeholder="np. 10000zł"
              value={maxNetSalary}
              onChange={handleMaxNetSalaryChange}
            />
          </div>
        </div>

        <div className="filter__radio">
          <span>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</span>
          <div>
            <label
              className="container"
              onClick={() => handleFilterChange("canTakeApprenticeship", true)}
            >
              Tak
              <input
                type="radio"
                name="radio"
                checked={filterSettings.canTakeApprenticeship ? true : false}
              />
              <span className="checkmark" />
            </label>
            <br />
            <label
              className="container"
              onClick={() => handleFilterChange("canTakeApprenticeship", false)}
            >
              Nie
              <input
                type="radio"
                name="radio"
                checked={
                  filterSettings.canTakeApprenticeship === false ? true : false
                }
              />
              <span className="checkmark" />
            </label>
          </div>
        </div>

        <div className="filter__months">
          <span className="title">
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </span>
          <div>
            <input
              type="number"
              placeholder="0 miesięcy"
              value={experienceInMonths}
              onChange={handleExperienceInMonthsChange}
            />
          </div>
        </div>
        <div className="filter__cancelOrApply">
          <button
            onClick={() => {
              setFilterState((previousState) => !previousState);
            }}
          >
            Anuluj
          </button>
          <button
            onClick={() => {
              setFilterState((previousState) => !previousState);
              filterStudents();
            }}
          >
            Pokaż wyniki
          </button>
        </div>
      </div>
    </div>
  );
}
