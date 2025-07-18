"use client";
import { motion } from "motion/react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { useState } from "react";

const Card = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -3 
      }}
      transition={{ duration: 0.2, ease: "easeOut" }} 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl overflow-hidden w-96 h-100 border border-[#333] group cursor-pointer transition-shadow duration-200"
      style={{
        boxShadow: isHovered 
          ? '0 20px 40px -10px rgba(28, 167, 124, 0.2), 0 0 0 1px rgba(28, 167, 124, 0.1)' 
          : '0 8px 20px -5px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Photo Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={member.src || '/api/placeholder/280/170'}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
            {member.name.trim()}
          </h3>
          {member.role && (
            <p className="text-gray-200 text-sm opacity-90">{member.role}</p>
          )}
        </div>
      </div>

    
      <div className="px-3 h-20 flex flex-col justify-center">
        
        <div className="grid grid-cols-3 gap-1.5">
          
          <button
            onClick={() => handleSocialClick(member.linkedin)}
            className="flex flex-col items-center p-2 bg-[#0077b5]/15 hover:bg-[#0077b5]/25 rounded-xl border border-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all duration-200 group/btn hover:scale-105"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5] mb-0.5 group-hover/btn:scale-110 transition-transform duration-150" />
            <span className="text-xs text-gray-300 font-medium">LinkedIn</span>
          </button>

          <button
            onClick={() => handleSocialClick(member.instagram)}
            className="flex flex-col items-center p-2 bg-gradient-to-br from-pink-500/15 to-purple-500/15 hover:from-pink-500/25 hover:to-purple-500/25 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-200 group/btn hover:scale-105"
          >
            <Instagram className="w-4 h-4 text-pink-400 mb-0.5 group-hover/btn:scale-110 transition-transform duration-150" />
            <span className="text-xs text-gray-300 font-medium">Instagram</span>
          </button>

         
          <button
            onClick={() => handleEmailClick(member.email)}
            className="flex flex-col items-center p-2 bg-blue-500/15 hover:bg-blue-500/25 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group/btn hover:scale-105"
          >
            <Mail className="w-4 h-4 text-blue-400 mb-0.5 group-hover/btn:scale-110 transition-transform duration-150" />
            <span className="text-xs text-gray-300 font-medium">Email</span>
          </button>
        </div>
      </div>

      
      <div
        className={`absolute inset-0 rounded-2xl border border-[#1ca77c]/40 pointer-events-none transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#1ca77c]/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.div>
  );
};

export default Card;