import React, { useState } from "react";

const Login = ({ onSignUp, onLogIn, user, userRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("moderator");

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
    </div>
  );
};

export default Login;
