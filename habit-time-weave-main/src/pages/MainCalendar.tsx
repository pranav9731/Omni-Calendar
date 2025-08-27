import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
  ArrowRight,
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

      <div className="relative px-4 sm:px-6 py-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold gradient-text">Welcome back, John!</h1>
                <p className="text-base sm:text-lg text-muted-foreground italic">"{currentQuote}"</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto">
            <Button size="sm" variant="outline" className="glass-button gap-2 hover:shadow-glow transition-all whitespace-nowrap">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="h-2 w-2 p-0 rounded-full"></Badge>
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2 whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2 whitespace-nowrap">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Goals</span>
            </Button>
            <Button size="sm" variant="outline" className="glass-button gap-2 whitespace-nowrap">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">AI Suggest</span>
            </Button>
            <Button className="gap-2 shadow-elegant hover:shadow-glow transition-all group whitespace-nowrap px-3 py-2 sm:px-4">
              <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
              <span className="hidden sm:inline">New Event</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="glass-button">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onBackToLogin} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Calendar Card */}
            <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-elegant animate-scale-in hover:shadow-glow transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {new Date().toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </h2>
                </div>

                <Tabs value={view} onValueChange={(v) => setView(v as 'day' | 'week' | 'month')} className="w-full sm:w-56 md:w-48">
                  <TabsList className="glass-card w-full flex justify-between">
                    <TabsTrigger value="day" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Day</TabsTrigger>
                    <TabsTrigger value="week" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Week</TabsTrigger>
                    <TabsTrigger value="month" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
                {/* Calendar Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Button size="sm" className="bg-black">
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-black">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-gradient-primary data-[state=active]:text-white">
                      Today
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="space-y-4">
                    {/* Calendar Grid */}
                    <div className="border border-border rounded-lg overflow-hidden">
                      {/* Days of Week Header */}
                      <div className="grid grid-cols-7 bg-muted/50">
                        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                          <div key={day} className="p-3 text-center border-r border-border last:border-r-0">
                            <div className="text-sm font-semibold text-primary">{day}</div>
                          </div>
                        ))}
                      </div>

                      {/* Calendar Days Grid */}
                      <div className="grid grid-cols-7">
                        {/* Previous Month Days */}
                        {Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() }, (_, i) => (
                          <div key={`prev-${i}`} className="min-h-[80px] bg-muted/20 p-2 border-r border-b border-border last:border-r-0">
                            <div className="text-sm text-muted-foreground">
                              {new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate() - new Date(new Date().getMonth(), 1).getDay() + i + 1}
                            </div>
                          </div>
                        ))}

                        {/* Current Month Days */}
                        {Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() }, (_, i) => {
                          const dayNumber = i + 1;
                          const isToday = dayNumber === new Date().getDate() && new Date().getMonth() === new Date().getMonth();

                          return (
                            <div
                              key={dayNumber}
                              className={`min-h-[80px] p-2 border-r border-b border-border last:border-r-0 transition-colors hover:bg-accent/20 cursor-pointer ${isToday ? 'bg-primary/10 border-2 border-primary' : 'bg-card'
                                }`}
                            >
                              <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary font-bold' : 'text-foreground'
                                }`}>
                                {dayNumber}
                              </div>

                              {/* Empty event slots for layout */}
                              <div className="space-y-1">
                                <div className="h-3 bg-muted/30 rounded opacity-0"></div>
                                <div className="h-3 bg-muted/30 rounded opacity-0"></div>
                              </div>
                            </div>
                          );
                        })}

                        {/* Next Month Days */}
                        {Array.from({ length: (7 - ((new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() + new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) % 7)) % 7 }, (_, i) => (
                          <div key={`next-${i}`} className="min-h-[80px] bg-muted/20 p-2 border-r border-b border-border last:border-r-0">
                            <div className="text-sm text-muted-foreground">
                              {i + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
                    className="glass-card p-4 sm:p-5 md:p-6 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer animate-fade-in-up"
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
            <Card className="glass-card p-4 sm:p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
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
            <Card className="glass-card p-4 sm:p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
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
            <Card className="glass-card p-4 sm:p-6 shadow-elegant animate-fade-in-up hover:shadow-glow transition-all duration-500">
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
      <footer className="w-full mt-16">
        <Card className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t-2 border-primary/30 p-8 shadow-2xl transition-all duration-500 rounded-none">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-primary">
                    <CalendarIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Omni-Calendar</h3>
                </div>
                <p className="text-slate-300 mb-4 max-w-md">
                  Transform your productivity with intelligent time management.
                  Where plans meet action, and every minute counts.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-700 hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-700 hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-700 hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Development Team</h4>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Pranav Trivedi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Rahul K. Singh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Ashraf Ali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Diksha Murari</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">About</h4>
                <div className="space-y-2 text-slate-300">
                  <a href="#" className="block hover:text-primary transition-colors">About Us</a>
                  <a href="#" className="block hover:text-primary transition-colors">Premium</a>
                  <a href="#" className="block hover:text-primary transition-colors">Support</a>
                  <a href="https://www.google.com/maps/" className="block hover:text-primary transition-colors">Maps</a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                &copy; 2025 FSD Group 10. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </Card>
      </footer>
    </div>
  );
};

export default MainCalendar;