import { Mail, Linkedin, Github, Code2, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      username: "Raj Arayan",
      description: "B.Tech @ NSUT Delhi | Founding Engineer Intern @ INSTACK AI | Full-Stack Developer",
      href: "https://www.linkedin.com/in/raj-a-bb9929220",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      name: "LeetCode",
      username: "aryanraj45",
      description: "100+ problems solved • Data Structures & Algorithms enthusiast",
      href: "https://leetcode.com/your_username/",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      username: "aryanraj45",
      description: "Open source contributor • Full-stack projects • Hacktoberfest 2025 participant",
      href: "https://github.com/aryanraj45",
      color: "from-gray-600 to-gray-400",
    },
  ];

  return (
    <section>
      <h2 className="section-title accent-underline">Let's Connect</h2>

      <p className="text-muted-foreground mt-8 mb-8">
        I'm always open to discussing new opportunities, collaborations, or just
        having a chat about technology. Feel free to reach out!
      </p>

      {/* Mail Button */}
      <a
        href="mailto:rajaryan445567@gmail.com"
        className="inline-flex items-center gap-3 px-8 py-4 bg-secondary border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 mb-12"
      >
        <Mail className="w-5 h-5 text-primary" />
        <span className="text-foreground font-medium">Mail</span>
      </a>

      {/* Also View Section */}
      <h3 className="text-xl font-display font-semibold text-foreground mb-6 accent-underline">
        Also View
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-all duration-300"
          >
            {/* Preview Card Header with gradient */}
            <div className={`h-20 bg-gradient-to-r ${link.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{link.name}</p>
                  <p className="text-foreground font-medium">{link.username}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-12 p-6 glass-card">
        <h4 className="text-lg font-semibold text-foreground mb-4">Direct Contact</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a href="mailto:rajaryan445567@gmail.com" className="text-foreground hover:text-primary transition-colors">
                rajaryan445567@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary">📞</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <a href="tel:+919523542240" className="text-foreground hover:text-primary transition-colors">
                +91 9523542240
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;