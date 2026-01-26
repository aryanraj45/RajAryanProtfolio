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
      title: "Mental Peace",//hello world
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
      <h2 className="section-title accent-underline mb-8">Projects</h2>

      <div className="grid gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card group hover:shadow-xl hover:shadow-primary/5 ${project.liveLink ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (project.liveLink) {
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            {/* Preview Image */}
            {project.previewImage && (
              <div className="mb-6 rounded-xl overflow-hidden border border-border group-hover:border-primary/40 transition-colors">
                <img
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium">{project.date}</p>
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source on GitHub"
                    className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Site"
                    className="p-3 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-all hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              {project.description}
            </p>

            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-secondary-foreground leading-relaxed">
                  • {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
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

// Maintenance update 5/15
