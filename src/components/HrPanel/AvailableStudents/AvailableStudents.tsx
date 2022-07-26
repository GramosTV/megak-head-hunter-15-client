import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { StudentListEnum } from '../../../types/enums/studentListEnum';
interface AvailableStudentsProps {
  students: any[];
  setFilterState: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  studentListType: StudentListEnum;
}
export function AvailableStudents({
  students,
  setFilterState,
  searchValue,
  setSearchValue,
  studentListType
  
}: AvailableStudentsProps) {
  useEffect(() => {
    setSearchValue('');
  }, [studentListType])
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
