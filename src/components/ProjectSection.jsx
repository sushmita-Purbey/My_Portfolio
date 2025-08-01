import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pixabay Image Finder",
    description:
      "Responsive image search app with real-time filtering using the Pixabay API and ReactJS.",
    image: "/public/pixabay.png",
    tags: ["ReactJS", "Pixabay API", "Vercel"],
    demoUrl: "https://pixabay-clone-h0jcpme5f-sushmita-purbey-projects.vercel.app/",
    githubUrl: "https://github.com/sushmita-Purbey/pixabay-clone",
  },
  {
    id: 2,
    title: "Firebase Contact App",
    description:
      "Contact management app with CRUD operations powered by Firebase Realtime Database.",
    image: "/public/firebase.png",
    tags: ["ReactJS", "Firebase", "Vercel"],
    demoUrl: "https://project5-b4m676vi7-sushmita-purbey-projects.vercel.app/",
    githubUrl: "https://github.com/sushmita-Purbey/firebase-contact-app",
  },
  {
    id: 3,
    title: "Clinic Management System",
    description:
      "Full-stack application for managing appointments, patient history, and admin workflows.",
    image: "/public/clinic.png",
    tags: ["ReactJS", "Node.js", "MongoDB"],
    
    
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of the projects I've worked on recently. They showcase my ability to build performant, real-world applications with clean and scalable code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sushmita-Purbey"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
