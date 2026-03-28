import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Tanya Sinclair",
    role: "UX Engineer",
    feedback: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future ”",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Developer",
    feedback: "“ The curriculum is top-notch and the mentors are incredibly supportive. It completely changed my career path for the better. ”",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  // Add 8 more objects here to reach 10 feedbacks
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic: Change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (

    <main>
        <h1 className=' text-6xl text-center font-serif'>Testimonials</h1>
        <p className=' text-2xl mt-3 text-center font-serif'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background Decorative Patterns (Matching Image) */}
      <div className="absolute bottom-0 right-0 -z-10 opacity-20 translate-x-10 translate-y-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="200" fill="#7857ff" />
        </svg>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Left: Text Content */}
        <div className="flex-1 relative z-10 lg:pr-10 text-center lg:text-left">
          {/* Large Quote Mark Background */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 opacity-10">
            <span className="text-[12rem] font-serif leading-none text-indigo-900">“</span>
          </div>

          <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-8 transition-all duration-500 ease-in-out">
            {testimonials[currentIndex].feedback}
          </p>

          <div className="space-y-1">
            <span className="block text-lg font-bold text-slate-900">
              {testimonials[currentIndex].name}
            </span>
            <span className="block text-slate-400 font-medium">
              {testimonials[currentIndex].role}
            </span>
          </div>
        </div>

        {/* Right: Image Side with Navigation */}
        <div className="flex-1 relative">
          <div className="relative z-10 p-6 md:p-12">
             <div className="rounded-xl overflow-hidden shadow-2xl shadow-indigo-200 aspect-square max-w-[450px] mx-auto transition-all duration-500">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Navigation Buttons (Overlapping Image) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-20 flex bg-white shadow-xl rounded-full border border-slate-100">
            <button 
              onClick={handlePrev}
              className="p-4 hover:bg-slate-50 transition-colors rounded-l-full border-r border-slate-100"
            >
              <ChevronLeft className="w-6 h-6 text-slate-400" />
            </button>
            <button 
              onClick={handleNext}
              className="p-4 hover:bg-slate-50 transition-colors rounded-r-full"
            >
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
    </main>
  );
};

export default Testimonials;