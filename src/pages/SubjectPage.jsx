// src/pages/SubjectsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Zap, TrendingUp } from 'lucide-react';
import resources from '../data/resources.json';

const SubjectsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Subject icon mapping
  const getSubjectIcon = (subject) => {
    const icons = {
      'Mathematics': '📐',
      'Mathematical Literacy': '🔢',
      'Physical Sciences': '⚛️',
      'Life Sciences': '🧬',
      'English Home Language': '📖',
      'English First Additional Language': '💬',
      'Afrikaans Home Language': '🇿🇦',
      'Afrikaans First Additional Language': '💭',
      'Accounting': '📊',
      'Business Studies': '💼',
      'Economics': '💹',
      'Geography': '🗺️',
      'History': '📜',
      'Life Orientation': '🎯',
      'Information Technology': '💻',
      'Computer Applications Technology': '🖥️',
      'Visual Arts': '🎨',
      'Dramatic Arts': '🎭',
      'Music': '🎵',
      'Tourism': '✈️',
      'Agricultural Sciences': '🌾',
      'Engineering Graphics and Design': '📏'
    };
    return icons[subject] || '📚';
  };

  // Get subject category
  const getSubjectCategory = (subject) => {
    const categories = {
      'Languages': ['English Home Language', 'English First Additional Language', 'Afrikaans Home Language', 'Afrikaans First Additional Language'],
      'Sciences': ['Physical Sciences', 'Life Sciences', 'Agricultural Sciences'],
      'Mathematics': ['Mathematics', 'Mathematical Literacy'],
      'Commerce': ['Accounting', 'Business Studies', 'Economics'],
      'Humanities': ['Geography', 'History', 'Life Orientation'],
      'Technology': ['Information Technology', 'Computer Applications Technology', 'Engineering Graphics and Design'],
      'Arts': ['Visual Arts', 'Dramatic Arts', 'Music'],
      'Other': ['Tourism']
    };

    for (const [category, subjects] of Object.entries(categories)) {
      if (subjects.includes(subject)) return category;
    }
    return 'Other';
  };

  // Get subjects from resources.json
  const subjects = Object.keys(resources).map(subjectName => {
    const subjectData = resources[subjectName];
    const resourceCount = Object.values(subjectData).flat().length;
    
    return {
      name: subjectName,
      icon: getSubjectIcon(subjectName),
      resources: resourceCount,
      category: getSubjectCategory(subjectName),
      description: 'Access notes, past papers, videos & more'
    };
  }).sort((a, b) => a.name.localeCompare(b.name));

  // Get categories
  const categories = ['all', ...new Set(subjects.map(s => s.category))];

  // Filter subjects
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || subject.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="blob-container">
        <div className="blob blob-purple" />
        <div className="blob blob-pink" />
        <div className="blob blob-cyan" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
            <BookOpen size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">
              Grade 12 • All Subjects
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Subject
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Select any subject to access comprehensive study materials, past papers, video tutorials, and more
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative flex items-center bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-lg focus-within:shadow-purple-500/20">
              <Search size={24} className="ml-6 text-purple-400" />
              
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent px-6 py-5 text-white placeholder-slate-500 outline-none text-lg font-medium"
              />
              
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mr-4 p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                >
                  <X size={20} className="text-slate-400 hover:text-red-400" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide animate-slide-up delay-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-slate-900/50 border border-purple-500/20 text-slate-300 hover:border-purple-500/50 hover:bg-purple-500/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSubjects.map((subject, idx) => (
              <div
                key={subject.name}
                onClick={() => navigate(`/subject/${encodeURIComponent(subject.name)}`)}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {subject.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors line-clamp-2 min-h-[56px]">
                    {subject.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                    {subject.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-1 text-purple-400">
                      <BookOpen size={14} />
                      <span>{subject.resources} Resources</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400">
                      <Zap size={14} />
                      <span>Updated</span>
                    </div>
                  </div>
                  
                  {/* Action Text */}
                  <div className="flex items-center justify-center gap-2 mt-4 text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">View Resources</span>
                    <TrendingUp size={16} className="animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20 animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-slate-900/50 border border-purple-500/20">
              <Search size={48} className="text-slate-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">No subjects found</h3>
            <p className="text-slate-400 mb-6">
              Try searching with different keywords or clear your filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Stats Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm animate-slide-up delay-300">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">22</p>
              <p className="text-slate-400 font-semibold">Subjects Available</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">1000+</p>
              <p className="text-slate-400 font-semibold">Total Resources</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">50K+</p>
              <p className="text-slate-400 font-semibold">Students Learning</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SubjectsPage;