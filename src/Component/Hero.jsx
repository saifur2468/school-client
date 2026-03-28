import React from 'react';
// import { Play } from 'lucide-react'; 
import hero from "../assets/Staples_High_School,_Westport,_CT.jpg";
import { MdCastForEducation } from "react-icons/md";
const HeroSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Side */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span><MdCastForEducation /></span> Premier Academic Institution
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Empowering Minds, <br />
            Shaping Tomorrow's <br />
            <span className="text-slate-800">Leaders</span>
          </h1>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. 
            Curabitur aliquet quam id dui posuere blandit nulla quis lorem ut libero 
            malesuada feugiat.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 bg-white shadow-xl shadow-slate-100 rounded-2xl p-6 border border-slate-50">
            <div className="text-center border-r border-slate-100">
              <div className="text-3xl font-bold text-red-600">96%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Employment Rate</div>
            </div>
            <div className="text-center border-r border-slate-100">
              <div className="text-3xl font-bold text-red-600">12:1</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Student Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Programs Offered</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#bc3c44] hover:bg-[#a3333a] text-white px-8 py-4 rounded-xl font-bold transition-all">
              Begin Your Journey
            </button>
            <button className="flex items-center gap-2 text-slate-700 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
              {/* <Play className="w-5 h-5 fill-red-600 text-red-600" /> */}
              Virtual Campus Tour
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={hero} 
              alt="University Campus" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Floating Accreditation Card */}
          <div className="absolute -bottom-6 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
            <div className="bg-red-500 p-2 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-slate-900">Fully Accredited</div>
              <div className="text-sm text-slate-400">Nationally Recognized</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;