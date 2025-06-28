
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Heart, 
  Users, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Target,
  Coffee
} from "lucide-react";

const ResourceCategories = () => {
  const categories = [
    {
      icon: Briefcase,
      title: "Career & Leadership",
      description: "Navigate your professional journey with confidence",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      count: "450+ resources"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Prioritize your physical and mental well-being",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50 hover:bg-rose-100",
      count: "320+ resources"
    },
    {
      icon: Users,
      title: "Relationships",
      description: "Build meaningful connections and healthy boundaries",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      count: "280+ resources"
    },
    {
      icon: Sparkles,
      title: "Lifestyle & Growth",
      description: "Embrace personal development and life balance",
      color: "from-chronicle-500 to-chronicle-600",
      bgColor: "bg-chronicle-50 hover:bg-chronicle-100",
      count: "380+ resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empower Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access curated resources, expert advice, and practical tools 
            to help you thrive in every aspect of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className={`group hover-lift cursor-pointer border-2 hover:border-chronicle-200 transition-all duration-300 ${category.bgColor}`}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-chronicle-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="text-sm text-chronicle-600 font-medium mb-4">
                    {category.count}
                  </div>

                  <div className="flex items-center justify-center text-chronicle-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Resource Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white border hover:shadow-lg transition-shadow duration-300">
            <BookOpen className="w-12 h-12 text-chronicle-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Expert Articles</h4>
            <p className="text-muted-foreground text-sm">In-depth guides written by industry professionals</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white border hover:shadow-lg transition-shadow duration-300">
            <Target className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Goal Planners</h4>
            <p className="text-muted-foreground text-sm">Structured templates to achieve your objectives</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white border hover:shadow-lg transition-shadow duration-300">
            <Coffee className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Community Events</h4>
            <p className="text-muted-foreground text-sm">Virtual meetups and networking opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;
