import React, { useContext, useState, useEffect } from "react";
import cart_icon from "../Assests/cart_icon.png";
import logo from "../Assests/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('auth-token'));
  const { getTotalCartItems } = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update logged-in state when auth-token changes
    setIsLoggedIn(!!localStorage.getItem('auth-token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setIsLoggedIn(false);
    window.location.replace("/");
  };

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "text-white border-b-2 border-white" // Active menu item style
      : "text-gray-300 hover:text-white transition duration-300";
  };

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-gray-700"
          : "bg-gradient-to-r from-gray-500 to-gray-600"
      } p-3 shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <img src={logo} alt="Shop Logo" className="h-8 w-8 mr-2" />
          ECOMART
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`${getLinkClasses("/")} no-underline`}>
            Shop
          </Link>
          <Link
            to="/mens"
            className={`${getLinkClasses("/mens")} no-underline`}
          >
            Men
          </Link>
          <Link
            to="/womens"
            className={`${getLinkClasses("/womens")} no-underline`}
          >
            Women
          </Link>
          <Link
            to="/kids"
            className={`${getLinkClasses("/kids")} no-underline`}
          >
            Kids
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border border-gray-300 px-3 py-1 rounded-md transition duration-300 bg-gray-600 text-white hover:bg-gray-700 min-w-[80px] text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="border border-gray-300 px-3 py-1 no-underline rounded-md transition duration-300 bg-gray-600 text-white hover:bg-gray-700 min-w-[80px] text-center"
            >
              Login
            </Link>
          )}
          <div className="relative flex-shrink-0">
            <Link to="/cart">
              <img
                src={cart_icon}
                alt="Cart"
                className="w-8 h-8 object-contain transition duration-300"
              />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
              {getTotalCartItems()}
            </span>
          </div>
          <div
            className="md:hidden text-gray-300 hover:text-white ml-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="text-white mb-4" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <Link
            to="/"
            className={`${getLinkClasses(
              "/"
            )} block py-2 transition duration-300 no-underline`}
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            to="/mens"
            className={`${getLinkClasses(
              "/mens"
            )} block py-2 transition duration-300 no-underline`}
            onClick={toggleMenu}
          >
            Men
          </Link>
          <Link
            to="/womens"
            className={`${getLinkClasses(
              "/womens"
            )} block py-2 transition duration-300 no-underline`}
            onClick={toggleMenu}
          >
            Women
          </Link>
          <Link
            to="/kids"
            className={`${getLinkClasses(
              "/kids"
            )} block py-2 transition duration-300 no-underline`}
            onClick={toggleMenu}
          >
            Kids
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block py-2 transition duration-300 bg-gray-600 text-white hover:bg-gray-700 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`${getLinkClasses(
                "/login"
              )} block py-2 transition duration-300`}
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
