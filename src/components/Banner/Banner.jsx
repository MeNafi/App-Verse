import React from "react";
import { FaCheck, FaPowerOff, FaClock, FaTrello } from "react-icons/fa";
import { GiEmptyHourglass, GiCrossedSwords } from "react-icons/gi";
import iphone from "../../assets/iphone.png";

const Banner = () => {
  return (
    <div className="bg-white pt-20">
      {/* --- HERO TEXT SECTION --- */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <h1 className="text-5xl md:text-7xl font-black text-[#1A1919] leading-tight mb-6">
          We Build <br />
          <span className="text-[#8B5CF6]">Productive</span> Apps
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          At AppVerse, we craft innovative apps designed to make everyday life 
          simpler, smarter, and more exciting. Our goal is to turn your ideas 
          into digital experiences that truly make an impact.
        </p>

        {/* --- STORE BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-100 px-8 py-3 rounded-xl hover:shadow-md transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
          </button>
          <button className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-100 px-8 py-3 rounded-xl hover:shadow-md transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
          </button>
        </div>
      </div>

      {/* --- APP SHOWCASE SECTION --- */}
      <div className="relative flex justify-center items-end px-4">
        
        {/* --- LEFT SIDE ICONS (Centered Closer) --- */}
        <div className="absolute left-[28%] md:left-[32%] top-0 bg-[#7FB3D5] p-3 md:p-4 rounded-full text-white shadow-lg animate-bounce hidden lg:block">
          <GiEmptyHourglass size={24} />
        </div>
        <div className="absolute left-[24%] md:left-[28%] top-1/2 -translate-y-1/2 bg-[#2E5984] p-3 md:p-4 rounded-full text-white shadow-lg hidden lg:block">
          <FaCheck size={24} />
        </div>
        <div className="absolute left-[28%] md:left-[32%] bottom-10 bg-[#5D9C59] p-3 md:p-4 rounded-full text-white shadow-lg z-20 hidden lg:block">
          <FaPowerOff size={24} />
        </div>

        {/* iPhone Image - Attached to the bottom section */}
        <div className="relative z-10 w-full max-w-[320px] md:max-w-[380px] translate-y-1">
          <img 
            src={iphone} 
            alt="iPhone Showcase" 
            className="w-full h-auto block drop-shadow-[0_-10px_50px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* --- RIGHT SIDE ICONS (Centered Closer) --- */}
        <div className="absolute right-[28%] md:right-[32%] top-10 bg-[#D35400] p-3 md:p-4 rounded-full text-white shadow-lg animate-pulse hidden lg:block">
          <FaClock size={24} />
        </div>
        <div className="absolute right-[24%] md:right-[28%] top-[45%] bg-[#3F51B5] p-3 md:p-4 rounded-full text-white shadow-lg hidden lg:block">
          <FaTrello size={24} />
        </div>
        <div className="absolute right-[28%] md:right-[32%] bottom-12 bg-[#5DADE2] p-3 md:p-4 rounded-full text-white shadow-lg z-20 hidden lg:block">
          <GiCrossedSwords size={24} />
        </div>
      </div>

     {/* --- STATS SECTION --- */}
      <div className="bg-[#8B5CF6] py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 md:mb-16">
            Trusted By Millions, Built For You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white">
            <StatItem label="Total Downloads" value="29.6B" sub="21% More Than Last Month" />
            <StatItem label="Total Reviews" value="820M" sub="46% More Than Last Month" />
            <StatItem label="Active Apps" value="906K" sub="31 More Will Launch" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component
const StatItem = ({ label, value, sub }) => (
  <div className="flex flex-col items-center">
    <p className="text-purple-100 uppercase text-xs tracking-widest font-bold mb-4">{label}</p>
    <h3 className="text-6xl md:text-7xl font-black mb-4 tracking-tight">{value}</h3>
    <p className="text-purple-200 text-sm font-medium">{sub}</p>
  </div>
);

export default Banner;