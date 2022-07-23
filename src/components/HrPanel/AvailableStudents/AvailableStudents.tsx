import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

interface AvailableStudentsProps {
  setFilterState: Dispatch<SetStateAction<boolean>>
}
export function AvailableStudents({setFilterState}: AvailableStudentsProps) {
  return (
    <div className="availableStudents">
      <div className="availableStudents__input">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Szukaj" />
      </div>
      <button onClick={() => setFilterState(previousState => !previousState)}className="availableStudents__filterBtn">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtrowanie</span>
      </button>
    </div>
  );
}
