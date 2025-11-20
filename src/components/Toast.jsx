import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'error', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-10 right-10 z-[200] animate-slidedown">
      <div className={`px-6 py-4 rounded-2xl backdrop-blur-2xl border flex items-center gap-4 shadow-2xl ${
        type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-primary/10 border-primary/20 text-primary'
      }`}>
        <div className={`w-2 h-2 rounded-full animate-pulse ${type === 'error' ? 'bg-red-500' : 'bg-primary'}`} />
        <span className="font-black text-xs uppercase tracking-widest">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
