import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
}

const projects = [
    {
      id: "ecommerce-app",
      title: "Food Ordering App",
      description: "React based food ordering app",
      longDescription:
        "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies and responsive design.",
      technologies: ["HTML", "CSS", "React.JS"],
      demoUrl: "https://food-app-psi-seven.vercel.app/",
      githubUrl: "https://github.com/poojagirne/food-app",
      status: "completed",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      id: "tour-travel",
      title: "Tour Travel App",
      description: "React-based travel booking application",
      longDescription:
        "A travel booking application that lets users browse destinations, manage itineraries, and book packages. Built with React and Material-UI for modern UI/UX.",
      technologies: ["HTML","React", "Tailwind CSS"],
      demoUrl:
        "https://tour-travel-git-main-poojagirnes-projects.vercel.app/",
      githubUrl: "https://github.com/poojagirne/tour-travel",
      status: "completed",
      image: "/tour-travel.png",
      featured: true,
    },
    {
      id: "econut",
      title: "Econut",
      description: "E-commerce website for organic products",
      longDescription:
        "A fully responsive online store for eco-friendly products, optimized for SEO and performance. Includes product catalog, checkout, and secure payment integration.",
      technologies: ["HTML","React", "Material-UI ","Next.js", "REST APIs"],
      demoUrl: "https://www.econut.store/",
      githubUrl: "",
      status: "completed",
      image: "/e-commerce.png",
      featured: false,
    },
  ];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "featured", label: "Featured", count: projects.filter(p => p.featured).length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length },
  ];

  const getFilteredProjects = () => {
    let filtered = projects;
    
    if (activeFilter === "featured") {
      filtered = projects.filter(project => project.featured);
    } else if (activeFilter !== "all") {
      filtered = projects.filter(project => project.category === activeFilter);
    }
    
    return showAll ? filtered : filtered.slice(0, 6);
  };

  const filteredProjects = getFilteredProjects();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "in-progress": return "bg-yellow-500";
      case "planned": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Planned";
      default: return status;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A showcase of my recent work, featuring web applications, APIs, and full-stack solutions 
            built with modern technologies and best practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="px-6 py-2"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-white`}>
                    {getStatusLabel(project.status)}
                  </Badge>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length >= 6 && (
          <div className="text-center">
            <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
              Show All Projects
            </Button>
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <Card className="bg-card/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Resume
              </Button>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;