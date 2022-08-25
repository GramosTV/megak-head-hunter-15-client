import React from "react";
import { CreateUserDto } from "types";
interface CsvTableProps {
  students: CreateUserDto[] | null;
  handleImport: (status: boolean) => Promise<void>;
}
export function CsvTable({ students, handleImport }: CsvTableProps) {
  if (students)
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
                    return <th>bonusProjectUrls/{i}</th>;
                  });
                })()}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr>
                    <td title="email">{student.email}</td>
                    <td title="courseCompletion">{student.courseCompletion}</td>
                    <td title="courseEngagement">{student.courseEngagement}</td>
                    <td title="projectDegree">{student.projectDegree}</td>
                    <td title="teamProjectDegree">
                      {student.teamProjectDegree}
                    </td>
                    {student.bonusProjectUrls?.map((el) => {
                      return <td title="bonusProjectUrl">{el}</td>;
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
  return (
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
  );
}
