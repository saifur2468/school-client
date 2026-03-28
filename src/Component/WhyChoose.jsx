import React from 'react';
import { 
  FaUserTie, FaMoneyBillWave, FaHandHoldingHeart,
  FaChalkboardTeacher, FaTree, FaLaptopCode, FaHotel, FaShieldAlt, 
  FaSmoking
} from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Unique Group Placement",
      desc: "Direct internship and job placement scopes at various concerns of Unique Group.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Tuition",
      desc: "Highly competitive and affordable tuition fees without compromising education quality.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Financial Aid",
      desc: "Special scholarships and financial aid programs for meritorious and deserving students.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: <FaSmoking/>,
      title: "Politics Free Campus",
      desc: "A strictly smoking and politics-free environment for a peaceful learning experience.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: <MdOutlineScreenshotMonitor />,
      title: "Multimedia Classrooms",
      desc: "Fully digitized classrooms equipped with modern multimedia and interactive tools.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: <FaTree />,
      title: "7-Acre Green Campus",
      desc: "Beautifully landscaped green campus with 7 acres of our own private land.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: <FaLaptopCode />,
      title: "Modern IT Services",
      desc: "High-speed internet and advanced Information Technology services for all students.",
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Dynamic Teachers",
      desc: "Experienced faculty members with a passion for innovative and practical teaching.",
      color: "text-[#bc3c44]",
      bg: "bg-red-50"
    },
    {
      icon: <FaHotel />,
      title: "Hostel & Security",
      desc: "Comfortable hostel facilities with a high-security surveillance and monitoring system.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#bc3c44] font-bold uppercase tracking-widest text-xs">Excellence in Education</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">Why Choose Our Institution?</h2>
          <div className="w-20 h-1.5 bg-[#bc3c44] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#bc3c44]/20 hover:shadow-2xl hover:shadow-red-50/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#bc3c44] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-16 text-center">
          <button className="mx-auto flex items-center justify-center gap-3 w-[250px] h-[60px] rounded-xl text-center text-lg font-bold border-2 border-slate-200 text-slate-700 hover:border-[#bc3c44] hover:text-[#bc3c44] hover:bg-red-50 transition-all duration-300 group">
            Explore All Story
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default WhyChooseUs;