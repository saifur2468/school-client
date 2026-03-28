import React, { useState } from 'react';
import { FaUser, FaUserFriends, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const AdmissionPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header */}
      <div className="bg-[#bc3c44] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Session 2026-27
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">Admission Form</h1>
          <p className="mt-4 text-white/80 text-lg">Fill out the form below to join our community of excellence.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10">
        {/* Step Indicator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <StepCard stepNumber={1} currentStep={step} label="Student Info" />
          <StepCard stepNumber={2} currentStep={step} label="Guardian Info" />
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Student Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="Md. Saifur Rahman" icon={<FaUser />} />
                <InputGroup label="Date of Birth" type="date" icon={<FaCalendar />} />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Gender</label>
                  <select className="p-3 border rounded-xl outline-none focus:border-[#bc3c44]">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Department</label>
                  <select className="p-3 border rounded-xl outline-none focus:border-[#bc3c44]">
                    {["CSE", "EEE", "CIVIL", "TEXT", "MECH", "ECE", "CHEM", "BME", "IT", "AERO"].map(d => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full md:w-auto bg-[#bc3c44] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#a3333a] transition-all"
              >
                Continue to Guardian Info
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Guardian Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Father/Mother Name" icon={<FaUserFriends />} />
                <InputGroup label="Phone Number" placeholder="+880 1XXX-XXXXXX" icon={<FaUser />} />
                <InputGroup label="Present Address" icon={<FaMapMarkerAlt />} isFull />
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(1)} className="px-8 py-4 rounded-xl font-bold text-slate-500 border border-slate-200">Back</button>
                <button onClick={() => alert('Application Submitted!')} className="bg-[#bc3c44] text-white px-10 py-4 rounded-xl font-bold flex-1">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const InputGroup = ({ label, type = "text", placeholder, icon, isFull }) => (
  <div className={`flex flex-col gap-2 ${isFull ? 'md:col-span-2' : ''}`}>
    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">{icon} {label}</label>
    <input type={type} placeholder={placeholder} className="p-3 border rounded-xl outline-none focus:border-[#bc3c44] focus:ring-4 focus:ring-red-50 transition-all" />
  </div>
);

const StepCard = ({ stepNumber, currentStep, label }) => (
  <div className={`p-4 rounded-2xl border-2 text-center font-bold ${currentStep >= stepNumber ? 'border-[#bc3c44] bg-red-50/50 text-[#bc3c44]' : 'border-slate-200 text-slate-400'}`}>
    Step {stepNumber}: {label}
  </div>
);

export default AdmissionPage;