import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];
    setInstalledApps(savedApps);
  }, []);

  // Helper function to format downloads (e.g., 9000000 -> 9M)
 const formatDownloads = (num) => {
    if (!num) return "0";
    const n = parseFloat(num);

    // If 1 billion or more
    if (n >= 1000000000) {
        return (n / 1000000000).toFixed(1) + "B";
    }
    // If 1 million or more
    if (n >= 1000000) {
        return (n / 1000000).toFixed(0) + "M";
    }
    // Default for small numbers (like "9")
    return n + "M";

  };
  

  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    localStorage.setItem("installed-apps", JSON.stringify(remainingApps));
    toast.error("Application Uninstalled Successfully!");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-4">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto">
        {/* Header and Sort Logic (omitted for brevity) */}

        <div className="space-y-4 mt-8">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-5 rounded-xl flex items-center justify-between shadow-sm border border-gray-100 gap-4"
            >
              <div className="flex items-center gap-5">
                {/* App Image */}
                <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={app.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* App Info Section */}
                <div>
                  <h4 className="font-bold text-lg text-[#1A1919] mb-2">
                    {app.title}
                  </h4>

                  <div className="flex items-center gap-4 text-sm font-medium">
                    {/* Download Icon + Million Function */}
                    <div className="flex items-center gap-1 text-[#22C55E]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span>{formatDownloads(app.downloads)}</span>
                    </div>

                    {/* Star Icon + Rating */}
                    <div className="flex items-center gap-1 text-orange-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>{app.ratingAvg}</span>
                    </div>

                    {/* Size */}
                    <div className="text-gray-400">
                      {/* If size is 1024 or more, show as GB, otherwise show as MB */}
                      {app.size >= 1024
                        ? `${(app.size / 1024).toFixed(1)} GB`
                        : `${app.size} MB`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#72D394] hover:bg-[#5eb87d] text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;
