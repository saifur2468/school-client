import React from 'react';
import { FaGraduationCap, FaArrowRight, FaLinkedin, FaBriefcase, FaAward } from 'react-icons/fa';

const AlumniSection = () => {
  const alumni = [
    {
      id: 1,
      name: "Dr. Elena Vasquez",
      degree: "Graduated 2008 • PhD",
      title: "Director of Innovation, World Health Council",
     
      feedback: "The foundational research skills I learned here have been invaluable. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum aenean imperdiet etiam ultricies.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      theme: 'teal'
    },
    {
      id: 2,
      name: "Marcus Adebayo, MBA",
      degree: "Graduated 2011 • Business",
      title: "Lead Astrophysicist, European Space Agency",
      
      feedback: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo sed fringilla mauris sit amet nibh. Donec sodales sagittis magna sed consequat leo porttitor.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      theme: 'orange'
    },
    {
        id: 3,
        name: "Li Wei Chen",
        degree: "Graduated 2015 • CSE",
        title: "Senior Software Architect, Meta",
      
        feedback: "The hands-on coding labs gave me a competitive edge. Nunc non imperdiet massa. Integer sit amet aliquet ipsum. Curabitur vel felis sem.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400",
        theme: 'blue'
    }
    
    
    
 
  ];

  const themes = {
    teal: { text: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100', accent: 'border-teal-400' },
    orange: { text: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-100', accent: 'border-orange-400' },
    blue: { text: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100', accent: 'border-blue-400' },
    purple: { text: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-100', accent: 'border-purple-400' }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      
      {/* 1. Achievements Header - Event Style (Image 2) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20 bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <div>
          <span className="text-[#bc3c44] font-bold uppercase tracking-wider text-xs">A Tradition of Success</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Notable Alumni Achievements</h2>
          <p className="text-slate-500 mt-3 max-w-xl">From CEOs to Nobel nominees, our graduates continue to shape the world.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#bc3c44] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a3333a] transition-all group shadow-lg shadow-red-100">
           Browse Full Directory <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 2. Alumni Profiles List - Z-Pattern (Image 3) */}
      <div className="space-y-16">
        {alumni.map((alum, index) => {
          const isEven = index % 2 === 0;
          const theme = themes[alum.theme] || themes.teal;

          return (
            <div 
              key={alum.id} 
              className={`flex flex-col gap-10 border-2 rounded-xl md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Image Side - Circular with Decorative Ring (Image 3) */}
              <div className="relative flex-shrink-0 animate-in fade-in duration-500">
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-3 border-4 border-slate-100 shadow-xl shadow-slate-100 bg-white">
                  <img 
                    src={alum.image} 
                    alt={alum.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Background Decorative Gradient Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full -z-0 opacity-10 blur-xl bg-gradient-to-r from-[#bc3c44] to-orange-400"></div>
              </div>

              {/* Content Side */}
              <div className={`flex-1 space-y-5 ${isEven ? 'md:text-left md:items-start' : 'md:text-right md:items-end'} flex flex-col`}>
                <div className="flex items-start gap-4 flex-wrap">
                  {/* Name, Degree, Title */}
                  <div className={`space-y-1 flex-1 ${isEven ? '' : 'flex flex-col items-end'}`}>
                    <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                        {alum.name}
                    </h3>
                    <div className={`${theme.text} ${theme.bg} ${theme.border} border px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-2`}>
                        <FaGraduationCap /> {alum.degree}
                    </div>
                  </div>

                  {/* Achievement Badge - Event Style (Image 2) */}
                  {/* <div className={`flex flex-col items-center flex-shrink-0 bg-white shadow-xl shadow-slate-100 rounded-2xl p-4 border ${theme.accent} border-t-4`}>
                    <div className={`text-4xl font-bold ${theme.text}`}>{alum.achievement.year}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Major Achievements</div>
                    <div className={`text-xl ${theme.text} mt-2`}>{alum.achievement.icon}</div>
                  </div> */}
                </div>

                <p className="font-bold text-slate-700 text-lg leading-snug max-w-xl group-hover:text-[#bc3c44] transition-colors">
                  {alum.title}
                </p>

                <p className="text-slate-500 text-base leading-relaxed max-w-2xl italic font-light">
                    “ {alum.feedback} ”
                </p>

                <div className="pt-2">
                    <button className="flex items-center gap-2 text-slate-700 font-bold hover:text-[#bc3c44] transition-all group">
                        Discover their full journey <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
             
            </div>
            
          );
        })}
       <button className="mx-auto flex items-center justify-center gap-3 w-[250px] h-[60px] rounded-xl text-center text-lg font-bold border-2 border-slate-200 text-slate-700 hover:border-[#bc3c44] hover:text-[#bc3c44] hover:bg-red-50 transition-all duration-300 group">
  Explore All Stories
  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
</button>
      </div>

    </section>
  );
};

export default AlumniSection;