import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BoolValues, ExpectedContractType, ExpectedTypeWork, FilterSettings } from "types";

interface FilterScoresProps {
  filterSettings: FilterSettings;
  handleFilterChange: (keyName: string, value: BoolValues | number | boolean | string | null) => void;
}

export function FilterScores({filterSettings, handleFilterChange}: FilterScoresProps) {
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
  return (
    <>
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
          {generateBtns(
            "expectedContractType",
            0,
            Object.values(ExpectedContractType)
          )}
        </div>
      </div>
    </>
  );
}
