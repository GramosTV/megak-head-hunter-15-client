import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { HrPanel } from "./components/HrPanel/HrPanel";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";
import "animate.css";
import "./style/global.css";
import "./style/HrPanel/hrPanel.css";
import "./style/HrPanel/AvailableStudents/availableStudents.css";
import "./style/HrPanel/AvailableStudents/itemsControl.css";
import "./style/HrPanel/AvailableStudents/studentList.css";
import "./style/HrPanel/AvailableStudents/filter.css";
import "./style/LoginForm/loginForm.css";
import "./style/AdminPanel/adminPanel.css";
import "./style/AdminPanel/Sections/addHrForm.css";
import "./style/AdminPanel/Sections/addStudents.css";
import 'react-toastify/dist/ReactToastify.css';
import "./style/HrPanel/AvailableStudents/cv.css";
import { AdminPanel } from "./components/AdminPanel/AdminPanel";
import { errorNotif } from "./utils/notifications/errorNotif";
import { ToastContainer } from "react-toastify";


export const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <ProtectedRoute isAllowed={!user}>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </ProtectedRoute>
      <ProtectedRoute isAllowed={!!user && user.role === 'hr'}>
        <Routes>
          <Route path="*" element={<HrPanel />} />
        </Routes>
      </ProtectedRoute>
      <ProtectedRoute isAllowed={!!user && user.role === 'admin'}>
        <Routes>
          <Route path="*" element={<h1>Admin panel placeholder</h1>} />
        </Routes>
      </ProtectedRoute>
    </div>
  );
};
