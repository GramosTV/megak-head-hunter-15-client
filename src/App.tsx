import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/global.css';
import './style/HrPanel/hrPanel.css';
import './style/HrPanel/AvailableStudents/availableStudents.css';
import './style/HrPanel/AvailableStudents/studentList.css';
import { HrPanel } from './components/HrPanel/HrPanel';

function App() {
  return (
    <div className="App">
      <HrPanel />
    </div>
  );
}

export default App;
