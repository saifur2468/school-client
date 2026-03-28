import React, { useState, useContext } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGithub, FaGoogle, FaUserGraduate } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../AuthSection/AuthContex'; // Tomar path thik koro
import { AuthContext } from '../AuthProvider'; // Jodi context thake

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Email & Password Signup ---
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Firebase e user create kora
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // 2. User-er name set kora
      await updateProfile(result.user, {
        displayName: formData.username
      });

      console.log("Registered User:", result.user);
      navigate('/'); // Signup successful hole home e niye jabe
    } catch (err) {
      setError(err.message);
    }
  };

  // --- Google Signup ---
  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => navigate('/'))
      .catch(err => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F9] p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-[2.5rem] shadow-2xl border border-white p-10 relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl text-white text-3xl shadow-lg mb-4">
            <FaUserGraduate />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h2>
          {error && <p className="text-red-500 text-xs mt-2 font-bold bg-red-50 p-2 rounded-lg">{error}</p>}
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Role Selection UI (Functional) */}
          <div className="flex bg-gray-100 p-1 rounded-2xl gap-1">
            {['student', 'teacher'].map((r) => (
              <button 
                key={r}
                type="button"
                onClick={() => setFormData({...formData, role: r})}
                className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${formData.role === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-400'}`}
              >{r}</button>
            ))}
          </div>

          <div className="space-y-4">
            {/* Username */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                name="username"
                required
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500/20 text-sm font-semibold transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                name="email"
                required
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500/20 text-sm font-semibold transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                name="password"
                required
                type="password" 
                placeholder="Password" 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500/20 text-sm font-semibold transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition-all">
            SIGN UP NOW
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-100"></div>
          <span className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Or join with</span>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleGoogleSignup} type="button" className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-sm text-gray-600">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-sm text-gray-600">
            <FaGithub /> GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 font-medium">
          Already have an account? <Link to="/login" className="text-indigo-600 font-black hover:underline decoration-2 underline-offset-4">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;