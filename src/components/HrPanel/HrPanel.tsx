import React from 'react'
import { AvailableStudents } from './AvailableStudents/AvailableStudents'
import { Select } from './Select'

export function HrPanel() {
  return (
    <div className="hrPanel">
        <Select />
        <AvailableStudents />
    </div>
  )
}