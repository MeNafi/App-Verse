import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaBars } from "react-icons/fa";

const Navbar = () => {
  // Desktop-only active style
  const desktopLinkStyles = ({ isActive }) =>
    isActive
      ? "text-[#7B5CF6] font-bold border-b-2 border-[#7B5CF6] pb-1 transition-all"
      : "text-gray-700 hover:text-[#7B5CF6] transition-all font-medium";

  // Mobile-only active style
  const mobileLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-lg w-full transition-all ${
      isActive
        ? "bg-[#7B5CF6]/10 text-[#7B5CF6] font-bold"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    /* Added shadow-sm and backdrop-blur for a cleaner look */
    <nav className="bg-white/90 backdrop-blur-md py-4 px-4 lg:px-0 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* LEFT: Mobile Menu + Logo */}
        <div className="flex-1 flex items-center justify-start gap-2">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost p-0 mr-2 text-[#7B5CF6]">
              <FaBars className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-2xl w-60 border border-gray-100 gap-1"
            >
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={mobileLinkStyles}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer w-fit transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://img.icons8.com/fluency/48/layers.png"
              alt="Logo"
              className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="font-black text-lg md:text-xl tracking-tighter text-[#7B5CF6]">
              AppVerse
            </span>
          </Link>
        </div>

        {/* CENTER: Desktop Nav */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex items-center gap-10 text-lg">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={desktopLinkStyles}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: GitHub Button */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://github.com/MeNafi"
            target="_blank"
            rel="noreferrer"
            className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-lg px-4 md:px-6 min-h-0 h-11 normal-case gap-2 text-sm transition-all shadow-md hover:shadow-lg"
          >
            <FaGithub className="text-xl" />
            <span className="hidden sm:inline">Contribute</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;