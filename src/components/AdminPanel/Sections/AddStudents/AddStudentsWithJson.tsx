import React, { Dispatch, SetStateAction } from 'react'
import JSONPretty from 'react-json-pretty';
import { CreateUserDto } from 'types';
var JSONPrettyMon = require("react-json-pretty/dist/monikai");

interface AddStudentsWithJson {
    jsonInputKey: number;
    setStudents: Dispatch<SetStateAction<CreateUserDto[] | null>>;
}

export function AddStudentsWithJson({jsonInputKey, setStudents}: AddStudentsWithJson) {
  return (
    <div className="addStudents__JSON">
          <h2>Przykład - JSON</h2>
          <JSONPretty
            data={JSON.stringify([
              {
                email: "emaple@example.com",
                courseCompletion: 4,
                courseEngagement: 5,
                projectDegree: 0,
                teamProjectDegree: 1,
                bonusProjectUrls: ["test.com", "test.com"],
              },
              {
                email: "emaple@example2.com",
                courseCompletion: 4,
                courseEngagement: 5,
                projectDegree: 0,
                teamProjectDegree: 1,
                bonusProjectUrls: ["test.com"],
              },
            ])}
            theme={JSONPrettyMon}
          ></JSONPretty>
          <input
            type="file"
            name="file-input2"
            id="file-input2"
            className="file-input__input"
            accept=".json"
            key={jsonInputKey}
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                const fileReader = new FileReader();
                fileReader.readAsText(files[0], "UTF-8");
                fileReader.onload = (e) => {
                  const parsed: CreateUserDto[] = JSON.parse(
                    e.target?.result as string
                  );
                  setStudents(parsed);
                };
              }
            }}
          />
          <label className="file-input__label" htmlFor="file-input2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Dodaj kursantów - JSON</span>
          </label>
        </div>
  )
}

