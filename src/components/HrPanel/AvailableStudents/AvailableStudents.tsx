import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { FilterSettings } from "types";
import { UserFE } from "src/types/interfaces/UserFE";
import { StudentListEnum } from '../../../types/enums/studentListEnum';
interface AvailableStudentsProps {
  setFilterState: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  studentListType: StudentListEnum;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
  setFilterSettings: Dispatch<SetStateAction<FilterSettings>>;
}
export function AvailableStudents({
  setFilterState,
  searchValue,
  setSearchValue,
  studentListType,
  setIsChanged,
  setFilterSettings,
  
}: AvailableStudentsProps) {
  useEffect(() => {
    setSearchValue('');
  }, [studentListType])
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.currentTarget.value;
    setSearchValue(searchVal);
    setFilterSettings(prev => { return {...prev, firstName: searchValue.split(' ')[0] || null, lastName: searchValue.split(' ')[1] || null } } )
    setIsChanged(prev => !prev)
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
