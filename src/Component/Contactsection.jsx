import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSeedling, FaLinkedin, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-[#0b0d17] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Reach out to us for inquiries, collaborations, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="bg-[#161927] p-8 rounded-3xl border border-gray-800 shadow-xl">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="bg-indigo-600 p-3 rounded-xl mb-4">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Let's Start a Conversation</h3>
              <p className="text-gray-400 text-sm">
                Send us a message and we will respond shortly.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-[#0b0d17] border border-gray-700 rounded-lg p-3 outline-none focus:border-indigo-500 transition"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-[#0b0d17] border border-gray-700 rounded-lg p-3 outline-none focus:border-indigo-500 transition"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#0b0d17] border border-gray-700 rounded-lg p-3 outline-none focus:border-indigo-500 transition"
              />
              <textarea 
                rows="4" 
                placeholder="Your Message..." 
                className="w-full bg-[#0b0d17] border border-gray-700 rounded-lg p-3 outline-none focus:border-indigo-500 transition resize-none"
              ></textarea>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                Send Message <FaSeedling className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Info & Stats */}
          <div className="space-y-12">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactInfoCard 
                icon={<FaEnvelope />} 
                title="Email Us" 
                detail="hello@productdemo.com" 
                sub="Response in 24h" 
              />
              <ContactInfoCard 
                icon={<FaPhone />} 
                title="Call Us" 
                detail="+1 (555) 987-6543" 
                sub="9AM - 6PM EST" 
              />
              <ContactInfoCard 
                icon={<FaMapMarkerAlt />} 
                title="Visit Our Office" 
                detail="4821 Broadway Street, NY" 
                sub="Mon - Fri" 
              />
            </div>

            {/* Stats Section */}
            <div className="bg-[#161927] rounded-2xl p-6 grid grid-cols-3 gap-4 text-center border border-gray-800">
              <StatItem label="Average Response" value="24h" />
              <StatItem label="Client Satisfaction" value="98%" />
              <StatItem label="Projects Delivered" value="150+" />
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Connect With Us</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <SocialIcon icon={<FaLinkedin />} />
                <SocialIcon icon={<FaTwitter />} />
                <SocialIcon icon={<FaGithub />} />
                <SocialIcon icon={<FaDiscord />} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, detail, sub }) => (
  <div className="flex items-center gap-4 bg-[#161927] p-5 rounded-2xl border border-gray-800">
    <div className="bg-[#0b0d17] p-3 rounded-xl border border-gray-700 text-indigo-400">
      {icon}
    </div>
    <div>
      <h4 className="text-sm text-gray-400 font-medium">{title}</h4>
      <p className="text-base font-semibold">{detail}</p>
      <p className="text-xs text-gray-500 mt-1">{sub}</p>
    </div>
  </div>
);

const StatItem = ({ label, value }) => (
  <div>
    <div className="text-2xl font-bold text-indigo-400">{value}</div>
    <div className="text-[10px] uppercase text-gray-500 mt-1 leading-tight">{label}</div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="bg-[#161927] p-3 rounded-xl border border-gray-800 hover:bg-indigo-600 hover:border-indigo-500 transition-all text-gray-400 hover:text-white">
    {icon}
  </a>
);

export default ContactSection;