import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AudioWaveform } from './AudioWaveform';
import { Mic, Square, Pause, Play, Settings, Users } from 'lucide-react';

interface KaraokeStudioProps {
  songTitle?: string;
  artist?: string;
}

export const KaraokeStudio: React.FC<KaraokeStudioProps> = ({
  songTitle = "Bohemian Rhapsody",
  artist = "Queen"
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="space-y-6">
      {/* Song Info */}
      <Card className="p-6 text-center bg-gradient-primary">
        <h2 className="text-2xl font-bold text-white mb-2">{songTitle}</h2>
        <p className="text-white/80">by {artist}</p>
      </Card>

      {/* Audio Visualization */}
      <Card className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2">Your Performance</h3>
          <AudioWaveform isRecording={isRecording && !isPaused} />
        </div>

        {/* Recording Controls */}
        <div className="flex justify-center gap-4">
          <Button
            variant={isRecording ? "recording" : "performance"}
            size="lg"
            onClick={handleRecord}
            className="px-8"
          >
            {isRecording ? <Square className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Button>

          {isRecording && (
            <Button
              variant="outline"
              size="lg"
              onClick={handlePause}
            >
              {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
              {isPaused ? "Resume" : "Pause"}
            </Button>
          )}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="social" className="h-16">
          <Users className="h-5 w-5" />
          Start Duet
        </Button>
        <Button variant="outline" className="h-16">
          <Settings className="h-5 w-5" />
          Audio Settings
        </Button>
      </div>
    </div>
  );
};