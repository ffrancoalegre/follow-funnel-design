
import { Button } from "@/components/ui/button";
import { Instagram, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-instagram-gradient rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-instagram-gradient bg-clip-text text-transparent">
              InstaBoost
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-600 hover:text-instagram-pink transition-colors">
              Precios
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-instagram-pink transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-gray-600 hover:text-instagram-pink transition-colors">
              FAQ
            </a>
            <Button className="btn-instagram">
              Comenzar Ahora
            </Button>
          </nav>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
