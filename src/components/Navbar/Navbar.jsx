import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    // Helper for active link styling (purple text + underline)
    const navLinkStyles = ({ isActive }) => 
        isActive 
            ? "text-[#7B5CF6] font-semibold border-b-2 border-[#7B5CF6] pb-1 transition-all" 
            : "text-gray-700 hover:text-[#7B5CF6] transition-all";

    return (
        <nav className="bg-white py-4 px-4 md:px-0 border-b border-gray-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                
                {/* Logo Section */}
                <div className="flex-1">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img 
                            src="https://img.icons8.com/fluency/48/layers.png" 
                            alt="AppVerse Logo" 
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                        <span className="font-black text-xl tracking-tighter text-[#7B5CF6]">
                            APPVERSE
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 hidden md:flex justify-center">
                    <ul className="flex items-center gap-10 text-sm font-medium">
                        <li>
                            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apps" className={navLinkStyles}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to="/installation" className={navLinkStyles}>Installation</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Action Button */}
                <div className="flex-1 flex justify-end">
                    <a 
                        href="https://github.com/nayeefsarkernafi" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-md px-5 min-h-0 h-10 normal-case gap-2"
                    >
                        <FaGithub className="text-lg" />
                        Contribute
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;