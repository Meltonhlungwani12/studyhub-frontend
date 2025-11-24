// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search subjects, resources..." }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="w-full group relative">
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-0 transition-all duration-500 ${
          isFocused ? 'opacity-30' : 'group-hover:opacity-20'
        }`}
      ></div>

      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-0 flex items-center transition-all duration-300 hover:border-yellow-500/50 focus-within:border-yellow-500">
        
        <Search
          size={20}
          className={`ml-4 transition-colors duration-300 ${
            isFocused ? 'text-yellow-400' : 'text-gray-500'
          }`}
        />

        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-500 outline-none font-medium"
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="mr-4 p-1.5 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
          >
            <X size={18} className="text-gray-400 hover:text-red-400 transition-colors" />
          </button>
        )}

        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-500 ${
            isFocused ? 'w-full' : 'w-0'
          }`}
        ></div>
      </div>

      {isFocused && searchTerm === '' && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-slate-900 border border-yellow-500/20 rounded-lg backdrop-blur-sm z-10 animate-slideInDown">
          <p className="text-xs text-gray-400 mb-2">Search tips:</p>
          <div className="space-y-1 text-xs text-gray-500">
            <p>📚 Search by subject name</p>
            <p>🎓 Search by grade</p>
            <p>📝 Search by resource type</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;