// src/components/ErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-md w-full">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-6">
                <AlertTriangle size={40} className="text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">Oops!</h1>
              <p className="text-slate-400 mb-8">Something went wrong. Please try refreshing the page.</p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-left max-h-32 overflow-y-auto">
                  <p className="text-xs font-mono text-red-400 break-all">{this.state.error.toString()}</p>
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <RefreshCw size={18} />
                  Refresh
                </button>
                <a
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-purple-500/50 text-white rounded-xl font-semibold hover:bg-purple-500/10 transition-all"
                >
                  <Home size={18} />
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;