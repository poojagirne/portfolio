import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  id: string;
  name: string;
  icon: string;
  experience: string;
  proficiency: number;
  description: string;
  category: "frontend" | "backend" | "programming" | "tools";
  color: string;
}

const skills: Skill[] = [
  {
    id: "html5",
    name: "HTML5",
    icon: "🔥",
    experience: "4+ years",
    proficiency: 90,
    description: "Semantic markup, accessibility, modern HTML5 features",
    category: "frontend",
    color: "bg-green-500",
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "💎",
    experience: "4+ years",
    proficiency: 85,
    description: "Flexbox, Grid, animations, responsive design",
    category: "frontend",
    color: "bg-green-500",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    experience: "4+ years",
    proficiency: 80,
    description: "ES6+, async programming, DOM manipulation",
    category: "programming",
    color: "bg-yellow-500",
  },
  {
    id: "react",
    name: "React.js",
    icon: "⚛️",
    experience: "4+ years",
    proficiency: 90,
    description: "Hooks, context, component architecture",
    category: "frontend",
    color: "bg-blue-500",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🎨",
    experience: "1+ year",
    proficiency: 60,
    description: "Utility-first CSS, responsive design",
    category: "frontend",
    color: "bg-orange-500",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "🌟",
    experience: "2+ years",
    proficiency: 70,
    description: "Server-side JavaScript, REST APIs",
    category: "backend",
    color: "bg-green-600",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "▲",
    experience: "4+ years",
    proficiency: 80,
    description: "SSR, API routes, file-based routing, performance optimizations",
    category: "frontend",
    color: "bg-blue-600",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "📘",
    experience: "3+ years",
    proficiency: 70,
    description: "Type safety, interfaces, generics",
    category: "programming",
    color: "bg-blue-600",
  },
  {
    id: "git",
    name: "Git",
    icon: "🔧",
    experience: "2+ years",
    proficiency: 75,
    description: "Version control, branching, collaboration",
    category: "tools",
    color: "bg-gray-500",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "🍃",
    experience: "2+ years",
    proficiency: 60,
    description: "NoSQL database, queries, aggregation",
    category: "backend",
    color: "bg-green-600",
  },
  {
    id: "express",
    name: "Express.js",
    icon: "🚀",
    experience: "2+ years",
    proficiency: 65,
    description: "Web framework, middleware, routing",
    category: "backend",
    color: "bg-gray-600",
  },
];

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills", count: skills.length },
    { id: "frontend", label: "Frontend", count: skills.filter(s => s.category === "frontend").length },
    { id: "backend", label: "Backend", count: skills.filter(s => s.category === "backend").length },
    { id: "programming", label: "Programming", count: skills.filter(s => s.category === "programming").length },
    { id: "tools", label: "Tools", count: skills.filter(s => s.category === "tools").length },
  ];

  const filteredSkills =
    activeFilter === "all" ? skills : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A comprehensive overview of my technical skills, experience levels, and
            areas of expertise in software development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <Card
              key={skill.id}
              className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.experience}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-2xl font-bold text-primary">{skill.proficiency}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${skill.color}`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
