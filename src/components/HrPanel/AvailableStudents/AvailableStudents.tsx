import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function AvailableStudents() {
  return (
    <div className="availableStudents">
      <div className="availableStudents__input">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Szukaj" />
      </div>
      <div className="availableStudents__filterBtn">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtrowanie</span>
      </div>
    </div>
  );
}
