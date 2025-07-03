
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Stories", href: "#stories" },
    { name: "Resources", href: "#resources" },
    { name: "Community", href: "#community" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-chronicle-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-chronicle-600" />
            <span className="text-xl font-bold gradient-text">
              The Women's Chronicles
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-chronicle-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-chronicle-200 text-chronicle-700 hover:bg-chronicle-50"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-chronicle-600 to-rose-500 hover:from-chronicle-700 hover:to-rose-600 text-white">
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-chronicle-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-chronicle-100">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-chronicle-600 font-medium py-2 px-2 rounded-md hover:bg-chronicle-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-chronicle-100">
                <Button 
                  variant="outline" 
                  className="border-chronicle-200 text-chronicle-700 hover:bg-chronicle-50 w-full"
                >
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-chronicle-600 to-rose-500 hover:from-chronicle-700 hover:to-rose-600 text-white w-full">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
