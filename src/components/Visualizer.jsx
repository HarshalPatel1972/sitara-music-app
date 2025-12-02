import React from 'react';

const Visualizer = ({ isPlaying }) => {
  return (
    <div className="flex items-center justify-center gap-[3px] h-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-[3px] bg-primary rounded-full transition-all duration-300 ${
            isPlaying ? 'animate-bounce' : 'h-1'
          }`}
          style={{
            animationDelay: `${i * 0.15}s`,
            height: isPlaying ? `${Math.random() * 100 + 20}%` : '4px'
          }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
