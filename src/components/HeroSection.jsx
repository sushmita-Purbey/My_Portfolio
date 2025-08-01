import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 scroll-smooth"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sushmita
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Purbey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate ReactJS developer crafting responsive and user-centric
            web apps. Experienced in building clean, performant UIs with modern
            tools like Node.js, MongoDB, and Express.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <a href="#projects">
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of the projects I’ve worked on recently. I focus on creating clean,
          scalable, and performance-optimized applications.
        </p>

        {/* Example project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Pixabay Image Finder</h3>
            <p className="text-muted-foreground">
              Image search app using React and Pixabay API.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Firebase Contact App</h3>
            <p className="text-muted-foreground">
              Real-time contact manager with Firebase backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
