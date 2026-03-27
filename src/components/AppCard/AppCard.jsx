import React from "react";
import { HiDownload } from "react-icons/hi"; 
import { AiFillStar } from "react-icons/ai"; 
import { useNavigate } from "react-router-dom"; 

const AppCard = ({ app }) => {
  // Matches your JSON keys: id, title, image, downloads, ratingAvg
  const { id, title, image, downloads, ratingAvg } = app || {};
  const navigate = useNavigate();

  // Short Comment: Formats large numbers to M (Million) or B (Billion)
  const formatDownloads = (num) => {
    if (!num) return "0";
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    return num;
  };

  return (
    /* Card: Navigates to detail page on click */
    <div 
      onClick={() => navigate(`/app/${id}`)}
      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full cursor-pointer group"
    >
      {/* App Image: Zoom effect on hover */}
      <div className="bg-[#F1F5F9] aspect-square rounded-2xl mb-4 overflow-hidden border border-gray-50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* App Title: Now using 'title' from your JSON */}
      <h3 className="text-[#0F172A] font-bold text-sm md:text-base mb-4 line-clamp-1 flex-grow">
        {title}
      </h3>

      {/* Stats Section: Downloads and Rating */}
      <div className="flex justify-between items-center mt-auto pt-2">
        
        {/* Download Badge in Millions */}
        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] md:text-xs font-bold whitespace-nowrap">
          <HiDownload size={14} className="shrink-0" />
          <span>{formatDownloads(downloads)}</span>
        </div>

        {/* Rating Badge: Uses ratingAvg */}
        <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-[10px] md:text-xs font-bold whitespace-nowrap">
          <AiFillStar size={14} className="shrink-0" />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;