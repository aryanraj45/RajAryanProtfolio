import { ExternalLink } from "lucide-react";
import linkedinProfile from "@/assets/linkedin-profile.png";
import githubProfile from "@/assets/github-profile.png";
import leetcodeProfile from "@/assets/leetcode-profile.png";

interface ProfileCard {
    name: string;
    image: string;
    url: string;
    color: string;
    bgGradient: string;//
}

const SocialProfilesSection = () => {
    const profiles: ProfileCard[] = [
        {
            name: "LinkedIn",
            image: linkedinProfile,//here 
            url: "https://www.linkedin.com/in/raj-a-bb9929220",
            color: "#0A66C2",
            bgGradient: "from-[#0A66C2]/20 to-[#0A66C2]/5",
        },
        {
            name: "GitHub",
            image: githubProfile,
            url: "https://github.com/aryanraj45",
            color: "#238636",
            bgGradient: "from-[#238636]/20 to-[#238636]/5",
        },
        {
            name: "LeetCode",
            image: leetcodeProfile,
            url: "https://leetcode.com/u/aryanraj45/",
            color: "#FFA116",
            bgGradient: "from-[#FFA116]/20 to-[#FFA116]/5",
        },
    ];

    return (
        <section className="mt-12">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Connect With Me
            </h3>

            <div className="grid gap-6">
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div
                            className={`relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${profile.bgGradient} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-opacity-100`}
                            style={{ borderColor: `${profile.color}40` }}
                        >
                            {/* Header */}
                            <div
                                className="flex items-center justify-between px-4 py-3 border-b border-border/30"
                                style={{ backgroundColor: `${profile.color}15` }}
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full animate-pulse"
                                        style={{ backgroundColor: profile.color }}
                                    />
                                    <span
                                        className="font-semibold text-sm"
                                        style={{ color: profile.color }}
                                    >
                                        {profile.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    <span>View Profile</span>
                                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>

                            {/* Screenshot */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={profile.image}
                                    alt={`${profile.name} Profile`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div
                                        className="px-6 py-2 rounded-full font-medium text-sm text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        style={{ backgroundColor: profile.color }}
                                    >
                                        Visit {profile.name} →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialProfilesSection;
