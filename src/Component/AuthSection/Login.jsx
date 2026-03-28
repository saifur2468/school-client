import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaGithub, FaUserGraduate, FaArrowRight } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../AuthSection/AuthContex'; // Tomar Firebase config path

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // --- Email & Password Login ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Logged In User:", result.user);
      navigate('/'); // Login successful hole home-e niye jabe
    } catch (err) {
      // Error message simplify kora
      if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError(err.message);
      }
    }
  };

  // --- Google Login ---
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F9] p-4 relative overflow-hidden">
      
      {/* Background Aesthetic Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="bg-white/70 backdrop-blur-2xl w-full max-w-md rounded-[2.5rem] shadow-2xl border border-white p-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl text-white text-3xl shadow-xl mb-5 transform -rotate-6 transition-transform">
            <FaUserGraduate />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back!</h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Please enter your details to sign in</p>
          
          {/* Error Message Display */}
          {error && <p className="text-red-500 text-xs mt-4 font-bold bg-red-50 p-3 rounded-xl border border-red-100">{error}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="group space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                required
                name="email"
                type="email" 
                placeholder="example@mail.com" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 outline-none text-sm font-semibold transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-[10px] font-black text-indigo-600 hover:underline tracking-tighter">FORGOT PASSWORD?</button>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                required
                name="password"
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 outline-none text-sm font-semibold transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 ml-1">
            <input 
              id="remember" 
              name="rememberMe"
              type="checkbox" 
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              onChange={handleChange}
            />
            <label htmlFor="remember" className="text-xs font-bold text-gray-500 cursor-pointer select-none">Remember this device</label>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-2 group">
            Log In <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Social Auth Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-[1px] bg-gray-100"></div>
          <span className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-widest whitespace-nowrap">Or sign in with</span>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all font-bold text-sm text-gray-600 shadow-sm active:scale-95">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button type="button" className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all font-bold text-sm text-gray-600 shadow-sm active:scale-95">
            <FaGithub className="text-gray-900" /> GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-10 font-medium">
          New to the platform? <Link to="/signup" className="text-indigo-600 font-black hover:underline decoration-2 underline-offset-4">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;