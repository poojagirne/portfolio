import { Card } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            What I know
          </p>
        </div>

        {/* Skills Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6">My creative skills & experiences</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I am a Frontend Developer with a passion for learning and 
            can work with estimation of future tasks and client 
            feedback. I am highly-motivated, result oriented, self-driven, 
            hard-working, fast learner and constantly seeking to 
            improve my skills and am fully aware of the latest Front-end 
            Development Tools. I have a firm knowledge of JavaScript, 
            HTML5, CSS3, TailwindCSS, Bootstrap, SASS, Material UI, 
            ReactJS, Next.js, TypeScript, testing Library, SeoCheck, 
            Webpack, Parcel, REXT API, Jira, JiraService, 
            RESTful API Service, RESTful API Service, Git Avee, JIRA, SPA, 
            Angular.js, Figma and Adobe Photoshop and possess a good 
            knowledge of computer software like frameworks and tools that 
            are used in today's technology.
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {/* Row 1 */}
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-yellow-400 font-bold text-lg">JS</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-blue-400 font-bold text-lg">React</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-gray-300 font-bold text-lg">Next</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-blue-500 font-bold text-lg">TS</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-purple-400 font-bold text-lg">Redux</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-green-400 font-bold text-lg">Node</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-orange-400 font-bold text-lg">HTML</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-blue-500 font-bold text-lg">CSS</span>
          </div>
          
          {/* Row 2 */}
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-purple-500 font-bold text-lg">Bootstrap</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-pink-400 font-bold text-lg">SASS</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-teal-400 font-bold text-lg">Tailwind</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-orange-500 font-bold text-lg">Git</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-green-600 font-bold text-lg">MongoDB</span>
          </div>
          <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center hover:bg-card/80 transition-colors">
            <span className="text-purple-600 font-bold text-lg">Figma</span>
          </div>
     
        </div>
      </div>
    </section>
  );
};

export default Skills;