import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building robust applications with modern technologies and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that delight users."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and scalable solutions for optimal user experience."
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            About me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            WHO AM I
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 bg-card rounded-lg overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-black">Frontend</p>
                <p className="text-sm text-black">Developer</p>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg leading-relaxed mb-4 text-black">
                I'm a <span className="text-primary font-semibold">Pooja</span> and{" "}
                <span className="text-primary font-semibold">I'm a Front End Developer</span>
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a dedicated front end developer focused on creating attractive 
                and user-friendly websites. I am passionate about translating design 
                concepts into interactive digital experiences and continually 
                improving my skill set to stay updated with the latest industry trends. 
                My portfolio showcases a variety of projects that demonstrate my 
                ability to solve problems and to make innovative solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <span className="text-primary-foreground text-sm font-bold">G</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <span className="text-primary-foreground text-sm font-bold">T</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <span className="text-primary-foreground text-sm font-bold">L</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;