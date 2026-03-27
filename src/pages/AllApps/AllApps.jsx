import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import { HiSearch } from "react-icons/hi";
import LoadingSpinner from "../../components/Shared/LoadingSpinner"; // Import the spinner

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Initial page load state
  const [isSearching, setIsSearching] = useState(false); // Search operation state

  useEffect(() => {
    setLoading(true);
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        console.error("Error loading apps:", err);
        setLoading(false);
      });
  }, []);

  // Handle Search with animation
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);

    // Simulate a brief processing time for the search animation
    setTimeout(() => {
      setIsSearching(false);
    }, 400);
  };

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If the initial page is loading, show the spinner
  if (loading) {
    return <LoadingSpinner message="Loading Applications..." />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1919] mb-4 tracking-tight">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* --- SEARCH & INFO BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-[#1A1919]">
            <span className="text-[#8B5CF6]">({filteredApps.length})</span> Apps Found
          </h3>

          <div className="relative w-full md:max-w-md">
            <HiSearch 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={22} 
            />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-12 pr-6 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#8B5CF6]/10 focus:border-[#8B5CF6] transition-all bg-[#F9FAFB] text-sm md:text-base"
              value={searchTerm}
              onChange={handleSearch} // Use the new handleSearch function
            />
          </div>
        </div>

        {/* --- APPS GRID OR LOADING STATE --- */}
        {isSearching ? (
          <LoadingSpinner message="Searching Apps..." />
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <img 
              src="https://img.icons8.com/ios/100/7B5CF6/sad-cloud.png" 
              alt="No results" 
              className="mx-auto mb-4 opacity-30 w-16 md:w-24"
            />
            <p className="text-gray-500 text-lg md:text-xl font-semibold">
              No apps found matching "{searchTerm}"
            </p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-4 text-[#8B5CF6] font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;