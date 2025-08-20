import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Calendar as CalendarIcon,
  Plus,
  Clock,
  MapPin,
  Users,
  Target,
  Star,
  Zap,
  Heart,
  Coffee,
  Briefcase,
  TrendingUp,
  Bell,
  Settings,
  Filter,
  MoreHorizontal,
  Video,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  LogOut
} from "lucide-react";

interface MainCalendarProps {
  onBackToLogin: () => void;
}

const MainCalendar = ({ onBackToLogin }: MainCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('month');

  const mockEvents = [
    {
      id: 1,
      title: "Team Standup",
      time: "9:00 AM",
      duration: "30 min",
      type: "meeting",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      participants: 5,
      location: "Conference Room A"
    },
    {
      id: 2,
      title: "Workout Session",
      time: "6:00 PM",
      duration: "1 hour",
      type: "personal",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      location: "Fitness Center"
    },
    {
      id: 3,
      title: "Coffee with Sarah",
      time: "2:00 PM",
      duration: "45 min",
      type: "social",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      location: "Starbucks Downtown"
    },
    {
      id: 4,
      title: "Project Review",
      time: "3:30 PM",
      duration: "1.5 hours",
      type: "work",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
      participants: 8,
      location: "Zoom Meeting"
    }
  ];

  const quotes = [
    "The Timekeeper Who Cares",
    "Never Miss a Beat",
    "Great meetings start with great time",
    "Your Day, Your Rules"
  ];

  const weekStats = {
    meetings: 12,
    personalTime: "18h",
    goalsCompleted: { current: 7, total: 10 },
    productivity: 87
  };

  const upcomingEvents = mockEvents.slice(0, 2);
  const currentQuote = quotes[Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % quotes.length];

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Welcome back, John!</h1>
                <p className="text-lg text-muted-foreground italic">"{currentQuote}"</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" className="glass-button gap-2 hover:shadow-glow transition-all">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="h-2 w-2 p-0 rounded-full"></Badge>
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2">
              <Target className="h-4 w-4" />
              Goals
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2">
              <Zap className="h-4 w-4" />
              AI Suggest
            </Button>
            <Button className="gap-2 shadow-elegant hover:shadow-glow transition-all group">
              <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
              New Event
            </Button>
            <Button size="sm" variant="ghost" className="glass-button">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              onClick={onBackToLogin}
              size="sm" 
              variant="outline" 
              className="glass-button gap-2 hover:shadow-glow transition-all"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Calendar Card */}
            <Card className="glass-card p-8 shadow-elegant animate-scale-in hover:shadow-glow transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {new Date().toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </h2>
                  <p className="text-muted-foreground">Manage your time, master your life</p>
                </div>

                <Tabs value={view} onValueChange={(v) => setView(v as 'day' | 'week' | 'month')} className="w-48">
                  <TabsList className="glass-card">
                    <TabsTrigger value="day" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Day</TabsTrigger>
                    <TabsTrigger value="week" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Week</TabsTrigger>
                    <TabsTrigger value="month" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-2xl border-0 w-full [&_.rdp-head_cell]:text-primary [&_.rdp-head_cell]:font-semibold [&_.rdp-day_selected]:bg-gradient-primary [&_.rdp-day_selected]:text-white [&_.rdp-day_today]:bg-accent [&_.rdp-day_today]:font-bold [&_.rdp-day]:hover:bg-accent/50 [&_.rdp-day]:transition-colors [&_.rdp-day]:rounded-lg"
              />
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Video, label: "Schedule Meeting", color: "from-blue-500 to-cyan-500" },
                { icon: Target, label: "Set Goal", color: "from-green-500 to-emerald-500" },
                { icon: MessageSquare, label: "Team Chat", color: "from-purple-500 to-pink-500" },
                { icon: TrendingUp, label: "View Reports", color: "from-orange-500 to-red-500" }
              ].map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${action.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium text-sm">{action.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Events */}
            <Card className="glass-card p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Today's Schedule</h3>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {mockEvents.length} events
                </Badge>
              </div>

              <div className="space-y-4">
                {mockEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <div
                      key={event.id}
                      className="group relative overflow-hidden rounded-xl p-4 glass-card hover:shadow-glow transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <div className="relative flex items-start gap-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${event.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-sm truncate">{event.title}</p>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-primary font-medium mb-2">{event.time} • {event.duration}</p>
                          {event.location && (
                            <div className="flex items-center gap-1 mb-2">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <p className="text-xs text-muted-foreground truncate">{event.location}</p>
                            </div>
                          )}
                          {event.participants && (
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-muted-foreground" />
                              <p className="text-xs text-muted-foreground">{event.participants} participants</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Week Stats */}
            <Card className="glass-card p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                This Week
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Meetings</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600">
                      {weekStats.meetings}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Personal Time</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                    {weekStats.personalTime}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Goals Progress</span>
                    <span className="text-sm font-medium">{weekStats.goalsCompleted.current}/{weekStats.goalsCompleted.total}</span>
                  </div>
                  <Progress
                    value={(weekStats.goalsCompleted.current / weekStats.goalsCompleted.total) * 100}
                    className="h-2 bg-accent/50"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Productivity Score</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-primary">{weekStats.productivity}%</span>
                      <TrendingUp className="h-3 w-3 text-success" />
                    </div>
                  </div>
                  <Progress
                    value={weekStats.productivity}
                    className="h-2 bg-accent/50"
                  />
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card className="glass-card p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
              <h3 className="text-xl font-bold mb-6">Event Categories</h3>

              <div className="space-y-4">
                {[
                  { name: "Work", count: 8, color: "bg-blue-500", gradient: "from-blue-500 to-blue-600" },
                  { name: "Personal", count: 5, color: "bg-green-500", gradient: "from-green-500 to-emerald-500" },
                  { name: "Social", count: 3, color: "bg-orange-500", gradient: "from-orange-500 to-red-500" },
                  { name: "Health", count: 4, color: "bg-purple-500", gradient: "from-purple-500 to-pink-500" }
                ].map((category, index) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-3 rounded-lg glass-card hover:shadow-glow transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient} group-hover:scale-110 transition-transform`}></div>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="w-full">
        <Card className="w-full bg-gradient-hero backdrop-blur-sm border-2 border-primary/20 p-6 dow-glow transition-all duration-500 rounded-none">
          <div className="text-lg space-y-4">
            <div className="text-lg font-bold text-foreground mb-2">&copy; FSD Group 10.</div>
            <div className="text-sm text-foreground/80 space-y-1">
              <div className="grid grid-cols-4 gap-4"><strong>Members:</strong></div>
              Pranav Trivedi <br />
              Rahul K. Singh <br />
              Ashraf Ali <br />
              Diksha Murari
              <div>
                <a href="https://www.google.com/maps/" className="text-green-900 hover:underline">
                  Maps
                </a>
              </div>
            </div>
          </div>
        </Card>
      </footer>
    </div>
  );
};

export default MainCalendar;