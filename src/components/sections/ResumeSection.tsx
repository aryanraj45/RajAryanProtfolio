import { Briefcase, GraduationCap, Eye, Download } from "lucide-react";

const ResumeSection = () => {
  const experience = [
    {
      company: "INSTACK AI",
      role: "Founding Engineer Intern",
      period: "Oct 2025 – Present",
      points: [
        "Developed and deployed the full-fledged corporate website for InStack AI, building both frontend (React.js, TypeScript, Tailwind CSS) and backend (Python, FastAPI) with responsive design and SEO optimization.",
        "Engineered production-ready AI voice agents using Retell AI and N8N workflows for automated appointment scheduling, implementing Google Calendar API integration, multi-service bookings, and payment confirmation systems.",
        "Built scalable backend automation with webhook integrations, JSON schema validation, and context-aware conversation flows, achieving 95%+ accuracy in intent recognition.",
      ],
    },
  ];

  const education = [ //here
    {
      institution: "Netaji Subhas University of Technology (NSUT), Delhi",
      degree: "Bachelor of Technology, Instrumentation and Control Engineering",
      period: "2024 – 2028",
    },
    {
      institution: "S.K.P. Vidya Vihar",
      degree: "Senior Secondary (12th Grade)",
      period: "2020 – 2022",
      extra: "Percentage: 84%",
    },
    {
      institution: "Mount Assisi School",
      degree: "Secondary (10th Grade)",
      extra: "Percentage: 82.3%",
    },
  ];

  const skills = {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C"],
    webDev: ["React.js", "Node.js", "Express.js", "FastAPI", "HTML", "CSS", "Tailwind CSS"],
    aiAutomation: ["Retell AI", "N8N", "Prompt Engineering", "Webhook Integration"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Google Sheets API"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "Google Calendar API", "RESTful APIs"],
  };
  return (
    <section>
      <h2 className="section-title accent-underline mb-8">Resume</h2>

      <div className="flex gap-6 mt-10 mb-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all font-medium"
        >
          <Eye className="w-5 h-5" />
          <span>View Resume</span>
        </a>

        <a
          href="/resume.pdf"
          download="Aryan_Raj_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-all font-medium"
        >
          <Download className="w-5 h-5" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Experience Section */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-foreground">
            Experience
          </h3>
        </div>

        <div className="space-y-8 ml-2">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-dot" />
              <h4 className="text-xl font-semibold text-foreground mb-2">{exp.company}</h4>
              <p className="text-primary text-base mb-4 font-medium">
                {exp.role} | {exp.period}
              </p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-base text-muted-foreground leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-foreground">
            Education
          </h3>
        </div>

        <div className="space-y-6 ml-2">
          {education.map((edu, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-dot" />
              <h4 className="text-lg font-semibold text-foreground mb-2">{edu.institution}</h4>
              <p className="text-primary text-base font-medium">{edu.degree}</p>
              {edu.period && (
                <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
              )}
              {edu.extra && (
                <p className="text-sm text-muted-foreground mt-1">{edu.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
          Technical Skills
        </h3>

        <div className="space-y-6">
          <div>
            <p className="text-base text-foreground font-medium mb-3">Languages</p>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-foreground font-medium mb-3">Web Development</p>
            <div className="flex flex-wrap gap-2">
              {skills.webDev.map((skill) => (
                <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-foreground font-medium mb-3">AI & Automation</p>
            <div className="flex flex-wrap gap-2">
              {skills.aiAutomation.map((skill) => (
                <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-foreground font-medium mb-3">Databases</p>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-foreground font-medium mb-3">Developer Tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
