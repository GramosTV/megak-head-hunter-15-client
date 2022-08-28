import { faPaperclip, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UserFE } from "../../../../types/interfaces/UserFE";

interface CvInfoProps {
  student: UserFE;
}

export function CvInfo({ student }: CvInfoProps) {
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
            <b>{student.expectedTypeWork}</b>
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
            <b>{student.expectedContractType}</b>
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
              {student.monthsOfCommercialExp ?? 0 + " "}
              {student.monthsOfCommercialExp === 1 ? " miesiąc" : " miesięcy"}
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
        {generateLinks(student.portfolioUrls ?? [])}
      </section>
      <h2 className="cv__sectionTitle">Projekt w zespole Scrumowym</h2>
      <section className="cv__links">
        {generateLinks(student.bonusProjectUrls ?? [])}
      </section>
      <h2 className="cv__sectionTitle">Projekt na zaliczenie</h2>
      <section className="cv__links">
        {generateLinks(student.courseWork ?? [])}
      </section>
    </div>
  );
}
