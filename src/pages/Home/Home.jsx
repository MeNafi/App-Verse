import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import AppCard from "../../components/AppCard/AppCard";

const Home = () => {
    const [apps, setApps] = useState([]);
    // State to track how many items to show (Starts at 12)
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => setApps(data))
            .catch((err) => console.error(err));
    }, []);

    // Function to show next 12 apps
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Navbar stays static at top (assuming it's in your Layout) */}
            <Banner />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-2">Trending Apps</h2>
                    <p className="text-gray-500">Explore our top productivity tools</p>
                </div>

                {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Slice from 0 to current visibleCount */}
                    {apps.slice(0, visibleCount).map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

                {/* Show Button only if there are more apps to load */}
                {visibleCount < apps.length && (
                    <div className="flex justify-center mt-12">
                        <button 
                            onClick={handleShowMore}
                            className="bg-[#8B5CF6] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#7C3AED] transition-all shadow-lg hover:shadow-purple-200"
                        >
                            Show More
                        </button>
                    </div>
                )}

                {/* Optional: Show message when all apps are loaded */}
                {visibleCount >= apps.length && apps.length > 0 && (
                    <p className="text-center text-gray-400 mt-12 font-medium">
                        You've viewed all {apps.length} apps.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;