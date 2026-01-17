import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Salon Receptionist",
      date: "Oct 2025",
      description:
        "Developed end-to-end voice booking system handling appointment scheduling, rescheduling with fee calculations, and multi-service bookings with specialist availability across different time zones.",
      highlights: [
        "Integrated Google Calendar and Google Sheets for automated booking management",
        "14-day advance booking rules and eligibility screening workflows",
      ],
      techStack: ["Retell AI", "N8N", "Google Calendar API", "Webhooks", "JSON Schema"],
    },
    {
      title: "AI Dental Receptionist",
      date: "Oct 2025",
      description:
        "Built intelligent voice agent for dental clinic appointment management with patient scheduling, dentist availability checks, and automated reminders via SMS and email.",
      highlights: [
        "Seamless integration with existing clinic systems",
        "Multi-channel notification system",
      ],
      techStack: ["Retell AI", "N8N", "Google Calendar API", "Automation Workflows"],
    },
    {
      title: "Blue Carbon Registry",
      date: "2024",
      description:
        "Developed full-stack web application to track and manage blue carbon credits with RESTful APIs and intuitive UI for data visualization.",
      highlights: [
        "Complex workflow logic for handling multiple data types",
        "Credit calculations and verification processes",
      ],
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/aryanraj45/blue-carbon-registry",
    },
  ];

  return (
    <section>
      <h2 className="section-title accent-underline">Projects</h2>

      <div className="grid gap-6 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-primary">{project.date}</p>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="#"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <ul className="space-y-1 mb-4">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-secondary-foreground">
                  • {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
