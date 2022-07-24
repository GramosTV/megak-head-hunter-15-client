import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import fuzzysort from "fuzzysort";
interface AvailableStudentsProps {
  students: any[];
  setFilterState: Dispatch<SetStateAction<boolean>>;
  setLocalStudents: Dispatch<SetStateAction<any[]>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
export function AvailableStudents({
  students,
  setFilterState,
  setLocalStudents,
  searchValue,
  setSearchValue
}: AvailableStudentsProps) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.currentTarget.value;
    setSearchValue(searchVal);
  };
  return (
    <div className="availableStudents">
      <div className="availableStudents__input">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Szukaj"
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
      <button
        onClick={() => setFilterState((previousState) => !previousState)}
        className="availableStudents__filterBtn"
      >
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtrowanie</span>
      </button>
    </div>
  );
}
