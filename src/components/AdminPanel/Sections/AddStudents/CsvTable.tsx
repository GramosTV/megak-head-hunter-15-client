import React from "react";
import shortid from "shortid";
import { CreateUserDto } from "types";
interface CsvTableProps {
  students: CreateUserDto[] | null;
  handleImport: (status: boolean) => Promise<void>;
}
export function CsvTable({ students, handleImport }: CsvTableProps) {
  if(students)
    return (
      <div className="preview">
        <div>
          <h2>Podgląd</h2>
          <table>
            <thead>
              <tr>
                <th>email</th>
                <th>courseCompletion</th>
                <th>courseEngagement</th>
                <th>projectDegree</th>
                <th>teamProjectDegree</th>
                {(() => {
                  let max = 0,
                    maxObj: CreateUserDto[] = [];
                  students.forEach(function (item) {
                    if (!item.bonusProjectUrls) return;
                    if (item.bonusProjectUrls.length > max) {
                      max = item.bonusProjectUrls.length;
                      maxObj = [item];
                    } else if (item.bonusProjectUrls.length === max) {
                      maxObj.push(item);
                    }
                  });
                  return maxObj[0]?.bonusProjectUrls?.map((el, i) => {
                    return <th key={shortid.generate()}>bonusProjectUrls/{i}</th>;
                  });
                })()}
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => {
                return (
                  <tr key={shortid.generate()}>
                    <td title="email">{student.email}</td>
                    <td title="courseCompletion">{student.courseCompletion}</td>
                    <td title="courseEngagement">{student.courseEngagement}</td>
                    <td title="projectDegree">{student.projectDegree}</td>
                    <td title="teamProjectDegree">
                      {student.teamProjectDegree}
                    </td>
                    {student.bonusProjectUrls?.map((el) => {
                      return <td key={shortid.generate()} title="bonusProjectUrl">{el}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="mainBtn" onClick={() => handleImport(false)}>Anuluj</button>
          <button className="mainBtn" onClick={() => handleImport(true)}>Zatwierdź</button>
        </div>
      </div>
    );
    return null;
}
