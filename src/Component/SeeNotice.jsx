import React, { useEffect, useState } from 'react';
import { FaHandHoldingHand } from 'react-icons/fa6';

const SeeNotice = () => {
    const [notices, setNotices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        fetch('http://localhost:5000/SeeNotice') 
            .then(res => res.json())
            .then(data => {
                setNotices(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="text-center mt-10">Loading Notices...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2"> <FaHandHoldingHand></FaHandHoldingHand> Latest Notices</h1>
            
            {notices.length === 0 ? (
                <p className="text-gray-500">No notices available at the moment.</p>
            ) : (
                <div className="grid gap-4">
                    {notices.map(notice => (
                        <div 
                            key={notice._id} 
                            className={`p-5 rounded-lg border-l-8 shadow-sm transition hover:shadow-md ${
                                notice.category === 'Urgent' 
                                ? 'border-red-500 bg-red-50' 
                                : 'border-blue-500 bg-blue-50'
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-xl text-gray-800">{notice.title}</h3>
                                <span className="text-xs font-mono bg-white px-2 py-1 rounded shadow-sm">
                                    {notice.publishedDate ? new Date(notice.publishedDate).toLocaleDateString() : 'No Date'}
                                </span>
                            </div>
                            <div className="mt-1">
                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                                    notice.category === 'Urgent' ? 'bg-red-200 text-red-700' : 'bg-blue-200 text-blue-700'
                                }`}>
                                    {notice.category}
                                </span>
                            </div>
                            <p className="mt-3 text-gray-700 leading-relaxed italic">
                                "{notice.message}"
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SeeNotice;