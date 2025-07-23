import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KaraokeStudio } from '@/components/KaraokeStudio';
import { PerformanceCard } from '@/components/PerformanceCard';
import { AudioWaveform } from '@/components/AudioWaveform';
import { 
  Mic, 
  Search, 
  TrendingUp, 
  Users, 
  Trophy, 
  Music,
  Star,
  Crown,
  Zap,
  Play
} from 'lucide-react';
import heroImage from '@/assets/karaoke-hero.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for performances
  const featuredPerformances = [
    {
      id: '1',
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      performer: {
        name: 'Alex Johnson',
        avatar: '/placeholder.svg',
        username: 'alexsings'
      },
      duration: '3:42',
      likes: 1247,
      comments: 89,
      score: 94
    },
    {
      id: '2',
      title: 'Someone Like You',
      artist: 'Adele',
      performer: {
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        username: 'sarahmelody'
      },
      duration: '4:12',
      likes: 892,
      comments: 156,
      score: 88
    },
    {
      id: '3',
      title: 'Perfect',
      artist: 'Ed Sheeran',
      performer: {
        name: 'Mike Wilson',
        avatar: '/placeholder.svg',
        username: 'mikevocals'
      },
      duration: '4:23',
      likes: 1567,
      comments: 203,
      score: 91
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SoundStage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Sing, Record, Collaborate & Share Your Voice with the World
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Mic className="h-6 w-6" />
              Start Singing Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Play className="h-6 w-6" />
              Explore Performances
            </Button>
          </div>
          
          <div className="flex justify-center">
            <AudioWaveform isRecording={true} />
          </div>
        </div>
      </section>

      {/* Main App Interface */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="studio" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="studio" className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Studio
              </TabsTrigger>
              <TabsTrigger value="feed" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Feed
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="studio" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <KaraokeStudio />
                </div>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Total Performances</span>
                        <span className="font-bold">47</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Best Score</span>
                        <span className="font-bold text-success">96%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Followers</span>
                        <span className="font-bold">1.2K</span>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Popular Songs</h3>
                    <div className="space-y-3">
                      {['Bohemian Rhapsody', 'Shape of You', 'Rolling in the Deep'].map((song, index) => (
                        <div key={song} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-performance flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm">{song}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feed" className="space-y-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search performances, artists, or users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="performance">
                  <Users className="h-4 w-4" />
                  Find Duet Partner
                </Button>
              </div>
              
              <div className="grid gap-6">
                {featuredPerformances.map((performance) => (
                  <PerformanceCard key={performance.id} {...performance} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-performance">
                  <div className="text-white">
                    <Zap className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Viral Challenge</h3>
                    <p className="opacity-90">Queen Medley Challenge</p>
                    <p className="text-sm opacity-75 mt-2">2.3K participants</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-social">
                  <div className="text-white">
                    <Star className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Rising Star</h3>
                    <p className="opacity-90">@melodyqueen</p>
                    <p className="text-sm opacity-75 mt-2">+50K followers this week</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-primary">
                  <div className="text-white">
                    <Crown className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Top Performance</h3>
                    <p className="opacity-90">Perfect by Ed Sheeran</p>
                    <p className="text-sm opacity-75 mt-2">98% score</p>
                  </div>
                </Card>
              </div>
              
              <div className="grid gap-6">
                {featuredPerformances.map((performance) => (
                  <PerformanceCard key={performance.id} {...performance} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Weekly Champions</h3>
                  <div className="space-y-3">
                    {['@alexsings', '@sarahmelody', '@mikevocals'].map((user, index) => (
                      <div key={user} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          index === 0 ? 'bg-warning' : index === 1 ? 'bg-muted' : 'bg-success'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-sm">{user}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Best Duets</h3>
                  <div className="space-y-2 text-sm">
                    <div>@alex & @sarah • Shallow</div>
                    <div>@mike & @jenny • Perfect</div>
                    <div>@david & @emma • Rewrite</div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Most Active</h3>
                  <div className="space-y-2 text-sm">
                    <div>@musiclover • 47 songs</div>
                    <div>@vocalist • 42 songs</div>
                    <div>@harmony • 38 songs</div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;
