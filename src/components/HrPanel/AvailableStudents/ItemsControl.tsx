import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { StudentListEnum } from "src/types/enums/StudentListEnum";

interface ItemsPerPageProps {
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  studentsLength: number;
  studentListType: StudentListEnum;
  pagesCount: number;
}
export function ItemsControl({
  itemsPerPage,
  setItemsPerPage,
  page,
  setPage,
  studentListType,
  pagesCount,
}: ItemsPerPageProps) {

  useEffect(() => {
    setPage(1);
  }, [studentListType, itemsPerPage]);
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
            {page} z {pagesCount}
          </span>
          <button
            className={page === 1 ? "disabled" : ""}
            onClick={() => (page === 1 ? null : handlePageChange(false))}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={
              page === pagesCount
                ? "disabled"
                : ""
            }
            onClick={() =>
              page === pagesCount
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
