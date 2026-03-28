import React from 'react';
// import { ArrowRight, Globe, Award, ShieldCheck } from 'lucide-react';
import aboutimg from "../assets/iStock-1358014313-scaled-1.jpg";
import { AiOutlineGlobal } from "react-icons/ai";
const Aboutus = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image with Decorative Elements */}
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={aboutimg}
              alt="Our Campus" 
              className="w-full h-[450px] object-cover"
            />
          </div>
          
          {/* Floating Badge - 25+ Years Experience */}
          <div className="absolute -top-6 -right-6 z-20 bg-[#bc3c44] text-white p-6 rounded-2xl shadow-xl transform rotate-3 hidden md:block">
            <div className="text-3xl font-bold">25+</div>
            <div className="text-sm font-medium opacity-90 leading-tight">Years of <br/> Excellence</div>
          </div>

          {/* Background Decorative Box */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-100 rounded-3xl -z-0"></div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-[#bc3c44] font-bold tracking-widest uppercase text-sm">
              Discover Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Tradition of Innovation <br /> & Academic Excellence
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed">
            Founded with a vision to nurture global leaders, our institution combines 
            world-class infrastructure with a curriculum designed for the 21st century. 
            We don't just teach; we inspire students to challenge the status quo and 
            excel in their chosen fields.
          </p>

          {/* Quick Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                {/* <Globe className="w-5 h-5 text-blue-600" /> */}
                <AiOutlineGlobal />
              </div>
              <span className="font-semibold text-slate-700">Global Curriculum</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-2 rounded-lg">
                {/* <ShieldCheck className="w-5 h-5 text-green-600" /> */}
              </div>
              <span className="font-semibold text-slate-700">Safe Environment</span>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href="/aboutus"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-slate-200 group"
            >
              Read More
              {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutus;