import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { signUp, logIn } from "./assets/Login/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountManagement from "./assets/Components/AccountManagement/AccountManagement";
import PositionManagement from "./assets/Components/PositionManagement/PositionManagement";
import Technology from "./assets/Components/Technology/Technology";
import ProgramingLanguage from "./assets/Components/ProgramingLanguage/ProgramingLanguage";
import Employee from "./assets/Components/Employee/Employee";
import ProjectManagement from "./assets/Components/ProjectManagement/ProjectManagement";

const Auth = ({ onSignUp, onLogIn, user, userRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("moderator");

  return (
    <div className="container">
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
        <div className="welcome-message">
          <h2>Welcome, {user.email}</h2>
          <p>Your role is: {userRole}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (email, password, role) => {
    try {
      const user = await signUp(email, password, role);
      setUser(user);
      setUserRole(role);
      console.log("User signed up:", user);
      navigate("/account-management");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleLogIn = async (email, password) => {
    try {
      const { user, userData } = await logIn(email, password);
      setUser(user);
      setUserData(userData);
      console.log("User logged in:", user);
      console.log("User data:", userData);
      navigate("/account-management");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    console.log("data", userData);
  }, [userData]);

  return (
    <div>
      <Auth
        onSignUp={handleSignUp}
        onLogIn={handleLogIn}
        user={user}
        userRole={userRole}
      />
      <Routes>
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
