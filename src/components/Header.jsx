// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Subjects', path: '/subjects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-purple-500/50 text-lg">
                🎓
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                StudyHub SA
              </h1>
              <p className="text-xs text-purple-400">Grade 12 Excellence</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-purple-400 bg-purple-500/10 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-purple-500/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/subjects" className="hidden sm:block">
            <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105">
              <BookOpen size={18} />
              <span>Browse</span>
            </button>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} className="text-purple-400" /> : <Menu size={24} className="text-slate-400" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-purple-500/20 pt-4 animate-slideInDown">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-500/10 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/subjects" className="block">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold">
                Browse Subjects
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;