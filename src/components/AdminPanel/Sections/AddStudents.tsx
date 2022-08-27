import React, { useRef, useState } from "react";
import Papa from "papaparse";
import JSONPretty from "react-json-pretty";
import { CreateUserDto } from "types";
import { toast } from "react-toastify";
import { CsvTable } from "../Elements/CsvTable";
var JSONPrettyMon = require("react-json-pretty/dist/monikai");
interface PapaResults {
  data: CreateUserDto;
}
export function AddStudents() {
  const [students, setStudents] = useState<CreateUserDto[] | null>(null);
  const handleImport = async (status: boolean) => {
    if (status) {
      const res = await fetch("http://localhost:3000/admin/addStudents", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ students: students }),
      });
      const data = await res.json();
      data.message.forEach((mess: string) => toast.info(mess));
    }
    setStudents(null);
    setJsonInputKey(Date.now());
    setCsvInputKey(Date.now());
  };
  const [jsonInputKey, setJsonInputKey] = useState(Date.now());
  const [csvInputKey, setCsvInputKey] = useState(Date.now());
  return (
    <>
      <div className="addStudents">
        <div className="addStudents__CSV">
          <h2>Przykład - CSV</h2>
          <CsvTable students={null} handleImport={handleImport} />
          {students ? (
            <CsvTable students={students} handleImport={handleImport} />
          ) : null}
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            accept=".csv"
            key={jsonInputKey}
            onChange={(e) => {
              let myRows: CreateUserDto[] = [];
              const files = e.target.files;
              console.log(files);
              if (files) {
                console.log(files[0]);
                Papa.parse(files[0], {
                  download: true,
                  header: true,
                  step: function (row: PapaResults) {
                    if(row.data.email) myRows.push(row.data);
                  },
                  complete: async function (results) {
                    const obj = { students: myRows };
                    obj.students.forEach((e: any) => {
                      e.bonusProjectUrls = [];
                      Object.keys(e).forEach((key: string) => {
                        if (key.startsWith("bonusProjectUrls/")) {
                          e["bonusProjectUrls"].push(e[key]);
                          if (key !== "bonusProjectUrls") delete e[key]
                        } else if (key !== 'email' && key !== 'bonusProjectUrls') {
                          e[key] = +e[key]
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
            key={csvInputKey}
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
      </div>
    </>
  );
}
