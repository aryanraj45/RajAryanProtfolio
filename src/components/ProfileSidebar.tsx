import { Mail, Linkedin, FileText, MapPin, Github, Code2, Lightbulb } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ProfileSidebar = () => {
  const links: LinkItem[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "EMAIL",
      value: "rajaryan445567@gmail.com",
      href: "mailto:rajaryan445567@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LINKEDIN",
      value: "View",
      href: "https://linkedin.com/in/rajarayan",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "RESUME",
      value: "View / Download",
      href: "#resume",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "LOCATION",
      value: "Delhi, India",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GITHUB",
      value: "Collaborate",
      href: "https://github.com/rajarayan",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "LEETCODE",
      value: "Check it out",
      href: "https://leetcode.com/rajarayan",
    },
  ];

  return (
    <aside className="w-full lg:w-80 xl:w-96 shrink-0">
      <div className="glass-card p-6 sticky top-8">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border-2 border-border">
              <img 
                src={avatarImage} 
                alt="Raj Arayan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-display font-bold text-foreground mb-3">
            Raj Arayan
          </h1>
          
          <div className="status-badge">
            <span>Founding Engineer at INSTACK AI</span>
            <span className="text-primary">🚀</span>
          </div>
          
          <div className="mt-4 p-3 rounded-full bg-secondary/50 border border-border">
            <Lightbulb className="w-6 h-6 text-primary animate-pulse-glow" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-6" />

        {/* Links Section */}
        <nav className="space-y-1">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href || "#"}
              className="link-card group"
              target={link.href?.startsWith("http") ? "_blank" : undefined}
              rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="link-icon group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm text-foreground truncate">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
