import React from "react";
import Papa from "papaparse";
import JSONPretty from "react-json-pretty";
var JSONPrettyMon = require("react-json-pretty/dist/monikai");

export function AddStudents() {
  return (
    <div className="addStudents">
      <div className="addStudents__CSV">
        <h2>Przykład</h2>
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
              <td title="emaple@example.com">emaple@example.com</td>
              <td title="4">4</td>
              <td title="5">5</td>
              <td title="0">0</td>
              <td title="1">1</td>
              <td title="test.com">test.com</td>
              <td title="test.com">test.com</td>
            </tr>
            <tr>
              <td title="emaple@example2.com">emaple@example2.com</td>
              <td title="4">4</td>
              <td title="5">5</td>
              <td title="0">0</td>
              <td title="1">1</td>
              <td title="test.com">test.com</td>
            </tr>
          </tbody>
        </table>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="file-input__input"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);
            if (files) {
              console.log(files[0]);
              Papa.parse(files[0], {
                complete: function (results) {
                  console.log("Finished:", results.data);
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
        <h2>Przykład</h2>
        <JSONPretty
          data={JSON.stringify([{
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
          }])}
          theme={JSONPrettyMon}
        ></JSONPretty>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="file-input__input"
          accept=".json"
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);
            if (files) {
              console.log(files[0]);
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
          <span>Dodaj kursantów - JSON</span>
        </label>
      </div>
    </div>
  );
}