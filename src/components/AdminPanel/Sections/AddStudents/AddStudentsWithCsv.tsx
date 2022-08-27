import Papa from "papaparse";
import React, { Dispatch, SetStateAction } from "react";
import { CreateUserDto } from "types";
import { CsvTable } from "./CsvTable";

interface AddStudentsWithCsv {
  csvInputKey: number;
  setStudents: Dispatch<SetStateAction<CreateUserDto[] | null>>;
}

interface PapaResults {
  data: CreateUserDto;
}

export function AddStudentsWithCsv({
  csvInputKey,
  setStudents,
}: AddStudentsWithCsv) {
  return (
    <div className="addStudents__CSV">
      <h2>Przykład - CSV</h2>
      <table>
            <thead>
              <tr>
                <th>email</th>
                <th>courseCompletion</th>
                <th>courseEngagement</th>
                <th>projectDegree</th>
                <th>teamProjectDegree</th>
                <th>bonusProjectUrls/0</th>
                <th>bonusProjectUrls/1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td title="email">emaple@example.com</td>
                <td title="courseCompletion">3</td>
                <td title="courseEngagement">2</td>
                <td title="projectDegree">0</td>
                <td title="teamProjectDegree">1</td>
                <td title="bonusProjectUrl">test.com</td>
                <td title="bonusProjectUrl">test.com</td>
              </tr>
              <tr>
                <td title="email">emaple@example2.com</td>
                <td title="courseCompletion">5</td>
                <td title="courseEngagement">4</td>
                <td title="projectDegree">0</td>
                <td title="teamProjectDegree">1</td>
                <td title="bonusProjectUrl">test.com</td>
              </tr>
            </tbody>
          </table>
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        accept=".csv"
        key={csvInputKey}
        onChange={(e) => {
          let myRows: CreateUserDto[] = [];
          const files = e.target.files;
          console.log(files);
          if (files) {
            Papa.parse(files[0], {
              download: true,
              header: true,
              step: function (row: PapaResults) {
                if (row.data.email) myRows.push(row.data);
              },
              complete: async function (results) {
                const obj = { students: myRows };
                obj.students.forEach((e: any) => {
                  e.bonusProjectUrls = [];
                  Object.keys(e).forEach((key: string) => {
                    if (key.startsWith("bonusProjectUrls/")) {
                      e["bonusProjectUrls"].push(e[key]);
                      if (key !== "bonusProjectUrls") delete e[key];
                    } else if (key !== "email" && key !== "bonusProjectUrls") {
                      e[key] = +e[key];
                    }
                  });
                  return e;
                });
                setStudents(obj.students);
              },
            });
          }
        }}
      />
      <label className="file-input__label" htmlFor="file-input">
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
        <span>Dodaj kursantów - CSV</span>
      </label>
    </div>
  );
}
