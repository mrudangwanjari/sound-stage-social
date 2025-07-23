import React from 'react';

interface AudioWaveformProps {
  isRecording?: boolean;
  amplitude?: number;
  bars?: number;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isRecording = false,
  amplitude = 0.5,
  bars = 20
}) => {
  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {Array.from({ length: bars }).map((_, index) => (
        <div
          key={index}
          className={`
            w-1 bg-gradient-performance rounded-full transition-all duration-150
            ${isRecording ? 'animate-audio-wave' : 'opacity-50'}
          `}
          style={{
            height: isRecording 
              ? `${Math.random() * 60 + 10}px` 
              : '10px',
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};