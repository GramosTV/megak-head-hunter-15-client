import React from "react";

// any because waiting for student types
export function StudentList({ students }: any) {
  return (
    <ul className="studentList">
      {students.map((e: any) => {
        return (
          <li className="studentList__student" key={e.email}>
            <span>{`${e.name} ${e.lastName[0].toUpperCase()}.`}</span>
            <div></div>
          </li>
        );
      })}
    </ul>
  );
}
