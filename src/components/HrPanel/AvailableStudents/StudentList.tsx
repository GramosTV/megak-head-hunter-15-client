import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

// any because waiting for student types
interface StudentListProps {
  students: any;
  itemsPerPage: number;
  page: number;
}
export function StudentList({ students, itemsPerPage, page }: StudentListProps) {
  const [localStudents, setLocalStudents] = useState(students)
  useEffect(() => {
    setLocalStudents(students)
  }, [page, students])
  const handleExpandStudentInfo = (element: any) => {
    const id = element.currentTarget.id;
    setLocalStudents((previousState: any): any => {
      return previousState.slice(page - 1, itemsPerPage).map((e: any) => {
        if (e.email === id) {
          return { ...e, expandStudentInfo: !e.expandStudentInfo };
        }
        return e;
      });
    });
  };

  return (
    <ul className="studentList">
      {localStudents.slice(((itemsPerPage * (page - 1)) - 1) <= 0 ? 0 : (itemsPerPage * (page - 1)) - 1, page === 1 ? itemsPerPage * page  : itemsPerPage * page - 1).map((e: any) => {
        return (
          <li className="studentList__student" key={e.email}>
            <div className="studentList__studentContainer">
              <span>{`${e.firstName} ${e.lastName[0].toUpperCase()}.`}</span>
              <div className="studentList__panel">
                <button>Zarezerwuj rozmowę</button>
                {e.expandStudentInfo ? (
                  <FontAwesomeIcon
                    id={e.email}
                    icon={faChevronUp}
                    onClick={handleExpandStudentInfo}
                  />
                ) : (
                  <FontAwesomeIcon
                    id={e.email}
                    icon={faChevronDown}
                    onClick={handleExpandStudentInfo}
                  />
                )}
              </div>
            </div>
            {e.expandStudentInfo ? (
              <div className="studentList__info">
                <div>
                  <p>Ocena przejścia kursu</p>
                  <span>
                    <b>{e.courseScore}</b>/5
                  </span>
                </div>
                <div>
                  <p>Ocena aktywności i zaangażowania na kursie</p>
                  <span>
                    <b>{e.courseEngagementScore}</b>/5
                  </span>
                </div>
                <div>
                  <p>Ocena kodu w projekcie własnym</p>
                  <span>
                    <b>{e.ownProjectScore}</b>/5
                  </span>
                </div>
                <div>
                  <p>Ocena pracy w zespole w Scrum</p>
                  <span>
                    <b>{e.workInScrumTeamScore}</b>/5
                  </span>
                </div>
                <div>
                  <p>Preferowane miejsce pracy</p>
                  <span>
                    <b>{e.preferredWorkPlace}</b>
                  </span>
                </div>
                <div>
                  <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                  <span>
                    <b>{e.targetCity}</b>
                  </span>
                </div>
                <div>
                  <p>Oczekiwany typ kontraktu</p>
                  <span>
                    <b>{e.expectedContractType}</b>
                  </span>
                </div>
                <div>
                  <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                  <span>
                    <b>{e.expectedNetSalary} zł</b>
                  </span>
                </div>
                <div>
                  <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                  <span>
                    <b>{e.AgreementForInternship ? "TAK" : "NIE"}</b>
                  </span>
                </div>
                <div>
                  <p>Komercyjne doświadczenie w programowaniu</p>
                  <span>
                    <b>
                      {e.CommercialProgrammingExperienceInMonths + ' '}
                      {e.CommercialProgrammingExperienceInMonths === 1 ? 'miesiąc' : 'miesięcy'}
                    </b>
                  </span>
                </div>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
