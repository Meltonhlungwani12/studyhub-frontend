// src/pages/ResourcePage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Search, X, Star, 
  FileText, Video, BookOpen, CheckSquare,
  ExternalLink, Download, Filter, Grid, List
} from 'lucide-react';
import resourcesData from '../data/resources.json';

const ResourcePage = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');

  // Get resources for this subject
  const subjectResourcesRaw = resourcesData[subjectName] || {};
  const subjectResources = Object.values(subjectResourcesRaw).flat();

  // Tabs configuration
  const tabs = [
    { id: 'all', label: 'All Resources', icon: BookOpen, count: subjectResources.length },
    { id: 'past-papers', label: 'Past Papers', icon: FileText },
    { id: 'notes', label: 'Study Notes', icon: BookOpen },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'textbooks', label: 'Textbooks', icon: BookOpen },
    { id: 'quizzes', label: 'Quizzes', icon: CheckSquare },
  ];

  // Filter resources
  const getFilteredResources = () => {
    let filtered = subjectResources;

    if (activeTab !== 'all') {
      filtered = filtered.filter(resource => resource.type === activeTab);
    }

    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredResources = getFilteredResources();

  // Get counts for each tab
  const getTabCount = (type) => {
    if (type === 'all') return subjectResources.length;
    return subjectResources.filter(r => r.type === type).length;
  };

  // Toggle favorite
  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Get resource icon
  const getResourceIcon = (type) => {
    const icons = {
      'past-papers': FileText,
      'notes': BookOpen,
      'videos': Video,
      'textbook': BookOpen,
      'quiz': CheckSquare,
    };
    return icons[type] || FileText;
  };

  // Get subject icon
  const getSubjectIcon = (subject) => {
    const icons = {
      'Mathematics': '📐',
      'Physical Sciences': '⚛️',
      'Life Sciences': '🧬',
      'English': '📖',
      'English FAL': '💬',
      'Geography': '🗺️',
      'History': '📜',
      'Accounting': '📊',
      'Business Studies': '💼',
      'Economics': '💹',
    };
    return icons[subject] || '📚';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      {/* Subtle Background Effect */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Back Button & Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/subjects')}
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Subjects</span>
          </button>

          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{getSubjectIcon(subjectName)}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {subjectName}
              </h1>
              <p className="text-slate-400">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
        </div>

        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={18} className="text-slate-500" />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-slate-900/50 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-thin">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const count = getTabCount(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-800'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                {count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-purple-700' : 'bg-slate-800'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Resources List/Grid */}
        {filteredResources.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' 
            : 'space-y-3'
          }>
            {filteredResources.map((resource, idx) => {
              const ResourceIcon = getResourceIcon(resource.type);
              
              if (viewMode === 'grid') {
                return (
                  <div
                    key={idx}
                    className="group bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-purple-500/50 hover:bg-slate-900/70 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 bg-purple-600/10 rounded-lg">
                        <ResourceIcon size={24} className="text-purple-400" />
                      </div>
                      <button
                        onClick={() => toggleFavorite(idx)}
                        className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Star
                          size={18}
                          className={favorites.has(idx)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-500'
                          }
                        />
                      </button>
                    </div>
                    
                    <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {resource.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="px-2 py-1 bg-slate-800 rounded text-purple-400 font-medium uppercase">
                        {resource.type}
                      </span>
                      {resource.size && <span>📦 {resource.size}</span>}
                    </div>
                    
                    {resource.link && (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Open</span>
                      </a>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="group bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-purple-500/50 hover:bg-slate-900/70 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 bg-purple-600/10 rounded-lg">
                      <ResourceIcon size={28} className="text-purple-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white mb-1.5 group-hover:text-purple-400 transition-colors">
                        {resource.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="px-2 py-0.5 bg-slate-800 rounded text-purple-400 font-medium uppercase text-xs">
                          {resource.type}
                        </span>
                        {resource.size && <span>📦 {resource.size}</span>}
                        {resource.downloads && <span>👁️ {resource.downloads.toLocaleString()}</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFavorite(idx)}
                        className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Star
                          size={20}
                          className={favorites.has(idx)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-500'
                          }
                        />
                      </button>

                      {resource.link && (
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="hidden sm:inline">Open</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-slate-900/50 border border-slate-800">
              <Search size={40} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
            <p className="text-slate-400 mb-6">
              {subjectResources.length === 0
                ? `No resources available for ${subjectName} yet.`
                : 'Try adjusting your search or filter'}
            </p>
            {(searchTerm || activeTab !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ResourcePage;