// src/components/ResourceList.jsx
import React, { useState } from 'react';
import { Eye, Star, AlertCircle, ExternalLink } from 'lucide-react';

const ResourceList = ({ title, resources = [], onDownload }) => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredId, setHoveredId] = useState(null);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getResourceIcon = (type) => {
    const iconMap = {
      'notes': '📝',
      'past-papers': '📋',
      'textbook': '📖',
      'video': '🎥',
      'document': '📄',
      'exercise': '✏️',
      'solution': '✅'
    };
    return iconMap[type] || '📄';
  };

  if (!resources || resources.length === 0) {
    return (
      <section className="w-full">
        {title && (
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded"></div>
            {title}
          </h3>
        )}
        <div className="flex flex-col items-center justify-center py-12 bg-slate-900/30 rounded-lg border border-yellow-500/10">
          <AlertCircle size={48} className="text-gray-500 mb-4" />
          <p className="text-gray-400">No resources available yet</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      {title && (
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded"></div>
          {title}
        </h3>
      )}

      <div className="space-y-3">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredId(idx)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative overflow-hidden animate-fadeInUp"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

            <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-yellow-500/20 group-hover:border-yellow-500/50 rounded-lg p-4 transition duration-300">
              <div className="flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="text-3xl flex-shrink-0">
                    {getResourceIcon(resource.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate group-hover:text-yellow-300 transition">
                      {resource.name}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-1 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {resource.downloads || 0} views
                      </span>
                      <span className="capitalize px-2 py-0.5 bg-yellow-500/20 rounded text-yellow-300 font-medium">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleFavorite(idx)}
                    className="p-2 rounded-lg hover:bg-yellow-500/20 transition duration-200 group/fav"
                    title="Add to favorites"
                  >
                    <Star
                      size={18}
                      className={`transition duration-300 ${
                        favorites.has(idx)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-500 group-hover/fav:text-yellow-400'
                      }`}
                    />
                  </button>

                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onDownload?.(resource)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 rounded-lg font-semibold text-sm text-white transition duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                      title="Open in Google Drive"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Open</span>
                    </a>
                  )}
                </div>
              </div>

              {hoveredId === idx && (
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 w-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceList;