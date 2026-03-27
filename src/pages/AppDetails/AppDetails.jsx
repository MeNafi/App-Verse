import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isInstalled, setIsInstalled] = useState(false);

    // Converts Million to Billion if hits 1000
   const formatDownloads = (num) => {
    if (!num) return "0M";
    
    // Ensure we are working with a clean number
    const n = parseFloat(num);

    // If the number is already 1,000,000 or higher (e.g. TikTok)
    if (n >= 1000000000) {
        return (n / 1000000000).toFixed(1) + "B";
    }
    
    // If the number is between 1,000 and 999,999
    if (n >= 1000) {
        return (n / 1000).toFixed(1) + "B";
    }
    
    // Default to Million for smaller numbers
    return n + "M";
};

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                const singleApp = data.find(item => item.id === parseInt(id));
                setApp(singleApp);
                if (singleApp) {
                    const installed = JSON.parse(localStorage.getItem('installed-apps')) || [];
                    setIsInstalled(installed.some(item => item.id === singleApp.id));
                }
                setLoading(false);
            });
    }, [id]);

    const handleInstall = () => {
        const installed = JSON.parse(localStorage.getItem('installed-apps')) || [];
        if (isInstalled) return;
        const newInstallList = [...installed, app];
        localStorage.setItem('installed-apps', JSON.stringify(newInstallList));
        setIsInstalled(true);
        toast.success('Successfully Installed!');
    };

    if (loading) return <LoadingSpinner />;
    if (!app) return <div className="text-center py-20 text-2xl font-bold">App Not Found</div>;

    return (
        <div className="bg-white min-h-screen py-10">
            <Toaster position="top-right" />
            <div className="max-w-5xl mx-auto px-6">
                
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row gap-10 mb-10 items-start">
                    {/* App Icon */}
                    <div className="w-56 h-56 bg-white rounded-lg shadow-2xl border border-gray-50 flex items-center justify-center p-6 shrink-0">
                        <img src={app.image} alt={app.title} className="w-full h-full object-contain" />
                    </div>
                    
                    <div className="flex-1 pt-2">
                        <h1 className="text-3xl font-bold text-[#1e293b] mb-1">{app.title}</h1>
                        <p className="text-[#6366f1] text-sm font-semibold mb-8">Developed by productive.io</p>
                        
                        {/* Stats Row */}
                        <div className="flex gap-12 mb-8">
                            <div className="text-center md:text-left">
                                <div className="text-[#22c55e] mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Downloads</p>
                                {/* Fixed Download display with Billion logic */}
                                <p className="text-2xl font-extrabold text-[#1e293b]">{formatDownloads(app.downloads)}</p>
                            </div>

                            <div className="text-center md:text-left border-l border-gray-100 pl-8">
                                <div className="text-[#f59e0b] mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Average Ratings</p>
                                <p className="text-2xl font-extrabold text-[#1e293b]">{app.ratingAvg}</p>
                            </div>

                            <div className="text-center md:text-left border-l border-gray-100 pl-8">
                                <div className="text-[#6366f1] mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8l-2 2 2 2"/><path d="M17 10h-6"/></svg>
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Reviews</p>
                                <p className="text-2xl font-extrabold text-[#1e293b]">54K</p>
                            </div>
                        </div>

                        {/* Updated Install Button with exact #1DF072 */}
                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            style={{ backgroundColor: isInstalled ? '#E5E7EB' : '#1DF072' }}
                            className={`px-10 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md ${
                                isInstalled 
                                ? "text-gray-500 cursor-not-allowed" 
                                : "text-white opacity-100 hover:brightness-95 active:scale-95"
                            }`}
                        >
                            {isInstalled ? "Installed" : `Install Now (${app.size >= 1024 ? (app.size/1024).toFixed(1) + " GB" : app.size + " MB"})`}
                        </button>
                    </div>
                </div>

                <hr className="border-gray-100 mb-10" />

                {/* --- RATINGS SECTION --- */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-6">Ratings</h3>
                    <div className="h-64 w-full max-w-4xl">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                                layout="vertical" 
                                data={[...app.ratings].reverse()} 
                                margin={{ left: 40, right: 20 }}
                            >
                                <XAxis type="number" hide />
                                <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    tickFormatter={(val) => `${val} star`}
                                    tick={{fill: '#94a3b8', fontSize: 13}} 
                                    axisLine={false} 
                                    tickLine={false} 
                                    width={80}
                                />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={16}>
                                    {app.ratings?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#e69138" />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* --- DESCRIPTION SECTION --- */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-4">Description</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-4xl">
                        {app.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;