// src/Sidebar.jsx
import React from 'react';
import './sidebar.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <h2>Sidebar</h2>
      <ul>
        <li>Manage Accounts</li>
        <li>Technology</li>
        <li>Languages</li>
        <li>Employee</li>
        <li>Manage Project</li>
        <li>CV</li>
      </ul>
    </div>
  );
};

export default Sidebar;

