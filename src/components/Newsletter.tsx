
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds for demo
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    "Weekly curated stories from our community",
    "Exclusive resource downloads and templates",
    "Early access to events and workshops",
    "Monthly career and wellness tips",
    "Personal development challenges"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-chronicle-600 via-rose-500 to-chronicle-500 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Join 50,000+ Women
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Inspired Weekly
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Get the best stories, resources, and opportunities delivered 
              straight to your inbox. Join thousands of women who start their 
              week with inspiration.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-12">
            <CardContent className="p-8">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:bg-white/30"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-white text-chronicle-600 hover:bg-white/90 font-semibold px-8"
                    >
                      Subscribe Now
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-white/70">
                    Free forever. Unsubscribe anytime. No spam, we promise.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Welcome to the Family!</h3>
                  <p className="text-white/90">Check your email for a special welcome gift.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/90">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-lg">
            <p className="text-lg italic mb-4">
              "The Women's Chronicles newsletter has become my weekly dose of inspiration. 
              The stories and resources have genuinely helped me navigate my career transition."
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm font-semibold">
                JD
              </div>
              <span className="font-medium">Jessica Davis, Marketing Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
