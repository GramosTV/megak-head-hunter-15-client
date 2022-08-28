import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import { UserFE } from "src/types/interfaces/UserFE";
import {handleUserStatus} from "../../../../utils/handlers/handleUserStatus";
import { CvInfo } from "./CvInfo";

interface CvProps {
  student: UserFE;
  setStudentCv: Dispatch<SetStateAction<UserFE | null>>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

export function Cv({ student, setStudentCv, setIsChanged }: CvProps) {
  return (
    <div className="cv animate__animated animate__fadeInRight">
      <div
        className="cv__goBack"
        onClick={() => {
          setStudentCv(null);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} /> Wróć
      </div>
      <div className="cv__profile">
        <img
          src={`https://github.com/${student.githubUsername}.png`}
          alt="Github profile"
        />
        <span>
          {student.firstName} {student.lastName}
        </span>
        <a href={`https://github.com/${student.githubUsername}`}>
          <FontAwesomeIcon icon={faGithub} />
          {student.githubUsername}
        </a>
        <div className="cv__contact">
          <span>
            <FontAwesomeIcon icon={faPhone} />
            {student.tel}
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            {student.email}
          </span>
        </div>
        <div className="cv__about">
          <span>O mnie</span>
          <p>{student.bio}</p>
        </div>
        <button
            onClick={(event) => {
              handleUserStatus(event, student.email, 'remove-student', setIsChanged)
                  .then(() => setStudentCv(null));
            }}
        >Brak zainteresowania</button>
        <button
            onClick={(event) => {
              handleUserStatus(event, student.email, 'hire-student', setIsChanged)
                  .then(() => setStudentCv(null));
            }}
        >Zatrudniony</button>
      </div>
      <CvInfo student={student}/>
    </div>
  );
}
