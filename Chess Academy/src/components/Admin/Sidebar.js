import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin">Reports</Link></li>
        <li><Link to="/admin/users">User management</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
