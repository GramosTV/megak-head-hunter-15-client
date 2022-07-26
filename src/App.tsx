import React from 'react';

import './App.css';
import './style/global.css';
import './style/HrPanel/hrPanel.css';
import './style/HrPanel/AvailableStudents/availableStudents.css';
import './style/HrPanel/AvailableStudents/itemsControl.css';
import './style/HrPanel/AvailableStudents/studentList.css';
import './style/HrPanel/AvailableStudents/filter.css';
import './style/LoginForm/loginForm.css';
import { HrPanel } from './components/HrPanel/HrPanel';
import { LoginForm } from './components/LoginForm/LoginForm';


export function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

