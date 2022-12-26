import React from "react";
import Logo from "../images/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const location = useLocation();
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  const handleShowSidebar = () => {
    // toggle isSidebar state variable
    setIsSidebarOpen((state) => !state);
  };

  return (
    <nav
      className="nav-bar relative mx-auto md:pr-2 md:pl-2 px-2 md:px-8 lg:py-6
    lg:mx-4 sm:px-2 py-2"
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="block">
          <img src={Logo} className="w-[18rem] md:w-[24rem]" alt="" />
        </Link>

        <div
          className={`${isSidebarOpen ? "nav" : ""} hidden md:flex 
            lg:space-x-2 xl:space-x-6 xl:ml-[5rem] md:first-letter:text-base items-center
            pt-[6rem] md:pt-0 gap-[2.5rem] md:gap-0 text-xl font-semibold md:font-normal
            w-[20rem] md:w-[25rem] xl:w-[28rem] lg:text-xl md:text-base
            xl:text-2xl`}
        >
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/BondOffer"
            onClick={handleShowSidebar}
            className="md:hover:text-forestGreen md:pl-5"
          >
            Bond Offer
          </NavLink>
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/DMO"
            onClick={handleShowSidebar}
            className="md:hover:text-forestGreen md:pl-2"
          >
            DMO
          </NavLink>
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/Features"
            onClick={handleShowSidebar}
            className="md:hover:text-forestGreen md:pl-2"
          >
            Features
          </NavLink>

          {/* Mobile Sidebar */}
          {/* Close Icon */}
          <button
            onClick={handleShowSidebar}
            className="block md:hidden focus:outline-none
            absolute top-3 right-2 animate-pulse"
            id="menu-btn"
          >
            <AiOutlineClose className="text-4xl text-red-700" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            onClick={handleShowSidebar}
            className="block absolute md:hidden top-2 left-3"
          >
            <img src={Logo} alt="" className="w-[13rem]" />
          </Link>

          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/login"
            onClick={handleShowSidebar}
            className="md:hidden"
          >
            Login
          </NavLink>
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/signup"
            onClick={handleShowSidebar}
            className="md:hidden"
          >
            Signup
          </NavLink>
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/cart"
            onClick={handleShowSidebar}
            className="md:hidden"
          >
            Cart
          </NavLink>
        </div>

        <div className="flex md:space-x-2 xl:space-x-4 xl:mr-2">
          <Link
            to="/Login"
            className="hidden md:flex items-center md:py-1 px-5 xl:py-4 xl:px-10
             font-semibold mr-3 my-3
          text-forestGreen hover:text-titanWhite bg-transparent hover:border-transparent
            rounded border-forestGreen border hover:bg-forestGreen"
          >
            Login
          </Link>

          {/* checking if you are on Signup path, 
          removing the button if true. */}
          {location.pathname !== `/Signup` ? (
            <Link
              to="/Signup"
              className="hidden md:py-1 px-5 font-semibold text-white 
            bg-black hover:scale-105 transition ease-out md:flex items-center
            rounded xl:py-4 xl:px-10 my-3"
            >
              Signup
            </Link>
          ) : null}

          <Link
            to="/Cart"
            className="hidden relative md:flex text-3xl lg:text-4xl py-4 px-4 mr-2
            hover:text-forestGreen items-center"
          >
            <FiShoppingCart />
            <div
              className="absolute md:top-[0.5rem] md:-right-[-0.5rem] 
              lg:top-[0.5rem] w-[1.3rem] font-semibold xl:top-[0.85rem]
              lg:w-[1.5rem] md:h-[1.3rem] lg:h-[1.5rem] -right-[-0.5rem]
              h-[1.3rem] rounded-[50%] bg-red-700 flex items-center justify-center"
            >
              <p className="text-white mb-0 text-sm">2</p>
            </div>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={handleShowSidebar}
          className="block md:hidden focus:outline-none animate-pulse"
        >
          <GiHamburgerMenu className="text-4xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
