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
import Login from "./assets/Page/Login";
import Sidebar from "./Sidebar";

import "./App.scss";

const Auth = ({ onSignUp, onLogIn, user, userRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("moderator");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <h1>Firebase Role-Based Authentication</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
        <button onClick={() => onSignUp(email, password, role)}>Sign Up</button>
        <button onClick={() => onLogIn(email, password)}>Log In</button>
      </div>
      {user && (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>Your role is: {userRole}</p>
        </div>
      )}

      <div className="section">
      <button className="open-btn" onClick={toggleSidebar}>
        &#9776; Open Sidebar
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
      </div>
    </div>
  );
};


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
