
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Clock } from "lucide-react";

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "Breaking the Glass Ceiling: My Journey to Executive Leadership",
      author: "Sarah Chen",
      category: "Career",
      excerpt: "After 15 years in tech, I finally broke through the barriers that held me back. Here's how I navigated corporate politics, overcame imposter syndrome, and secured my dream role as CTO.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      likes: 342,
      comments: 89,
      isPopular: true
    },
    {
      id: 2,
      title: "Motherhood Redefined: Balancing Dreams and Diapers",
      author: "Maya Rodriguez",
      category: "Lifestyle",
      excerpt: "Becoming a mother doesn't mean putting your dreams on hold. I learned to redefine success and found ways to pursue my passion for photography while raising two kids.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      likes: 278,
      comments: 52,
      isPopular: false
    },
    {
      id: 3,
      title: "The Healing Journey: Overcoming Anxiety Through Community",
      author: "Amara Johnson",
      category: "Health",
      excerpt: "Mental health struggles felt isolating until I found this community. Sharing my story of overcoming anxiety helped me heal and connect with others on similar journeys.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
      likes: 456,
      comments: 134,
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Chronicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful stories from women around the world who are making a difference, 
            overcoming challenges, and inspiring others through their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className={`group hover-lift cursor-pointer border-2 hover:border-chronicle-200 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 ? 'h-80' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {story.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-chronicle-500 to-rose-500 text-white">
                    Popular
                  </Badge>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-white/90 text-chronicle-700"
                >
                  {story.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className={`font-bold group-hover:text-chronicle-600 transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-chronicle-400 to-rose-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {story.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{story.author}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {story.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {story.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {story.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-chronicle-200 text-chronicle-700 hover:bg-chronicle-50 px-8"
          >
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
