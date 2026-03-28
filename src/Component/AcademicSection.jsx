import React, { useState } from 'react';
import { 
  FaBook, FaUserTie, FaLaptopCode, FaMicrochip, FaCity, 
  FaTshirt, FaCogs, FaBroadcastTower, FaFlask, FaDna, 
  FaInfoCircle, FaDownload, FaMobileAlt 
} from 'react-icons/fa';
import { HiOutlineLibrary } from 'react-icons/hi';

const AcademicDashboard = () => {
  const [activeDept, setActiveDept] = useState('CSE');
  const [activeSubTab, setActiveSubTab] = useState('syllabus');

  // Full Data for All Departments
  const departments = {
    CSE: {
      name: "Computer Science & Engineering",
      icon: <FaLaptopCode />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Data Structures", "Algorithms", "Operating Systems", "Database Management", "Software Engineering"] },
        
      ],
      faculties: [
        { name: "Dr. Saifur Rahman", rank: "Head of Dept", mail: "saifur@poly.edu" },
        { name: "Ms. Anika Tabassum", rank: "Assistant Professor", mail: "anika@poly.edu" },
        { name: "Mr. Tanvir Ahmed", rank: "Lecturer", mail: "tanvir@poly.edu" },
        { name: "Dr. Maria Sultana", rank: "Senior Faculty", mail: "maria@poly.edu" }
      ],
      library: ["CLRS Algorithms", "Database System Concepts", "Clean Code PDF", "JS: The Good Parts", "Operating Systems (Silberschatz)"]
    },
    EEE: {
      name: "Electrical & Electronics Engineering",
      icon: <FaMicrochip />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Circuit Analysis", "Electrical Machines", "Power Systems", "Control Systems", "Digital Electronics"] }
      ],
      faculties: [
        { name: "Dr. Ahmed Ali", rank: "Professor", mail: "ahmed@poly.edu" },
        { name: "Engr. Rakib Hasan", rank: "Head of Lab", mail: "rakib@poly.edu" },
        { name: "Ms. Farhana Yesmin", rank: "Lecturer", mail: "farhana@poly.edu" },
        { name: "Dr. Zaidul Islam", rank: "Associate Professor", mail: "zaidul@poly.edu" }
      ],
      library: ["Theraja: Electrical Tech", "Power Systems by Kothari", "Electronic Devices (Boylestad)", "Circuit Theory Manual", "Microprocessor 8085 Guide"]
    },
    CIVIL: {
      name: "Civil Engineering",
      icon: <FaCity />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Surveying", "Structural Analysis", "Geotechnical Eng.", "Transportation Eng.", "Environmental Eng."] }
      ],
      faculties: [
        { name: "Engr. Kamal Hossain", rank: "Dept. Head", mail: "kamal@poly.edu" },
        { name: "Dr. Niloy Das", rank: "Professor", mail: "niloy@poly.edu" },
        { name: "Ms. Sadia Afrin", rank: "Lecturer", mail: "sadia@poly.edu" },
        { name: "Mr. Arif Mahmud", rank: "Lab Instructor", mail: "arif@poly.edu" }
      ],
      library: ["B.C. Punmia: Surveying", "Structure Design PDF", "Fluid Mechanics Guide", "RCC Design Manual", "AutoCAD Professional Guide"]
    },
    TEXT: {
      name: "Textile Engineering",
      icon: <FaTshirt />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Yarn Manufacturing", "Fabric Engineering", "Dyeing & Printing", "Textile Testing", "Garments Manufacturing"] }
      ],
      faculties: [
        { name: "Dr. Mizanur Rahman", rank: "Head of Dept", mail: "mizan@poly.edu" },
        { name: "Engr. Sumaiya Akter", rank: "Lecturer", mail: "sumaiya@poly.edu" },
        { name: "Mr. Habibullah", rank: "Senior Faculty", mail: "habib@poly.edu" },
        { name: "Ms. Lima Begum", rank: "Asst. Professor", mail: "lima@poly.edu" }
      ],
      library: ["Textile Fiber Science", "Dyeing Technology Guide", "Spinning Masterclass", "Textile Testing Manual", "Fashion Design PDF"]
    },
    MECH: {
      name: "Mechanical Engineering",
      icon: <FaCogs />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Thermodynamics", "Heat Transfer", "Fluid Dynamics", "Automobile Eng.", "Industrial Management"] }
      ],
      faculties: [
        { name: "Dr. Rafiqul Islam", rank: "Head of Dept", mail: "rafiq@poly.edu" },
        { name: "Engr. Shahin Alam", rank: "Professor", mail: "shahin@poly.edu" },
        { name: "Mr. Masum Billah", rank: "Lecturer", mail: "masum@poly.edu" },
        { name: "Ms. Tania Jaman", rank: "Senior Lecturer", mail: "tania@poly.edu" }
      ],
      library: ["Internal Combustion Engine", "Theory of Machines", "Engineering Mechanics", "Thermodynamics by Rajput", "CNC Programming Guide"]
    },
    IT: {
      name: "Information Technology",
      icon: <FaMobileAlt />,
      syllabus: [
        { sem: "Core Subjects", subjects: ["Cloud Computing", "Cyber Security", "Networking", "Python for IT", "Web Security"] }
      ],
      faculties: [
        { name: "Mr. Junaid Khan", rank: "HOD", mail: "junaid@poly.edu" },
        { name: "Ms. Rubaiya Kabir", rank: "Asst. Professor", mail: "rubaiya@poly.edu" },
        { name: "Dr. S.M. Faisal", rank: "Lecturer", mail: "faisal@poly.edu" },
        { name: "Mr. Ashiqur Rahman", rank: "Lab Head", mail: "ashiq@poly.edu" }
      ],
      library: ["Networking by Tanenbaum", "Cyber Security Handbook", "Python Programming", "AWS Cloud Guide", "Linux Admin Manual"]
    }
  };

  // Logic to handle empty departments (optional safety)
  const current = departments[activeDept] || { name: "N/A", syllabus: [], faculties: [], library: [] };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Academic Departments</h1>
        <p className="text-slate-500 mt-2">Access comprehensive curriculum and faculty details for all streams.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Department List (Sidebar) */}
        <div className="lg:col-span-3">
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 sticky top-20">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">Engineering Streams</h3>
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
              {Object.keys(departments).map((key) => (
                <button
                  key={key}
                  onClick={() => { setActiveDept(key); setActiveSubTab('syllabus'); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                    activeDept === key 
                    ? 'bg-[#bc3c44] text-white shadow-xl shadow-red-200 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  <span className="text-lg">{departments[key].icon}</span>
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Content Area */}
        <div className="lg:col-span-9 bg-slate-50/30 rounded-[2.5rem] border border-slate-100 p-6 md:p-10">
          
          {/* Header & Tabs */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900">{current.name}</h2>
              <p className="text-[#bc3c44] text-sm font-bold flex items-center gap-2 mt-1 uppercase tracking-wider">
                <FaInfoCircle /> Academic Overview
              </p>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 w-full xl:w-auto">
              {['syllabus', 'faculty', 'library'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`flex-1 xl:flex-none px-6 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                    activeSubTab === tab ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab === 'library' ? 'E-Library' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-tab Content Area */}
          <div className="min-h-[450px]">
            
            {/* 1. Syllabus View */}
            {activeSubTab === 'syllabus' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {current.syllabus.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="font-black text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-50 pb-4">
                      <div className="p-2 bg-red-50 rounded-lg"><FaBook className="text-[#bc3c44]"/></div>
                      {item.sem}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.subjects.map((s, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-red-100 hover:bg-white transition-all group">
                          <span className="font-bold text-slate-700">{s}</span>
                          <span className="text-[10px] bg-white px-2 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">CORE</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Faculty View */}
            {activeSubTab === 'faculty' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-2 duration-500">
                {current.faculties.map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-xl transition-all group">
                    <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-[#bc3c44] transition-colors">
                      <FaUserTie className="text-2xl text-slate-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{f.name}</h4>
                      <p className="text-[10px] text-[#bc3c44] font-black uppercase tracking-widest">{f.rank}</p>
                      <p className="text-sm text-slate-400 mt-1">{f.mail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. E-Library View */}
            {activeSubTab === 'library' && (
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
                {current.library.map((book, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-[#bc3c44] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="text-blue-500 bg-blue-50 p-4 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <HiOutlineLibrary size={24}/>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 block">{book}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">PDF Document • 12MB</span>
                      </div>
                    </div>
                    <button className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-[#bc3c44] hover:text-white transition-all">
                      <FaDownload />
                    </button>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;