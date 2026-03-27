import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  const formatDownloads = (num) => {
    if (!num) return "0M";
    const n = parseFloat(num);
    if (n >= 1000000000) return (n / 1000000000).toFixed(1) + "B";
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toString();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const singleApp = data.find((item) => item.id === parseInt(id));
        setApp(singleApp);
        if (singleApp) {
          const installed =
            JSON.parse(localStorage.getItem("installed-apps")) || [];
          setIsInstalled(installed.some((item) => item.id === singleApp.id));
        }
        setLoading(false);
      });
  }, [id]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installed-apps")) || [];
    if (isInstalled) return;
    const newInstallList = [...installed, app];
    localStorage.setItem("installed-apps", JSON.stringify(newInstallList));
    setIsInstalled(true);
    toast.success("Successfully Installed!");
  };

  if (loading) return <LoadingSpinner />;
  if (!app)
    return (
      <div className="text-center py-20 text-2xl font-bold">App Not Found</div>
    );

  return (
    <div className="bg-white min-h-screen py-6 md:py-10">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 items-center md:items-start text-center md:text-left">
          {/* App Icon */}
          <div className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-lg shadow-2xl border border-gray-50 flex items-center justify-center p-4 md:p-6 shrink-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 pt-2 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-1">
              {app.title}
            </h1>
            <p className="text-[#6366f1] text-sm font-semibold mb-6 md:mb-8">
              Developed by productive.io
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 mb-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-[#22c55e] mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Downloads
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#1e293b]">
                  {formatDownloads(app.downloads)}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start border-l border-gray-100 pl-6 md:pl-8">
                <div className="text-[#f59e0b] mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Avg Ratings
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#1e293b]">
                  {app.ratingAvg}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start border-l border-gray-100 pl-6 md:pl-8">
                <div className="text-[#6366f1] mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8l-2 2 2 2" />
                    <path d="M17 10h-6" />
                  </svg>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Reviews
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#1e293b]">
                  54K
                </p>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              style={{ backgroundColor: isInstalled ? "#E5E7EB" : "#1DF072" }}
              className={`w-full md:w-auto px-10 py-3 rounded-lg font-bold text-sm transition-all shadow-md ${
                isInstalled
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white opacity-100 hover:brightness-95 active:scale-95"
              }`}
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${app.size >= 1024 ? (app.size / 1024).toFixed(1) + " GB" : app.size + " MB"})`}
            </button>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

      {/* --- RATINGS SECTION --- */}
<div className="mb-12">
    <h3 className="text-xl font-bold text-[#1e293b] mb-6">Ratings</h3>
    <div className="h-64 w-full max-w-4xl bg-gray-50/50 rounded-xl p-2 md:p-4">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                layout="vertical" 
                // Ensuring 5 Star is at the top, 1 Star at the bottom
                data={[...app.ratings].reverse()} 
                margin={{ left: 20, right: 40, top: 0, bottom: 0 }}
            >
                <XAxis type="number" hide />
                <YAxis 
                    dataKey="name" 
                    type="category" 
                    // Formats to "1 Star", "2 Star", etc.
                    tickFormatter={(val) => `${val}`}
                    tick={{
                        fill: '#64748b', 
                        fontSize: 12, 
                        fontWeight: 600,
                        textAnchor: 'end' 
                    }} 
                    axisLine={false} 
                    tickLine={false} 
                    width={90}
                />
                <Tooltip 
                    cursor={{fill: 'rgba(226, 232, 240, 0.4)'}}
                    contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '12px' 
                    }}
                />
                <Bar 
                    dataKey="count" 
                    radius={[0, 4, 4, 0]} 
                    barSize={14}
                >
                    {app.ratings?.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill="#f59e0b" 
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
</div>

        {/* --- DESCRIPTION SECTION --- */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#1e293b] mb-4">Description</h3>
          <p className="text-gray-500 text-[15px] leading-relaxed w-full">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
