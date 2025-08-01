import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              ReactJS Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate ReactJS developer focused on building responsive,
              user-centric web applications. With real-world experience as a frontend
              intern at Tinkering Hub and multiple frontend project deployments,
              I thrive in fast-paced, agile environments.
            </p>

            <p className="text-muted-foreground">
              My work involves building scalable UIs, integrating APIs,
              and deploying apps with modern tools like Vercel, Firebase, and MongoDB.
              I'm always learning, solving problems, and pushing the boundaries
              of front-end development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/public/projects/Sushmita_s_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Projects</h4>
                  <p className="text-muted-foreground">
                    Built responsive and interactive interfaces using ReactJS,
                    Firebase, and APIs, focused on user experience and clean UI.
                  </p>
                </div>
              </div>
            </div>

            

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Internship</h4>
                  <p className="text-muted-foreground">
                    Built production-ready React components for a clinic management system at Tinkering Hub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
