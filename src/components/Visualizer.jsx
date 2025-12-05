import React from 'react';

const Visualizer = ({ isPlaying }) => {
  return (
    <div className="flex items-center justify-center gap-[2px] h-6">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`w-[2px] bg-gradient-to-t from-primary to-secondary rounded-full transition-all duration-500 ${
            isPlaying ? 'animate-pulse' : 'h-1'
          }`}
          style={{
            animationDelay: `${i * 0.05}s`,
            height: isPlaying ? `${Math.sin(i) * 30 + 70}%` : '4px'
          }}
        />
      ))}
    </div>

  );
};

export default Visualizer;
