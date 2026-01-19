import { Trophy, Target, Code2, Award } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "SIH 2025 Semi-Finalist",
      description:
        "Selected among top 500 teams from college for Smart India Hackathon internal rounds.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "JEE Mains 2024",//here 
      description:
        "Secured a rank in the top 3% among 1.6 million candidates.",
    },//
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Hacktoberfest 2025",//
      description:
        "Successfully completed Hacktoberfest, contributing to multiple open-source projects including interactive gaming applications with voice I/O and UI enhancements.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Problem Solving",
      description:
        "Solved 100+ questions on LeetCode and GeeksforGeeks, strengthening algorithmic thinking and coding skills.",
    },
  ];

  const competencies = [
    "Leadership",
    "Team Collaboration",
    "Communication",
    "Problem-Solving",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
  ];

  return (
    <section>
      <h2 className="section-title accent-underline">Achievements</h2>

      <div className="grid gap-4 mt-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Competencies */}
      <h3 className="text-xl font-display font-semibold text-foreground mt-12 mb-6">
        Core Competencies
      </h3>

      <div className="flex flex-wrap gap-3">
        {competencies.map((competency) => (
          <span
            key={competency}
            className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border hover:border-primary/30 transition-colors"
          >
            {competency}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
