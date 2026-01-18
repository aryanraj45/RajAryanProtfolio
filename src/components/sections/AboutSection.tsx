import { Code2, Database, Bot, Briefcase } from "lucide-react";

const AboutSection = () => {
  const interests = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Building production-ready web applications using React.js, TypeScript, Node.js, FastAPI with responsive design and SEO optimization.",
      highlight: "INSTACK AI & Blue Carbon",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI & Automation",
      description:
        "Engineering AI voice agents and automation workflows using Retell AI, N8N, and webhook integrations with 95%+ accuracy in intent recognition.",
      highlight: "Retell AI & N8N",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Engineering",
      description:
        "Designing scalable backend systems with RESTful APIs, database management using MongoDB, PostgreSQL, and Google Calendar API integrations.",
      highlight: "FastAPI & Node.js",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,//
      title: "Problem Solving",
      description:
        "Solved 100+ problems on LeetCode and GeeksforGeeks. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.",
      highlight: "LeetCode & DSA",
    },
  ];

  return (
    <section>
      <h2 className="section-title accent-underline mb-8">About Me</h2>

      <div className="space-y-8 mt-10 text-secondary-foreground leading-relaxed text-base">
        <p className="text-lg leading-loose">
          I am a passionate and driven <span className="text-foreground font-semibold">Founding Engineer Intern at INSTACK AI</span> with a strong foundation in Computer Science. Currently pursuing my B.Tech in Instrumentation and Control Engineering at{" "}
          <span className="text-foreground font-semibold">Netaji Subhas University of Technology (NSUT), Delhi</span>.
        </p>

        <p className="text-lg leading-loose">
          Throughout my journey, I have developed expertise in{" "}
          <span className="text-primary font-medium">full-stack web development</span>,{" "}
          <span className="text-primary font-medium">AI automation</span>, and{" "}
          <span className="text-primary font-medium">backend engineering</span>. I've built production-ready applications, engineered AI voice agents with 95%+ accuracy, and developed scalable backend systems.
        </p>

        <p className="text-lg leading-loose">
          Outside of work, I enjoy solving algorithmic problems, contributing to open-source projects, and continuously learning new technologies. I was selected as a{" "}
          <span className="text-foreground font-semibold">SIH 2025 Semi-Finalist</span> among top 500 teams and secured a rank in the{" "}
          <span className="text-foreground font-semibold">top 3% in JEE Mains 2024</span> among 1.6 million candidates.
        </p>

        <p className="text-lg leading-loose">
          As a Software Engineer, I am passionate about creating innovative solutions and pushing the boundaries of technology. With my strong technical skills, collaborative mindset, and dedication to excellence, I am confident in my ability to contribute to the success of any software development team.
        </p>
      </div>

      {/* Interests Section */}
      <h3 className="text-2xl font-display font-semibold text-foreground mt-16 mb-8">
        My Interests
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card group hover:scale-[1.02] transition-all">
            <div className="interest-icon group-hover:scale-110 transition-transform">{interest.icon}</div>
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {interest.title}
            </h4>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              {interest.description}
            </p>
            <span className="text-sm text-primary font-semibold">
              {interest.highlight}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
