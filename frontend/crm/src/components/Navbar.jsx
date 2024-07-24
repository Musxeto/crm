import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBell, FaCog, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md">
      <h1 className="text-3xl font-bold">CRM</h1>
      <div className="flex space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/accounts" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Accounts
        </NavLink>
        <NavLink 
          to="/contacts" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Contacts
        </NavLink>
        <NavLink 
          to="/deals" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Deals
        </NavLink>
        <NavLink 
          to="/leads" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Leads
        </NavLink>
        <NavLink 
          to="/reports" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Reports
        </NavLink>
        <NavLink 
          to="/analytics" 
          className={({ isActive }) => 
            `text-lg ${isActive ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-500 transition-colors duration-300`
          }
        >
          Analytics
        </NavLink>
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300" aria-label="Notifications" />
        <FaCog className="text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300" aria-label="Settings" />
        <FaUser className="text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300" aria-label="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
