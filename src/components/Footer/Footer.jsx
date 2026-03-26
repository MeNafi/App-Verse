import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#001220] text-white py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <img src="/logo-white.png" alt="AppVerse Logo" className="w-6 h-6" />
                    <span className="font-black italic tracking-tighter">APPVERSE</span>
                </div>
                
                <div className="text-center">
                    <p className="text-xs text-gray-400">Copyright © 2026 - All right reserved</p>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Social Links</span>
                    <div className="flex gap-4 text-lg">
                        <FaXTwitter className="cursor-pointer hover:text-[#7B5CF6]" />
                        <FaLinkedin className="cursor-pointer hover:text-[#7B5CF6]" />
                        <FaFacebook className="cursor-pointer hover:text-[#7B5CF6]" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;