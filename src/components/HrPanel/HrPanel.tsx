import React, { useState } from 'react'
import { AvailableStudents } from './AvailableStudents/AvailableStudents'
import { StudentList } from './AvailableStudents/Student'
import { Select } from './Select'

// any because waiting for student types
export function HrPanel() {
  const [students, setStudents] = useState<any[]>([
    {
      name: 'Jan',
      lastName: 'Kowalski',
      email: '1234@test.pl',
    },
    {
      name: 'Jan',
      lastName: 'Kowalski',
      email: '1235@test.pl',
    },
    {
      name: 'Jan',
      lastName: 'Kowalski',
      email: '1236@test.pl',
    },
  ])
  return (
    <div className="hrPanel">
        <Select />
        <AvailableStudents />
        <StudentList students={students}/>
    </div>
  )
}