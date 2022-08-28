import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FilterSettings } from "types";
import { UserFE } from "src/types/interfaces/UserFE";
import { BoolValues, ExpectedContractType, ExpectedTypeWork } from "types";
import { FilterScores } from "./FilterScores";

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
              setIsChanged((previousState) => !previousState);
            }}
          >
            Wyczyść wszystkie
          </button>
        </div>

       <FilterScores filterSettings={filterSettings} handleFilterChange={handleFilterChange}/>

        <div className="filter__scores">
          <span>Oczekiwane wynagrodzenie miesięczne netto</span>
          <div>
            <label htmlFor="from">Od</label>{" "}
            <input
              id="from"
              type="number"
              placeholder="np. 1000zł"
              min={0}
              value={minNetSalary}
              onChange={handleMinNetSalaryChange}
            />
            <label htmlFor="to">Do</label>{" "}
            <input
              id="to"
              type="number"
              placeholder="np. 10000zł"
              min={0}
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
              min={0}
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
