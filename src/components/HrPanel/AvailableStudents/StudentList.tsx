import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { UserFE } from "src/types/interfaces/UserFE";
import { StudentListEnum } from "../../../types/enums/StudentListEnum";
import {handleUserStatus} from "../../../utils/handlers/handleUserStatus";

interface StudentListProps {
  itemsPerPage: number;
  page: number;
  students: UserFE[];
  setStudents: Dispatch<SetStateAction<UserFE[]>>;
  studentListType: StudentListEnum;
  setStudentCv: Dispatch<UserFE>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}
export function StudentList({
  itemsPerPage,
  page,
  students,
  setStudents,
  studentListType,
  setStudentCv,
  setIsChanged,
}: StudentListProps) {
  const handleExpandStudentInfo = (element: MouseEvent<SVGSVGElement>) => {
    const id = element.currentTarget.id;
    setStudents((previousState: UserFE[]): UserFE[] => {
      return previousState.slice(page - 1, itemsPerPage).map((e: UserFE) => {
        if (e.email === id) {
          return { ...e, expandStudentInfo: !e.expandStudentInfo };
        }
        return e;
      });
    });
  };


  return (
    <ul className="studentList">
      {students
        .map((e: UserFE) => {
          return (
            <li className="studentList__student" key={e.email}>
              {studentListType === StudentListEnum.available ?
              (
                <div className="studentList__studentContainer">
                  <span>
                      {`${e.firstName} ${e.lastName ? e.lastName[0].toUpperCase() + '.' : ''}`}
                  </span>
                  <div className="studentList__panel">
                    <button
                      onClick={(event) => handleUserStatus(event, e.email, 'add-student', setIsChanged)}
                    >Zarezerwuj rozmowę</button>
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
              ) : (
                <div className="studentList__studentContainer">
                  <div className="studentList__studentEntityContainer">
                    <div className="studentList__reservation">
                      Rezerwacja do
                      <br />
                      <strong>
                        {`${e.hrToStudent[0]?.reservedTo}`} r.
                      </strong>
                    </div>
                    <div className="studentList__userData">
                      <img
                          src={e.githubUsername
                            ? `https://github.com/${e.githubUsername}.png`
                            : '/assets/images/example_user.png'
                          }
                          alt=""
                      />
                      <span>
                        {`${e.firstName} ${e.lastName}`}
                      </span>
                    </div>
                  </div>
                  <div className="studentList__panel">
                    <button onClick={() => {
                      setStudentCv(e)
                    }}>Pokaż CV</button>
                    <button
                        onClick={(event) => handleUserStatus(event, e.email, 'remove-student', setIsChanged)}
                    >Brak zainteresowania</button>
                    <button
                        onClick={(event) => handleUserStatus(event, e.email, 'hire-student', setIsChanged)}
                    >Zatrudniony</button>
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
              )}
              {e.expandStudentInfo ? (
                <div className="studentList__info">
                  <div>
                    <p>Ocena przejścia kursu</p>
                    <span>
                      <b>{e.courseCompletion}</b>/5
                    </span>
                  </div>
                  <div>
                    <p>Ocena aktywności i zaangażowania na kursie</p>
                    <span>
                      <b>{e.courseEngagement}</b>/5
                    </span>
                  </div>
                  <div>
                    <p>Ocena kodu w projekcie własnym</p>
                    <span>
                      <b>{e.projectDegree}</b>/5
                    </span>
                  </div>
                  <div>
                    <p>Ocena pracy w zespole w Scrum</p>
                    <span>
                      <b>{e.teamProjectDegree}</b>/5
                    </span>
                  </div>
                  <div>
                    <p>Preferowane miejsce pracy</p>
                    <b>
                      {e.expectedTypeWork}
                    </b>
                  </div>
                  <div>
                    <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                    <span>
                      <b>{e.targetWorkCity}</b>
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
                      <b>{e.expectedSalary} zł</b>
                    </span>
                  </div>
                  <div>
                    <p>
                      Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                    </p>
                    <span>
                      <b>{e.canTakeApprenticeship ? "TAK" : "NIE"}</b>
                    </span>
                  </div>
                  <div>
                    <p>Komercyjne doświadczenie w programowaniu</p>
                    <span>
                      <b>
                        {e.monthsOfCommercialExp ?? 0 + " "}
                        {e.monthsOfCommercialExp === 1
                          ? " miesiąc"
                          : " miesięcy"}
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
