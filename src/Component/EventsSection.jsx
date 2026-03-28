import React from 'react';
import { FaArrowRight, FaCamera, FaMusic, FaTrophy } from 'react-icons/fa';
import { FaArrowLeft, FaCalendar, FaMap } from 'react-icons/fa6';
// import { Calendar, trophy, Music, Camera, ArrowRight, MapPin } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Annual Function 2026",
      date: "May 15, 2026",
      location: "Main Auditorium",
      description: "A grand celebration of talent, featuring drama, dance, and our annual award ceremony.",
      icon: <FaMusic className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
    },
    {
      id: 2,
      title: "Inter-School Sports Day",
      date: "June 10, 2026",
      location: "College Ground",
      description: "Compete in various track and field events. Let the spirit of sportsmanship shine!",
      icon: <FaTrophy className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-50",
    },
    {
      id: 3,
      title: "Cultural Program",
      date: "July 05, 2026",
      location: "Campus Plaza",
      description: "Celebrating diversity through traditional music, art exhibitions, and food stalls.",
      icon: <FaCamera className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    }
  ];

  return (
  
  <main>
       <h2 className="text-4xl font-extrabold text-slate-900 mt-2 text-center">
            Upcoming Activities & Events
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-center justify-between mb-12 gap-4">
        <div>
          <span className="text-[#bc3c44] font-bold  tracking-widest uppercase text-sm">
            {/* Campus Life */}
          </span>
         
        </div>
        <button className="text-[#bc3c44] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4">
          View Event Calendar <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-50 rounded-3xl my-10">
        
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
          >
            {/* Icon & Date */}
            <div className="flex justify-between items-start mb-6">
              <div className={`${event.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                {event.icon}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <FaCalendar className="w-4 h-4" />
                {event.date}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#bc3c44] transition-colors">
              {event.title}
            </h3>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
              <FaMap className="w-4 h-4 text-slate-400" />
              {event.location}
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              {event.description}
            </p>

            {/* Action */}
            <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
              Event Details
            </button>
          </div>
        ))}
      </div>
    </section>
  </main>
  );
};

export default EventsSection;