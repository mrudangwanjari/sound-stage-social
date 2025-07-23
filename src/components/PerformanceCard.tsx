import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

interface PerformanceCardProps {
  id: string;
  title: string;
  artist: string;
  performer: {
    name: string;
    avatar: string;
    username: string;
  };
  duration: string;
  likes: number;
  comments: number;
  score?: number;
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  artist,
  performer,
  duration,
  likes,
  comments,
  score
}) => {
  return (
    <Card className="p-4 hover:shadow-glow-primary transition-all duration-300 group">
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={performer.avatar} alt={performer.name} />
          <AvatarFallback>{performer.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground truncate">{title}</h3>
              <p className="text-sm text-muted-foreground">by {artist}</p>
              <p className="text-xs text-muted-foreground">@{performer.username}</p>
            </div>
            
            {score && (
              <div className="text-right">
                <div className="text-lg font-bold bg-gradient-performance bg-clip-text text-transparent">
                  {score}%
                </div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-3">
            <Button variant="performance" size="sm" className="flex-1">
              <Play className="h-4 w-4" />
              Play • {duration}
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Heart className="h-4 w-4" />
                {likes}
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <MessageCircle className="h-4 w-4" />
                {comments}
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};