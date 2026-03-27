import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const formatDownloads = (num) => {
    if (!num) return "0M";
    const n = parseFloat(num);
    if (n >= 1000000000) return (n / 1000000000).toFixed(1) + "B";
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toString();
  };

  const handleSort = (type) => {
    setSortBy(type);
    let sortedData = [...installedApps];

    if (type === "size") {
      sortedData.sort((a, b) => b.size - a.size);
    } else if (type === "download") {
      sortedData.sort((a, b) => b.downloads - a.downloads);
    }
    setInstalledApps(sortedData);
  };

  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    localStorage.setItem("installed-apps", JSON.stringify(remainingApps));
    // Toast appears on the top-right as requested
    toast.error("Application Uninstalled Successfully!");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 md:py-12 px-4">
      {/* Toast positioned to the top-right */}
      <Toaster position="top-right" />
      
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-[#1A1919]">
            {installedApps.length} Apps Found
          </h2>
          
          <div className="w-full sm:w-auto">
            <select 
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              // Dynamic border color: light purple (#D8B4FE) when a sort is active
              className={`w-full sm:w-48 bg-white text-gray-600 text-sm rounded-lg block p-2.5 shadow-sm outline-none cursor-pointer border-2 transition-colors ${
                sortBy !== "default" ? "border-[#D8B4FE]" : "border-gray-200"
              }`}
            >
              <option value="default">Sort By: Default</option>
              <option value="size">Sort By: Size</option>
              <option value="download">Sort By: Downloads</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white p-4 md:p-5 rounded-xl flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-100 gap-4"
              >
                <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 p-2">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-base md:text-lg text-[#1A1919] mb-1">
                      {app.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-medium">
                      <div className="flex items-center gap-1 text-[#22C55E]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        <span>{formatDownloads(app.downloads)}</span>
                      </div>

                      <div className="flex items-center gap-1 text-orange-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <span>{app.ratingAvg}</span>
                      </div>

                      <div className="text-gray-400">
                        {app.size >= 1024
                          ? `${(app.size / 1024).toFixed(1)} GB`
                          : `${app.size} MB`}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="w-full md:w-auto bg-[#7EDD9E] hover:bg-[#24ae55] text-white px-8 py-2.5 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-sm"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-semibold italic">Your installation list is currently empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;