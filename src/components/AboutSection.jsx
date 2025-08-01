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
              intern at Tinkering Hub and multiple deployed projects, I thrive in
              fast-paced, agile environments.
            </p>

            <p className="text-muted-foreground">
              During my internship, I worked on two production-grade projects:
              a full-stack <strong>Clinic Management System</strong> and a marketing
              website for <strong>Aakash Broadband</strong>. My contributions included UI development, 
              API integration, and responsive layouts.
            </p>

            <p className="text-muted-foreground">
              I enjoy crafting modern interfaces, integrating backend services, and
              deploying apps using tools like Firebase, MongoDB, and Vercel.
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
                    Built responsive and interactive UIs using ReactJS, Firebase,
                    and external APIs — focused on performance and clean design.
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
                  <h4 className="font-semibold text-lg">Internship Experience</h4>
                  <p className="text-muted-foreground">
                    Developed components for a <strong>Clinic Management System</strong> and
                    designed landing pages for the <strong>Aakash Broadband</strong> website
                    at Tinkering Hub using ReactJS and TailwindCSS.
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
