
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  Zap,
  MapPin,
  Clock
} from "lucide-react";

const CommunityHighlights = () => {
  const discussions = [
    {
      title: "Negotiating Your First Executive Salary",
      author: "Lisa Park",
      replies: 34,
      category: "Career",
      timeAgo: "2 hours ago",
      isHot: true
    },
    {
      title: "Balancing Motherhood and Entrepreneurship",
      author: "Rachel Kim",
      replies: 28,
      category: "Lifestyle",
      timeAgo: "5 hours ago",
      isHot: false
    },
    {
      title: "Mental Health Resources for Working Women",
      author: "Dr. Amanda Torres",
      replies: 67,
      category: "Health",
      timeAgo: "1 day ago",
      isHot: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Women in Tech Leadership Panel",
      date: "Dec 15, 2024",
      time: "7:00 PM EST",
      attendees: 245,
      type: "Virtual Panel"
    },
    {
      title: "Mindful Monday: Wellness Workshop",
      date: "Dec 18, 2024",
      time: "12:00 PM EST",
      attendees: 89,
      type: "Workshop"
    },
    {
      title: "Networking Mixer: NYC Chapter",
      date: "Dec 20, 2024",
      time: "6:30 PM EST",
      attendees: 156,
      type: "In-Person"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community <span className="gradient-text">Pulse</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join vibrant discussions, attend empowering events, and connect 
            with like-minded women who are changing the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Active Discussions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-chronicle-500 to-rose-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Hot Discussions</h3>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="group hover-lift cursor-pointer border hover:border-chronicle-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {discussion.category}
                          </Badge>
                          {discussion.isHot && (
                            <Badge className="bg-gradient-to-r from-chronicle-500 to-rose-500 text-white text-xs">
                              <Zap className="w-3 h-3 mr-1" />
                              Hot
                            </Badge>
                          )}
                        </div>
                        
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-chronicle-600 transition-colors">
                          {discussion.title}
                        </h4>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {discussion.replies} replies
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {discussion.timeAgo}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-6 border-chronicle-200 text-chronicle-700 hover:bg-chronicle-50"
            >
              Join the Conversation
            </Button>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="group hover-lift cursor-pointer border hover:border-chronicle-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <Badge 
                          variant="outline" 
                          className="mb-2 text-xs"
                        >
                          {event.type}
                        </Badge>
                        
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-chronicle-600 transition-colors">
                          {event.title}
                        </h4>
                        
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.attendees} attendees
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-chronicle-600 to-rose-500 hover:from-chronicle-700 hover:to-rose-600 text-white"
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-6 border-chronicle-200 text-chronicle-700 hover:bg-chronicle-50"
            >
              View All Events
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-chronicle-50 to-rose-50 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2.5K</div>
            <div className="text-muted-foreground">Active Discussions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">156</div>
            <div className="text-muted-foreground">Monthly Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
