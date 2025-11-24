// src/components/SubjectCard.jsx
import React from 'react';
import { Book, Zap } from 'lucide-react';

const SubjectCard = ({ subject, resourceCount = 12, onClick }) => {
  const subjectIcons = {
    'Mathematics': '📐',
    'English': '📖',
    'English FAL': '💬',
    'Afrikaans': '🇿🇦',
    'Afrikaans FAL': '💭',
    'Life Orientation': '🎯',
    'Natural Sciences': '🔬',
    'Physical Sciences': '⚛️',
    'Physics': '⚙️',
    'Chemistry': '🧪',
    'Life Sciences': '🧬',
    'Biology': '🔬',
    'Geography': '🗺️',
    'History': '📜',
    'Accounting': '📊',
    'Business Studies': '💼',
    'Computer Science': '💻',
    'Information Technology': '🖥️',
    'Consumer Studies': '🍳',
    'CAT': '🎨',
    'Visual Arts': '🖼️',
    'Music': '🎵',
    'Dramatic Arts': '🎭',
    'Technology': '🔧',
    'Engineering Graphics': '📏',
    'Tourism': '✈️',
    'Hospitality Studies': '🏨',
    'Economics': '💹',
  };

  return (
    <div
      className="group relative cursor-pointer animate-fadeInUp"
      onClick={onClick}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 border border-yellow-500/20 group-hover:border-orange-500/50 transition duration-300 transform group-hover:scale-110 group-hover:-rotate-1">
        
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:scale-150"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-3 h-48">
          
          <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition duration-300">
            {subjectIcons[subject] || '📚'}
          </div>
          
          <h3 className="text-lg font-bold text-center text-white group-hover:text-orange-300 transition">
            {subject}
          </h3>
          
          <div className="flex items-center gap-1 text-xs text-yellow-400">
            <Book size={14} />
            <span>{resourceCount} Resources</span>
          </div>
          
          <div className="flex items-center gap-2 text-orange-400 opacity-0 group-hover:opacity-100 transition duration-300 mt-2">
            <Zap size={14} className="animate-pulse" />
            <span className="text-xs font-semibold">View Resources</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;