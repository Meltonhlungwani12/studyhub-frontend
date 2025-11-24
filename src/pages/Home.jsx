// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Video, FileText, Brain, Award, Users,
  Zap, TrendingUp, Star, Sparkles, ChevronRight,
  CheckCircle, Target, Lightbulb, ArrowRight
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: FileText,
      title: 'Past Papers',
      description: 'Access comprehensive NSC exam papers from 2015-2024 with detailed memorandums',
      color: 'from-blue-500 to-cyan-500',
      stats: '100+ Papers',
      delay: '0ms'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Learn from HD video lessons created by top South African educators',
      color: 'from-purple-500 to-pink-500',
      stats: '500+ Videos',
      delay: '100ms'
    },
    {
      icon: BookOpen,
      title: 'Study Notes',
      description: 'Comprehensive, curriculum-aligned notes for all Grade 12 subjects',
      color: 'from-orange-500 to-red-500',
      stats: '22 Subjects',
      delay: '200ms'
    },
    {
      icon: Brain,
      title: 'Practice Quizzes',
      description: 'Interactive assessments to test your knowledge and track progress',
      color: 'from-green-500 to-emerald-500',
      stats: 'Unlimited Practice',
      delay: '300ms'
    },
    {
      icon: Award,
      title: 'Digital Textbooks',
      description: 'Complete digital textbooks perfectly aligned with CAPS curriculum',
      color: 'from-yellow-500 to-orange-500',
      stats: 'Full Library',
      delay: '400ms'
    },
    {
      icon: Users,
      title: 'Study Community',
      description: 'Connect and collaborate with fellow matric students nationwide',
      color: 'from-indigo-500 to-purple-500',
      stats: '50K+ Students',
      delay: '500ms'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Students', icon: Users, color: 'purple' },
    { number: '22', label: 'Subjects', icon: BookOpen, color: 'pink' },
    { number: '1000+', label: 'Resources', icon: FileText, color: 'cyan' },
    { number: '95%', label: 'Success Rate', icon: Award, color: 'emerald' }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'CAPS Aligned',
      description: 'All content perfectly matches the national curriculum'
    },
    {
      icon: Target,
      title: 'Exam Focused',
      description: 'Specifically designed to help you ace your matric exams'
    },
    {
      icon: Lightbulb,
      title: 'Easy to Understand',
      description: 'Complex concepts broken down into simple, digestible lessons'
    },
    {
      icon: Zap,
      title: 'Always Updated',
      description: 'Fresh content added regularly to keep you ahead'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-3xl animate-blob"
          style={{
            top: `${mousePosition.y}%`,
            left: `${mousePosition.x}%`,
          }}
        />
        <div 
          className="absolute w-[35vw] h-[35vw] bg-pink-500/15 rounded-full blur-3xl animate-blob"
          style={{
            top: `${100 - mousePosition.y}%`,
            left: `${100 - mousePosition.x}%`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-3xl animate-blob"
          style={{
            top: `${mousePosition.y / 2}%`,
            left: `${100 - mousePosition.x / 2}%`,
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-background" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-heavy">
                <Sparkles size={20} className="text-yellow-400 animate-pulse-glow" />
                <span className="text-sm font-semibold text-purple-300 tracking-wide">
                  Grade 12 • Matric 2025
                </span>
              </div>
              
              {/* Enhanced Main Headline */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
                  <span className="block text-white glow-text">Ace Your</span>
                  <span className="text-gradient block animate-shimmer">
                    Matric Year
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  Your complete study companion with 1000+ resources. Past papers, video tutorials, 
                  study notes, and more — all aligned with the South African CAPS curriculum.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/subjects')}
                  className="btn-primary group"
                >
                  <BookOpen size={24} />
                  <span>Explore Resources</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>

              {/* Enhanced Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div 
                    key={idx}
                    className="feature-card p-5 animate-slide-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-${stat.color}-500/20`}>
                        <stat.icon size={24} className={`text-${stat.color}-400`} />
                      </div>
                      <p className="text-4xl font-black text-white">{stat.number}</p>
                    </div>
                    <p className="text-sm text-slate-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Right Visual */}
            <div className="relative h-[600px] animate-slide-up" style={{ animationDelay: '200ms' }}>
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Enhanced Main Card */}
              <div className="relative h-full feature-card group">
                
                {/* Enhanced Floating Feature Cards */}
                <div className="absolute top-10 left-10 p-5 bg-slate-900/80 backdrop-blur-heavy rounded-2xl border border-purple-500/30 shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <Video size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Video Lessons</p>
                      <p className="text-xs text-slate-400">500+ Tutorials</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 right-10 p-5 bg-slate-900/80 backdrop-blur-heavy rounded-2xl border border-pink-500/30 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Past Papers</p>
                      <p className="text-xs text-slate-400">10 Years</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 p-5 bg-slate-900/80 backdrop-blur-heavy rounded-2xl border border-cyan-500/30 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                      <Brain size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Smart Quizzes</p>
                      <p className="text-xs text-slate-400">Track Progress</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Center Emoji */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl animate-float">
                  🎓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Everything You Need to
              <span className="block text-gradient">
                Excel in Matric
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive study resources designed specifically for South African Grade 12 students
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group cursor-pointer animate-slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative">
                  {/* Enhanced Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Enhanced Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Enhanced Stats Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold text-purple-300">
                    <Zap size={14} />
                    {feature.stats}
                  </div>

                  {/* Enhanced Arrow */}
                  <div className="flex items-center gap-2 mt-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold">
                    <span>Explore</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="feature-card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <benefit.icon size={48} className="text-purple-400 mb-4 mx-auto" />
                <h4 className="text-lg font-bold mb-2 text-white">{benefit.title}</h4>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative p-12 rounded-3xl overflow-hidden feature-card animate-slide-up">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            
            {/* Enhanced Content */}
            <div className="relative text-center">
              <Star size={56} className="mx-auto mb-6 text-yellow-400 animate-pulse-glow" />
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Ready to Ace Your Matric?
              </h2>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Join 50,000+ South African students using StudyHub SA to achieve their dream results
              </p>
              <button
                onClick={() => navigate('/subjects')}
                className="btn-primary bg-white text-purple-600 hover:bg-slate-100 group"
              >
                <TrendingUp size={24} />
                <span>Start Learning Now</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;