import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

interface ItemsPerPageProps {
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  studentsLength: number;
}
export function ItemsControl({
  itemsPerPage,
  setItemsPerPage,
  page,
  setPage,
  studentsLength,
}: ItemsPerPageProps) {
  const handleChange = (
    value: number,
    selectOptionSetter: Dispatch<SetStateAction<number>>
  ) => {
    selectOptionSetter(value);
  };
  const handlePageChange = (action: boolean) => {
    action ? setPage(page + 1) : setPage(page - 1);
  };
  const options = [
    {
      value: 5,
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
  ];
  return (
    <div className="itemsControl">
      <div className="itemsControl__itemsPerPage">
        Ilość elementów: <b> </b>
        <select
          value={itemsPerPage}
          onChange={(e) =>
            handleChange(Number(e.target.value), setItemsPerPage)
          }
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.value}
            </option>
          ))}
        </select>
      </div>
      <div className="itemsControl__page">
        <div>
          <span>
            {page} z{" "}
            {Math.floor(studentsLength / itemsPerPage)
              ? Math.floor(studentsLength / itemsPerPage) + 1
              : 1}
          </span>
          <button
            className={page === 1 ? "disabled" : ""}
            onClick={() => (page === 1 ? null : handlePageChange(false))}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={
              page ===
              (Math.floor(studentsLength / itemsPerPage)
                ? Math.floor(studentsLength / itemsPerPage) + 1
                : 1)
                ? "disabled"
                : ""
            }
            onClick={() =>
              page ===
              (Math.floor(studentsLength / itemsPerPage)
                ? Math.floor(studentsLength / itemsPerPage) + 1
                : 1)
                ? null
                : handlePageChange(true)
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
