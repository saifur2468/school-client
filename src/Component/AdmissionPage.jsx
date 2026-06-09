import React, { useState } from "react";
import {
  FaUser,
  FaUserFriends,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const AdmissionPage = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "Male",
    department: "CSE",
    fatherName: "",
    phone: "",
    address: "",
  });

  // input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit to backend
  const handleSubmit = async () => {
    await fetch("http://localhost:5000/admissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="text-center py-10 bg-white shadow">
        <h1 className="text-3xl font-bold">Admission Form</h1>
        <p className="text-gray-500">Session 2026-27</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10">

        {/* Step Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <StepCard stepNumber={1} currentStep={step} label="Student Info" />
          <StepCard stepNumber={2} currentStep={step} label="Guardian Info" />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Student Information</h2>

              <div className="grid md:grid-cols-2 gap-4">

                <InputGroup
                  label="Full Name"
                  name="name"
                  placeholder="Md. Saifur Rahman"
                  icon={<FaUser />}
                  onChange={handleChange}
                />

                <InputGroup
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  icon={<FaCalendar />}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-2">
                  <label>Gender</label>
                  <select
                    name="gender"
                    onChange={handleChange}
                    className="p-3 border rounded-xl"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label>Department</label>
                  <select
                    name="department"
                    onChange={handleChange}
                    className="p-3 border rounded-xl"
                  >
                    {["CSE", "EEE", "CIVIL", "TEXT", "MECH", "IT"].map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

              </div>

              <button
                onClick={() => setStep(2)}
                className="bg-red-500 text-white px-6 py-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Guardian Information</h2>

              <div className="grid md:grid-cols-2 gap-4">

                <InputGroup
                  label="Father/Mother Name"
                  name="fatherName"
                  icon={<FaUserFriends />}
                  onChange={handleChange}
                />

                <InputGroup
                  label="Phone Number"
                  name="phone"
                  icon={<FaUser />}
                  onChange={handleChange}
                />

                <InputGroup
                  label="Present Address"
                  name="address"
                  icon={<FaMapMarkerAlt />}
                  isFull
                  onChange={handleChange}
                />

              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border rounded-xl"
                >
                  Back
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl flex-1"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

/* ===================== INPUT COMPONENT ===================== */
const InputGroup = ({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  onChange,
  isFull,
}) => (
  <div className={`flex flex-col gap-2 ${isFull ? "md:col-span-2" : ""}`}>
    <label className="text-sm font-semibold flex items-center gap-2">
      {icon} {label}
    </label>

    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="p-3 border rounded-xl outline-none focus:border-red-500"
    />
  </div>
);

/* ===================== STEP CARD ===================== */
const StepCard = ({ stepNumber, currentStep, label }) => (
  <div
    className={`p-3 rounded-xl text-center border ${
      stepNumber === currentStep
        ? "bg-red-500 text-white"
        : "bg-white"
    }`}
  >
    Step {stepNumber}: {label}
  </div>
);

export default AdmissionPage;