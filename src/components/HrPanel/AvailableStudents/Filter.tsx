import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FilterSettings } from "src/types/interfaces/FilterSettings";
import { UserFE } from "src/types/interfaces/UserFE";
import { BoolValues, ExpectedContractType, ExpectedTypeWork } from "types";

interface FilterProps {
  filterSettings: FilterSettings;
  setFilterSettings: Dispatch<SetStateAction<FilterSettings>>;
  defaultFilterSettings: FilterSettings;
  students: UserFE[];
  setLocalStudents: Dispatch<SetStateAction<UserFE[]>>;
  filterState: boolean;
  setFilterState: Dispatch<SetStateAction<boolean>>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

export function Filter({
  filterSettings,
  setFilterSettings,
  defaultFilterSettings,
  students,
  setLocalStudents,
  filterState,
  setFilterState,
  setIsChanged,
}: FilterProps) {

  const handleFilterChange = (
    keyName: string,
    value: BoolValues | number | boolean | string | null
  ) => {
    setFilterSettings((previousState) => {
      return { ...previousState, [keyName]: value };
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
  const [minNetSalary, setMinSalary] = useState<number>(
    filterSettings.minNetSalary ? filterSettings.minNetSalary : 0
  );
  const [maxNetSalary, setMaxSalary] = useState<number>(
    filterSettings.maxNetSalary ? filterSettings.maxNetSalary : 0
  );
  const [experienceInMonths, setExperienceInMonths] = useState<number>(
    filterSettings.monthsOfCommercialExp ? filterSettings.monthsOfCommercialExp : 0
  );

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
              setFilterSettings(defaultFilterSettings);
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
            {generateBtns("expectedTypeWork", 0, Object.values(ExpectedTypeWork))}
          </div>
        </div>

        <div className="filter__scores">
          <span>Oczekiwany typ kontraktu</span>
          <div>
            {generateBtns("expectedContractType", 0, Object.values(ExpectedContractType))}
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
            >
              Tak
              <input
                type="radio"
                name="radio"
                onChange={() => handleFilterChange("canTakeApprenticeship", BoolValues.TRUE)}
                checked={filterSettings.canTakeApprenticeship === BoolValues.TRUE}
              />
              <span className="checkmark" />
            </label>
            <br />
            <label
              className="container"
            >
              Nie
              <input
                type="radio"
                name="radio"
                onChange={() => handleFilterChange("canTakeApprenticeship", BoolValues.FALSE)}
                checked={filterSettings.canTakeApprenticeship === BoolValues.FALSE}
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
              setIsChanged((previousState) => !previousState);
            }}
          >
            Pokaż wyniki
          </button>
        </div>
      </div>
    </div>
  );
}
