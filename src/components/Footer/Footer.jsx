import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001220] text-white pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer w-fit transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Logo */}
              <img
                src="https://img.icons8.com/fluency/48/layers.png"
                alt="AppVerse Logo"
                className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
              />

              {/* app name and changes slightly on hover */}
              <span className="text-2xl font-black italic tracking-tighter text-[#7B5CF6] transition-all duration-300 group-hover:text-[#6647e0]">
                AppVerse
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              High-quality productive applications designed for your modern
              lifestyle. Making everyday tasks simpler and smarter.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-[#7B5CF6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-[#7B5CF6] transition-colors"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-[#7B5CF6] transition-colors"
                >
                  My Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* App Store Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Download Now</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-[#0a1f2e] border border-gray-800 p-2 rounded-lg hover:border-[#7B5CF6] transition-all group"
              >
                <FaGooglePlay className="text-xl text-gray-400 group-hover:text-[#7B5CF6]" />
                <div>
                  <p className="text-[10px] uppercase text-gray-500">
                    Get it on
                  </p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#0a1f2e] border border-gray-800 p-2 rounded-lg hover:border-[#7B5CF6] transition-all group"
              >
                <FaApple className="text-xl text-gray-400 group-hover:text-[#7B5CF6]" />
                <div>
                  <p className="text-[10px] uppercase text-gray-500">
                    Download on the
                  </p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black px-4 py-3 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-[#7B5CF6] hover:bg-[#6647e0] px-6 py-3 rounded-r-md font-bold transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6 text-xl text-gray-400">
              <FaXTwitter className="hover:text-[#7B5CF6] cursor-pointer" />
              <FaLinkedin className="hover:text-[#7B5CF6] cursor-pointer" />
              <FaFacebook className="hover:text-[#7B5CF6] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026{" "}
            <span className="text-[#7B5CF6] font-semibold">AppVerse</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
