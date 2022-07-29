import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faEnvelope,
  faPaperclip,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import { UserFE } from "src/types/interfaces/UserFE";

interface CvProps {
  student: UserFE;
  setStudentCv: Dispatch<SetStateAction<UserFE | null>>;
}

export function Cv({ student, setStudentCv }: CvProps) {
  const generateStars = (score: number) => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      console.log(i > score);
      arr.push(
        <FontAwesomeIcon icon={faStar} className={i >= score ? "" : "filled"} />
      );
    }
    return arr;
  };
  const generateLinks = (links: string[]) => {
    return links.map((link) => (
      <a href={link}>
        <FontAwesomeIcon icon={faPaperclip} />
        {link}
      </a>
    ));
  };
  return (
    <div className="cv animate__animated animate__fadeInRight">
      <div className="cv__goBack" onClick={() => setStudentCv(null)}>
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
          {`https://github.com/${student.githubUsername}`.split("/").pop()}
        </a>
        <div className="cv__contact">
          <span>
            <FontAwesomeIcon icon={faPhone} />
            {`+${String(student.tel).substring(0, 2)} ${String(student.tel)
              .substring(2, 11)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
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
        <button>Brak zainteresowania</button>
        <button>Zatrudniony</button>
      </div>
      <div className="cv__info">
        <h2 className="cv__sectionTitle">Oceny</h2>
        <section>
          <div>
            <p>Ocena przejścia kursu</p>
            <span className="score">
              <b>{student.courseCompletion}</b>/5
              {generateStars(student.courseCompletion)}
            </span>
          </div>
          <div>
            <p>Ocena aktywności i zaangażowania na kursie</p>
            <span className="score">
              <b>{student.courseEngagement}</b>/5
              {generateStars(student.courseEngagement)}
            </span>
          </div>
          <div>
            <p>Ocena kodu w projekcie własnym</p>
            <span className="score">
              <b>{student.projectDegree}</b>/5
              {generateStars(student.projectDegree)}
            </span>
          </div>
          <div>
            <p>Ocena pracy w zespole w Scrum</p>
            <span className="score">
              <b>{student.teamProjectDegree}</b>/5
              {generateStars(student.teamProjectDegree)}
            </span>
          </div>
        </section>
        <h2 className="cv__sectionTitle">
          Oczekiwanie w stosunku do zatrudnienia
        </h2>
        <section>
          <div>
            <p>Preferowane miejsce pracy</p>
            <span>
              <b>
                {(() => {
                  switch (student.expectedTypeWork) {
                    case 0:
                      return "Biuro";
                    case 1:
                      return "Gotowy do przeprowadzki";
                    case 2:
                      return "Zdalna";
                    case 3:
                      return "Biuro i zdalna";
                    case 4:
                      return "Dowolne";
                    default:
                      return "Sam nie wiem";
                  }
                })()}
              </b>
            </span>
          </div>
          <div>
            <p>Docelowe miasto, gdzie chce pracować kandydat</p>
            <span>
              <b>{student.targetWorkCity}</b>
            </span>
          </div>
          <div>
            <p>Oczekiwany typ kontraktu</p>
            <span>
              <b>
                {(() => {
                  switch (student.expectedContractType) {
                    case 0:
                      return "Umowa o pracę";
                    case 1:
                      return "B2B";
                    case 2:
                      return "Zlecenie";
                    case 3:
                      return "Umowa o dzieło";
                    default:
                      return "Sam nie wiem";
                  }
                })()}
              </b>
            </span>
          </div>
          <div>
            <p>Oczekiwane wynagrodzenie miesięczne netto</p>
            <span>
              <b>{student.expectedSalary} zł</b>
            </span>
          </div>
          <div>
            <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
            <span>
              <b>{student.canTakeApprenticeship ? "TAK" : "NIE"}</b>
            </span>
          </div>
          <div>
            <p>Komercyjne doświadczenie w programowaniu</p>
            <span>
              <b>
                {student.monthsOfCommercialExp + " "}
                {student.monthsOfCommercialExp === 1 ? "miesiąc" : "miesięcy"}
              </b>
            </span>
          </div>
        </section>
        <h2 className="cv__sectionTitle">Edukacja</h2>
        <section>
          <div className="paragraph">{student.education}</div>
        </section>
        <h2 className="cv__sectionTitle">Kursy</h2>
        <section>
          <div className="paragraph">{student.courses}</div>
        </section>
        <h2 className="cv__sectionTitle">Doświadczenie zawodowe</h2>
        <section>
          <div className="paragraph">{student.workExperience}</div>
        </section>

        <h2 className="cv__sectionTitle">Portfolio</h2>
        <section className="cv__links">
          {generateLinks(student.portfolioUrls)}
        </section>
        <h2 className="cv__sectionTitle">Projekt w zespole Scrumowym</h2>
        <section className="cv__links">
          {generateLinks(student.bonusProjectUrls)}
        </section>
        <h2 className="cv__sectionTitle">Projekt na zaliczenie</h2>
        <section className="cv__links">
          {generateLinks(student.courseWork)}
        </section>
      </div>
    </div>
  );
}
