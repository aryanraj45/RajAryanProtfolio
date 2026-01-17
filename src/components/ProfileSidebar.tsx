import { useState, useEffect } from "react";
import { Mail, Linkedin, FileText, MapPin, Github, Code2, Lightbulb, Moon } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ProfileSidebar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
      href: "https://www.linkedin.com/in/raj-a-bb9929220",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "RESUME",
      value: "View / Download",
      href: "/resume.pdf",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "LOCATION",
      value: "Delhi, India",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GITHUB",
      value: "aryanraj45",
      href: "https://github.com/aryanraj45",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "LEETCODE",
      value: "Check it out",
      href: "https://leetcode.com/u/aryanraj45/",
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
          </div>

          <button
            onClick={toggleTheme}
            className="mt-4 p-3 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors cursor-pointer group"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Lightbulb className="w-6 h-6 text-primary animate-pulse-glow group-hover:scale-110 transition-transform" />
            ) : (
              <Moon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            )}
          </button>
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
              target={link.href?.startsWith("http") || link.href?.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href?.startsWith("http") || link.href?.endsWith(".pdf") ? "noopener noreferrer" : undefined}
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
