import { Briefcase, GraduationCap, Eye } from "lucide-react";

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

  const education = [
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
      <h2 className="section-title accent-underline">Resume</h2>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-6 mb-8"
      >
        <Eye className="w-4 h-4" />
        <span className="font-medium">View Resume</span>
      </a>

      {/* Experience Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            Experience
          </h3>
        </div>

        <div className="space-y-6 ml-2">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-dot" />
              <h4 className="font-semibold text-foreground">{exp.company}</h4>
              <p className="text-primary text-sm mb-3">
                {exp.role} | {exp.period}
              </p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                    - {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            Education
          </h3>
        </div>

        <div className="space-y-4 ml-2">
          {education.map((edu, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-dot" />
              <h4 className="font-semibold text-foreground">{edu.institution}</h4>
              <p className="text-primary text-sm">{edu.degree}</p>
              {edu.period && (
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              )}
              {edu.extra && (
                <p className="text-sm text-muted-foreground">{edu.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h3 className="text-xl font-display font-semibold text-foreground mb-6">
          Technical Skills
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Languages</p>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Web Development</p>
            <div className="flex flex-wrap gap-2">
              {skills.webDev.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">AI & Automation</p>
            <div className="flex flex-wrap gap-2">
              {skills.aiAutomation.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Databases</p>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Developer Tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
