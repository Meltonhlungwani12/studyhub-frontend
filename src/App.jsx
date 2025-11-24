// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const SubjectsPage = lazy(() => import('./pages/SubjectPage'));
const ResourcePage = lazy(() => import('./pages/ResourcePage'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <Header />
          <main className="flex-1 pt-24">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subjects" element={<SubjectsPage />} />
                <Route path="/subject/:subjectName" element={<ResourcePage />} />
                <Route path="*" element={<div className="text-center pt-20 text-white"><h1>Page Not Found</h1></div>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;