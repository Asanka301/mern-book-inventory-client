import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import {
  FaHome,
  FaUpload,
  FaBook,
  FaUsers,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa"; // Importing icons from react-icons library

import { AuthContext } from "../contexts/AuthProvide";

const SideBar = () => {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="sidebar bg-white text-gray-900 w-64 relative min-h-screen ml-3 shadow-md">
      <div className="sidebar-header p-4 ml-2">
        <img
          src={user?.photoURL}
          onClick={handleClick}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xl font-semibold mt-2">
          {user?.displayName || "Demo User"}
        </h2>
      </div>
      <ul className="sidebar-menu mt-8 ml-2">
        <li>
          <Link
            to="/admin/dashboard"
            className="flex  items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaHome className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/upload"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaUpload className="mr-2" /> Upload Book
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/manage"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaBook className="mr-2" /> Manage Books
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaUsers className="mr-2" /> Users
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/products"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaShoppingCart className="mr-2" /> Products
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 text-m hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2" /> Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
