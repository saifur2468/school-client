import React, { useState, useEffect } from 'react';
import { auth } from '../Component/AuthSection/AuthContex'; 
import { 
  FaHome, FaUsers, FaBullhorn, FaHandshake, FaTicketAlt, 
  FaUserCircle, FaCreditCard, FaHistory, FaBook, FaCalendarAlt, 
  FaFileAlt, FaGraduationCap, FaUserCog, FaSignOutAlt, FaBars, FaTimes, FaWallet
} from "react-icons/fa";
import { FaPersonRifle, FaChalkboardUser } from 'react-icons/fa6';
import { MdDashboard, MdOutlineNotificationsActive } from "react-icons/md";
import { Link, Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';

// Recharts Imports
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// Demo Data for Chart
const adminData = [
  { month: 'Jan', revenue: 4000 }, { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 }, { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 }, { month: 'Jun', revenue: 5500 },
];

const userData = [
  { month: 'Jan', attendance: 85 }, { month: 'Feb', attendance: 90 },
  { month: 'Mar', attendance: 88 }, { month: 'Apr', attendance: 95 },
  { month: 'May', attendance: 92 }, { month: 'Jun', attendance: 98 },
];

const Dashboard = () => {
  const [admin, setAdmin] = useState({ name: "Loading...", photo: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const userEmail = auth.currentUser?.email;
  const isAdmin = userEmail === "mdislamshakib218@gmail.com"; 

  const navigate = useNavigate();
  const location = useLocation();

  const isBaseDashboard = location.pathname.toLowerCase() === "/dashboard";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAdmin({
          name: user.displayName || "User",
          photo: user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=6366f1&color=fff`
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const adminMenuItems = [
    { name: 'Home Page', icon: <FaHome />, path: '/' },
    { name: 'Admission Manage', icon: <FaPersonRifle />, path: 'Admission Manage' },
    { name: 'Post Notice', icon: <FaBullhorn />, path: 'Notice' },
    { name: 'Make Routine', icon: <FaCalendarAlt />, path: 'Make Routine' },
    { name: 'Due Payments', icon: <FaHandshake />, path: 'Due Payments' },
    { name: 'Add Teacher', icon: <FaChalkboardUser />, path: 'Add Teacher'},
    { name: 'All Students', icon: <FaGraduationCap />, path: 'allstudent'},
    { name: 'Manage Users', icon: <FaUserCog />, path: 'Manage Users'},
  ];

  const userMenuItems = [
    { name: 'Home Page', icon: <FaHome />, path: '/' },
    { name: 'My Profile', icon: <FaUserCircle />, path: 'userProfile' },
    { name: 'Make Payment', icon: <FaCreditCard />, path: 'MakePayment' },
    { name: 'Payment History', icon: <FaHistory />, path: 'paymentHistory' },
    { name: 'Class Syllabus', icon: <FaFileAlt />, path: 'Class Syllabus' },
    { name: 'Class Routine', icon: <FaCalendarAlt />, path: 'Class Routine' },
    { name: 'Exam Date', icon: <FaTicketAlt />, path: 'Exam Date' },
    { name: 'E-Library', icon: <FaBook />, path: 'E-Library' },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  // Components for Stats
  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className={`${color} p-4 rounded-xl text-white text-xl shadow-lg`}>{icon}</div>
      <div>
        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">{title}</p>
        <h3 className="text-xl font-black text-slate-800 leading-tight">{value}</h3>
      </div>
    </div>
  );

  const DashboardOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {isAdmin ? (
          <>
            <StatCard title="Total Students" value="1,248" icon={<FaGraduationCap />} color="bg-blue-600" />
            <StatCard title="Total Teachers" value="56" icon={<FaChalkboardUser />} color="bg-indigo-600" />
            <StatCard title="Monthly Revenue" value="$14,250" icon={<FaWallet />} color="bg-emerald-600" />
            <StatCard title="Due Amount" value="$2,400" icon={<FaHistory />} color="bg-rose-500" />
          </>
        ) : (
          <>
            <StatCard title="Attendance" value="94%" icon={<FaUsers />} color="bg-blue-600" />
            <StatCard title="Library Books" value="12" icon={<FaBook />} color="bg-purple-600" />
            <StatCard title="My Due" value="$0.00" icon={<FaCreditCard />} color="bg-emerald-600" />
            <StatCard title="Notifications" value="07" icon={<MdOutlineNotificationsActive />} color="bg-amber-600" />
          </>
        )}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
            {isAdmin ? "Revenue Analytics" : "Attendance Overview"}
          </h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={isAdmin ? adminData : userData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} dy={10} />
                <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Area 
                  type="monotone" 
                  dataKey={isAdmin ? "revenue" : "attendance"} 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notice Section */}
        <div className="bg-[#0f172a] p-6 rounded-[2rem] text-white flex flex-col shadow-xl">
           <h4 className="font-bold text-lg mb-4">Official Notice</h4>
           <div className="space-y-4 flex-1">
              <div className="bg-slate-800/50 p-4 rounded-2xl border-l-4 border-blue-500">
                 <p className="text-[10px] text-blue-400 font-bold uppercase">25 March, 2026</p>
                 <p className="text-sm mt-1">School will be closed for the upcoming Independence Day holiday.</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border-l-4 border-emerald-500">
                 <p className="text-[10px] text-emerald-400 font-bold uppercase">20 March, 2026</p>
                 <p className="text-sm mt-1">Final exam schedule has been published in the portal.</p>
              </div>
           </div>
           <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-sm transition-all active:scale-95">
              Check All Notice
           </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      
      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#0f172a] text-white flex flex-col transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8 border-b border-slate-800 text-center relative">
          <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 lg:hidden text-slate-400"><FaTimes size={20}/></button>
          <img src={admin.photo} className="w-20 h-20 rounded-full border-2 border-blue-500 p-1 mx-auto mb-4 object-cover" alt="profile"/>
          <h2 className="text-lg font-bold tracking-tight truncate">{admin.name}</h2>
          <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-1">● {isAdmin ? "Admin Dashboard" : "Student Panel"}</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink key={item.name} to={item.path} onClick={() => setIsSidebarOpen(false)} 
              className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
           <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-red-600/10 hover:border-red-600/20 transition-all font-bold text-[10px] uppercase">
              <FaSignOutAlt /> Log Out Account
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-600 bg-slate-50 rounded-xl"><FaBars size={20}/></button>
            <div>
               <h1 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
                  {isAdmin ? "Administration" : "My Dashboard"}
               </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="relative p-2.5 text-slate-500 bg-slate-50 rounded-xl cursor-pointer">
                <MdOutlineNotificationsActive size={22} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
             </div>
             <div className="h-10 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>
             <div className="hidden sm:block">
                <p className="text-xs font-black text-slate-800 leading-none">{admin.name.split(' ')[0]}</p>
                <p className="text-[9px] font-bold text-emerald-500 uppercase mt-1">Active Now</p>
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
           <div className="max-w-7xl mx-auto">
              {isBaseDashboard ? <DashboardOverview /> : (
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 min-h-[500px]">
                   <Outlet />
                </div>
              )}
           </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;