import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

// Waiting for shared types from the backend, this is not the final interface
interface FilterSettings {
  courseScore: 1 | 2 | 3 | 4 | 5 | null;
  courseEngagementScore: 1 | 2 | 3 | 4 | 5 | null;
  ownProjectScore: 1 | 2 | 3 | 4 | 5 | null;
  workInScrumTeamScore: 1 | 2 | 3 | 4 | 5 | null;
  preferredWorkPlace: "Biuro" | "Zdalna" | null;
  expectedContractType:
    | "Umowa o pracę"
    | "B2B"
    | "Umowa zlecenie"
    | "Umowa o dzieło"
    | null;
  minNetSalary: number | null;
  maxNetSalary: number | null;
  AgreementForInternship: boolean | null;
  CommercialProgrammingExperienceInMonths: number | null;
}
interface FilterProps {
  setLocalStudents: Dispatch<SetStateAction<any[]>>;
  setFilterFlag: Dispatch<SetStateAction<boolean>>;
  filterState: boolean;
  setFilterState: Dispatch<SetStateAction<boolean>>;
}

export function Filter({ setLocalStudents, setFilterFlag, filterState, setFilterState }: FilterProps) {
  const defaultSettings = {
    courseScore: null,
    courseEngagementScore: null,
    ownProjectScore: null,
    workInScrumTeamScore: null,
    preferredWorkPlace: null,
    expectedContractType: null,
    minNetSalary: null,
    maxNetSalary: null,
    AgreementForInternship: null,
    CommercialProgrammingExperienceInMonths: null,
  };
  const [filterSettings, setFilterSettings] =
    useState<FilterSettings>(defaultSettings);
  const handleFilterChange = (keyName: string, value: any) => {
    setFilterSettings((previousState) => {
      const previousBtn = document?.getElementById(
        keyName + "=" + (previousState as any)[keyName]
      );
      if (previousBtn) (previousBtn.classList as any) = "";
      (previousState as any)[keyName] = value;
      const btn = document?.getElementById(keyName + "=" + value);
      if (btn) (btn.classList as any) = "selectedFilter";
      return previousState;
    });
  };
  const filterStudents = () => {
    setFilterFlag((prevState) => !prevState);
    setTimeout(() => {
      setLocalStudents((students) => {
        return students.filter((student) => {
          if (
            !(filterSettings.courseScore === null) &&
            student.courseScore !== filterSettings.courseScore
          ) {
            return false;
          }
          if (
            !(filterSettings.courseEngagementScore === null) &&
            student.courseEngagementScore !==
              filterSettings.courseEngagementScore
          ) {
            return false;
          }
          if (
            !(filterSettings.ownProjectScore === null) &&
            student.ownProjectScore !== filterSettings.ownProjectScore
          ) {
            return false;
          }
          if (
            !(filterSettings.workInScrumTeamScore === null) &&
            student.workInScrumTeamScore !== filterSettings.workInScrumTeamScore
          ) {
            return false;
          }
          if (
            !(filterSettings.preferredWorkPlace === null) &&
            student.preferredWorkPlace !== filterSettings.preferredWorkPlace
          ) {
            return false;
          }
          if (
            !(filterSettings.expectedContractType === null) &&
            student.expectedContractType !== filterSettings.expectedContractType
          ) {
            return false;
          }
          if (
            !(filterSettings.minNetSalary === null) &&
            student.expectedNetSalary <= Number(filterSettings.minNetSalary)
          ) {
            return false;
          }
          if (
            !(filterSettings.maxNetSalary === null) &&
            student.expectedNetSalary >= Number(filterSettings.maxNetSalary)
          ) {
            return false;
          }
          if (
            !(filterSettings.AgreementForInternship === null) &&
            student.AgreementForInternship !==
              filterSettings.AgreementForInternship
          ) {
            return false;
          }
          if (
            !(
              filterSettings.CommercialProgrammingExperienceInMonths === null
            ) &&
            student.CommercialProgrammingExperienceInMonths !==
              filterSettings.CommercialProgrammingExperienceInMonths
          ) {
            return false;
          }
          return true;
        });
      });
    }, 1);
  };

  const generateBtns = (keyName: string, amount: number, custom?: string[]) => {
    const btnArr = [];
    if (custom && custom?.length >= 1) {
      for (let i = 1; i < custom.length + 1; i++) {
        btnArr.push(
          <button
            key={keyName + "=" + custom[i - 1]}
            id={keyName + "=" + custom[i - 1]}
            onClick={() => handleFilterChange(keyName, custom[i - 1])}
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
            onClick={() => handleFilterChange(keyName, i)}
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

  const handleMinNetSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinSalary(Number(e.target.value));
    handleFilterChange("minNetSalary", Number(e.target.value));
  };
  const handleMaxNetSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxSalary(Number(e.target.value));
    handleFilterChange("maxNetSalary", Number(e.target.value));
  };
  return (
    <div className={filterState ? 'filter' : 'filter disabled'}>
      <div className="filter__container">
        <div>
          <span>Filtrowanie</span>
          <button
            onClick={() => {
                setFilterSettings(defaultSettings);
                Array.from(document.querySelectorAll(".selectedFilter")).forEach(
                  (el) => el.classList.remove("selectedFilter")
                );
            }}
          >
            Wyczyść wszystkie
          </button>
        </div>

        <div className="filter__scores">
          <span>Ocena przejścia kursu</span>
          <div>{generateBtns("courseScore", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena aktywności i zaangażowania na kursie</span>
          <div>{generateBtns("courseEngagementScore", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena kodu w projekcie własnym</span>
          <div>{generateBtns("ownProjectScore", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Ocena pracy w zespole w Scrum</span>
          <div>{generateBtns("workInScrumTeamScore", 5)}</div>
        </div>

        <div className="filter__scores">
          <span>Preferowane miejsce pracy</span>
          <div>
            {generateBtns("preferredWorkPlace", 0, ["Zdalna", "Biuro"])}
          </div>
        </div>

        <div className="filter__scores">
          <span>Oczekiwany typ kontraktu</span>
          <div>
            {generateBtns("expectedContractType", 0, [
              "Umowa o pracę",
              "B2B",
              "Umowa zlecenie",
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
              onClick={() => handleFilterChange("AgreementForInternship", true)}
            >
              Tak
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <br />
            <label
              className="container"
              onClick={() =>
                handleFilterChange("AgreementForInternship", false)
              }
            >
              Nie
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
          </div>
        </div>

        <div className="filter__months">
          <span className="title">
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </span>
          <div>
            <input type="number" placeholder="0 miesięcy" />
          </div>
        </div>
        <div className="filter__cancelOrApply">
          <button
            onClick={() => {
              setFilterState(previousState => !previousState);
              filterStudents();
            }}
          >
            Anuluj
          </button>
          <button onClick={filterStudents}>Pokaż wyniki</button>
        </div>
      </div>
    </div>
  );
}
