import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Foodline App",
      description: "React js, Javascript, Tailwind CSS",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "ToDo List App",
      description: "React js, Javascript, Tailwind CSS",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Google Auth App",
      description: "React js, Javascript, Tailwind CSS",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            Check my work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden group bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-muted rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;