
import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import ResourceCategories from "@/components/ResourceCategories";
import CommunityHighlights from "@/components/CommunityHighlights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedStories />
      <ResourceCategories />
      <CommunityHighlights />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
