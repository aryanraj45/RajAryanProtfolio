import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Blue Carbon Registry",
      date: "2025",
      description:
        "Full-stack blockchain-powered platform for transparent blue carbon credit management using Solana for immutable credit verification and satellite-based AI for ecosystem monitoring.",
      highlights: [
        "Solana blockchain integration for secure, transparent carbon credit verification & tokenization",
        "Satellite-based AI monitoring for real-time ecosystem health tracking",
        "33,500+ blockchain verifications processed with 100% transparency",
        "Interactive globe visualization with live environmental data dashboard",
      ],
      techStack: ["Solana", "React.js", "Node.js", "Express.js", "MongoDB", "Satellite AI"],
      github: "https://github.com/aryanraj45/blue-carbon-registry",
      liveLink: "https://blue-carbon-registry-mu.vercel.app/homepage",
      previewImage: "/blue-carbon-preview.png",
    },
    {
      title: "Mental Peace",
      date: "2025",
      description:
        "A comprehensive mental health application designed to support well-being through mood tracking, guided meditation, and community support features.",
      highlights: [
        "Mood tracking and journaling system with daily reflection tools",
        "Curated guided meditation and relaxation exercise library",
        "Community chat and support forum for peer connection",
        "Goal setting and personal progress monitoring dashboard",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      github: "https://github.com/aryanraj45/Mental-health",
      previewImage: "/mental-peace-preview.png",
    },
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
      previewImage: "/ai-salon-preview.png",
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
      previewImage: "/ai-dental-preview.png",
    },
  ];

  return (
    <section>
      <h2 className="section-title accent-underline">Projects</h2>

      <div className="grid gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.liveLink ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (project.liveLink) {
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            {/* Preview Image */}
            {project.previewImage && (
              <div className="mb-4 rounded-lg overflow-hidden border border-primary/20">
                <img
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
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
