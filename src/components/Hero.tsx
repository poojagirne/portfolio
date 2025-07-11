import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello 👋 I'm{" "}
            <br />
            <span className="hero-text">
Pooja Girne            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              And I'm a <span className="hero-text">Front End Developer</span>
            </span>
          </h1>
          
     
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
        
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;