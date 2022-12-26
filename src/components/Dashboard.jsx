import React from "react";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context";
import { AiOutlineClose } from "react-icons/ai";

function Dashboard() {
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
        <Link to="/">
          <img src={Logo} className="w-[18rem] md:w-[24rem]" alt="" />
        </Link>

        <div
          className={`${isSidebarOpen ? "nav" : ""} hidden md:flex 
            lg:space-x-2 xl:space-x-6 xl:ml-15 md:first-letter:text-base items-center
            pt-[6rem] md:pt-0 gap-[2.5rem] md:gap-0 text-xl font-semibold md:font-normal
            w-[20rem] md:w-[25rem] xl:w-[30rem] lg:text-xl md:text-base
            xl:text-2xl`}
        >
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/bondOffer"
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
            to="/portfolio"
            onClick={handleShowSidebar}
            className="md:hover:text-forestGreen md:pl-2"
          >
            Portfolio
          </NavLink>
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/notification"
            onClick={handleShowSidebar}
            className="md:hover:text-forestGreen md:pl-2"
          >
            Notification
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
            to="/user"
            onClick={handleShowSidebar}
            className="md:hidden"
          >
            User
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
          <NavLink
            end
            activeclassname="active"
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bolder" : "" };
            }}
            to="/logout"
            onClick={handleShowSidebar}
            className="md:hidden"
          >
            Logout
          </NavLink>
        </div>

        <div className="flex md:space-x-8">
          <Link
            to="/user"
            className="hidden md:block py-3 px-6 font-semibold text-black 
            hover:scale-105 transition ease-out text-4xl"
          >
            <FiUser />
          </Link>

          <Link
            to="/cart"
            className="hidden relative md:flex text-3xl lg:text-4xl py-4 px-4 mr-2
            hover:text-forestGreen items-center"
          >
            <FiShoppingCart />
            <div
              className="absolute md:top-[0.5rem] md:-right-[-0.5rem] 
              lg:top-[0.5rem] w-[1.3rem] font-semibold xl:top-[0.55rem]
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

export default Dashboard;
