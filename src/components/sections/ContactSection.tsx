import { Mail, ExternalLink } from "lucide-react";
import linkedinProfile from "@/assets/linkedin-profile.png";
import githubProfile from "@/assets/github-profile.png";
import leetcodeProfile from "@/assets/leetcode-profile.png";

const ContactSection = () => {
  const profilePreviews = [
    {
      name: "LinkedIn",
      username: "Raj Aryan",
      image: linkedinProfile,
      href: "https://www.linkedin.com/in/raj-a-bb9929220",
    },
    {
      name: "LeetCode",
      username: "aryanraj45",
      image: leetcodeProfile,
      href: "https://leetcode.com/u/aryanraj45/",
    },
    {
      name: "GitHub",
      username: "aryanraj45",
      image: githubProfile,
      href: "https://github.com/aryanraj45",
    },
  ];

  return (
    <section>
      {/* Page Title */}
      <h2 className="section-title accent-underline">Contact</h2>

      {/* Map Section */}
      <div className="mt-8 rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54099072422!2d77.04417332812499!3d28.52728034516128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      {/* Let's Connect Section */}
      <div className="mt-16">
        <h3 className="section-title accent-underline">Let's Connect</h3>

        <div className="flex justify-center mt-8">
          <a
            href="mailto:rajaryan445567@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-lg">Mail</span>
          </a>
        </div>
      </div>

      {/* Also View Section */}
      <div className="mt-16">
        <h3 className="section-title accent-underline">Also View</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {profilePreviews.map((profile, index) => (
            <a
              key={index}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 hover:border-primary/30 transition-all duration-300"
            >
              {/* Profile Preview Image */}
              <div className="relative h-56 overflow-hidden bg-secondary">
                <img
                  src={profile.image}
                  alt={`${profile.name} Profile Preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with external link icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{profile.name}</span>
                  <span className="mx-2">•</span>
                  <span>{profile.username}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
