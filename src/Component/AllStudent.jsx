import React, { useEffect, useState } from 'react';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchStudents = async (search = '') => {
        setLoading(true);
        try {
            // আপনার পোর্ট যদি ৫০০৫ বা অন্য কিছু হয় তবে তা নিশ্চিত করুন
            const res = await fetch(`http://localhost:5000/all-students?search=${search}`);
            const data = await res.json();
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchStudents(searchText);
    };

    return (
        <div className="max-w-6xl mx-auto p-5 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-900">🎓 Student Directory</h1>

            {/* --- Search Bar --- */}
            <form onSubmit={handleSearch} className="flex justify-center mb-10">
                <div className="relative w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Search by Name or Roll..." 
                        className="w-full p-4 pl-5 pr-12 text-sm border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3 top-2.5 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition">
                        🔍
                    </button>
                </div>
            </form>

            {/* --- Student Cards --- */}
            {loading ? (
                <div className="text-center font-bold text-indigo-600">Loading Students...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {students.length > 0 ? (
                        students.map((student) => (
                            <div key={student._id} className="bg-white border-t-4 border-indigo-600 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                                                {student.name ? student.name.charAt(0) : '?'}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800 leading-tight">{student.name}</h3>
                                                <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{student.department}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">Roll: {student.roll}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 border-t border-gray-100 pt-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Semester:</span>
                                            <span className="font-semibold text-gray-700">{student.semester}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Total Cost:</span>
                                            <span className="font-bold text-green-600">{student.totalCost} BDT</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Phone:</span>
                                            <span className="font-medium text-gray-700">{student.phone}</span>
                                        </div>
                                    </div>

                                    <button className="mt-6 w-full py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-bold shadow-md">
                                        View Full Profile
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 py-10">
                            No students found matching your search.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllStudents;