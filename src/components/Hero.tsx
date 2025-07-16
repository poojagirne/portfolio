import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 z-1 bg-hero-gradient" /> */}

      {/* Content */}
      <div className="relative z-10 text-left mx-24 px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Hello 👋 I'm <br />
            <span className="text-5xl leading-relaxed font-bold">Pooja Girne </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              And I'm a <span className="hero-text">Front End Developer</span>
            </span>
          </h1>

      
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
