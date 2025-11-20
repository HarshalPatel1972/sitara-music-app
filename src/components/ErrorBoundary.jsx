import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full flex justify-center items-center min-h-screen bg-background">
          <div className="text-center p-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
            <h1 className="text-4xl font-black text-white italic text-glow mb-4">Sitara Out of Sync</h1>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-black mb-8">The celestial orchestra encountered a hiccup.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Re-Orchestrate
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
