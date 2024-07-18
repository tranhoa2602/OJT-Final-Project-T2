import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { signUp, logIn } from "./assets/Components/Login/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountManagement from "./assets/Components/AccountManagement/AccountManagement";
import PositionManagement from "./assets/Components/PositionManagement/PositionManagement";
import Technology from "./assets/Components/Technology/Technology";
import ProgramingLanguage from "./assets/Components/ProgramingLanguage/ProgramingLanguage";
import Employee from "./assets/Components/Employee/Employee";
import ProjectManagement from "./assets/Components/ProjectManagement/ProjectManagement";
import Login from "./assets/Components/Login/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  // Function to handle sign up
  const handleSignUp = async (email, password, role) => {
    try {
      const user = await signUp(email, password, role);
      setUser(user);
      setUserRole(role);
      console.log("User signed up:", user);
      navigateRole(role);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Function to handle log in
  const handleLogIn = async (email, password) => {
    try {
      const { user, userData } = await logIn(email, password);
      setUser(user);
      setUserData(userData);
      setUserRole(userData.role);
      console.log("User logged in:", user);
      console.log("User data:", userData);
      navigateRole(userData.role);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Function to navigate based on user role
  const navigateRole = (role) => {
    if (role === "Admin") {
      navigate("/account-management");
    } else if (role === "Employee") {
      navigate("/employee");
    }
  };

  useEffect(() => {
    console.log("data", userData);
  }, [userData]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              onSignUp={handleSignUp}
              onLogIn={handleLogIn}
              user={user}
              userRole={userRole}
            />
          }
        />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} /> */}
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/position-management" element={<PositionManagement />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/programing-language" element={<ProgramingLanguage />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/project-management" element={<ProjectManagement />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
