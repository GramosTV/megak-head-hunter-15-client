import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faAngleLeft,
  faEnvelope,
  faPaperclip,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch } from "react";

interface CvProps {
  student: any;
  setStudentCv: Dispatch<any>;
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
    <div className="cv">
        <div className="cv__goBack" onClick={() => setStudentCv(null)}>
            <FontAwesomeIcon icon={faAngleLeft} /> Wróć
        </div>
      <div className="cv__profile">
        <img src={student.github + ".png"} alt="Github profile" />
        <span>
          {student.firstName} {student.lastName}
        </span>
        <a href={student.github}>
          <FontAwesomeIcon icon={faGithub} />
          {student.github.split("/").pop()}
        </a>
        <div className="cv__contact">
          <span>
            <FontAwesomeIcon icon={faPhone} />
            {student.phone.substring(0, 3) + " " + student.phone.substring(3, 12).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            {student.email}
          </span>
        </div>
        <div className="cv__about">
            <span>O mnie</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
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
              <b>{student.courseScore}</b>/5
              {generateStars(student.courseScore)}
            </span>
          </div>
          <div>
            <p>Ocena aktywności i zaangażowania na kursie</p>
            <span className="score">
              <b>{student.courseEngagementScore}</b>/5
              {generateStars(student.courseEngagementScore)}
            </span>
          </div>
          <div>
            <p>Ocena kodu w projekcie własnym</p>
            <span className="score">
              <b>{student.ownProjectScore}</b>/5
              {generateStars(student.ownProjectScore)}
            </span>
          </div>
          <div>
            <p>Ocena pracy w zespole w Scrum</p>
            <span className="score">
              <b>{student.workInScrumTeamScore}</b>/5
              {generateStars(student.workInScrumTeamScore)}
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
              <b>{student.preferredWorkPlace}</b>
            </span>
          </div>
          <div>
            <p>Docelowe miasto, gdzie chce pracować kandydat</p>
            <span>
              <b>{student.targetCity}</b>
            </span>
          </div>
          <div>
            <p>Oczekiwany typ kontraktu</p>
            <span>
              <b>{student.expectedContractType}</b>
            </span>
          </div>
          <div>
            <p>Oczekiwane wynagrodzenie miesięczne netto</p>
            <span>
              <b>{student.expectedNetSalary} zł</b>
            </span>
          </div>
          <div>
            <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
            <span>
              <b>{student.AgreementForInternship ? "TAK" : "NIE"}</b>
            </span>
          </div>
          <div>
            <p>Komercyjne doświadczenie w programowaniu</p>
            <span>
              <b>
                {student.CommercialProgrammingExperienceInMonths + " "}
                {student.CommercialProgrammingExperienceInMonths === 1
                  ? "miesiąc"
                  : "miesięcy"}
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
          <div className="paragraph">{student.professionalExperience}</div>
        </section>

        <h2 className="cv__sectionTitle">Portfolio</h2>
        <section className="cv__links">
          {generateLinks(student.portfolio)}
        </section>
        <h2 className="cv__sectionTitle">Projekt w zespole Scrumowym</h2>
        <section className="cv__links">
          {generateLinks(student.projectInScrumTeam)}
        </section>
        <h2 className="cv__sectionTitle">Projekt na zaliczenie</h2>
        <section className="cv__links">
          {generateLinks(student.coursework)}
        </section>
      </div>
    </div>
  );
}
