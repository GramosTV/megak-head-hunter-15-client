import React, { useRef, useState } from "react";
import Papa from "papaparse";
import JSONPretty from "react-json-pretty";
import { CreateUserDto } from "types";
import { toast } from "react-toastify";
import { CsvTable } from "./CsvTable";
import { AddStudentsWithJson } from "./AddStudentsWithJson";
import { AddStudentsWithCsv } from "./AddStudentsWithCsv";
import {useFetch} from "../../../../hooks/useFetch";
var JSONPrettyMon = require("react-json-pretty/dist/monikai");

export function AddStudents() {
  const [students, setStudents] = useState<CreateUserDto[] | null>(null);
  const {sendReq} = useFetch();
  const handleImport = async (status: boolean) => {
    if (status) {
      // const res = await fetch("http://localhost:3000/admin/addStudents", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ students: students }),
      // });
      // const data = await res.json();
      const data = await sendReq('admin/addStudents', 'POST', {
        students: students
      }) as {ok: boolean; message: string[]};
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
        <CsvTable students={students} handleImport={handleImport} />
        <AddStudentsWithCsv
          csvInputKey={csvInputKey}
          setStudents={setStudents}
        />
        <AddStudentsWithJson
          jsonInputKey={jsonInputKey}
          setStudents={setStudents}
        />
      </div>
    </>
  );
}
