import React, { useState, useEffect } from 'react';
import { BookOpen, X, Award, Code, Zap, Building, Shirt, Settings, Cpu } from 'lucide-react';

// JSON থেকে আসা স্ট্রিং টেক্সটকে ডাইনামিক Lucide Icons-এ ম্যাপ করার অবজেক্ট
const iconMap = {
  Code: <Code className="w-8 h-8 text-cyan-400" />,
  Zap: <Zap className="w-8 h-8 text-amber-400" />,
  Building: <Building className="w-8 h-8 text-emerald-400" />,
  Shirt: <Shirt className="w-8 h-8 text-pink-400" />,
  Settings: <Settings className="w-8 h-8 text-red-400" />,
  Cpu: <Cpu className="w-8 h-8 text-purple-400" />
};

const StudentSyllabus = () => {
  const [syllabusData, setSyllabusData] = useState({});
  const [selectedDept, setSelectedDept] = useState(null);
  const [activeSemester, setActiveSemester] = useState("1st Semester");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('/syllabus.json')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load syllabus data");
        return res.json();
      })
      .then((data) => {
        setSyllabusData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching json:", err);
        setLoading(false);
      });
  }, []);

  const handleOpenModal = (deptKey) => {
    setSelectedDept(syllabusData[deptKey]);
   
    setActiveSemester("1st Semester");
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-slate-400">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
        <span className="ml-3 font-medium">Syllabus Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-2xl bg-[#0f172a] text-slate-100 p-6 md:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Academic Course Syllabus
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Select your department to view the complete 8-semester curriculum structure, course codes, and credit breakdowns.
        </p>
      </div>

      {/* Bento Grid Layout for Departments */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(syllabusData).map((key) => {
          const item = syllabusData[key];
          return (
            <div
              key={key}
              onClick={() => handleOpenModal(key)}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${item.color} backdrop-blur-md cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                  {iconMap[item.icon] || <BookOpen className="w-8 h-8 text-slate-400" />}
                </div>
                <span className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-700 text-slate-400">
                  {key}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> View Curriculums
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Glassmorphism Modal */}
      {isModalOpen && selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative bg-[#1e293b]/95 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl shadow-black/80 transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700/60 flex items-center justify-between bg-slate-900/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg">
                  {iconMap[selectedDept.icon]}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {selectedDept.title}
                  </h2>
                  <p className="text-xs text-slate-400">Department Syllabus Structure</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              
             
              <div className="flex flex-wrap gap-2 mb-6 p-2 bg-slate-900/60 rounded-xl border border-slate-700/40">
                {Object.keys(selectedDept?.semesters || {}).map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemester(sem)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeSemester === sem
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {sem}
                  </button>
                ))}
              </div>

              {/* Subject Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-700/50">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 text-slate-300 text-xs md:text-sm font-semibold tracking-wider">
                      <th className="p-4">Code</th>
                      <th className="p-4">Subject Title</th>
                      <th className="p-4 text-center">Credits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    {selectedDept?.semesters?.[activeSemester] && selectedDept.semesters[activeSemester].length > 0 ? (
                      selectedDept.semesters[activeSemester].map((sub, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 text-slate-300 transition-colors">
                          <td className={`p-4 font-mono font-medium ${selectedDept.textColor}`}>
                            {sub.code}
                          </td>
                          <td className="p-4 font-medium text-slate-200">{sub.name}</td>
                          <td className="p-4 text-center">
                            <span className="px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-semibold">
                              {sub.credits.toFixed(1)}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="p-8 text-center text-slate-500 text-sm">
                          No subjects available for this semester yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-700/60 bg-slate-900/40 flex justify-end gap-3">
              <div className="flex items-center gap-1 text-xs text-slate-400 mr-auto pl-2">
                <Award className="w-4 h-4 text-indigo-400" /> Complete 8 Semesters Roadmap
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentSyllabus;