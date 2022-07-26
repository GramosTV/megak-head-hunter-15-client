import React from 'react'
import Papa from 'papaparse';

export function AddStudents() {
  return (
    <div>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function(results) {
                console.log("Finished:", results.data);
              }}
            )
          }
        }}
      />
      <button>Dodaj kursantów</button></div>
  )
}