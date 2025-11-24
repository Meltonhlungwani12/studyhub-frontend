/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t border-purple-500/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  StudyHub SA
                </h3>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              South Africa's premier learning platform for Grade 12 students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/subjects" className="text-slate-400 hover:text-purple-400 transition-colors">Subjects</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Past Papers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Study Notes</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Quizzes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">
                <Mail size={16} />
                <span>meltonhlungwani970@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+27 83 519 5789</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span>Johannesburg, ZA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            <p>&copy; {currentYear} StudyHub SA. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-start gap-1 text-xs mt-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> for South African Students 🇿🇦
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-slate-900/50 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-slate-400 hover:text-purple-400 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900/50 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-slate-400 hover:text-purple-400 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900/50 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-slate-400 hover:text-purple-400 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900/50 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-slate-400 hover:text-purple-400 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;